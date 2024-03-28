import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";

async function getData() {
  try {
    const gettingData = await axios({
      method: "get",
      url: `${API_BASE_URL}/register`,
    });
    console.log(gettingData.data);
    return gettingData.data;
  } catch (err) {
    return Promise.reject(err);
  }
}

async function fetchData(data) {
  try {
    const fetchingData = await axios({
      method: "post",
      url: `${API_BASE_URL}/register`,
      data: data,
    });

    console.log(fetchingData);
    return fetchingData.data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export { fetchData, getData };
