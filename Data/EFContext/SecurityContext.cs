using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class SecurityContext : IdentityDbContext<IdentityUser>
    {
        public SecurityContext(DbContextOptions<SecurityContext> options) : base(options) { }
    }
}
