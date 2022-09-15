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

function udpdateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" /> </li>`
    )
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  udpdateSoftSkills(profileData);
  updateHardSkills(profileData);
})();
