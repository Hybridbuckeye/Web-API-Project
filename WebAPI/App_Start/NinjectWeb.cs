[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebAPI.App_Start.NinjectWeb), "Start")]

namespace WebAPI.App_Start
{
    using Antlr.Runtime.Misc;
    using Infrastructure;
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;
    using Ninject;
    using Ninject.Web;
    using Ninject.Web.Common;
    using System.Web;

    public static class NinjectWeb 
    {
        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            //DynamicModuleUtility.RegisterModule(typeof(Ninject.Web.NinjectHttpModule));
        }

        //private static IKernel CreateKernel()
        //{
        //    var kernel = new StandardKernel();
        //    try
        //    {
        //        kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
        //        kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

        //        //RegisterServices(kernel);
        //        return kernel;
        //    }
        //    catch
        //    {
        //        kernel.Dispose();
        //        throw;
        //    }
        //}

        //private static void RegisterServices(IKernel kernel)
        //{
        //    //IocBootstrapper.Bootstrap(kernel);
        //}

    }
}
