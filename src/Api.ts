export type addBusTypes = {
  fromLocation: string;
  toLocation: string;
  startDate: Date;
  endDate: Date;
  price: number;
  seatStatus: "Available" | "Booked";
  imageFile: string;
  busDetails: string;
};
export type registerUserTypes = {
  _id: string;
  email: string;
  password: string; 
  firstName: string;
  lastName: string;
  role:string;
  imageFile:string
};

import { loginUserTypes } from "./pages/Login";

// const Base_Url_API = import.meta.env.VITE_API_BSE_URL || "";
// const Base_Url_API = import.meta.env.PROD
//   ? '/.netlify/functions/api'
//   : '/api';

const Base_Url_API =
  "https://682a30ee1e1b00bd62d68cba--fascinating-hamster-38f55b.netlify.app/.netlify/functions/api";
// const Base_Url_API = import.meta.env.PROD
//   ? '/api'
//   : import.meta.env.FRONTEND_URL;

//   type loginUserTypes = {
//     email: string;
//     password: string;
//   };
// console.log(Base_Url_API)
const registerApi = async (formDatajson: registerUserTypes) => {
  const response = await fetch(`${Base_Url_API}/v1/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDatajson),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
};

// http://localhost:8000/api/login
const loginApi = async (formDatajson: loginUserTypes) => {
  const response = await fetch(
    "https://682a30ee1e1b00bd62d68cba--fascinating-hamster-38f55b.netlify.app/.netlify/functions/api/v2/login",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDatajson),
    }
  );
  const responseBody = await response.json();

  if (!response.ok) {
    console.log("login Api 30");
    throw new Error("login Error Api");
  }
  // console.log("response:", responseBody);
  return responseBody;
};
const AddBusApi = async (formDatajson: addBusTypes) => {
  try {
    const response = await fetch("/v2/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDatajson),
    });
    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
    return responseBody;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
};
const validateToken = async () => {
  const response = await fetch("https://682a30ee1e1b00bd62d68cba--fascinating-hamster-38f55b.netlify.app/.netlify/functions/api/v2/validate-token", {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("fetch error validate-token");
  }
  return await response.json();
};
const LogoutApi = async () => {
  const response = await fetch(`${Base_Url_API}/v2/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("logout api not fetch");
  }
  return response.json();
};

const AllUserFetching = async (): Promise<registerUserTypes> => {
  const response = await fetch(`${Base_Url_API}/v2/userInfo`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("JobApi not fetched");
  }

  const data = await response.json();
  return data || { user: null };
};
// const JobFetching = async (): Promise<AddJobTypes> => {
//   const response = await fetch(`${Base_Url_API}/jobs`, {
//     credentials: "include",
//   });

//   if (!response.ok) {
//     throw new Error("JobApi not fetched");
//   }

//   const data = await response.json();
//   return data || { user: null };
// };

// const updateMyProfileById = async (hotelFormData: FormData) => {
//   const response = await fetch(
//     `${Base_Url_API}/UpdateUser`,
//     {
//       method: "PUT",
//       body: hotelFormData,
//       credentials: "include",
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to update Hotel");
//   }

//   return response.json();
// };

export {
  registerApi,
  loginApi,
  validateToken,
  LogoutApi,
  AllUserFetching,
  AddBusApi,
  // JobFetching,
  // updateMyProfileById,
};
