import axios from "axios";

const API_BASE_URL = "https://api.jikan.moe/v4";

const SEARCH_BASE_URL = `/anime`;

export const getAnime = async () => {
   try {
      const {data: resp} = await axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}`);
      return {data: resp.data || [], success: true};
   } catch (error) {
      return {data: [], success: false};
   }
};
