import './App.css';
import { useEffect, useState } from 'react';
import { getPosts } from '../src/api/fetchPosts';
import type { Post } from '../src/types/Post';
import Card from '../src/components/Card';

function App() {
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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post, index: number) => {
          return (
            <li key={index}>
              {post.name} {post.date.toLocaleDateString()}
            </li>
          );
        })}
      </ul>
      <Card post={posts[0]}/>
    </div>
  );
}

export default App;
