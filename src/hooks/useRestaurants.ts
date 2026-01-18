import { useEffect, useState } from "react";
import type { Restaurant } from "../types/restaurant";

const URL = "./data_melp.json";

export const useRestaurants = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json: Restaurant[]) => setData(json))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
