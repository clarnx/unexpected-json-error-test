exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: "<!DOCTYPE html><html><body>Hello World</body></html>",
  };
};
