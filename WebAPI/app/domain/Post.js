var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Client side object that server side object will map to for angular to do its work
var app;
(function (app) {
    var domain;
    (function (domain) {
        var Post = (function (_super) {
            __extends(Post, _super);
            function Post(Title, Author, AuthorGravatar, URI, DatePublished, ImageURI, Contents, Id) {
                var _this = 
                //Not sure what this is
                _super.call(this) || this;
                _this.Title = Title;
                _this.Author = Author;
                _this.AuthorGravatar = AuthorGravatar;
                _this.URI = URI;
                _this.DatePublished = DatePublished;
                _this.ImageURI = ImageURI;
                _this.Contents = Contents;
                _this.Id = Id;
                _this.Id = Id;
                _this.Title = Title;
                _this.Author = Author;
                _this.AuthorGravatar = AuthorGravatar;
                _this.URI = URI;
                _this.DatePublished = DatePublished;
                _this.ImageURI = ImageURI;
                _this.Contents = Contents;
                return _this;
            }
            return Post;
        }(app.domain.EntityBase));
        domain.Post = Post;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=Post.js.map