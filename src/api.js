export const fetchData = async () => {
  try {
    const response = await fetch(`https://demo1353770.mockable.io/images`);
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

export const sendData = async (inputData) => {
  const response = await fetch(
    `http://demo1353770.mockable.io/images/comments`,
    {
      method: 'POST',
      body: JSON.stringify(inputData),
    }
  );

  console.log(response);
};
