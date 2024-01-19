import axios, { AxiosResponse } from 'axios';

const domain = `https://demo1353770.mockable.io`;

const fetchUrl = `${domain}/images`;
const sendUrl = `${domain}/images/comments`;

export const fetchData = async () => {
  const response: AxiosResponse = await axios.get(fetchUrl);
  if (response.status !== 200) {
    throw new Error(`Something wrong in fetch data`);
  }
  return response;
};

export const sendData = async (inputData: { name: string; comment: string }) => {
  const response = await fetch(sendUrl, {
    method: 'POST',
    body: JSON.stringify(inputData),
  });

  console.log(response);
};
