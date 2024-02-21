'use client'

export const addNewSkill = (skills, setSkills) => {
  const newSkill = prompt("Enter the name of the new skill:");

  const newSkills = skills.concat(newSkill);

  setSkills(newSkills);
};

export const removeSkill = (skills, setSkills) => {
    setSkills(skills.slice(0, skills.length - 1));
};
  