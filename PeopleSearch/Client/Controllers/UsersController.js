(function () {
    'use strict';

    angular
        .module('app')
        .controller('usersController', usersController)
        .controller('userModalController', userModalController);

    usersController.$inject = ['$uibModal', 'usersService'];
    userModalController.$inject = ['$uibModalInstance'];

    function usersController($uibModal, usersService) {
        var vm = this;

        vm.title = 'usersController';
        vm.message = "Yo Scott";
        vm.editMode = false;

        vm.getUsers = function getUsers() {
            usersService.getUsers()
                .then(function successCallback(users) {
                        vm.users = users;
                        console.log(vm.users);
                }
                ,function errorCallback(error) {
                        vm.status = 'Cannot load users' + error.message;
                        console.log(vm.status);
                        vm.error = vm.status;
                    });
        }


        vm.deleteUser = function deleteUser(id) {
            usersService.deleteUser(id)
                .then(function successCallback(response) {
                        console.log(response);
                        vm.getUsers();
                    }
                    , function errorCallback(error) {
                        vm.status = 'Cannot delete user' + error.message;
                        console.log(vm.status);
                    });
        }

        vm.clear = function () {
            vm.User = {};
        }

        vm.addUser = function addUser() {
            var userData = {
                Age: vm.User.Age,
                FirstName: vm.User.FirstName,
                LastName: vm.User.LastName,
                Interests: vm.User.Interests
                // todo PictureBytes:
            };

            usersService.addUser(userData)
                .then(function successCallback(response) {
                        vm.users.data.push(response.data);
                        vm.User = {};
                    console.log(response);
                    },
                function errorCallback(error) {
                    console.log(error);
                    vm.error = 'Could not add user: ' + error.message;
                });
        }

        vm.searchUsers = '';
        vm.filterOnFullName = function (item) {
            return (item.FirstName + item.LastName).toLowerCase().indexOf(vm.searchUsers.toLowerCase()) >= 0;
        }

        vm.showadd = function() {
            $uibModal.open({
                controller: 'userModalController',
                controllerAs: '$userModal',
                templateUrl: 'modalUser.html',
                animation: false
            }).result.then(function(newuser) {
                vm.User = newuser;
                vm.addUser();
            }, function(res) {});  // this is to avoid angularjs issue: 'Possibly unhandled rejection: cancel'
        }

     
        vm.getUsers();

    }
    
    function userModalController($uibModalInstance) {
        var $userModal = this;
        $userModal.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }

        $userModal.add = function() {
            $uibModalInstance.close($userModal.User);
        }
    }
})();
