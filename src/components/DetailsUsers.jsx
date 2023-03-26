import React, { useCallback, useEffect, useState } from "react";
import P from "prop-types";
import { API } from "../utils/constants";

export const DetailsUsers = ({ user }) => {
  DetailsUsers.propTypes = {
    user: P.shape({
      id: P.number,
      name: P.string,
    }),
  };

  const [detailsUser, setDetailsUser] = useState(undefined);
  const [data, setData] = useState(undefined);

  const searchDetailsOfUsers = useCallback(async () => {
    try {
      await fetch(`${API.USERS}/${user.id}`)
        .then((r) => r.json())
        .then((detailUser) => setDetailsUser(detailUser));
    } catch (error) {
      console.log("searchUsersById error", error);
    }
  }, [user]);

  useEffect(() => {
    searchDetailsOfUsers();
  }, [searchDetailsOfUsers]);

  const handleDetailsUsers = useCallback(() => {
    if (!detailsUser) return;
    if (data?.id) {
      setData({});
    } else {
      setData({ ...detailsUser });
    }
  }, [detailsUser, data]);

  return (
    <div className="container2">
      <h2>{user.name} </h2>
      <button onClick={() => handleDetailsUsers()}>Detalhes</button>

      {data?.id ? (
        <div key={data?.id} className="dados">
          <h3>Nome Completo: {data?.name}</h3>
          <p>userName: {data?.username}</p>
          <p>E-mail: {data?.email}</p>
          <p>Telefone: {data?.phone}</p>
          <p>Site: {data?.website}</p>
          <h3>Endereço: </h3>
          <p>Rua: {data?.address.street}</p>
          <p>Suíte: {data?.address.suite}</p>
          <p>Cidade: {data?.address.city}</p>
          <p>CEP: {data?.address.zipcode}</p>
          <p>Latitude: {data?.address.geo.lat}</p>
          <p>Longitude: {data?.address.geo.lng}</p>
          <h3>Empresa: </h3>
          <p>Nome: {data?.company.name}</p>
          <p>catchPhrase: {data?.company.catchPhrase}</p>
          <p>bs: {data?.company.bs}</p>
        </div>
      ) : null}
    </div>
  );
};
