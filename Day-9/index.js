const jsConvert = require('js-convert-case');
const { v4: uuidv4 } = require('uuid');

let usersArray = [
    { uname: "Shambhavi", email: "sam20@gmail.com", cartId: "" },
    { uname: "steve jobs", email: "STevE@gmail.com", cartId: "" },
    { uname: "smith jobs", email: "SmIth@gmail.com", cartId: "" },
    { uname: "Jones", email: "JoneS@gmail.com", cartId: "" }
];

for (let item of usersArray) {
    const random_uuid = uuidv4();
    item['uname'] = jsConvert.toHeaderCase(item['uname']);
    item['email'] = jsConvert.toLowerCase(item['email']);
    item['cartId'] = jsConvert.toUpperCase(random_uuid);
    console.log(`User Id = ${item.uname}, Email = ${item.email}, Cart Id = ${item.cartId}`);
}