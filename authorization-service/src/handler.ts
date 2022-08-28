import { basicAuthorizerHandler } from "./handlers/basicAuthorizer";

export const basicAuthorizer = basicAuthorizerHandler({
    allowedUser: process.env.GITHUB_ACCOUNT_LOGIN,
    allowedPassword: process.env.TEST_PASSWORD
})