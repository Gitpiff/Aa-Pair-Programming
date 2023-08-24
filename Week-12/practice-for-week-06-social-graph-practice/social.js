// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++; //1
    let nextID = this.currentID;
    this.users[nextID] = { id: nextID, name: name };
    this.follows[nextID] = new Set();

    return nextID;
  }

  getUser(userID) {

    if (!this.users[userID]) return null;
    return this.users[userID];
  }

  follow(userID1, userID2) {

    if (!this.users[userID1] || !this.users[userID2]) return false
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {

    return this.follows[userID]
  }

  getFollowers(userID) {

    const followers = new Set();

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) followers.add(+id);
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {

    const queue = [[userID]];
    const recommended = [];

    const visited = new Set();
    visited.add(userID);

    while (queue.length) {
      const path = queue.shift();
      const currID = path[path.length - 1];

      if (path.length > degrees + 2) break;
      
      if (path.length > 2) recommended.push(currID);

      for (let follow of this.follows[currID]) {
        if (!visited.has(follow)) {
          visited.add(follow)
          queue.push([...path, follow])
        }
      }
    }
    return recommended
  }
}

module.exports = SocialNetwork;
