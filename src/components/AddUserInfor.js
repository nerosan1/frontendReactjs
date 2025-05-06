import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("eric");
  const [address, setAddress] = useState("hoidanit");
  const [age, setAge] = useState("29");

  const handleClick = (e) => {
    console.log("my name is ", name);
    setName("victor");
  };
  const handleOnMouseOver = (e) => {
    console.log(e.target);
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleAddUsers({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      my name is {name}. {age} age
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>your name:</label>
        <input
          onChange={(e) => {
            handleOnChange(e);
          }}
          type="text"
          value={name}
        />

        <label>your age:</label>
        <input
          onChange={(e) => {
            handleOnChangeAge(e);
          }}
          type="text"
          value={age}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
