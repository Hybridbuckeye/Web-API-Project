var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var ConstantService = (function () {
                function ConstantService() {
                    this.apiPostURI = '/api/posts/';
                }
                return ConstantService;
            }());
            services.ConstantService = ConstantService;
            angular.module('PANDemoApp')
                .service('constantService', ConstantService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=constantService.js.map