using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryContracts
{
    public interface IPostRepository
    {
        List<Post> GetPosts();
        Post GetSinglePost(int id);
        void AddPost(Post post);
        void RemovePost(int id);
        void UpdatePost(Post post);
    }
}
