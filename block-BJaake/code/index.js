let input = document.querySelector('input');
let user = document.querySelector('h4');

let username = document.querySelector('.user p');
let userImg = document.querySelector('.user img');
let following = document.querySelector('.following');
let followers = document.querySelector('.followers');
let root = document.querySelector('.root');
let rootFollowing = document.querySelector('.following-root');

// display followers

function displayFollowers(data) {
  root.innerHTML = '';
  if (data.length > 5) {
    for (let i = 0; i < 5; i++) {
      li = document.createElement('li');

      li.innerHTML = `  <img src=${data[i].avatar_url} alt="" />
      <p>${data[i].login}</p>
      `;
      root.append(li);
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      li = document.createElement('li');

      li.innerHTML = `<img src=${data[i].avatar_url} alt="" />
      <p>${data[i].login}</p>`;
      root.append(li);
    }
  }
}

// display following users

function displayFollowing(data) {
  rootFollowing.innerHTML = '';
  if (data.length > 5) {
    for (let i = 0; i < 5; i++) {
      li = document.createElement('li');

      li.innerHTML = `  <img src=${data[i].avatar_url} alt="" />
      <p>${data[i].login}</p>
      `;
      rootFollowing.append(li);
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      li = document.createElement('li');

      li.innerHTML = `<img src=${data[i].avatar_url} alt="" />
      <p>${data[i].login}</p>`;
      rootFollowing.append(li);
    }
  }
}

// display user UI

function displayUI(data, url) {
  user.innerText = data.name;
  userImg.src = data.avatar_url;
  username.innerText = data.login;
  followers.innerHTML = `Followers: <span>${data.followers}</span>`;
  following.innerHTML = `Following: <span>${data.following}</span>`;
  let userFollowers = fetch(data.followers_url).then((resp) => resp.json());

  let userFollowersArr = userFollowers.then((value) => {
    console.log(value.length);
    displayFollowers(value);
    console.log(value);
  });
  console.log(data.followers_url);
  console.log(url);
  let userFollowing = fetch(url)
    .then((resp) => resp.json())
    .then((value) => {
      displayFollowing(value);
      console.log(value);
    });
}

function handleSearch(event) {
  if (event.keyCode == 13) {
    console.log(event.target.value);

    let url = `https://api.github.com/users/${event.target.value}/following`;
    console.log(`https://api.github.com/users/${event.target.value}/following`);
    let userData = fetch(
      `https://api.github.com/users/${event.target.value}`
    ).then((resp) => resp.json());

    let userArr = userData.then((value) => {
      displayUI(value, url);
    });
    event.target.value = '';
  }
}

input.addEventListener('keyup', handleSearch);
