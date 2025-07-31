import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1.0.0/latest/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
