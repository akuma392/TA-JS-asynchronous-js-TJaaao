let input = document.querySelector('input');

let user = document.querySelector('h3');
let following = document.querySelector('.following');
let followers = document.querySelector('.followers');
let username = document.querySelector('span');

let followersUser = document.querySelectorAll('.follow li');
let followingUser = document.querySelectorAll('.users li');

let pfp = document.querySelector('.profile');

// let randomNumber = Math.random()*15

function displayFolowers(url) {
  followersUser.innerHTML = '';
  let xhr1 = new XMLHttpRequest();
  xhr1.open('GET', `${url}`);
  xhr1.onload = function () {
    let userFollower = JSON.parse(xhr1.response);

    followersUser.forEach((elm, i) => {
      elm.innerHTML = ` <img
    src=${userFollower[i].avatar_url}
    alt=""
  />
  <p>${userFollower[i].login}</p>`;
    });
  };
  xhr1.send();
}
function displayFollowing(url) {
  console.log(url);
  let xhr1 = new XMLHttpRequest();
  xhr1.open('GET', `${url}`);
  xhr1.onload = function () {
    let userFollowing = JSON.parse(xhr1.response);

    followingUser.forEach((elm, i) => {
      elm.innerHTML = ` <img
      src=${userFollowing[i].avatar_url}
      alt=""
    />
    <p>${userFollowing[i].login}</p>`;
    });
  };
  xhr1.send();
}

function displayUI(data) {
  pfp.src = data.avatar_url;
  user.innerText = data.name;
  username.innerText = data.login;
  followers.innerText = `followers: ${data.followers}`;
  following.innerText = `following: ${data.following}`;
  displayFolowers(data.followers_url);
  displayFollowing(data.following_url);
}
function handleEvent(event) {
  if (event.keyCode == 13) {
    console.log(event.target.value);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData);
      displayUI(userData);
      event.target.value = '';
    };
    xhr.send();
  }
}

input.addEventListener('keyup', handleEvent);
