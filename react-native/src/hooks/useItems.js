import { useEffect, useState } from "react";
import axios from "axios";

const useItems = async () => {

  try {
    const response = await axios.get(`http://192.168.18.50:3001/api/items`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export default useItems