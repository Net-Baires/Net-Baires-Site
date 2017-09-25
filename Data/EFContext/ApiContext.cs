using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models;

namespace Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        { }

        public DbSet<Event> Events { get; set; }
        public DbSet<EventDetail> EventDetails { get; set; }
        public DbSet<MeetupGroup> MeetupGroups { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Sponsor> Sponsors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            SetEventEntry(modelBuilder);
            SetEventDetailEntry(modelBuilder);
            SetMeetupGroupEntry(modelBuilder);
            SetMemberEntry(modelBuilder);
            SetSponsorEntry(modelBuilder);
        }

        private void SetEventEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<Event>());
            modelBuilder.Entity<Event>().Property(e => e.Title).HasMaxLength(255);
            modelBuilder.Entity<Event>().Property(e => e.Color).HasMaxLength(50);
            modelBuilder.Entity<Event>().Property(e => e.Link).HasMaxLength(255);
            modelBuilder.Entity<Event>().HasOne(e => e.Group).WithMany(mg => mg.Events);
        }

        private void SetEventDetailEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<EventDetail>());
            modelBuilder.Entity<EventDetail>().Property(ed => ed.Detail).HasMaxLength(4000);
        }

        private void SetMeetupGroupEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<MeetupGroup>());
            modelBuilder.Entity<MeetupGroup>().Property(mg => mg.Name).HasMaxLength(100);
            modelBuilder.Entity<MeetupGroup>().Property(mg => mg.UrlName).HasMaxLength(100);
            modelBuilder.Entity<MeetupGroup>().Property(mg => mg.PhotoURL).HasMaxLength(255);
            modelBuilder.Entity<MeetupGroup>().Property(mg => mg.Color).HasMaxLength(50);
            modelBuilder.Entity<MeetupGroup>().HasMany(mg => mg.Events).WithOne(e => e.Group);
        }

        private void SetMemberEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<Member>());
            modelBuilder.Entity<Member>().Property(m => m.Name).HasMaxLength(100);
            modelBuilder.Entity<Member>().Property(m => m.Twitter).HasMaxLength(255);
            modelBuilder.Entity<Member>().Property(m => m.LinkedIn).HasMaxLength(255);
            modelBuilder.Entity<Member>().Property(m => m.PhotoURL).HasMaxLength(255);
            modelBuilder.Entity<Member>().Property(m => m.Type).HasColumnName("MemberTypeId");
        }

        private void SetSponsorEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<Sponsor>());
            modelBuilder.Entity<Sponsor>().Property(s => s.Name).HasMaxLength(100);
            modelBuilder.Entity<Sponsor>().Property(s => s.PhotoURL).HasMaxLength(255);
            modelBuilder.Entity<Sponsor>().Property(s => s.URL).HasMaxLength(255);
        }

        protected void SetId<T>(EntityTypeBuilder<T> entity) where T : class, IEntity
        {
            var tableName = entity.GetType().GenericTypeArguments[0].Name;

            SetId(entity, tableName);
        }

        protected void SetId<T>(EntityTypeBuilder<T> entity, string tableName) where T : class, IEntity
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).HasColumnName($"{tableName}Id").ValueGeneratedOnAdd();
            entity.ToTable(tableName);
        }
    }
}
