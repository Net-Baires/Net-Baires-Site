using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Sponsor : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PhotoURL { get; set; }

        public string URL { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
