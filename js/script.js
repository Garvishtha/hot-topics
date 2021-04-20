const container = document.querySelector(".container");
let url = "./partials/home.html";
let links = document.querySelectorAll("nav");
function handleLinkClick(ev) {
    ev.preventDefault();
    let currentLink = ev.target;
    url = currentLink.href;
    ajaxHandle();
}
for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}
function ajaxHandle() {
    fetch(url)
        .then(function (response) {
                return response.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        });
}
ajaxHandle(url);