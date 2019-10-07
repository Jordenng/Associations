var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

var Post = require("./models/post")
var User = require("./models/user")
