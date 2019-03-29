using Microsoft.AspNetCore.SignalR;
using UserAdmin.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.Hubs
{
    public class NotifyHub : Hub<ITypedHubClient>
    {
    }
}
