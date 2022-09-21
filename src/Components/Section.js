import React, { useState } from "react";
import House from "./House";
import "./Section.css";
import pic from "./assets/one.jpg";
import pic2 from "./assets/two.jpg";
import pic3 from "./assets/three.jpg";

const DUMMY_DATA = [
  {
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    location: "Florida",
    bed: "2",
    bathroom: "2",
    sqfeet: "5x7.2m",
    id: "q1",
    pics: pic,
  },
  {
    price: "2700",
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    location: "Texas",
    bed: "3",
    bathroom: "2",
    sqfeet: "6x7.5m",
    id: "q2",
    pics: pic2,
  },
  {
    price: "4500",
    name: "Faulkner Ave",
    address: "909 Woodland St, Michigan, TX",
    location: "Texas",
    bed: "5",
    bathroom: "3",
    sqfeet: "8x10m",
    id: "q3",
    pics: pic3,
  },
  {
    price: "10500",
    name: "Pent house",
    address: "42 St, Long Island, FL",
    location: "Florida",
    bed: "5",
    bathroom: "4",
    sqfeet: "8x12m",
    id: "q4",
    pics: pic2,
  },
  {
    price: "3500",
    name: "Covington Ave",
    address: "4279 Lincoln Valley, Mary Lake, CL",
    location: "Cleveland",
    bed: "3",
    bathroom: "2",
    sqfeet: "6x7m",
    id: "q5",
    pics: pic,
  },
  {
    price: "6450",
    name: "Springfield",
    address: "388 S Lake, Pasadena, CA",
    location: "California",
    bed: "3",
    bathroom: "3",
    sqfeet: "6x7.2m",
    id: "q6",
    pics: pic3,
  },
];

const Section = () => {
  const [searchProperty, setSearchProperty] = useState("");
  const [data, setData] = useState(DUMMY_DATA);
  const [locate, setLocate] = useState("");
  const [rent, setRent] = useState("");
  const [bed, setBed] = useState("");
  const [loading, setLoading] = useState(false);

  const searchHandler = (event) => {
    setSearchProperty(event.target.value);
  };

  const submitHandler = () => {
    console.log("i am submit btnm");
    setLoading(true);
    let myData = DUMMY_DATA;
    // let myData = [...data];
    // filter for location
    if (locate == "All") {
      setData(DUMMY_DATA);
    } else if (locate) {
      myData = myData.filter((item) => {
        return item.location === locate;
      });
    }
    // filter for rent
    if (rent == "All") {
      setData(DUMMY_DATA);
    } else if (rent) {
      if (rent === "2000") {
        myData = myData.filter((item) => {
          return item.price < 2000;
        });
      }
      if (rent === "6000") {
        myData = myData.filter((item) => {
          return item.price > 2000 && item.price < 6000;
        });
      }
      if (rent === "12000") {
        myData = myData.filter((item) => {
          return item.price > 6000 && item.price < 12000;
        });
      }
    }

    // filter for rooms

    if (bed == "All") {
      setData(DUMMY_DATA);
    } else if (bed) {
      myData = myData.filter((item) => {
        return item.bed === bed;
      });
    }
    setData(myData);
    setLoading(false);
  };

  let content;

  if (loading) {
    content = <h1>Loading...</h1>;
  } else {
    content = data
      .filter((ele) => {
        return (
          ele.name.toLowerCase().includes(searchProperty.toLowerCase()) ||
          ele.price.toLowerCase().includes(searchProperty.toLowerCase()) ||
          ele.address.toLowerCase().includes(searchProperty.toLowerCase()) ||
          ele.bed.toLowerCase().includes(searchProperty.toLowerCase()) ||
          ele.sqfeet.toLowerCase().includes(searchProperty.toLowerCase())
        );
      })
      .map((item) => {
        return (
          <House
            key={item.id}
            pics={item.pics}
            price={item.price}
            name={item.name}
            address={item.address}
            bed={item.bed}
            bath={item.bathroom}
            size={item.sqfeet}
          />
        );
      });
  }

  return (
    <>
      <section>
        <div className="first">
          <div className="heading">
            <h1>Search properties to rent</h1>
          </div>
          <div className="searchbar">
            <input
              type="text"
              onChange={searchHandler}
              placeholder="Search with SearchBar"
              value={searchProperty}
            />
            <i
              // onClick={hitSearchHandler}
              className="fa-solid fa-circle-arrow-down"
            ></i>
          </div>
        </div>
        <div className="second">
          <div className="location">
            <p>Location</p>
            <select
              onChange={(e) => {
                setLocate(e.target.value);
              }}
              className="myoption"
            >
              <option value="All">All</option>
              <option value="California">California</option>
              <option value="Cleveland">Cleveland</option>
              <option value="Florida">Florida</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
          <span className="bar"></span>
          {/* <div className="when">
            <p>When</p>

            <p>
              Select Move-in Date
              <span>
                <i className="fa-solid fa-circle-arrow-down"></i>
              </span>
            </p>
          </div> */}
          <span className="bar"></span>
          <div className="price">
            <p>Price</p>
            <select
              onChange={(e) => {
                setRent(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="2000">$0-$2000</option>
              <option value="6000">$2000-$6000</option>
              <option value="12000">$6000-$12000</option>
            </select>
          </div>
          <span className="bar"></span>
          <div className="property">
            <p>Property Type</p>
            <select
              onChange={(e) => {
                setBed(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="2">2 Bhk</option>
              <option value="3">3 Bhk</option>
              <option value="5">5 Bhk</option>
            </select>
          </div>
          <span className="bar"></span>
          <div className="searchbtn">
            <button onClick={submitHandler}>Search</button>
          </div>
        </div>
      </section>
      <main className="main">
        {content.length > 0 ? content : <h1>No Property Found</h1>}
      </main>
    </>
  );
};

export default Section;

// const submitHandler = () => {
//   console.log("i am submit btnm");
//   let myData = DUMMY_DATA;
//   // let myData = [...data];
//   // filter for location
//   if(locate == "All"){
//     setData(DUMMY_DATA);
//   }else if(locate){
//     myData = myData.filter((item) => {
//       return item.location === locate;
//     });
//   }
//   // filter for rent
//   if (rent) {
//     if(rent == "All"){
//       setData(DUMMY_DATA);
//     }else if (rent === "2000") {
//       myData = myData.filter((item) => {
//         return item.price < 2000;
//       });
//     } else if (rent === "6000") {
//       myData = myData.filter((item) => {
//         return item.price > 2000 && item.price < 6000;
//       });
//     } else if (rent === "12000") {
//       myData = myData.filter((item) => {
//         return item.price > 6000 && item.price < 12000;
//       });
//     }
//   }
//   setData(myData);
// };
