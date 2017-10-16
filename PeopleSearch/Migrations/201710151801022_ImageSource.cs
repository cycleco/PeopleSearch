namespace PeopleSearch.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ImageSource : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "ImageSource", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "ImageSource");
        }
    }
}
