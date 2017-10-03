using JsonApiDotNetCore.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class MeetupGroup : IEntity
    {
        [Attr("Id")]
        public int Id { get; set; }

        [Attr("GroupId")]
        public int GroupId { get; set; }

        [Attr("Name")]
        public string Name { get; set; }

        [Attr("UrlName")]
        public string UrlName { get; set; }

        [Attr("PhotoURL")]
        public string PhotoURL { get; set; }

        [Attr("Color")]
        public string Color { get; set; }

        [HasMany("Events")]
        public IList<Event> Events { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
