module app.postEdit {

    interface IEditPostViewModel {
        post: app.domain.IPost;
        update(): void;
    }

    interface IPostParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class PostEditCtrl implements IEditPostViewModel {

        //post is the variable the page that uses this controller to access properties
        post: app.domain.IPost;
        private postId: number;

        static $inject = ['$routeParams', '$location', 'constantService', 'dataService'];

        $onInit() { }; //Needed to add this

        constructor(private $routeParams: IPostParams,
            private $location: ng.ILocationService,
            private constantService: app.common.services.ConstantService,
            private dataService: app.common.services.DataService) {
            this.postId = $routeParams.id;

            //Function is called when you press the 'Edit' button on a post. Redirects you to edit screen
            dataService.getSingle(this.constantService.apiPostURI + this.postId)
                .then((result: app.domain.IPost) => {
                    this.post = result;
                });
        }

        //Function is called when the 'Update' button is pressed on the edit page.
        update(): void {
            this.dataService.update(this.constantService.apiPostURI + this.postId, this.post)
                .then((result: app.domain.IPost) => {
                    this.$location.path('/');
                });
        }
    }
    angular.module('PANDemoApp')
        .controller('PostEditCtrl', PostEditCtrl); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
}