using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Models;
using Newtonsoft.Json;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Service
{
    public class MeetupGroupService : EntityService<MeetupGroup>, IMeetupGroupService
    {
        public MeetupGroupService(ApiContext db) : base(db)
        {
        }
    }
}
