

// import React, { useState } from "react";
// import room1 from '../assets/room-1.jpg';
// import room2 from '../assets/room-2.jpg';
// import room3 from '../assets/room-3.jpg';
// import room4 from '../assets/room-4.jpg';
// import room5 from '../assets/room-5.jpg';
// import room6 from '../assets/room-6.jpg';
// import Carousel from './Carousel'; // Ensure this path is correct

// export const roomItems = [
//   {
//     img: room1,
//     price: "$200/night",
//     name: "Nairobi Serena Hotel",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Nairobi Serena Hotel offers luxury accommodations in the heart of Nairobi. Enjoy elegantly furnished rooms, top-notch amenities, and beautiful views of the Nairobi skyline.",
//     location: "Kenyatta Avenue, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: room2,
//     price: "$180/night",
//     name: "Fairmont The Norfolk",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Fairmont The Norfolk is a historic hotel in Nairobi that combines old-world charm with modern luxury. Located near the city center, it offers elegant rooms and a beautiful garden.",
//     location: "Harry Thuku Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: room3,
//     price: "$220/night",
//     name: "Tribe Hotel",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "The Tribe Hotel offers a luxurious stay with top-of-the-line amenities and world-class service. Located in the vibrant Westlands area, this hotel features spacious rooms and gourmet restaurants.",
//     location: "Limuru Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: room4,
//     price: "$160/night",
//     name: "Ole Sereni Hotel",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Ole Sereni Hotel offers a unique blend of luxury and comfort with a touch of nature. Overlooking Nairobi National Park, guests can enjoy stunning views of wildlife from their rooms.",
//     location: "Mombasa Road, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: room5,
//     price: "$190/night",
//     name: "Radisson Blu Hotel",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Radisson Blu Hotel Nairobi Upper Hill offers modern accommodations with exceptional service. Located in the business district, it provides easy access to key attractions and business centers.",
//     location: "Elgon Road, Upper Hill, Nairobi",
//     yellowbtn: "View Detail",
//   },
//   {
//     img: room6,
//     price: "$250/night",
//     name: "Giraffe Manor",
//     star: [
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//       <small className="fa fa-star text-primary"></small>,
//     ],
//     description:
//       "Giraffe Manor offers a once-in-a-lifetime experience where guests can interact with resident giraffes. Located in the Langata suburb, this boutique hotel features elegant rooms and beautiful gardens.",
//     location: "Langata, Nairobi",
//     yellowbtn: "View Detail",
//   },
// ];

// export const facility = [
//   {
//     icon: <i className="fa fa-bed text-primary me-2"></i>,
//     quantity: 3,
//     facility: "Beds",
//   },
//   {
//     icon: <i className="fa fa-bath text-primary me-2"></i>,
//     quantity: 2,
//     facility: "Baths",
//   },
//   {
//     icon: <i className="fa fa-wifi text-primary me-2"></i>,
//     facility: "Wifi",
//   },
// ];

// export default function Rooms() {
//   const [activeHotel, setActiveHotel] = useState(null);

//   const handleViewDetail = (index) => {
//     setActiveHotel(activeHotel === index ? null : index);
//   };

//   return (
//     <>
//       <Carousel />

//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-4">
//             {roomItems.map((item, key) => (
//               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
//                 <div className="room-item shadow rounded overflow-hidden">
//                   <div className="position-relative">
//                     <img className="img-fluid" src={item.img} alt={item.name} />
//                     <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
//                       {item.price}
//                     </small>
//                   </div>
//                   <div className="p-4 mt-2">
//                     <div className="d-flex justify-content-between mb-3">
//                       <h5 className="mb-0">{item.name}</h5>
//                       <div className="ps-2">{item.star}</div>
//                     </div>
//                     <div className="d-flex mb-3">
//                       {facility.map((fac, index) => (
//                         <small className="border-end me-3 pe-3" key={index}>
//                           {fac.icon}
//                           {fac.quantity} {fac.facility}
//                         </small>
//                       ))}
//                     </div>
//                     <p className="text-body mb-3">{item.description}</p>
//                     {activeHotel === key && (
//                       <div className="mt-3">
//                         <p><strong>Location:</strong> {item.location}</p>
//                       </div>
//                     )}
//                     <div className="d-flex justify-content-between">
//                       <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => handleViewDetail(key)}>
//                         {item.yellowbtn}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Carousel from './Carousel';

// // Create an instance of axios with the base URL for the API
// const client = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api/',
//   // Disable the withCredentials option to avoid sending cookies
//   withCredentials: false,
// });

// export default function Hotels() {
//   const [hotels, setHotels] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch the hotels data from the API
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await client.get('/hotels/');
//         setHotels(response.data);
//       } catch (error) {
//         if (error.response) {
//           // Handle HTTP errors
//           setError(error.response.data.detail || 'An error occurred while fetching hotels.');
//         } else {
//           // Handle network errors
//           setError('Network error. Please try again.');
//         }
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <>

// <Carousel />

//     <div className="container-xxl py-5">
//       <div className="container">
//         <h1 className="mb-4">Hotel List</h1>
//         {error && <div className="alert alert-danger"> </div>}
//         <div className="row g-4">
//           {hotels.map((hotel) => (
//             <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={hotel.id}>
//               <div className="room-item shadow rounded overflow-hidden">
//                 <div className="p-4 mt-2">
//                   <h5 className="mb-0">{hotel.name}</h5>
//                   <p className="text-body mb-3">{hotel.description}</p>
//                   <p><strong>Location:</strong> {hotel.location}</p>
//                   <p><strong>Price:</strong> ${hotel.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';

// Sample static images and facilities
const staticImages = [
  'src/assets/room-1.jpg',
  'src/assets/room-2.jpg',
  'src/assets/room-3.jpg',
  'src/assets/room-4.jpg',
  'src/assets/room-5.jpg',
  'src/assets/room-6.jpg',
  'src/assets/room-1.jpg',
  'src/assets/room-2.jpg',
  'src/assets/room-3.jpg',
];

const facilities = [
  { icon: "fa-bed", quantity: 3, facility: "Beds" },
  { icon: "fa-bath", quantity: 2, facility: "Baths" },
  { icon: "fa-wifi", facility: "Wifi" },
  // Add more facilities as needed
];

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the hotels data from the API
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/hotels/');
        setHotels(response.data);
      } catch (error) {
        if (error.response) {
          // Handle HTTP errors
          setError(error.response.data.detail || 'An error occurred while fetching hotels.');
        } else {
          // Handle network errors
          setError('Network error. Please try again.');
        }
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <Carousel />

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="mb-4">Hotel List</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row g-4">
            {hotels.map((hotel, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={hotel.id}>
                <div className="room-item shadow rounded overflow-hidden">
                  {/* Hotel Image */}
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={staticImages[index % staticImages.length]} // Use static images in a loop
                      alt={hotel.name}
                    />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {hotel.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <h5 className="mb-0">{hotel.name}</h5>
                    <p className="text-body mb-3">{hotel.description}</p>
                    <p><strong>Location:</strong> {hotel.location}</p>
                    {/* Facility Icons */}
                    <div className="d-flex mb-3">
                      {facilities.map((fac, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          <i className={`fa ${fac.icon} text-primary me-2`}></i>
                          {fac.quantity ? `${fac.quantity} ${fac.facility}` : fac.facility}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
