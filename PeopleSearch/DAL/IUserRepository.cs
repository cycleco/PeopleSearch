using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PeopleSearch.Models;

namespace PeopleSearch.DAL
{
    interface IUserRepository
    {
        IQueryable<User> Users();
    }
}
