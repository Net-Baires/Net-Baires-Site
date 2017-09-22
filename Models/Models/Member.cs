namespace Models
{
    public class Member : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Twitter { get; set; }

        public string LinkedIn { get; set; }

        public string PhotoURL { get; set; }

        public MemberType Type { get; set; }
    }
}
