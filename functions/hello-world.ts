import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hi Stranger' }),
  };
};

export { handler };
