//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like += 1;
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  sharePost(postTitle) {
    console.log(`You've shared post "${postTitle}" to your friend.`);
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(commentCreatedBy, postTitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  }
}

const user = new User("1", "John Doe", "john@example.com");
const comment = new Comment("1", "Great post!", "Alice");
const post = new Post("1", "My First Post", "Hello, world!");
post.addComment(comment);

const postList = new PostList();
postList.addPost(post);
postList.sharePost(post.title);

const facebook = new Facebook();
const group = new FacebookGroup("JavaScript Enthusiasts");
const page = new FacebookPage("Web Development");

facebook.addGroup(group);
facebook.addPage(page);

const notification = new Notification("1");
notification.send(comment.createdBy, post.title);
