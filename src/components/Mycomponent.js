import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "victor", age: 15 },
    { id: 2, name: "john", age: 23 },
    { id: 3, name: "alex", age: 22 },
  ]);

  const handleAddUsers = (userObject) => {
    console.log(userObject);
    setListUsers([userObject, ...listUsers]);
  };
  const handleDeleteUsers = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <div>
      <AddUserInfor handleAddUsers={handleAddUsers} />
      <DisplayInfor
        listUsers={listUsers}
        handleDeleteUsers={handleDeleteUsers}
      />
    </div>
  );
};
export default MyComponent;
