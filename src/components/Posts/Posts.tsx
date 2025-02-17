import {useState, useEffect} from 'react'
import { getPosts } from '../../api/fetchPosts';
import type { Post } from '../../types/Post';
export default function Posts(){

    const [posts, setPosts] = useState<Post[]>([]);
    const [loadingPosts, setLoadingPosts] = useState<boolean>(true);
    
    // on mounted
    useEffect(() => {
      //get posts
      async function fetchPosts() {
        try {
          let response = await getPosts();
          if (response) {
            setPosts(response.data);
            setLoadingPosts(false);
          }
        } catch (err) {
          console.log(err);
        }
      }
    
      fetchPosts();
    }, []);
    
    if (loadingPosts) {
      return <div>Loading Posts...</div>;
    }
    

    return (
        <ol>
        {posts?.map((post, index: number) => {
          return (
            <li key={index}>
              {post.name} {post.date.toLocaleDateString()}
            </li>
          );
        })}
      </ol>
    )
}

