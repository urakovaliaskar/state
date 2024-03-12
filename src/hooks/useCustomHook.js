import { useEffect, useState } from "react"

export const useCustomHook = () => {
  const [day, setDay] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDay(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return day;
}