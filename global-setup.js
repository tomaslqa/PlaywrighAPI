const { request } = require ('@playwright/test');


async function globalSetup(config) {
    const requestContext = await request.newContext();
        const response= await requestContext.post(`${process.env.ADMIN_URL}`, {
          form: {
            'email': `${process.env.ADMIN_EMAIL}`,
            'password': `${process.env.ADMIN_PWD}`
          }
        });
    const body = await response.json();
    process.env.TOKEN = body.data.token;
}

export default globalSetup;