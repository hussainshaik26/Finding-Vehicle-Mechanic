// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { compareSync } from 'bcryptjs';

// function Login() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [selectedType, setSelectedType] = useState('user');

//   const handleFormSubmit = (userCredentialObj) => {
//     const apiPath = selectedType === 'user' ? 'users' : 'mechanic';

//     fetch(`http://localhost:4000/${apiPath}?userid=${userCredentialObj.userid}`)
//       .then(res => res.json())
//       .then(userObj => {
//         if (userObj.length === 0) {
//           alert("Invalid User Id");
//         } else {
//           if (compareSync(userCredentialObj.password, userObj[0].password)) {
//             const userType = userObj[0].userType.toLowerCase(); // Ensure lowercase for comparison

//             if (userType === 'user' && selectedType === 'user') {
//               navigate(`/user-dashboard/${userCredentialObj[0].userid}`, { state: userObj[0] });
//             } else if (userType === 'mechanic' && selectedType === 'mechanic') {
//               navigate(`/mechanic-dashboard/${userCredentialObj[0].userid}`, { state: userObj[0] });
//             } else {
//               alert('Invalid user type');
//             }
//           } else {
//             alert('Invalid password');
//           }
//         }
//       })
//       .catch(error => {
//         console.error('Error during login:', error);
//       });
//   };

//   return (
//     <div className='mt-5 w-50 mx-auto bg-light shadow-lg p-3 border card rounded-5 m-5'>
//       <h1 className="display-3 text-center text-primary">Login</h1>
//       <div className="text-center mb-4">
//         <button
//           className={`btn btn-md ${selectedType === 'user' ? 'btn-success' : 'btn-secondary'} me-2`}
//           onClick={() => setSelectedType('user')}
//         >
//           As User
//         </button>
//         <button
//           className={`btn btn-md ${selectedType === 'mechanic' ? 'btn-success' : 'btn-secondary'}`}
//           onClick={() => setSelectedType('mechanic')}
//         >
//           As Mechanic
//         </button>
//       </div>
//       <form className="form w-75 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className="row d-flex justify-content-between p-5">
//           <div className="mb-3 col-12">
//             <label htmlFor="userid" className="form-label">User Id : </label>
//             <input type="text" {...register('userid', { required: true })} id="userid" className='form-control' />
//             {errors.userid?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*User Id Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor="password" className="form-label">Password : </label>
//             <input type="password" {...register('password', { required: true })} id="password" className='form-control' />
//             {errors.password?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Password Required</p>}
//           </div>
//           <div className='text-center'>
//             <button type="submit" className='btn btn-success btn-md mb-4 w-100 mt-4'> Login </button>
//             <p className="lead text-center">Don't have an account?
//               <Link to='/register'>Register</Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { compareSync } from 'bcryptjs';

// function Login() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [selectedType, setSelectedType] = useState('user');

//   const handleFormSubmit = (userCredentialObj) => {
//     const apiPath = selectedType === 'user' ? 'users' : 'mechanic';

//     fetch(`http://localhost:4000/${apiPath}?userid=${userCredentialObj.userid}`)
//       .then(res => res.json())
//       .then(userObj => {
//         if (userObj.length === 0 || !compareSync(userCredentialObj.password, userObj[0].password)) {
//           // Display an error message for invalid user or password
//           console.error('Invalid User Id or Password');
//         } else {
//           // Navigate to the respective dashboard based on user type
//           const userType = apiPath==="users"?'user':'mechanic'
//           if (userType === selectedType) {
//             navigate(`/${userType}-dashboard/${userCredentialObj  .userid}`, { state: userObj[0] });
//           } else {
//             console.error('Invalid user type');
//           }
//         }
//       })
//       .catch(error => {
//         console.error('Error during login:', error);
//       });
//   };

//   return (
//     <div className='mt-5 w-50 mx-auto bg-light shadow-lg p-3 border card rounded-5 m-5'>
//       <h1 className="display-3 text-center text-primary">Login</h1>
//       <div className="text-center mb-4">
//         <button
//           className={`btn btn-md ${selectedType === 'user' ? 'btn-success' : 'btn-secondary'} me-2`}
//           onClick={() => setSelectedType('user')}
//         >
//           As User
//         </button>
//         <button
//           className={`btn btn-md ${selectedType === 'mechanic' ? 'btn-success' : 'btn-secondary'}`}
//           onClick={() => setSelectedType('mechanic')}
//         >
//           As Mechanic
//         </button>
//       </div>
//       <form className="form w-75 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className="row d-flex justify-content-between p-5">
//           <div className="mb-3 col-12">
//             <label htmlFor="userid" className="form-label">User Id : </label>
//             <input type="text" {...register('userid', { required: true })} id="userid" className='form-control'autoComplete='off' />
//             {errors.userid?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*User Id Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor="password" className="form-label">Password : </label>
//             <input type="password" {...register('password', { required: true })} id="password" className='form-control' autoComplete='off'/>
//             {errors.password?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Password Required</p>}
//           </div>
//           <div className='text-center'>
//             <button type="submit" className='btn btn-success btn-md mb-4 w-100 mt-4'> Login </button>
//             <p className="lead text-center">Don't have an account?
//               <Link to='/register'>Register</Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { compareSync } from 'bcryptjs';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedType, setSelectedType] = useState('user');

  const handleFormSubmit = (userCredentialObj) => {
    const apiPath = selectedType === 'user' ? 'users' : 'mechanic';

    fetch(`http://localhost:4000/${apiPath}?userid=${userCredentialObj.userid}`)
      .then(res => res.json())
      .then(userObj => {
        if (userObj.length === 0 || !compareSync(userCredentialObj.password, userObj[0].password)) {
          // Display an error message for invalid user or password
          console.error('Invalid User Id or Password');
        } else {
          // Navigate to the respective dashboard based on user type
          const userType = apiPath === "users" ? 'user' : 'mechanic';
          if (userType === selectedType) {
            navigate(`/${userType}-dashboard/${userCredentialObj.userid}`, { state: userObj[0] });
          } else {
            console.error('Invalid user type');
          }
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className='mt-5 w-50 mx-auto bg-light shadow-lg p-3 border card rounded-5 m-5'>
      <h1 className="display-3 text-center text-primary">Login</h1>
      <div className="text-center mb-4">
        <button
          className={`btn btn-md ${selectedType === 'user' ? 'btn-success' : 'btn-secondary'} me-2`}
          onClick={() => setSelectedType('user')}
        >
          As User
        </button>
        <button
          className={`btn btn-md ${selectedType === 'mechanic' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => setSelectedType('mechanic')}
        >
          As Mechanic
        </button>
      </div>
      <form className="form w-75 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row d-flex justify-content-between p-5">
          <div className="mb-3 col-12">
            <label htmlFor="userid" className="form-label">User Id : </label>
            <input type="text" {...register('userid', { required: true })} id="userid" className='form-control' autoComplete='off' />
            {errors.userid?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*User Id Required</p>}
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="password" className="form-label">Password : </label>
            <input type="password" {...register('password', { required: true })} id="password" className='form-control' autoComplete='off' />
            {errors.password?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Password Required</p>}
          </div>
          <div className='text-center'>
            <button type="submit" className='btn btn-success btn-md mb-4 w-100 mt-4'> Login </button>
            <p className="lead text-center">Don't have an account?
              <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
