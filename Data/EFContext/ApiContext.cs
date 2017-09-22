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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            SetEventEntry(modelBuilder);
            SetEventDetailEntry(modelBuilder);
            SetMeetupGroupEntry(modelBuilder);
            SetMemberEntry(modelBuilder);
            SetMemberTypeEntry(modelBuilder);
            SetSponsorEntry(modelBuilder);
        }

        private void SetEventEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<Event>());
            modelBuilder.Entity<Event>().Property(e => e.Title).HasMaxLength(255);
            modelBuilder.Entity<Event>().Property(e => e.Color).HasMaxLength(50);
            modelBuilder.Entity<Event>().Property(e => e.Link).HasMaxLength(255);
            modelBuilder.Entity<Event>().Property(e => e.Group).HasColumnName("MeetupGroupId");
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
            modelBuilder.Entity<Member>().HasOne(m => m.Type).WithMany();
            modelBuilder.Entity<Member>().Property(m => m.Type).HasColumnName("MemberTypeId");
        }

        private void SetMemberTypeEntry(ModelBuilder modelBuilder)
        {
            SetId(modelBuilder.Entity<MemberType>());
            modelBuilder.Entity<MemberType>().Property(mt => mt.Name).HasMaxLength(100);
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
        }
    }
}
