exports.handler = async () => {
  // Use try/catch to properly handle errors
  try {
    // return-data
    const response = await fetch("/.netlify/functions/return-data");

    const data = await response.json(); // Will throw if response is empty

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
