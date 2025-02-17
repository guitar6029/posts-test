import './App.css';
import { useEffect, useState } from 'react';
import { getPosts } from '../src/api/fetchPosts';
import type { Post } from '../src/types/Post';
import Card from '../src/components/Card';
import MyObject from './components/MyObject';
import Button from './components/Button';

const myObjectExample = {
  id: 123,
  name: "James Smith",
  job: "Programmer"
}


function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hello, toggleHello] = useState<boolean>(false)
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

  const handleClickedHello = () => {
    console.log("Current property: ", hello)
    toggleHello(!hello)
  }

  return (
    <div>
      <h1>Posts Test <Button clickedHello={handleClickedHello} /></h1>
      <span>{hello ? 'True' : 'False'}</span>
      <MyObject {...myObjectExample} />
      <ol>
        {posts?.map((post, index: number) => {
          return (
            <li key={index}>
              {post.name} {post.date.toLocaleDateString()}
            </li>
          );
        })}
      </ol>
      <Card post={posts[0]} />
    </div>
  );
}

export default App;
