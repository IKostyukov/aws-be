export const basicAuthorizerHandler =
  ({ allowedUser, allowedPassword }) =>
  async (event) => {
    try {
      const basicToken = event.headers.authorization || "";
      const tokenValue = basicToken.split(" ")[1];
      const allowedToken = Buffer.from(
        `${allowedUser}:${allowedPassword}`
      ).toString("base64");
      const response = { isAuthorized: tokenValue === allowedToken };
      console.log(
        `Allowed token: ${allowedToken}; Basic token: ${tokenValue}; isAuthorized: ${response.isAuthorized}`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
