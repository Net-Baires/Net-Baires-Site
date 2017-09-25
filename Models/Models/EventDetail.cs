using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class EventDetail : IEntity
    {
        public int Id { get; set; }

        public string Detail { get; set; }

        [NotMapped]
        public string StringId { get => this.Id.ToString(); set => Id = Convert.ToInt32(value); }
    }
}
