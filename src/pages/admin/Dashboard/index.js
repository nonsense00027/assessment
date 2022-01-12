import React from "react";
import Sidebar from "../../../components/Sidebar";
import { useUserContext } from "../../../contexts/UserContext";
import ApplicationTable from "./ApplicationTable.";

function Dashboard() {
  const { users } = useUserContext();

  const getApplicants = () => {
    return users.filter((user) => user.pending);
  };
  return (
    <div>
      <Sidebar />
      <div className="pl-60 pt-20">
        <div className="px-10">
          <ApplicationTable data={getApplicants()} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
