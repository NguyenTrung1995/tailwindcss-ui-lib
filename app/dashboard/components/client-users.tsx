"use client";

import { useFetch } from "@app/hooks/use-fetch";

type User = {
  id: number;
  name: string;
};

const ClientUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch<User[]>("http://localhost:8080/api/users");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {users?.map((user) => (
        <h3 key={user.id}>
          {user.id} - {user.name}
        </h3>
      ))}
    </div>
  );
};

export { ClientUsers };
