exports.handler = async () => {
  // fetch from return-html function
  const response = await fetch("/.netlify/functions/return-html");

  const data = await response.json(); // Will throw if response is HTML

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
