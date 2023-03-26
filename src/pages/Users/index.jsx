import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DetailsUsers } from "../../components/DetailsUsers";
import { API } from "../../utils/constants";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const searchUser = useCallback(async () => {
    try {
      await fetch(API.USERS)
        .then((r) => r.json())
        .then((user) => setUsers(user));
    } catch (error) {
      console.log("searchUsersById error", error);
    }
  }, []);

  useEffect(() => {
    searchUser();
  }, [searchUser]);

  const mapUsers = useMemo(
    () =>
      users.length <= 0 ? (
        <p>Carregando os usuários...</p>
      ) : (
        users.map((user) => <DetailsUsers key={user.id} user={user} />)
      ),
    [users]
  );

  return <div>{mapUsers}</div>;
};
