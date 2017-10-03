using Data;
using JsonApiDotNetCore.Extensions;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Models;
using Service;
using Swashbuckle.AspNetCore.Swagger;
using System.Threading.Tasks;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<KeySettingsModel>(Configuration.GetSection("KeySettings"));

            ConfigureDataBase(services);

            services.AddTransient<IEventService, EventService>();
            services.AddTransient<IMemberService, MemberService>();
            services.AddTransient<ISponsorService, SponsorService>();

            services.AddJsonApi<ApiContext>(
                opt =>
                {
                    opt.DefaultPageSize = 10;
                    opt.IncludeTotalRecordCount = true;
                    opt.Namespace = "api";
                });

            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Net-Baires API", Version = "v1" });
            });

            services.AddOptions();

            //services.AddIdentity<IdentityUser, IdentityRole>()
            //.AddEntityFrameworkStores<SecurityContext>().AddDefaultTokenProviders();

            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //        .AddJwtBearer(options => {
            //            options.Audience = "http://localhost:5001/";
            //            options.Authority = "http://localhost:5000/";
            //        });

            services.AddCors();

            services.AddMvc();
        }

        public virtual void ConfigureDataBase(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApiContext>(options => { options.UseSqlServer(Configuration.GetConnectionString("ApiConnection")); }, ServiceLifetime.Transient);

            //services.AddDbContext<SecurityContext>(options =>
            //    options.UseSqlServer(Configuration.GetConnectionString("SecurityConnection"), sqlOptions => sqlOptions.MigrationsAssembly("TokenAuthWebApiCore.Server")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseAuthentication();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseCors(builder =>
                builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin()
                );

            app.UseJsonApi();
        }
    }
}
