using System;

namespace Models
{
    public class EventDetail : IEntity
    {
        public int Id { get; set; }

        public string Detail { get; set; }
    }
}
