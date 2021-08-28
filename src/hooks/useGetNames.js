import { useState, useCallback } from "react";

import useGetID from "./useGetID";

const useGetNames = () => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const getID = useGetID();

  const handleGetNames = useCallback(
    async (d) => {
      if (d) {
        if (Array.isArray(d)) {
          if (d.length >= 1) {
            setDataLoading(true);
            const dataNames = [];
            for (var i = 0; i < d.length; i++) {
              const response = await fetch(d[i]);
              const data = await response.json();
              dataNames.push({
                id: getID(d[i]),
                name: data.name || data.title,
              });
            }
            setData(dataNames);
            setDataLoading(false);
          } else {
            setData([]);
            setDataLoading(false);
          }
        } else {
          setDataLoading(true);
          const dataNames = [];
          const response = await fetch(d);
          const data = await response.json();
          dataNames.push({
            id: getID(d),
            name: data.name,
          });
          setData(dataNames);
          setDataLoading(false);
        }
      } else {
        setData([]);
        setDataLoading(false);
      }
    },
    [getID]
  );

  return [{ data, dataLoading }, handleGetNames];
};

export default useGetNames;
