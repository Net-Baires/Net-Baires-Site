namespace Models
{
    public class Sponsor : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PhotoURL { get; set; }

        public string URL { get; set; }
    }
}
