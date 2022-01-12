import React from "react";

import { Table, Tag, Space, Button } from "antd";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../../shared/firebase";

function ApplicationTable({ data }) {
  const updateUser = (id, category) => {
    console.log("id: ", id);
    console.log("category: ", category);

    const docRef = doc(db, "users", id);
    updateDoc(docRef, {
      pending: false,
      accepted: category,
    }).then(() => {
      alert("User has been updated");
    });
  };
  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Contact no.",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => updateUser(record.id, true)}>
            Accept
          </Button>
          <Button danger onClick={() => updateUser(record.id, false)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default ApplicationTable;
