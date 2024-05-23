import { useQuery } from "@apollo/client";
import React from "react";
import { getUsers } from "../graphql/queries/user.query";

function Users() {
  const { loading, data, error } = useQuery(getUsers);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  if (data) console.log(data);

  return (
    <div>
      {data && data.users && data.users.length > 0 ? (
        data.users.map((user) => {
          return (
            <div key={user._id}>
              <h1>{user.name}</h1>
              <h1>{user.userName}</h1>
              <h1>{user.gender}</h1>
            </div>
          );
        })
      ) : (
        <h1>There is no users yet!</h1>
      )}
    </div>
  );
}

export default Users;
