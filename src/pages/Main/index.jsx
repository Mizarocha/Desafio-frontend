import React, { useState, useEffect, useMemo } from "react";
import { Posts } from "../../components/Posts";

export const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((posts) => setPosts(posts));
    }, 1000);
  }, []);

  const mapPost = useMemo(
    () =>
      posts.length <= 0 ? (
        <p>Carregando os posts...</p>
      ) : (
        posts.map((post) => <Posts key={post.id} post={post} />)
      ),
    [posts]
  );

  return <div>{mapPost}</div>;
};
