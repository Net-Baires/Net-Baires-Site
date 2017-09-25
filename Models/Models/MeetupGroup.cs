using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
