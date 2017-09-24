var app;
(function (app) {
    var postEdit;
    (function (postEdit) {
        var PostEditCtrl = (function () {
            function PostEditCtrl($routeParams, $location, constantService, dataService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
                this.postId = $routeParams.id;
                //Function is called when you press the 'Edit' button on a post. Redirects you to edit screen
                dataService.getSingle(this.constantService.apiPostURI + this.postId)
                    .then(function (result) {
                    _this.post = result;
                });
            }
            PostEditCtrl.prototype.$onInit = function () { };
            ; //Needed to add this
            //Function is called when the 'Update' button is pressed on the edit page.
            PostEditCtrl.prototype.update = function () {
                var _this = this;
                this.dataService.update(this.constantService.apiPostURI + this.postId, this.post)
                    .then(function (result) {
                    _this.$location.path('/');
                });
            };
            PostEditCtrl.$inject = ['$routeParams', '$location', 'constantService', 'dataService'];
            return PostEditCtrl;
        }());
        angular.module('PANDemoApp')
            .controller('PostEditCtrl', PostEditCtrl); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
    })(postEdit = app.postEdit || (app.postEdit = {}));
})(app || (app = {}));
//# sourceMappingURL=postEditCtrl.js.map