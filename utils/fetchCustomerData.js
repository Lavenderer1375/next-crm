import { useEffect, useState } from "react";

const useFetchCustomerData = (customerId, isReady) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/customer/${customerId}`);
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error("Fetch Error", error.message);
      }
    };

    if (isReady) {
      fetchData();
    }
  }, [isReady, customerId]);

  return data;
};

export default useFetchCustomerData;
