using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace db619_3.Models
{
    public class db619_3Context : DbContext
    {
        public db619_3Context (DbContextOptions<db619_3Context> options)
            : base(options)
        {
        }

        public DbSet<db619_3.Models.Movie> Movie { get; set; }
    }
}
