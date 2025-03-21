// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://fooddelivery-mern.onrender.com/api/",
// });

// //auth
// export const UserSignUp = async (data) => await API.post("/user/signup", data);
// export const UserSignIn = async (data) => await API.post("/user/signin", data);

// //products
// export const getAllProducts = async (filter) =>
//   await API.get(`/food?${filter}`, filter);

// export const getProductDetails = async (id) => await API.get(`/food/${id}`);

// //Cart
// export const getCart = async (token) =>
//   await API.get(`/user/cart`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const addToCart = async (token, data) =>
//   await API.post(`/user/cart/`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const deleteFromCart = async (token, data) =>
//   await API.patch(`/user/cart/`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// //favorites

// export const getFavourite = async (token) =>
//   await API.get(`/user/favorite`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const addToFavourite = async (token, data) =>
//   await API.post(`/user/favorite/`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const deleteFromFavourite = async (token, data) =>
//   await API.patch(`/user/favorite/`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// //Orders
// export const placeOrder = async (token, data) =>
//   await API.post(`/user/order/`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const getOrders = async (token) =>
//   await API.get(`/user/order/`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

import axios from "axios";

const API = axios.create({
  baseURL: "https://fooddelivery-mern.onrender.com/api/",
});

// Helper function to handle errors
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error("Response error:", error.response.data);
    return error.response.data;
  } else if (error.request) {
    // Request was made but no response was received
    console.error("Request error:", error.request);
    return { message: "Network error, please try again." };
  } else {
    // Something else happened
    console.error("Unexpected error:", error.message);
    return { message: "An unexpected error occurred." };
  }
};

// Auth
export const UserSignUp = async (data) => {
  try {
    return await API.post("/user/signup", data);
  } catch (error) {
    return handleError(error);
  }
};

export const UserSignIn = async (data) => {
  try {
    return await API.post("/user/signin", data);
  } catch (error) {
    return handleError(error);
  }
};

// Products
export const getAllProducts = async (filter) => {
  try {
    return await API.get(`/food?${filter}`, filter);
  } catch (error) {
    return handleError(error);
  }
};

export const getProductDetails = async (id) => {
  try {
    return await API.get(`/food/${id}`);
  } catch (error) {
    return handleError(error);
  }
};

// Cart
export const getCart = async (token) => {
  try {
    return await API.get("/user/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

export const addToCart = async (token, data) => {
  try {
    return await API.post("/user/cart/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

export const deleteFromCart = async (token, data) => {
  try {
    return await API.patch("/user/cart/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

// Favorites
export const getFavourite = async (token) => {
  try {
    return await API.get("/user/favorite", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

export const addToFavourite = async (token, data) => {
  try {
    return await API.post("/user/favorite/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

export const deleteFromFavourite = async (token, data) => {
  try {
    return await API.patch("/user/favorite/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

// Orders
export const placeOrder = async (token, data) => {
  try {
    return await API.post("/user/order/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};

export const getOrders = async (token) => {
  try {
    return await API.get("/user/order/", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return handleError(error);
  }
};
