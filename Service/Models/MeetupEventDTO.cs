using System.Collections.Generic;

namespace Service.Models
{
    public class MeetupEventDTO
    {
        public List<Result> Results { get; set; }
    }

    public class Result
    {
        public int Utc_offset { get; set; }
        public Venue Venue { get; set; }
        public int Rsvp_limit { get; set; }
        public int Headcount { get; set; }
        public string Visibility { get; set; }
        public int Waitlist_count { get; set; }
        public long Created { get; set; }
        public int Maybe_rsvp_count { get; set; }
        public string Description { get; set; }
        public string Event_url { get; set; }
        public int Yes_rsvp_count { get; set; }
        public string Name { get; set; }
        public int Id { get; set; }
        public long Time { get; set; }
        public long Updated { get; set; }
        public Group Group { get; set; }
        public string Status { get; set; }
    }

    public class Venue
    {
        public string Country { get; set; }
        public string Localized_country_name { get; set; }
        public string City { get; set; }
        public string Address_1 { get; set; }
        public string Name { get; set; }
        public double Lon { get; set; }
        public int Id { get; set; }
        public double Lat { get; set; }
        public bool Repinned { get; set; }
    }

    public class Group
    {
        public string Join_mode { get; set; }
        public long Created { get; set; }
        public string Name { get; set; }
        public double Group_lon { get; set; }
        public int Id { get; set; }
        public string Urlname { get; set; }
        public double Group_lat { get; set; }
        public string Who { get; set; }
    }
}
