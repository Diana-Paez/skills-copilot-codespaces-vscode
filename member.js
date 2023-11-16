function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var skillsMember = document.getElementById("skills-member");
  var memberSkills = document.getElementById("member-skills");
  var skillsMemberIcon = document.getElementById("skills-member-icon");
  var memberSkillsIcon = document.getElementById("member-skills-icon");

  if (skills.style.display === "none") {
    skills.style.display = "block";
    member.style.display = "none";
    skillsMember.style.display = "none";
    memberSkills.style.display = "block";
    skillsMemberIcon.style.display = "none";
    memberSkillsIcon.style.display = "block";
  } else {
    skills.style.display = "none";
    member.style.display = "block";
    skillsMember.style.display = "block";
    memberSkills.style.display = "none";
    skillsMemberIcon.style.display = "block";
    memberSkillsIcon.style.display = "none";
  }
}