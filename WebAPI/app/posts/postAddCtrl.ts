module app.postAdd {

    interface IAddPostViewModel {
        post: app.domain.IPost;
        add(): void;
    }

    class PostAddCtrl implements IAddPostViewModel {

        //post is the variable the page that uses this controller to access properties
        post: app.domain.IPost;

        static $inject = ['$location', 'constantService', 'dataService'];

        //Needed to add this 
        $onInit() { };

        constructor(private $location: ng.ILocationService,
            private constantService: app.common.services.ConstantService,
            private dataService: app.common.services.DataService) {
        }

        //Function called when saving a new post. Provides javascript alert when saving returns and returns user to root page.
        add(): void {
            this.dataService.add(this.constantService.apiPostURI, this.post)
                .then((result: app.domain.IPost) => {
                    alert(result.Title + ' submitted successfully');
                    this.$location.path('/');
                });
        }
    }
    angular.module('PANDemoApp')
        .controller('PostAddCtrl', PostAddCtrl); //Get error that TypeScript considers this "Weak Type" that is the purpose of the $onInit, other option was to add 'as any' here
}