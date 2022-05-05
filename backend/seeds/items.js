const mongoose = require('mongoose');
var Comment = require('../models/Comment');
var User = require('../models/User');
var Item = require('../models/Item');

mongoose.connect(process.env.MONGODB_URI);
const items = [
    { 
        title:"How to train your dragon",
        description:"Ever wonder how?", 
        body:"Very carefully.", 
        tagList:["dragons","training"],

    },
    { 
        title:"How to train your dragon2",
        description:"Ever wonder how again?", 
        body:"Very Very carefully.", 
        tagList:["dragons","training"]
    }
];

const seedDB = async () => {
    await Item.insertMany(items);
};

seedDB().then(() => {
    mongoose.connection.close();
})