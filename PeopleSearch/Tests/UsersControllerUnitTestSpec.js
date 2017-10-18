'use strict';

describe('Controller::usersController',
    function() {
        beforeEach(module('app'));

        var ctrl;

        beforeEach(inject(function($controller) {
            ctrl = $controller('usersController', {});
        }));

        describe('usersController',
            function() {

                it('should have a title',
                    function() {

                        expect(ctrl.title).toBeDefined();
                        expect(ctrl.title).toBe('usersController');
                    });
            });

        describe('Search Filtering',
            function() {
                var mockUser = {
                    FirstName: 'ABCDEabcde',
                    LastName: 'vwxyzVWXYZ',
                    Interests: 'LMNOPlmnop',
                    Address: 'GHIJKghijk'
                };
                // filter method returns 0 for false (no match), >0 for true (index of match)
                it('search should match for empty criteria',
                    function() {
                        ctrl.searchUsers = '';
                        expect(ctrl.filterOnFullName(mockUser)).toBe(true);
                    });
                it('search should match any char in FirstName',
                    function() {
                        ctrl.searchUsers = 'E';
                        expect(ctrl.filterOnFullName(mockUser)).toBe(true);
                    });
                it('search should match any char in LastName',
                    function() {
                        ctrl.searchUsers = 'v';
                        expect(ctrl.filterOnFullName(mockUser)).toBe(true);
                    });
                it('search should not match any char in Interests',
                    function() {
                        ctrl.searchUsers = 'P';
                        expect(ctrl.filterOnFullName(mockUser)).toBe(false);
                    });
                it('search should not match any char in Address',
                    function() {
                        ctrl.searchUsers = 'gk';
                        expect(ctrl.filterOnFullName(mockUser)).toBe(false);
                    });
            });

        xdescribe('Delay handling',
            function () {
                it('should not set `loading` after page is loaded',
                    function () {
                        expect(ctrl.network.loader.loading).toBeDefined();
                        // expect(ctrl.network.loader.loading).toBe(false);
                    });
                it('should set `loading` for add user refresh',
                    function () {
                        expect(ctrl.network.loader.loading).toBeDefined();
                        // expect(ctrl.network.loader.loading).toBe(false);
                    });
                it('should set `loading` for delete user',
                    function () {
                        expect(ctrl.network.loader.loading).toBeDefined();
                        // expect(ctrl.network.loader.loading).toBe(false);
                    });
                it('should be configurable',
                    function () {
                        expect(ctrl.network.loader.loading).toBeDefined();
                        // expect(ctrl.network.loader.loading).toBe(false);
                    });
            });

    });