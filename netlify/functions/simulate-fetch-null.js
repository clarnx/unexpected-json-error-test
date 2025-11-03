exports.handler = async () => {
  // fetch from return-null function
  const response = await fetch("/.netlify/functions/return-null");

  const data = await response.json(); // Will throw if response is empty

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
