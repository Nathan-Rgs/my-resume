function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  job.href = "https://ipfacens.com.br/sobre-nos/";

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  location.href = "https://goo.gl/maps/L6HTnGN4kvHYcTG6A";

  const whatsapp = document.getElementById("profile.whatsapp");
  whatsapp.innerText = profileData.phone;
  whatsapp.href = "https://wa.me/5515997411076";

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = "tel:(15) 9 9741-1076";

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function udpdateSoftSkills(softSkills) {
  const softSkillsUl = document.getElementById("profile.skills.softSkills");

  softSkillsUl.innerHTML = softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(hardSkills) {
  const hardSkillsUl = document.getElementById("profile.skills.hardSkills");

  hardSkillsUl.innerHTML = hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" /> </li>`
    )
    .join("");
}

function updateLanguages(languages) {
  const languagesUl = document.getElementById("profile.languages");
  languagesUl.innerHTML = languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(portfolio) {
  const portfolioUl = document.getElementById("profile.portfolio");
  portfolioUl.innerHTML = portfolio
    .map(
      (project) => `<li>
        <h3 class="title ${project.github ? "github" : ""}">${project.name}</h3>
        <a href="https://${project.url}" target="_blank"
        >${project.url}</a
        >
        </li>`
    )
    .join("");
}

function updateProfessionalExperience(professionalExperience) {
  const professionalExperienceUl = document.getElementById(
    "profile.professionalExperience"
  );
  professionalExperienceUl.innerHTML = professionalExperience
    .map(
      (experience) => `<li>
      <h3 class="title">
        <a href="${experience.siteUrl}" target="_blank">${experience.name}</a> 
      </h3>
      <h4 class="ocuppation">${experience.ocuppation}</h4>
      <p class="period">${experience.period}</p>

      <p class="description">
        ${experience.description}
      </p>
    </li>`
    )
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  udpdateSoftSkills(profileData.skills.softSkills);
  updateHardSkills(profileData.skills.hardSkills);
  updateLanguages(profileData.languages);
  updatePortfolio(profileData.portfolio);
  updateProfessionalExperience(profileData.professionalExperience);
})();
