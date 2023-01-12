import fs from "fs";

function handleUsers(data) {
  let users = [];
  data.map((e) => users.push(e));
  users = JSON.stringify(users);
  fs.writeFile("users.txt", users, (err) => {
    if (err) throw err;
  });
  return users;
}

export default handleUsers;
