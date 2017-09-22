using System.Collections.Generic;

namespace Models
{
    public class MeetupGroup : IEntity
    {
        public int Id { get; set; }

        public int GroupId { get; set; }

        public string Name { get; set; }

        public string UrlName { get; set; }

        public string PhotoURL { get; set; }

        public string Color { get; set; }

        public IList<Event> Events { get; set; }
    }
}
