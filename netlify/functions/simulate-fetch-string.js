exports.handler = async () => {
  // fetch from return-string function
  const response = await fetch(
    "https://unexpected-json-error-test.netlify.app/.netlify/functions/return-string"
  );

  const data = await response.json(); // Will throw if response is string

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
