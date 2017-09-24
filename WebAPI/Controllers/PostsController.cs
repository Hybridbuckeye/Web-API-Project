using DataTypes;
using ServiceContracts;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class PostsController : ApiController
    {
        private IPostService _postService;
        //Not sure how to properly do this with WebAPI, I get an error that says I must have an empty constructor if a constructor exists.
        //Wouldn't normally do this and would only have a reference to the Service Contract
        public PostsController() : this(new PostServices())
        {
        }

        public PostsController(IPostService postService)
        {
            _postService = postService;
        }
        /*
         I would have an extra layer here so my Unit Of Work would be exposed there instead. And you DTO's and a mapper to go from my Domain object to the client
         */
        // GET api/posts
        public IHttpActionResult Get()
        {
            //List<PostDTO> post = new List<PostDTO>();
            //using(uow as UnitOfWork()){
            var posts = _postService.GetPosts();// DataRepository.Posts;
            //I wouldn't want my domain object exposed to the outside so Mapping would be done here
            //}
            return Ok(posts);
            
        }

        // GET api/posts/5
        public IHttpActionResult Get(int id)
        {
            //PostDTO post = new PostDTO();
            //using(uow as UnitOfWork()){
            var post = _postService.GetPost(id);// DataRepository.Posts.FirstOrDefault(p => p.Id == id);
            //I wouldn't want my domain object exposed to the outside so Mapping would be done here
            //}
            if (post != null)
            {
                return Ok(post);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/posts
        public IHttpActionResult Post([FromBody]PostDTO post)
        {
            //Convert my PostDTO object into Post domain object inside uow
            //using(uow as UnitOfWork()){
            //var max = 
                _postService.CreatePost(post);
            // DataRepository.Posts.Max(p => p.Id);
            //post.Id = max + 1;

            //DataRepository.Posts.Add(post);
            //}
            return Ok(post);
        }

        // PUT api/posts/5
        public IHttpActionResult Put(int id, [FromBody]PostDTO post)
        {
            //Convert my PostDTO object into Post domain object inside uow
            //using(uow as UnitOfWork()){
            //Post _post = DataRepository.Posts.FirstOrDefault(p => p.Id == post.Id);

            //if (_post != null)
            //{
            //    for (int index = 0; index < DataRepository.Posts.Count; index++)
            //    {
            //        if (DataRepository.Posts[index].Id == id)
            //        {
            //            DataRepository.Posts[index] = post;
            //            return Ok();
            //        }
            //    }
            //}
            //}
            if (_postService.UpdatePost(post))
            {
                return Ok();
            }           

            return NotFound();
        }

        // DELETE api/posts/5
        public IHttpActionResult Delete(int id)
        {
            //Convert my PostDTO object into Post domain object inside uow
            //using(uow as UnitOfWork()){
            //if (DataRepository.Posts.Any(p => p.Id == id))
            //{
            //    Post _post = DataRepository.Posts.First(p => p.Id == id);
            //    DataRepository.Posts.Remove(_post);

            //    return Ok();
            //}
            //}
            if (_postService.RemovePost(id))
            {
                return Ok();
            }
            return NotFound();
        }
    }
}