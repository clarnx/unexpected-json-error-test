exports.handler = async () => {
  // fetch from return-null function
  const response = await fetch(
    "https://unexpected-json-error-test.netlify.app/.netlify/functions/return-null"
  );

  const data = await response.json(); // Will throw if response is NULL

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
