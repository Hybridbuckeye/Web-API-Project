var app;
(function (app) {
    var postList;
    (function (postList) {
        var PostsCtrl = (function () {
            //Needed to add this
            //$onInit() { };
            function PostsCtrl(constantService, dataService) {
                this.constantService = constantService;
                this.dataService = dataService;
                this.getPosts();
            }
            //Function called when you hit the 'Remove' button on the Post
            PostsCtrl.prototype.remove = function (Id) {
                var self = this; // Attention here.. check 'this' in TypeScript and JavaScript
                this.dataService.remove(this.constantService.apiPostURI + Id)
                    .then(function (result) {
                    self.getPosts();
                });
            };
            //Function is called when remove function is finished. Returns user to root page and gets the new list of Posts
            PostsCtrl.prototype.getPosts = function () {
                var _this = this;
                this.dataService.get(this.constantService.apiPostURI).then(function (result) {
                    _this.posts = result;
                });
            };
            PostsCtrl.$inject = ['constantService', 'dataService'];
            return PostsCtrl;
        }());
        angular.module('PANDemoApp')
            .controller('PostsCtrl', PostsCtrl); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
    })(postList = app.postList || (app.postList = {}));
})(app || (app = {}));
//# sourceMappingURL=postsCtrl.js.map