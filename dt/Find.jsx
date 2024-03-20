// import React from 'react'

// function Find() {
//   return (
//     <div className="display-1">About Us </div>
    
//   )
// }

// export default Find

import React from 'react';

function Find() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <h1 className="display-4 text-primary mb-4">About Us</h1>
            <p className="lead">
              Welcome to our platform! We are dedicated to providing excellent services and solutions for
              our users. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu elit
              efficitur luctus. Sed vitae risus sit amet libero auctor ornare non a purus. In vel libero
              eu mauris sollicitudin facilisis.
            </p>
            <p className="lead">
              Our mission is to create a seamless experience for our users. Whether you are a user looking
              for services or a mechanic providing them, we aim to connect people and foster a community
              of trust and reliability.
            </p>
            <p className="lead">
              If you have any questions or need assistance, you can reach us at:
            </p>
            <ul>
              <li>Email: vnrvjiet@gmail.in</li>
              <li>Phone: (+91)9988xxxxxx  </li>
              <li>Address: Bachupally, Hyderabad, Telangana, 500090</li>
            </ul>
            <div className="mt-4">
              {/* Add your map integration code or use an iframe for simplicity */}
              <iframe
                title="Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789101112!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzQwLjQiTiA3NMKwMTInMzAuNCJX!5e0!3m2!1sen!2sus!4v1588968596763!5m2!1sen!2sus"
                width="100%"
                height="300"
                // frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
