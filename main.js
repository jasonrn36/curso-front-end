document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#user-name");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const folowingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");
    
    fetch('https://api.github.com/users/jasonrn36')
        .then(function (res){
            return res.json();
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            folowingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})