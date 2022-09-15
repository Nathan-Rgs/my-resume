async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Nathan-Rgs/myResume/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
