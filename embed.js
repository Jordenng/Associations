var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});

// POST = title, content //

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


// user
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);
//
// var newUser = new User({
//     email: "harmony@gmail.com",
//     name: "harmony Brown"
// });
//
// newUser.posts.push({
//     title:"hpt tp new",
//     content:"fgsgf"
// });
// newUser.save(function(err, user){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// });
//
// var newPost = new Post({
//     title: "reflections",
//     content: "they are great"
// });
//
// newPost.save(function (err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// });

User.findOne({name: "harmony Brown"}, function(err, user){
    if (err) {
        console.log(err)
    } else {
        user.posts.push({
            title: "ho ho"
        });
        user.save(function(err, user){
            if (err) {
                console.log(err)
            } else {
                console.log(user)
            }
        });
    }
});