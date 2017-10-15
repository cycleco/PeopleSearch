(function () {
    'use strict';

    angular
        .module('app')
        .factory('usersService', usersService);

    usersService.$inject = ['$http'];

    function usersService($http) {
        var service = {
            getUsers: getUsers,
            addUser: addUser,
            deleteUser: deleteUser
        };
        var uriBase = '/api/Users';

        return service;

        function getUsers() {
            return $http.get(uriBase);
        }

        function deleteUser(id) {
            return $http.delete(uriBase + '/' + id, id);
        }

        function addUser(user) {
            return $http.post(uriBase,user);
        }
    }
})();