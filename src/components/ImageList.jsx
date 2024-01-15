import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaCart } from './index';

import { StyledImageList } from '../styled/StyledImageList';

import { getDataFetch } from '../store/fetch_slice';

const ImageList = () => {
  const data = useSelector((state) => state.fetchData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, [dispatch]);

  return <StyledImageList>{<MediaCart data={data} />}</StyledImageList>;
};

export default ImageList;
