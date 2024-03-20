import React from 'react';

function MechanicDashBoard() {
  // Generate random data for 30 cards
  const generateRandomData = () => {
    const names = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
    const designations = ['Senior Mechanic','Tire mechanics', 'Junior Mechanic', 'Lead Mechanic', 'Technician', 'Brake and transmission technicians','Parts technicians', 'Diesel Mechanic'];
    const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

    const cards = [];
    for (let i = 1; i <= 300; i++) {
      const randomName = getRandomElement(names);
      const randomDesignation = getRandomElement(designations);
      const randomMobile = Math.floor(1000000000 + Math.random() * 9000000000); // Generate a 10-digit random mobile number

      // Assuming you have images in a folder named 'images'
      const randomImage = require(`../images/profile.jpeg`).default;

      cards.push(
        <div key={i} className="card m-2 p-3" style={{ width: '18rem', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="d-flex justify-content-between">
            <div className="card-body">
              <h5 className="card-title">{randomName}</h5>
              <p className="card-text">{randomDesignation}</p>
              <p className="card-text">Mobile: {randomMobile}</p>
            </div>
            <img src={'https://media.istockphoto.com/id/174809695/photo/hes-got-serious-mechanical-know-how.jpg?s=612x612&w=0&k=20&c=1iybSL4SCNC8eD031d4C1B7xg6O_8up2zGLuV1Kv2Q4='} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          </div>
        </div>
      );
    }

    return cards;
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      <h1 className="text-center my-4">Mechanic Dashboard</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {generateRandomData()}
      </div>
    </div>
  );
}

export default MechanicDashBoard;

// import React, { useEffect, useState } from 'react';

// function MechanicDashBoard() {
//   const [mechanics, setMechanics] = useState([]);

//   useEffect(() => {
//     // Fetch registered mechanics' details from your API endpoint
//     fetch('http://your-api-endpoint/mechanics')
//       .then(response => response.json())
//       .then(data => setMechanics(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container-fluid" style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
//       <h1 className="text-center my-4">Mechanic Dashboard</h1>
//       <div className="d-flex flex-wrap justify-content-center">
//         {mechanics.map((mechanic, index) => (
//           <div key={index} className="card m-2 p-3" style={{ width: '18rem', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <div className="d-flex justify-content-between">
//               <div className="card-body">
//                 <h5 className="card-title">{mechanic.name}</h5>
//                 <p className="card-text">{mechanic.designation}</p>
//                 <p className="card-text">Mobile: {mechanic.mobile}</p>
//               </div>
//               <img src={mechanic.image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MechanicDashBoard;
