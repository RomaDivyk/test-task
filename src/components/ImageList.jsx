/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { fetchData } from "../api";

import MediaCart from "./MediaCart";

const ImageList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const url = `https://demo1353770.mockable.io/images`;

  useEffect(() => {
    fetchData(url).then((res) => {
      setData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {<MediaCart data={data} />}
      {error && <h1>{error}</h1>}
    </>
  );
};

export default ImageList;
