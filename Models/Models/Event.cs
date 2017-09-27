using JsonApiDotNetCore.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Event : IEntity
    {
        [Attr("Id")]
        public int Id { get; set; }

        [Attr("MeetUpEventId")]
        public int MeetUpEventId { get; set; }

        [Attr("Title")]
        public string Title { get; set; }

        [Attr("DateTicks")]
        public long DateTicks { get; set; }

        [Attr("Date")]
        public DateTime Date { get; set; }

        [Attr("Color")]
        public string Color { get; set; }

        [Attr("Link")]
        public string Link { get; set; }

        [Attr("Detail")]
        public EventDetail Detail { get; set; }

        [Attr("Group")]
        public MeetupGroup Group { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
