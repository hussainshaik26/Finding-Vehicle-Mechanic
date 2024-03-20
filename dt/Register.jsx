// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { hashSync } from 'bcryptjs';

// function Register() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [userType, setUserType] = useState('');

//   const handleFormSubmit = (newUser) => {
//     const hashedPassword = hashSync(newUser.password, 5);
//     newUser.password = hashedPassword;

//     const apiPath = userType === 'mechanic' ? '/mechanic' : '/users';

//     fetch(`http://localhost:4000${apiPath}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newUser),
//     })
//       .then(response => {
//         if (response.status === 201)
//           navigate('/login');
//       })
//       .catch(error => {
//         console.error('Error during registration:', error);
//       });
//   };

//   return (
//     <div className='mt-5 w-75 mx-auto bg-light shadow-lg p-3 border card rounded-5 m-5'>
//       <h1 className="display-3 text-center text-primary">Register</h1>
//       <div className="text-center mb-4">
//         <button
//           className={`btn btn-md ${userType === 'user' ? 'btn-success' : 'btn-secondary'} me-2`}
//           onClick={() => setUserType('user')}
//         >
//           Register as User
//         </button>
//         <button
//           className={`btn btn-md ${userType === 'mechanic' ? 'btn-success' : 'btn-secondary'}`}
//           onClick={() => setUserType('mechanic')}
//         >
//           Register as Mechanic
//         </button>
//       </div>
//       <form className="form w-100 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className="row justify-content-center">
//           <div className="mb-3 col-md-6">
//             <label htmlFor="firstname" className="form-label">First Name:</label>
//             <input type="text" {...register('firstname', { required: true })} id="firstname" className='form-control' />
//             {errors.firstname?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*First Name Required</p>}
//           </div>
//           <div className="mb-3 col-md-6">
//             <label htmlFor="lastname" className="form-label">Last Name:</label>
//             <input type="text" {...register('lastname', { required: true })} id="lastname" className='form-control' />
//             {errors.lastname?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Last Name Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor="email" className="form-label">Email:</label>
//             <input type="email" {...register('email', { required: true })} id="email" className='form-control' />
//             {errors.email?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Email Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor="userid" className="form-label">User Id:</label>
//             <input type="text" {...register('userid', { required: true })} id="userid" className='form-control' />
//             {errors.userid?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*User Id Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <input type="password" {...register('password', { required: true })} id="password" className='form-control' />
//             {errors.password?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Password Required</p>}
//           </div>
//           <div className="mb-3 col-12">
//             <label htmlFor='mobile' className='form-label'>Mobile:</label>
//             <input type="number"{...register('mobile', { required: true })} id="mobile" className='form-control' />
//             {errors.mobile?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Mobile Required</p>}
//           </div>
//           <div className='text-center col-12'>
//             <button type="submit" className='btn btn-success btn-md mb-4 w-50 mt-4'>
//               Register
//             </button>
//             <p className="lead text-center">
//               Already have an account! <Link to='/login'>Login</Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Register;






import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { hashSync } from 'bcryptjs';

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userType, setUserType] = useState('user');

  const handleFormSubmit = (newUser) => {
    const hashedPassword = hashSync(newUser.password, 5);
    newUser.password = hashedPassword;

    const apiPath = userType === 'mechanic' ? 'mechanic' : 'users';

    fetch(`http://localhost:4000/${apiPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (response.status === 201) {
          navigate('/login');
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });

    userType === 'user' ? navigate(`/user-dashboard/${newUser.userid}`) : navigate(`/mechanic-dashboard/${newUser.userid}`);
  };

  return (
    <div className='mt-5 w-50 mx-auto bg-light shadow-lg p-3 border card rounded-5 m-5'>
      <h1 className="display-3 text-center text-primary">Register</h1>
      <div className="text-center mb-4">
        <button
          className={`btn btn-md ${userType === 'user' ? 'btn-success' : 'btn-secondary'} me-2`}
          onClick={() => setUserType('user')}
        >
          Register as User
        </button>
        <button
          className={`btn btn-md ${userType === 'mechanic' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => setUserType('mechanic')}
        >
          Register as Mechanic
        </button>
      </div>
      <form className="form w-100 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row d-flex justify-content-between p-5">
          <div className="mb-3 col-6">
            <label htmlFor="firstname" className="form-label">First Name : </label>
            <input type="text" {...register('firstname', { required: true })} id="firstname" className='form-control' autoComplete='off' />
            {errors.firstname?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*First Name Required</p>}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="lastname" className="form-label">Last Name : </label>
            <input type="text" {...register('lastname', { required: true })} id="lastname" className='form-control' autoComplete='off'/>
            {errors.lastname?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Last Name Required</p>}
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="email" {...register('email', { required: true })} id="email" className='form-control' autoComplete='off' />
            {errors.email?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Email Required</p>}
          </div>
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
          <div className='mb-3 col-12'>
            <label htmlFor='mobile' className='form-label'>Mobile : </label>
            <input type="number" {...register('mobile', { required: true })} id="mobile" className='form-control' autoComplete='off' />
            {errors.mobile?.type === 'required' && <p className='text-danger' style={{ fontSize: 11 }}>*Mobile Required</p>}
          </div>
          <div className='text-center'>
            <button type="submit" className='btn btn-success btn-md mb-4 w-100 mt-4'>
              Register
            </button>
            <p className="lead text-center">
              Already have an account! <Link to='/login'>Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
