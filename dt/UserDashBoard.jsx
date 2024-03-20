  // import React from 'react'
  // import { useLocation } from 'react-router-dom'

  // function UserDashBoard() {

  //   let {state}=useLocation();

  //   return (
  //     <div>
  //       <h1 className="display-1 text-center text-primary">Welcome {state.firstname} </h1>
  //       <p className="lead">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minus, autem in sunt quidem reprehenderit animi? Numquam voluptate debitis asperiores exercitationem obcaecati nihil, eaque, iure, accusantium perspiciatis quae ea aut? Similique reprehenderit sunt sint, ipsa molestiae unde? Quaerat asperiores minus deleniti facere vel impedit voluptatibus a nesciunt quidem veniam expedita necessitatibus reprehenderit laborum at cupiditate quisquam, architecto recusandae officiis vitae alias. Reiciendis nulla vero voluptates quasi voluptatum maxime cum tenetur sit corrupti maiores inventore voluptate accusamus aut facilis vitae exercitationem, quo voluptatem, voluptatibus magni! Accusantium ullam, molestias temporibus, autem similique ut, cum necessitatibus repellendus molestiae voluptates eveniet nisi consequatur officia? Quas fugiat debitis voluptatem qui deleniti distinctio ipsam culpa adipisci, eos voluptates nesciunt sequi eius optio laudantium ducimus natus quae explicabo, tempore quam. Deleniti recusandae voluptas illum quaerat obcaecati quia voluptatibus deserunt, laboriosam explicabo perferendis cumque nam est itaque possimus? Nostrum reprehenderit ea quam id accusamus quo harum consectetur nam repellat minima perspiciatis facilis tempore, quaerat quidem ducimus, voluptatum ipsam autem magni. Cumque velit sunt beatae consequuntur? Totam exercitationem vitae neque sed perspiciatis. Explicabo unde voluptatibus vero beatae ea molestias totam neque, tenetur saepe et earum eaque tempore quaerat cumque corporis ad sed quos sunt vel accusamus similique iste ducimus.
  //       </p>
  //     </div>
  //   )
  // }

  // export default UserDashBoard

import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDashBoard() {
  let { state } = useLocation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-3">
            <div className="text-center">
              <img
                src={'https://img.freepik.com/premium-photo/auto-mechanic-hd-8k-wallpaper-stock-photographic-image_974970-293.jpg'} // Replace with the actual path to the profile picture
                alt="Profile"
                className="rounded-circle mb-3"
                width="100"
                height="100"
              />
              <h1 className="display-4 text-primary">
                Welcome {state.firstname} 
                              </h1>
            </div>
            <div className="mt-4">
              <p className="lead">
                <strong>First Name:</strong> {state.firstname}
              </p>
              <p className="lead">
                <strong>Last Name:</strong> {state.lastname}
              </p>
              <p className="lead">
                <strong>Email:</strong> {state.email}
              </p>
              <p className="lead">
                <strong>Mobile:</strong> {state.mobile}
              </p>
              {/* Add more details as needed */}
              <p className="lead">
                <strong>Designation :</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashBoard;



// import React from 'react';

// function UserDashBoard(props) {
//   // Assuming user data is passed as props
//   const user = props.userData;

//   // Check if user data is available
//   if (!user) {
//     return <div>Loading...</div>; // Or some other handling for null data
//   }

//   // Now safely access user properties
//   const { firstname, lastname, email, userid, mobile } = user;

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <p>First Name: {firstname}</p>
//       <p>Last Name: {lastname}</p>
//       <p>Email: {email}</p>
//       <p>User ID: {userid}</p>
//       <p>Mobile: {mobile}</p>
//     </div>
//   );
// }

// export default UserDashBoard;
