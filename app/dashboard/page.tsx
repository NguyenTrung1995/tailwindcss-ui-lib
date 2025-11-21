import { Suspense, use } from "react";

import { Countable } from "@app/_components/count";
import { Users } from "@app/_components/users";

import { ClientUsers } from "./components/client-users";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Dashboard</h1>
      <div className="flex">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <Users />
          </Suspense>
        </div>
        <div className="flex-1">
          <ClientUsers />
        </div>
      </div>
      <Countable />
    </div>
  );
};

export default Dashboard;
