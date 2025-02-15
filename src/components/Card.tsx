import type {Post} from "../types/Post"
import {useEffect, useState} from 'react'


type CardProps = {
  post: Post;
}

export default function Card ({post} : CardProps)  {


  const [postProp, setPost] = useState<Post>({})

  useEffect(() => {
    setPost(post)
  }, [post])


  return (
    <div>
      <h1>Card</h1>
      <div>{postProp.name}</div>
    </div> 
  )
}