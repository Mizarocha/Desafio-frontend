import React, { useCallback, useEffect, useState } from "react";
import P from "prop-types";

export const Posts = ({ post }) => {
  Posts.propTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
    }),
  };

  const [comments, setComments] = useState([]);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((r) => r.json())
      .then((comment) => setComments(comment));
  }, [post]);

  const searchComments = useCallback(() => {
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
      <h2>{post.title}</h2>
      <button className="botao" onClick={() => searchComments()}>
        {comments.length} Comentários
      </button>
      {data?.length > 0 &&
        data?.map((el) => {
          return (
            <div key={el.id} className="comentario">
              <p>Name: {el.name}</p>
              <button>Email: {el.email}</button>
              <p>Comentário: {el.comment}</p>
            </div>
          );
        })}
    </div>
  );
};
