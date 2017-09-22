using System;

namespace Models
{
    public class Event : IEntity
    {
        public int Id { get; set; }

        public int MeetUpEventId { get; set; }

        public string Title { get; set; }

        public DateTime Date { get; set; }

        public string Color { get; set; }

        public string Link { get; set; }

        public EventDetail Detail { get; set; }

        public MeetupGroup Group { get; set; }
    }
}
