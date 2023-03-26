import React, { useCallback, useEffect, useState } from "react";
import P from "prop-types";
import { API } from "../utils/constants";

export const Posts = ({ post }) => {
  Posts.propTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
    }),
  };

  const [comments, setComments] = useState([]);
  const [data, setData] = useState(undefined);

  const searchCommentsById = useCallback(async () => {
    try {
      await fetch(`${API.POSTS}/${post.id}/comments`)
        .then((r) => r.json())
        .then((comments) => setComments(comments));
    } catch (error) {
      console.log("searchPostsById error", error);
    }
  }, [post]);

  useEffect(() => {
    searchCommentsById();
  }, [searchCommentsById]);

  const handleComments = useCallback(() => {
    if (!comments) return;
    if (data?.length > 0) {
      setData([]);
    } else {
      const result = comments.map((comment) => ({
        id: comment.id,
        name: comment.name,
        email: comment.email,
        comment: comment.body,
      }));
      setData([...result]);
    }
  }, [comments, data]);

  return (
    <div key={post.id}>
      <h3>{post.title}</h3>
      {comments.length ? (
        <button className="botao" onClick={() => handleComments()}>
          {comments.length || null} Comentários
        </button>
      ) : null}
      {data?.length > 0
        ? data?.map((el) => {
            return (
              <div key={el.id} className="items">
                <p>Name: {el.name}</p>
                <button>Email: {el.email}</button>
                <p>Comentário: {el.comment}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
