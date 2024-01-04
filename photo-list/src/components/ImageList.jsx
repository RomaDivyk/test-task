import { useState, useEffect, useCallback } from "react";

import MediaCart from "./MediaCart";

const ImageList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(`http://demo1353770.mockable.io/images`);
      if (!response.ok) {
        throw new Error(`Something wrong in fetch data`);
      }
      const loadedData = await response.json();
      setData(loadedData);
    } catch (e) {
      setError(e.message);
    }
  }, []);

  return (
    <>
      {<MediaCart data={data} />}
      {error && <h1>{error}</h1>}
    </>
  );
};

export default ImageList;
