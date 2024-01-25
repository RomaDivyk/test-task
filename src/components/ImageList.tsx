import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaCart } from './index';

import { StyledImageList } from '../styled/StyledImageList';

import { getDataFetch } from '../redux/ducks/imagesDuck';

export interface Data {
  id: string;
  img: string;
  comments: string[];
}
export interface FetchData {
  data: Data[];
}

export type StateType = {
  fetchData: FetchData;
  isLoading: boolean;
};

const ImageList = () => {
  const data = useSelector((state: StateType) => state.fetchData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, [dispatch]);

  return (
    <StyledImageList data-testid="imageListId">
      <MediaCart data={data} />
    </StyledImageList>
  );
};

export default ImageList;
