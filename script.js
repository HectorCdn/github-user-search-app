const btnSearch = document.querySelector('#btnSearch');
const searchInput = document.querySelector('input');
const iconPP = document.querySelector('.imgUser');
const pseudo = document.querySelector('.name');
const tag = document.querySelector('.spanPseudo');
const datee = document.querySelector('.spanDateJoined');
const pDesc = document.querySelector('.descriptionP');
const nbRepos = document.querySelector('#repos');
const nbFollowers = document.querySelector('#follow');
const nbFollowing = document.querySelector('#following');
const spanLoc = document.querySelector('.location');
const spanLink = document.querySelector('.blog');
const spanTwitter = document.querySelector('.twitter');
const spanOffice = document.querySelector('.company');

btnSearch.addEventListener('click', async () => {
  const username = searchInput.value.trim();
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    iconPP.src = data.avatar_url;
    pseudo.textContent = data.name;
    tag.textContent = data.login;

    const date = new Date(data.created_at);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
    datee.textContent = `Joined ${formattedDate}`;

    pDesc.textContent = data.bio || 'No description available';
    nbRepos.textContent = data.public_repos;
    nbFollowers.textContent = data.followers;
    nbFollowing.textContent = data.following;
    spanLoc.textContent = data.location || 'No location available';
    spanLink.textContent = data.html_url || 'No link available';
    spanTwitter.textContent = data.twitter_username || 'No Twitter available';
    spanOffice.textContent = data.company || 'No office available';
});

const btnDarkToggle = document.querySelector('.btnDark');

btnDarkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const dark = document.querySelector('.dark');
    const imgDark = document.querySelector('.imgDark');
    dark.textContent = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
    imgDark.src = document.body.classList.contains('dark-mode') ? 'asset/sun.svg' : 'asset/moon.svg';
});