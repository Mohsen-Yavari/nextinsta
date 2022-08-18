import { useEffect, useState } from "react";

import Post from './Post';

export default function Posts() {
  // const [posts, setPosts] = useState([]);

  const posts =[
      {
        id:"1",
        username:"mohsen",
        userImg:"https://images.unsplash.com/photo-1660766877755-4cac24f6cf21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        img:"https://images.unsplash.com/photo-1660735839104-b201710652d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        caption:"bbbbbbbbbbbbbbbbbbbb",
      },
      {
        id:"2",
        username:"ali",
        userImg:"https://images.unsplash.com/photo-1660739205131-07edfc6c2650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        img:"https://images.unsplash.com/photo-1660754942914-bfb939173f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        caption:"aaaaaaaaaaaaa",
      }
  ]

  return (
 
    <div>
      {
        posts.map(post=>(
          <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.profileImg}
          img={post.image}
          caption={post.caption}
          />
        ))
      }
    </div>
  )
}
