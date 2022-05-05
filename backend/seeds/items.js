const mongoose = require('mongoose');
var Comment = require('../models/Comment');
var User = require('../models/User');
var Item = require('../models/Item');
const { faker } = require('@faker-js/faker');

mongoose.connect(process.env.MONGODB_URI);
var items = [];
async function addItems() {    
    for (var i = 0; i < 200; i++) {
        let user = new User({
            username: `UserName${i}`,
            email: `${i}${faker.internet.email()}`
        });
        
        let item = new Item({
            title: faker.lorem.words(),
            description: faker.lorem.lines(),
            image: faker.image.image(),
            tagList: faker.hacker.adjective(),
        });
        let comment = new Comment({
            body: faker.lorem.sentences() 
        })
        
        let savedUser = await user.save();
        item.seller = savedUser;
        let savedItem = await item.save();
        
        comment.seller = savedUser;
        comment.item = savedItem;                
        await comment.save();    
        items.push(item);
    }
};

console.log(items.length);
addItems().then(() => {
    mongoose.connection.close();
}).then(process.exit);