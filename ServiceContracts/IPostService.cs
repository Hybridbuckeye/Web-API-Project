using DataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceContracts
{
    public interface IPostService
    {
        List<PostDTO> GetPosts();
        PostDTO GetPost(int id);
        bool UpdatePost(PostDTO post);
        bool RemovePost(int id);
        void CreatePost(PostDTO post);
    }
}
