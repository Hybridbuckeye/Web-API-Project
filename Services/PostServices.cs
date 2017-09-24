using AutoMapper;
using DataTypes;
using Domain;
using Repository;
using RepositoryContracts;
using ServiceContracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class PostServices : IPostService
    {
        IPostRepository _postRepository;

        public PostServices() : this(new PostRepository())
        {
            
        }
        public PostServices(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        public void CreatePost(PostDTO post)
        {
            //using(var uow as new UnitOfWork()){
            Post domainPost = new Post();
            domainPost = Mapper.Map<PostDTO, Post>(post);
            _postRepository.AddPost(domainPost);
            //uow.Save();
            //}
        }

        public PostDTO GetPost(int id)
        {
            PostDTO post = new PostDTO();
            //using(var uow as new UnitOfWork()){
            Post postDomain = _postRepository.GetSinglePost(id);
            post = Mapper.Map<Post, PostDTO>(postDomain);
            //}
            return post;
        }

        public List<PostDTO> GetPosts()
        {
            List<PostDTO> posts = new List<PostDTO>();
            //using(var uow as new UnitOfWork()){
            List<Post> postDomain = _postRepository.GetPosts();
            posts = Mapper.Map<List<Post>, List<PostDTO>>(postDomain);
            //}
            return posts;
        }

        public bool RemovePost(int id)
        {
            bool postRemoved = false;
            
            try
            {
                //using(var uow as new UnitOfWork()){
                _postRepository.RemovePost(id);
                //uow.Save();
                //}
                postRemoved = true;
            }
            catch (Exception)
            {
                postRemoved = false;
            }
            return postRemoved;
            
        }

        public bool UpdatePost(PostDTO post)
        {
            bool updatePost = false;
            try
            {
                //using(var uow as new UnitOfWork()){
                Post postDomain = _postRepository.GetSinglePost(post.Id);
                postDomain.Author = post.Author;
                postDomain.AuthorGravatar = post.AuthorGravatar;
                postDomain.Contents = post.Contents;
                postDomain.DatePublished = post.DatePublished;
                postDomain.ImageURI = post.ImageURI;
                postDomain.Title = post.Title;
                postDomain.URI = post.URI;
                //uow.Save();
                //}
                updatePost = true;
            }
            catch (Exception)
            {
                updatePost = false;
            }
            return updatePost;
        }
    }
}
