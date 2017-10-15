namespace PeopleSearch.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using PeopleSearch.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<PeopleSearch.Models.PeopleSearchContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PeopleSearch.Models.PeopleSearchContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Users.AddOrUpdate(x => x.Id,
                new User() {Age = 22, FirstName = "Benjamin", LastName = "Copperfield", Interests = "magic, writing, fishing"},
                new User() { Age = 22, FirstName = "James", LastName = "Fields", Interests = "flying, running, tennis" },
                new User() { Age = 22, FirstName = "Sandy", LastName = "Salsa", Interests = "mountain biking, music, sailing" },
                new User() { Age = 22, FirstName = "Andy", LastName = "Elderberry", Interests = "cycling, movies, astronomy" }
                );
        }
    }
}
