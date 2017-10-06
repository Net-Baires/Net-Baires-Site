using Data;
using JsonApiDotNetCore.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Models;
using Service;
using Swashbuckle.AspNetCore.Swagger;
using WebApi.Filters;

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
            ConfigureDependencies(services);
            ConfigureAuthentication(services);

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
            services.AddCors();
            services.AddMvc();
        }

        private void ConfigureDataBase(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApiContext>(options => { options.UseSqlServer(Configuration.GetConnectionString("ApiConnection")); }, ServiceLifetime.Transient);
        }

        private void ConfigureDependencies(IServiceCollection services)
        {
            services.AddTransient<IEventService, EventService>();
            services.AddTransient<IMemberService, MemberService>();
            services.AddTransient<IMeetupGroupService, MeetupGroupService>();
            services.AddTransient<ISponsorService, SponsorService>();
        }

        private void ConfigureAuthentication(IServiceCollection services)
        {
            string domain = $"https://{Configuration["Auth0:Domain"]}/";
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.Authority = domain;
                options.Audience = Configuration["Auth0:ApiIdentifier"];
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("admin", policy => policy.Requirements.Add(new HasScopeRequirement("admin", domain)));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseAuthentication();

            app.UseCors(builder =>
                builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin()
                );

            app.UseJsonApi();
        }
    }
}
