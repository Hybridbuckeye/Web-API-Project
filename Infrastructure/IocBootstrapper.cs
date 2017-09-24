using Ninject;
using Repository;
using RepositoryContracts;
using ServiceContracts;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class IocBootstrapper
    {
        public static void Bootstrap(IKernel kernel)
        {
            kernel.Bind<IPostService>().To<PostServices>();
            kernel.Bind<IPostRepository>().To<PostRepository>();
        }
    }
}
