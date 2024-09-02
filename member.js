function skillsMember(members, skill) {
    return members.filter(member => member.skills.includes(skill));
}

// Example usage:
const team = [
    { name: "Alice", skills: ["JavaScript", "React", "Node.js"] },
    { name: "Bob", skills: ["JavaScript", "Angular", "Node.js"] },
    { name: "Charlie", skills: ["Python", "Django", "Flask"] },
    { name: "David", skills: ["JavaScript", "Vue.js", "Node.js"] }
];

const skilledMembers = skillsMember(team, "JavaScript");
console.log(skilledMembers);