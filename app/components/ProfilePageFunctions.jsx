'use client'

export const addNewSkill = (skills, setSkills) => {
  const newSkill = prompt("Enter the name of the new skill:");

  if (newSkill) {
    const newSkills = skills.concat(newSkill);
    setSkills(newSkills);
  }
};

export const removeSkill = (skills, setSkills) => {
    if (skills.length != 0){
      setSkills(skills.slice(0, skills.length - 1));  
    }
};

export const addNewCourse = (courses, setCourses) => {
  const newCourse = prompt("Enter the name of the new course:");

  if (newCourse) {
    const newCourses = courses.concat(newCourse);
    setCourses(newCourses);
  }
};

export const removeCourse = (courses, setCourses) => {
    if (courses.length != 0){
      setCourses(courses.slice(0, courses.length - 1));  
    }
};
  
export const addYear = (years, setYears) => {
  const newYear = prompt("Enter expected graduation year:");

  if (newYear && years.length == 0) {
    const newYears = years.concat(newYear);
    setYears(newYears);
  }
};

export const removeYear = (years, setYears) => {
  if (years.length != 0){
    setYears(years.slice(0, years.length - 1));  
  }
};

export const addExperience = (experiences, setExperiences) => {
  const newExperience = prompt("Enter relevant experience:");

  if (newExperience) {
    const newExperiences = experiences.concat(newExperience);
    setExperiences(newExperiences);
  }
};

export const removeExperience = (experiences, setExperiences) => {
  if (experiences.length != 0){
    setExperiences(experiences.slice(0, experiences.length - 1));  
  }
};

export const addNewPersonalInfo = (personal_infos, setPersonal_Infos) => {
  const newPersonalInfo = prompt("Enter personal info:");

  if (newPersonalInfo) {
    const newPersonal_Infos = personal_infos.concat(newPersonalInfo);
    setPersonal_Infos(newPersonal_Infos);
  }
};

export const removePersonalInfo = (personal_infos, setPersonal_Infos) => {
    if (personal_infos.length != 0){
      setPersonal_Infos(personal_infos.slice(0, personal_infos.length - 1));  
    }
};
