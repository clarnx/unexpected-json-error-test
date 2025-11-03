exports.handler = async () => {
  try {
    // Use relative path for same-project function call
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
