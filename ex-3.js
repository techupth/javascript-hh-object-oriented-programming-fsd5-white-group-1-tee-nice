//  Start coding here
class User {
  constructor(id, name, email) {
    Object.assign(this, { id, name, email, postList: new PostList() });
  }
}
class PostList {
  constructor() {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(post) {
    console.log(`You've shared post "${post.title}" to your friend.`);
  }
}
class Post {
  constructor(id, title, content) {
    Object.assign(this, { id, title, content, comments: [] });
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}
class Comment {
  constructor(id, content, createdBy) {
    Object.assign(this, { id, content, createdBy, like: 0 });
  }

  addLike = () => {
    this.like += 1;
  };
}
class Facebook {
  constructor() {
    Object.assign(this, { groupList: [], pageList: [] });
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  send = (commentCreatedBy, postTitle) => {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  };
}

// Example Usage
const post1 = new Post(undefined, "Hi Friends", undefined);
const comment1 = new Comment(undefined, undefined, "Nice Wachiraphong ");
const notification = new Notification();
notification.send(comment1.createdBy, post1.title);
