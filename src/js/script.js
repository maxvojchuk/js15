import users from "./users.js";
//1
const totalBalanceOfUsers = users.reduce((acc, currentUser) => {
  return acc + currentUser.balance;
}, 0);
console.log("Загальний баланс користувачіів:", totalBalanceOfUsers);
//2
const FriendName = "John";
const usersWithFriendName = users.filter((user) =>
  user.friends.includes(FriendName)
);
const names = usersWithFriendName.map((user) => user.name);
console.log(names);
//3
users.sort((a, b) => b.friends.length - a.friends.length);
const name = users.map((person) => person.name);
console.log(name);
//4
const allSkills = users.flatMap((user) => user.skills);
const uniqueSkills = Array.from(new Set(allSkills));
uniqueSkills.sort((a, b) => a.localeCompare(b));
console.log(uniqueSkills);
