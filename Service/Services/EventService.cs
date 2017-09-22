using System.Threading.Tasks;
using Data;
using Models;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System;
using System.Net.Http.Headers;
using System.Net;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class EventService : EntityService<Event>, IEventService
    {
        DbSet<MeetupGroup> meetupGroupSet;

        public EventService(ApiContext db) : base(db)
        {
            meetupGroupSet = db.Set<MeetupGroup>();
        }

        public async Task Update()
        {
            var httpClient = new HttpClient()
            {
                MaxResponseContentBufferSize = 9999999,
                Timeout = new TimeSpan(0, 2, 0),
            };
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var events = new List<Event>();

            foreach (var meetupGroup in meetupGroupSet)
            {
                var key = "";
                var url = $"https://api.meetup.com/2/events?key={ key }&sign=true&photo-host=public&group_id={ meetupGroup.GroupId }&page=20&status=upcoming";

                try
                {
                    // Get the response from the server url and REST path for the data  
                    var response = await httpClient.GetAsync(url);

                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                        throw new UnauthorizedAccessException("Access Denied");

                    if (response.IsSuccessStatusCode)
                        events.AddRange(await GetEvent(await response.Content.ReadAsStringAsync(), meetupGroup));

                    throw new WebException(response.ReasonPhrase);
                }
                catch (Exception)
                {
                    // TODO:        
                    //throw ex;
                }
            }

            await db.SaveChangesAsync();
        }

        private async Task<IList<Event>> GetEvent(string json, MeetupGroup meetupGroup)
        {
            var events = new List<Event>();
            var jObject = JObject.Parse(json);
            var results = (JArray)jObject["results"];

            if (results == null)
                return events;

            foreach (var result in results)
            {
                var meetUpEventId = (int)result["id"];
                var date = (DateTime)result["time"];

                var _event = await Get().FirstOrDefaultAsync(e => e.MeetUpEventId == meetUpEventId);

                Event serverEvent;
                if (_event != null)
                {
                    if (_event.Date != date)
                        _event.Date = date;

                    serverEvent = AttachEntity(_event);
                }
                else
                {
                    _event = new Event()
                    {
                        MeetUpEventId = meetUpEventId,
                        Title = (string)result["name"],
                        Date = date,
                        Color = meetupGroup.Color,
                        Link = (string)result["event_url"],
                        Group = meetupGroup,
                    };

                    serverEvent = AttachEntity(_event, state: EntityState.Added);
                }

                events.Add(serverEvent);
            }

            return events;
        }

    }
}
