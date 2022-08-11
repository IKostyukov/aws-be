const defaultHeaders = {
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};

interface IResponse {
  statusCode: number;
  headers: Object;
  body: Object;
}

const errorResponse = (err: Error, statusCode: number = 500): IResponse => {
  return {
    statusCode,
    headers: {
      ...defaultHeaders,
    },
    body: JSON.stringify({
      message: err.message || "Something went wrong !!!",
    }),
  };
};

const successResponse = (body: Object, statusCode: number = 200): IResponse => {
  return {
    statusCode,
    headers: {
      ...defaultHeaders,
    },
    body: JSON.stringify(body),
  };
};

export { errorResponse, successResponse, IResponse };