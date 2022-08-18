import { useEffect, useState } from "react";

import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);


  return (
    <div>
      {
        posts.map(post=>(
          <Post 
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          />
        ))
      }
    </div>
  )
}
