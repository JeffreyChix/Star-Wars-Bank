import { useState, useEffect, useCallback } from "react";

const useFetchStarWars = (props, resource) => {
  const [loading, setLoading] = useState(false);
  const [resourceData, setResourceData] = useState([]);
  const [resourceCount, setResourceCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchAPI = useCallback(async () => {
    setLoading(true);
    const page = props.history.location.search
      ? props.history.location.search
      : `?page=1`;
    const URL = `https://swapi.dev/api/${resource}/${page}`;

    try {
      const fetchResource = await fetch(URL);
      const data = await fetchResource.json();

      setResourceData(data.results);
      setResourceCount(data.count);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [props.history.location.search, resource]);

  useEffect(() => {
      fetchAPI();
  }, [fetchAPI])

  return {loading, error, resourceData, resourceCount};
};

export default useFetchStarWars;
