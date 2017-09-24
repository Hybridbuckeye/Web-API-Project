module app.postList {

    interface IPostsViewModel {
        posts: app.domain.IPost[];
        remove(Id: number): void;
    }

    class PostsCtrl implements IPostsViewModel {

        //post is the variable the page that uses this controller to access properties
        posts: app.domain.IPost[];

        static $inject = ['constantService', 'dataService'];

        //Needed to add this
        //$onInit() { };

        constructor(private constantService: app.common.services.ConstantService,
            private dataService: app.common.services.DataService) {
            this.getPosts();
        }
        //Function called when you hit the 'Remove' button on the Post
        remove(Id: number): void {
            var self = this; // Attention here.. check 'this' in TypeScript and JavaScript

            this.dataService.remove(this.constantService.apiPostURI + Id)
                .then(function (result) {
                    self.getPosts();
                });
        }

        //Function is called when remove function is finished. Returns user to root page and gets the new list of Posts
        getPosts(): void {
            this.dataService.get(this.constantService.apiPostURI).then((result: app.domain.IPost[]) => {
                this.posts = result;
            });
        }
    }
    angular.module('PANDemoApp')
        .controller('PostsCtrl', PostsCtrl as any); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
}