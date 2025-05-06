import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
// class DisplayInfor extends React.Component {
//   state = {
//     toggle: true,
//   };
//   render() {
//     console.log("call me render");
//     const { listUsers } = this.props;

//     return (
//       <div className="display-infor-container">
//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               return (
//                 <div>
//                   <div>
//                     <div>My name is {user.name}</div>
//                     <div>My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUsers(user.id)}
//                     >
//                       x
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [toggle, setToggle] = useState(true);

  const handleShowHide = () => {
    setToggle(!toggle);
  };
  console.log("call me render");

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you delete all user");
    }
    console.log("call me useEffect");
  }, [listUsers]);
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHide()}>
          {toggle === true ? "Hide" : "Show"}
        </span>
      </div>
      {toggle && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div>
                <div>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUsers(user.id)}>
                    x
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
