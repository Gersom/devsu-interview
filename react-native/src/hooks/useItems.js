import { useEffect, useState } from "react";
import axios from "axios";

const useItems = () => {
  const [items, setItems] = useState(null)

  const getItems = async () => {
    try {
      const response = await axios.get(`http://192.168.18.50:3001/api/items`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getItems()
  }, []);

  return items
}

export default useItems