/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { MediaCart } from "./index";

import { fetchData } from "../api";

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
