using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http.Results;
using Moq;
// using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.Controllers;
using PeopleSearch.Models;
using NUnit.Framework;

namespace PeopleSearch.Tests.Controllers
{
    [TestFixture]
    public class UserControllerTest
    {
        [Test]
        public void PostUserInvokesAddAndSaveAsync()
        {
            var mockUser = new User() { FirstName = "Mo", LastName = "Mock" };
            var mockSet = new Mock<DbSet<User>>();
            var mockContext = new Mock<PeopleSearchContext>();
            mockContext.Setup(m => m.Users).Returns(mockSet.Object);

            var userController = new UsersController(mockContext.Object);
            var res = userController.PostUser(mockUser);

            mockSet.Verify(m => m.Add(It.IsAny<User>()), Times.Once());
            mockContext.Verify(m => m.SaveChangesAsync(), Times.Once());
            Assert.AreEqual(typeof(CreatedAtRouteNegotiatedContentResult<User>), res.Result.GetType());
        }

        [Test]
        public void GetAllUsersReturnsAllUsers()
        {
            var mockUsers = new List<User>
            {
                new User() {FirstName = "Aaron", LastName = "Alibar"},
                new User() {FirstName = "Ben", LastName = "Baker"},
                new User() {FirstName = "Cat", LastName = "Caper"}
            }.AsQueryable();

            var mockSet = new Mock<DbSet<User>>();
            mockSet.As<IQueryable<User>>().Setup(m => m.Provider).Returns(mockUsers.Provider);
            mockSet.As<IQueryable<User>>().Setup(m => m.Expression).Returns(mockUsers.Expression);
            mockSet.As<IQueryable<User>>().Setup(m => m.ElementType).Returns(mockUsers.ElementType);
            mockSet.As<IQueryable<User>>().Setup(m => m.GetEnumerator()).Returns(mockUsers.GetEnumerator());
            var mockContext = new Mock<PeopleSearchContext>();
            mockContext.Setup(m => m.Users).Returns(mockSet.Object);

            var userController = new UsersController(mockContext.Object);
            var res = userController.GetUsers();

            Assert.AreEqual(3, res.Count());
            Assert.That(res.Any(u => u.FirstName == "Aaron"));
            // Assert.That(res, Is.SupersetOf(mockUsers));
        }
    }
}
