"use client";
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type User = {
  _id: string;
  display_name: string;
  event_type: string;
  personaldetail: Personaldetail;
  is_approved: boolean;
  aboutplace: Aboutplace;
  ratings:string;
  capacity:Capacity;
};
type  Capacity= {
  city:         string;
  state:        string;
  pincode:      string;
  address:      string;
  location:     Location;
  flat_no?:     string;
  street_name?: string;
  area_name?:   string;
};
type Aboutplace= {
  banner:           string;
  place_price:      string;
  price_type:       string;
  max_day:          null;
  clearing_time:    string;
  person_capacity:  string;
  parking_capacity: string;
  details:          string;
}
 type Personaldetail ={
  professional_skill: string;
  full_name:          string;
  country_code:       string;
  mobile:             string;
  is_mobile_hidden:   boolean;
  alt_mobile_no:      string;
  alt_mobile_hidden:  string;
  email:              string;
  is_email_hidden:    boolean;
  banner:             string;
  price:              number | string;
  price_type:         string;
  max_day:            number | null | string;
  clearing_time:      number | string;
  flat_no:            string;
  street:             string;
  area:               string;
  city:               string;
  state:              string;
  pincode:            string;
}

const Star: FC<User> = ({ ratings }) => {
  const numberRating = Number(ratings);
  console.log("RRRRRR",ratings);
  
  // console.log("numberRating", numberRating);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {numberRating >= index + 1 ? (
          <i className="icon-fillStar text-sm"></i>
        ) : numberRating >= number ? (
          <i className="icon-half-star text-sm"></i>
        ) : (
          <i className="icon-star text-sm"></i>
        )}
      </span>
    );
  });
  return <div>{ratingStar}</div>;
};
const UserCard: FC<User> = ({ display_name, event_type, is_approved, personaldetail, aboutplace,ratings,capacity }) => {
  return (
    <div className="w-full flex items-center bg-quicksilver">
      <div className="flex space-x-5 max-[820px]:space-x-0 w-full p-4 max-[820px]:pr-2 pr-4 bg-white rounded max-[820px]:flex-col">
        <div className="max-w-xs h-[200px] w-full">
          <img
            className="object-cover w-full h-full"
            src={`https://eventopackage.s3.ap-south-1.amazonaws.com/${aboutplace &&
            aboutplace.banner &&
            aboutplace.banner != ""
            ? aboutplace.banner
            : 
              personaldetail &&
              personaldetail.banner &&
              personaldetail.banner !== ""
              ? personaldetail.banner
              : "https://eventopackage.s3.ap-south-1.amazonaws.com/6418341cd0ec049c88526168/event/IMG/IMG-7727792569309648.jpeg"}`}
            alt="images"
          />

        </div>
        <div className="w-full max-[820px]:mt-5">
          <div className="flex justify-between border-b-2 pb-4 max-[820px]:flex-col">
            <div className="capitalize">
              <span className="text-lg text-white bg-spiroDiscoBall px-3 py-1">
               Organiser Name :  {personaldetail.full_name}
              </span>
              <span className="text-sm text-white bg-verified px-3 py-1 ml-2 capitalize">
                {is_approved == true ? "Verified" : "Unverified"}
              </span>
              <h2 className="text-green-500 pt-5">Event Name : {display_name}</h2>
              <div className="text-sm text-quicksilver pt-3">
                <i className="icon-fill-location mr-3"></i>
                {capacity?.address ? (
                  capacity?.address
                ) : (
                  <>
                    {personaldetail?.city ?personaldetail.city : ""}, 
                    {personaldetail?.state ?personaldetail.state : ""}, 
                    {personaldetail?.pincode ? personaldetail.pincode : ""}
                  </>
                )}
              </div>
            </div>
            <div className="max-[820px]:flex max-[820px]:justify-between max-[820px]:flex-row-reverse max-[820px]:pt-3">
              <div className="flex items-center justify-end">
                {/* {console.log("check : ", data?.display_name, data?.is_live)} */}
                {is_approved == true ? (
                  <input
                    type="checkbox"
                    className="switch mr-3"
                    id="on"
                    checked={is_approved}
                  />
                ) : (
                  <input
                    type="checkbox"
                    className="switch mr-3 opacity-30 "
                    // defaultChecked={data?.is_live}
                    id="on"
                    disabled
                  />
                )}
                <label htmlFor="">
                  <h3>LIVE</h3>
                </label>
              </div>
              {/* <h1 className="pt-7">{parseFloat(data?.).toFixed(2)} INR</h1> */}
              <h1 className="pt-7 max-[820px]:pt-0">
                0 INR
              </h1>
            </div>
          </div>
          <div className="flex justify-between pt-4 max-[820px]:flex-col">
            <div className="flex items-center max-[820px]:flex-col max-[820px]:items-start">
              <div className="flex items-center space-x-1 max-[820px]:space-x-2">
                {/* <Star ratings={data?.ratings} /> */}
                <span className="text-quicksilver text-xs font-bold pl-2">
                  {/* <Star ratings={ratings}/> RATINGS */}
                </span>
              </div>
            </div>
            <div className="flex space-x-2 max-[820px]:space-x-3 max-[820px]:pt-3">
              <button className="bg-brightGray px-2 py-1 text-center rounded">
                <i
                  className="text-base edit text-black icon-edit"
                  style={{ color: "#000" }}
                ></i>
              </button>

              <button className="bg-brightGray px-2 py-1 text-center rounded">
                <i className="icon-fill-megaphone text-base text-black"></i>
              </button>


              <button className="bg-brightGray px-2 py-1 text-center rounded">
                <i className="icon-calendar1 text-base text-black"></i>
              </button>

              <button className="bg-brightGray px-2 py-1 text-center rounded">
                <i className="icon-percentage text-base text-black"></i>
              </button>

              <button

                className="bg-brightGray px-2 py-1 text-center rounded"
              >
                <i className="icon-share text-base text-black"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const UsersList: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://devapi.eventopackage.com/landing/events/list");
      if (response.data) {
        toast.success('🦄 Data Fetched!');
      }
      setUsers(response.data.Data);
      console.log("rr", response.data.Data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
    console.log("useEffect");
  }, []);


  return (
    <div>
      <div className='sticky top-0 z-50 border-red-300'>
      <Navbar />
      </div>
      <h2 className='flex justify-center text-lg text-orange-950 bg-spiroDiscoBall'>Organiser List</h2>
      {users.map(user => (
        <UserCard key={user._id} {...user} />
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default UsersList;
