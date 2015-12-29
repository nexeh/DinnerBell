'use strict';

/*jshint unused:false */
angular.module('httpmock.module', ['ngMockE2E',
                                    'loginHttpMock',
                                    'SerfMock',
                                    'mock.FacilityTable',
                                    'mock.DeviceTable',
                                    'mock.DeviceHierarchy',
                                    'mock.DeviceHierarchyRevised',
                                    'mock.GatewayTable',
                                    'mock.ConfigFileTable',
                                    'mock.workorderTable'])

    .config(['$provide',
        function ($provide) {
            $provide.decorator('$httpBackend', ['$delegate',
                function ($delegate) {
                    var proxy = function (method, url, data, callback, headers) {

                        // When running with HTTPMock on you will see nothing in the developer tools
                        // which can make it dificult to debug when you need to see the request and
                        // response formats.
                        console.log('MOCKED url: ', url, 'Data: ', data); // jshint ignore:line

                        // This will delay the response. You can change the amount but some amount
                        // is required so you are testing in a true async manner. Interesting
                        // defects wont be found till being deployed otherwise.
                        var timer = 250;
                        var interceptor = function () {
                            var _this = this;
                            var _arguments = arguments;
                            setTimeout(function () {
                                callback.apply(_this, _arguments);
                            }, timer);
                        };
                        return $delegate.call(this, method, url, data, interceptor, headers);
                    };
                    for (var key in $delegate) {
                        if ($delegate.hasOwnProperty(key)) {
                            proxy[key] = $delegate[key];
                        }
                    }
                    return proxy;
                }
            ]);
        }
    ])
    .run(function ($httpBackend, loginHttpMock, SerfMock, FacilityTable, DeviceTable,
         DeviceHierarchy, GatewayTable, ConfigFileTable, DeviceHierarchyRevised, WorkorderTable) {

        /**
         * Authentication
         *
         * The following section will mock out all the requests the application make for making sure
         * the user is logged into the system. This will allow the client to simulate a login
         * process without the backend being available
         */

        var wrapData = function (data) {

            return {
                success: true,
                responseData: data
            };
        };

        var isByHierarchyURL = function (url) {

            if (url.indexOf('app/rest/devices/byHierarchy?fgwId=') > -1) {
                return true;
            }
            return false;
        };

        var islAuthenticationURL = function (url) {
            if (url === 'app/logout' || url === 'app/rest/account' || url === 'oauth/token') {
                return true;
            }
            return false;
        };

        $httpBackend.whenGET('app/rest/account', function (headers) {
            if (headers.Authorization === 'Bearer d0f71b4c-90b2-4507-95b1-d9822e350d54') {
                return true;
            }
            return false;
        })
        .respond(function (method, url, data) {
            return loginHttpMock.responseHandler(method, url, data);
        });

        $httpBackend.whenGET(islAuthenticationURL).respond(function (method, url, data) {
            return loginHttpMock.responseHandler(method, url, data);
        });

        $httpBackend.whenPOST(islAuthenticationURL).respond(function (method, url, data) {
            return loginHttpMock.responseHandler(method, url, data);
        });

        // jscs:disable
        /* jshint ignore:start */
        //for mocked in logged in
        $httpBackend.whenGET(
            function (url) {
                return url.indexOf('resources/assets/img/authentication_check.gif') > -1
            })
            .respond(function () {
                return [200, {}, {}];
            });

        /**
         * Application Resources
         *
         * The following URLS are resources that we have in the project and we just want to staticly
         * serve them
         */
        $httpBackend.whenGET(/^resources\/components\/(.*)\.html/).passThrough();
        $httpBackend.whenGET('resources/assets/i18n/en.json').passThrough();


        $httpBackend.whenGET('/serf-app/json').respond(function () {
            var data = SerfMock.getSerfData();
            return [200, data, {}];
        });

        $httpBackend.whenGET(
            function (url) {
                return url.indexOf('favicon.ico') > -1
            }).respond(function () {
            return [200, {}, {}];
        });

        /**
         *
         */
        $httpBackend.whenGET('/serf-app/json').respond(function () {
            var data = SerfMock.getSerfData();
            return [200, data, {}];
        });

        // manage tree hierarchy data
        $httpBackend.whenGET('app/rest/devicehierarchy').respond(function () {
            return [200, DeviceHierarchyRevised.hierarchyData().get()[0], {}];
        });

        //mocked for any selction on managetree when on file view
        $httpBackend.whenGET(/app\/rest\/files/).respond(200,
            ConfigFileTable.allConfigFiles().get());

        //mocked for any selction on managetree when on device view
        $httpBackend.whenGET(/app\/rest\/devices\/search/).respond(200,
            DeviceTable.devices().get());

        //mocking an action taken on a file
        $httpBackend.whenPOST(/app\/rest\/files\/(.*)?_action=(.*)/).respond(200, null);

        $httpBackend.whenGET('/app/rest/devices/search?status=Unregistered')
            .respond(200, DeviceTable.devices({gatewayStatus: 'Unregistered'}).get());


        $httpBackend.whenGET('app/rest/devices/unregistered').respond(function () {

            var devices = DeviceTable.devices({hsmStatus: 'Unregistered'}).get();

            return [200, devices, {}];
        });

        $httpBackend.whenGET(/app\/rest\/workorders/).respond(function (method, url, data) {

            var params = url.split('?')[1].replace(/(^\?)/,'').split("&")
                .map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];

            return [200, WorkorderTable.workorders(params).get(), {}];
        });

        $httpBackend.whenPOST(/app\/rest\/workorders/).respond(function (method, url, data) {

            var newWo = JSON.parse(data);
            newWo.workorderNumber = Math.floor((Math.random() * 100) + 2000);;

            WorkorderTable.workorders.insert(newWo);

            return [200, newWo, {}];
        });

        // what is this doing?
        $httpBackend.whenGET(/app\/rest\/gateways/).respond(function () {
            return [200, FacilityTable.facilities().get(), {}];
        });

        $httpBackend.whenGET(isByHierarchyURL).respond(function (method, url, data) {
            //remove the app/rest/devices/byHierarchy?fgwId=
            var selectedArray =  url.substring(35).split(',');

            var devices;
            if (selectedArray.length > 0) {
                devices = DeviceTable.devices({gatewayId: selectedArray}).get();
            }

            return [200, devices, {}];
        });
        /* jshint ignore:end */
        // jscs:enable

    });
