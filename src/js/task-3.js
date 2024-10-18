import users from "./users.js";

users.sort((a, b) => b.friends.length - a.friends.length);
const name = users.map((person) => person.name);
console.log(name);
const getNamesSortedByFriendsCount = (users) => {
  let usersWitnMoreFriends = users.sort(
    (a, d) => a.friends.length - d.friends.length
  );
  return usersWitnMoreFriends.map((user) => {
    user.name;
  });
};

console.log(getNamesSortedByFriendsCount(users));
// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
//   "Ross Vazquez",
// ];
