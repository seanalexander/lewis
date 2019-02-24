using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace lewis_kestral_dotnetcore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            /*CreateWebHostBuilder(args)
            .Build()
            .Run();
            
            /*
            var builder = new WebHostBuilder()
                .UseWebListener(options =>
                {
                    options.MaxAccepts = 1000;   
                }
                );
            builder().Build().Run();
            */
            
        }

        /*
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                ;
                */

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseKestrel(options =>
                {
                    // The following options are set to default values.
                    options.MaxConnections = null;
                    options.MaxRequestBodySize = 30000000;
                    options.UrlPrefixes.Add("http://localhost:5000");
                });
            }
}
