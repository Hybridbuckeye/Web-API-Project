module app.common.services {

    interface IDataService {
        //get(resource: string): ng.IPromise<app.domain.EntityBase[]>;
        get(resource: string): ng.IPromise<app.domain.EntityBase>;
        getSingle(resource: string): ng.IPromise<app.domain.EntityBase>;
        add(resource: string, entity: app.domain.IEntity): ng.IPromise<app.domain.EntityBase>;
        update(resource: string, entity: app.domain.IEntity): ng.IPromise<app.domain.EntityBase>;
        remove(resource: string): ng.IPromise<any>;
    }

    export class DataService implements IDataService {

        //Setting up and injecting the httpService and QService
        //HttpService calls to respective controller to make call to server
        //QService handles when the promised data is available when the work is finished
        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        static $inject = ['$http', '$q'];
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        get(resource: string): ng.IPromise<app.domain.EntityBase> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then(function (result: any) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        /*This was original, this caused me a ton of issues because the deferred.promise doesn't return an array. But my result set is not actually an array of items being returned the array is the promise itself
        get(resource: string): ng.IPromise<app.domain.EntityBase[]> {
            var self = this;

            var deferred = self.qService.defer();

        ***Stuff I tried***
        var promises = [];

            self.httpService.get(resource).then(function (result: any) {
                deferred.resolve(result.data);
        ***Stuff I tried***
            promises.push(deferred.resolve(result.data));
            }, function (error) {
                deferred.reject(error);
            });
            ***Stuff I tried***
        return self.qService.all(promises);
            return deferred.promise;
        }
        */

        getSingle(resource: string): ng.IPromise<app.domain.EntityBase> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then(function (result: any) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        add(resource: string, entity: app.domain.IEntity): ng.IPromise<app.domain.EntityBase> {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(resource, entity)
                .then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        update(resource: string, entity: app.domain.IEntity): ng.IPromise<app.domain.EntityBase> {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.put(resource, entity)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        remove(resource: string): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.delete(resource)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    angular.module('PANDemoApp')
        .service('dataService', DataService);
} 