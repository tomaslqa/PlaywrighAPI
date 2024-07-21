const { request } = require('@playwright/test');


async function globalSetup(config) {
  
  //Saving Authorization token to .env file
  const requestContext = await request.newContext();
  const response = await requestContext.post(`${process.env.ADMIN_URL}`, {
    form: {
      'email': `${process.env.ADMIN_EMAIL}`,
      'password': `${process.env.ADMIN_PWD}`
    }
  });
  const body = await response.json();
  process.env.TOKEN = body.data.token;

  //Fetching and saving all users to testdata file      
  const requestUsers = await request.newContext();
  const resp = await requestUsers.get(`${process.env.USERS_URL}`, {
    headers: {
      'Authorization': "Bearer " + `${process.env.TOKEN}`,
    }
  });
  const list = await resp.json();
  const fs = require("fs");
  fs.writeFile('test-data/testdata_users.json', JSON.stringify(list.data), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("testdata_users file saved!");
  });
}

export default globalSetup;