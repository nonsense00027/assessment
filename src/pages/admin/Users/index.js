import React from "react";
import Sidebar from "../../../components/Sidebar";
import { useUserContext } from "../../../contexts/UserContext";
import UserTable from "./UserTable";

function Users() {
  const { users } = useUserContext();

  const getApplicants = () => {
    return users.filter((user) => user.accepted);
  };
  return (
    <div>
      <Sidebar />
      <div className="pl-60 pt-20">
        <div className="px-10">
          <UserTable data={getApplicants()} />
        </div>
      </div>
    </div>
  );
}

export default Users;
