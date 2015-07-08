using System.Web;
using System.Web.Optimization;

namespace Benjamin.React.MVC
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

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(IncludeReactJsComponents());
            bundles.Add(IncludeCommonComponentsScripts());

            // Doe development mode.
            //BundleTable.EnableOptimizations = false;
        }

        private static ScriptBundle IncludeReactJsComponents()
        {
            var bundle = new ScriptBundle("~/bundles/react-core");
            bundle.Include(
                "~/Scripts/React/Common/console-polyfill.js",
                "~/Scripts/React/Common/es5-sham.min.js",
                "~/Scripts/React/Common/es5-shim.min.js",
                "~/Scripts/React/react.js",
                "~/Scripts/React/react-with-addons.js");

            return bundle;
        }

        private static ScriptBundle IncludeCommonComponentsScripts()
        {
            var bundle = new ScriptBundle("~/bundles/common-components");
            bundle.Include("~/Scripts/Components/*.js");

            return bundle;
        }
    }
}
