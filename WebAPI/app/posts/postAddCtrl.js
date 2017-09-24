var app;
(function (app) {
    var postAdd;
    (function (postAdd) {
        var PostAddCtrl = (function () {
            function PostAddCtrl($location, constantService, dataService) {
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
            }
            //Needed to add this 
            PostAddCtrl.prototype.$onInit = function () { };
            ;
            //Function called when saving a new post. Provides javascript alert when saving returns and returns user to root page.
            PostAddCtrl.prototype.add = function () {
                var _this = this;
                this.dataService.add(this.constantService.apiPostURI, this.post)
                    .then(function (result) {
                    alert(result.Title + ' submitted successfully');
                    _this.$location.path('/');
                });
            };
            PostAddCtrl.$inject = ['$location', 'constantService', 'dataService'];
            return PostAddCtrl;
        }());
        angular.module('PANDemoApp')
            .controller('PostAddCtrl', PostAddCtrl); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
    })(postAdd = app.postAdd || (app.postAdd = {}));
})(app || (app = {}));
//# sourceMappingURL=postAddCtrl.js.map