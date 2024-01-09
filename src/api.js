export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Something wrong in fetch data`);
    }
    const loadedData = await response.json();
    return loadedData;
  } catch (e) {
    return e.message;
  }
};

export const sendData = async (inputData) => {
  const response = await fetch(
    `http://demo1353770.mockable.io/images/comments`,
    {
      method: "POST",
      body: JSON.stringify(inputData),
    }
  );

  console.log(response);
};
