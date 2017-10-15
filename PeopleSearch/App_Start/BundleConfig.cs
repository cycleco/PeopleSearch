using System.Web;
using System.Web.Optimization;

namespace PeopleSearch
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js",
            //          "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/node_modules/angular/angular.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-route").Include(
                "~/node_modules/angular-route/angular-route.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-ui-bootstrap").Include(
                "~/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls-2.0.0-SNAPSHOT.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory(
                "~/Client", "*.js", true));
        }
    }
}
