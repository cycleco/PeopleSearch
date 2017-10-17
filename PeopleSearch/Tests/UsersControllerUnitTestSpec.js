'use strict';

xdescribe('usersController Test Suite',
    function() {
        beforeEach(module('app'));

        describe('usersController',
            function () {
                var ctrl;

                beforeEach(inject(function($controller) {
                    ctrl = $controller('usersController');
                }));

                it('should have a title', function () {

                    expect(ctrl.title).toBeDefined();
                    expect(ctrl.title).toBe('usersController');
                });
            });
    });