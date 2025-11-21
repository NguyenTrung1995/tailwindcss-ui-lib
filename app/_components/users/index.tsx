import { use } from "react";

import { delay } from "@app/lib/utils";

type User = {
  id: number;
  name: string;
};

const getUsers = async (): Promise<User[]> => {
  try {
    const users = await fetch("http://localhost:8080/api/users").then((res) =>
      res.json(),
    );
    await delay(2000);

    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Users = () => {
  const users = use(getUsers());

  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <h3 key={user.id}>
          {user.id} - {user.name}
        </h3>
      ))}
    </div>
  );
};

export { Users, getUsers };
