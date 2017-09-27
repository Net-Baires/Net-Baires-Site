using JsonApiDotNetCore.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Member : IEntity
    {
        [Attr("Id")]
        public int Id { get; set; }

        [Attr("Name")]
        public string Name { get; set; }

        [Attr("Twitter")]
        public string Twitter { get; set; }

        [Attr("LinkedIn")]
        public string LinkedIn { get; set; }

        [Attr("PhotoURL")]
        public string PhotoURL { get; set; }

        [Attr("Type")]
        public MemberType Type { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
