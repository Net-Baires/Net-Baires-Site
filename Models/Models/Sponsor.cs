using JsonApiDotNetCore.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Sponsor : IEntity
    {
        [Attr("Id")]
        public int Id { get; set; }

        [Attr("Name")]
        public string Name { get; set; }

        [Attr("PhotoURL")]
        public string PhotoURL { get; set; }

        [Attr("URL")]
        public string URL { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
