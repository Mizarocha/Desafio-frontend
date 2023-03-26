import React, { useState, useEffect, useMemo, useCallback } from "react";

import { Posts } from "../../components/Posts";
import { Users } from "../Users";
import { API } from "../../utils/constants";

export const Main = () => {
  const [posts, setPosts] = useState([]);

  const searchPosts = useCallback(async () => {
    try {
      await fetch(API.POSTS)
        .then((r) => r.json())
        .then((posts) => setPosts(posts));
    } catch (error) {
      console.log("searchPosts error", error);
    }
  }, []);

  useEffect(() => {
    searchPosts();
  }, [searchPosts]);

  const mapPost = useMemo(
    () =>
      posts.length <= 0 ? (
        <p>Carregando os posts...</p>
      ) : (
        posts.map((post) => <Posts key={post.id} post={post} />)
      ),
    [posts]
  );

  return (
    <div>
      <Users />
      {mapPost}
    </div>
  );
};
