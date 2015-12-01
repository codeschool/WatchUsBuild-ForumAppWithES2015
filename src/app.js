import Post from "./post";
import User from "./user";
import ui from "./ui";

Post.findAll().then(ui.renderPosts);

User.findAllActive().then(ui.renderActiveUsers);

