import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaCart } from './index';

import { StyledImageList } from '../styled/StyledImageList';

import { getDataFetch } from '../redux/ducks/imagesDuck';

const ImageList = () => {
  const data = useSelector((state: any) => state.fetchData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, [dispatch]);

  return (
    <StyledImageList>
      <MediaCart data={data} />
    </StyledImageList>
  );
};

export default ImageList;
