import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;


export const  fetcFrontendData = async () => {
   
  try {
    const response = await axios.get(`${API_URL}/api/settings/fetch-frontend-details`);
    // console.log("therapylist", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching therapies:", error);
    throw error;
  }

};

export const fetchBlogs = async () =>{

  try {
    const response = await axios.get(`${API_URL}/api/blog`);
    // console.log("therapylist", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching therapies:", error);
    throw error;
  }

}
