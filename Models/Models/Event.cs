using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Event : IEntity
    {
        public int Id { get; set; }

        public int MeetUpEventId { get; set; }

        public string Title { get; set; }

        public long DateTicks { get; set; }

        public DateTime Date { get; set; }

        public string Color { get; set; }

        public string Link { get; set; }

        public EventDetail Detail { get; set; }

        public MeetupGroup Group { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
