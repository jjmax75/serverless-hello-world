'use strict';

module.exports.hello = async (event) => {
  const name = event.queryStringParameters && event.queryStringParameters.name;

  const message = `Hello ${name ? name : 'World'}`;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
        input: event,
      },
      null,
      2
    ),
  };
};
