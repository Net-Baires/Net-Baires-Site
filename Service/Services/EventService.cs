using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Models;
using Newtonsoft.Json;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Service
{
    public class EventService : EntityService<Event>, IEventService
    {
        IOptions<KeySettingsModel> settings;

        public EventService(ApiContext db, IOptions<KeySettingsModel> settings) : base(db)
        {
            this.settings = settings;
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

            foreach (var meetupGroup in db.MeetupGroups)
            {
                var url = $"https://api.meetup.com/2/events?key={ settings.Value.MeetupApiKey }&sign=true&photo-host=public&group_id={ meetupGroup.GroupId }&page=20&status=upcoming";

                try
                {
                    // Get the response from the server url and REST path for the data  
                    var response = await httpClient.GetAsync(url);

                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                        throw new UnauthorizedAccessException("Access Denied");

                    if (response.IsSuccessStatusCode)
                        events.AddRange(await GetEvent(JsonConvert.DeserializeObject<MeetupEventDTO>(await response.Content.ReadAsStringAsync()), meetupGroup));
                    else
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

        private async Task<IList<Event>> GetEvent(MeetupEventDTO meetupEvents, MeetupGroup meetupGroup)
        {
            var events = new List<Event>();

            if (meetupEvents == null)
                return events;

            foreach (var meetupEvent in meetupEvents.Results)
            {
                var date = (new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).AddMilliseconds((double)(meetupEvent.Time)).AddHours(-3);
                var _event = await Get().FirstOrDefaultAsync(e => e.MeetUpEventId == meetupEvent.Id);

                Event serverEvent;
                if (_event != null)
                {
                    if (_event.DateTicks != meetupEvent.Time)
                    {
                        _event.DateTicks = meetupEvent.Time;
                        _event.Date = date;
                    }

                    serverEvent = AttachEntity(_event);
                }
                else
                {
                    _event = new Event()
                    {
                        MeetUpEventId = meetupEvent.Id,
                        Title = meetupEvent.Name,
                        DateTicks = meetupEvent.Time,
                        Date = date,
                        Color = meetupGroup.Color,
                        Link = meetupEvent.Event_url,
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
