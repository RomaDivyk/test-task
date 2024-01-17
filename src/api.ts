const fetchUrl = `https://demo1353770.mockable.io/images`;
const sendUrl = `http://demo1353770.mockable.io/images/comments`;

export const fetchData = async () => {
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`Something wrong in fetch data`);
    }
    const loadedData = await response.json();
    console.log(loadedData);
    return loadedData;
  } catch (error) {
    return error.message;
  }
};

export const sendData = async (inputData: { name: string; comment: string }) => {
  const response = await fetch(sendUrl, {
    method: 'POST',
    body: JSON.stringify(inputData),
  });

  console.log(response);
};
