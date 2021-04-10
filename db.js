var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mange:mange@cluster0.njzdj.mongodb.net/assignments?retryWrites=true&w=majority', { useMongoClient: true });