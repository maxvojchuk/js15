import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const allSkillsArr = users.map((user) => user.skills);
  const allSkills = allSkillsArr.reduce(
    (allSkills, skills) => allSkills.concat(skills),
    []
  );
  const filterdSkills = allSkills.filter(
    (skill, index, arr) => arr.indexOf(skill) === index
  );
  return filterdSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
