/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MediaCart } from "./index";

import { fetchData } from "../api";

import { StyledImageList } from "../styled/StyledImageList";
import { loadData } from "../store/fetch_slice";

const ImageList = () => {
  const stateData = useSelector((state) => state.fetchData.data);
  const dispatch = useDispatch();
  console.log(stateData);

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  console.log(data);

  const url = `https://demo1353770.mockable.io/images`;

  useEffect(() => {
    fetchData(url).then((res) => {
      setData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*  useEffect(() => {
    dispatch(loadData.loadDataReduc());
  }, []); */

  return (
    <StyledImageList>
      {<MediaCart data={data} />}
      {error && <h1>{error}</h1>}
    </StyledImageList>
  );
};

export default ImageList;
