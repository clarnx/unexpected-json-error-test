exports.handler = async () => {
  // fetch from return-data function
  const response = await fetch(
    "https://unexpected-json-error-test.netlify.app/.netlify/functions/return-data"
  );

  const data = await response.json(); // Will throw if response is not valid JSON

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
