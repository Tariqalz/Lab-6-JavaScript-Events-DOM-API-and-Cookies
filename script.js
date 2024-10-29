const initialLikes = 100;
const initialDislikes = 20;

let likesCount = initialLikes;
let dislikesCount = initialDislikes;

const likesBtn = document.getElementById("likeBtn");
const dislikesBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList");

likesBtn.innerText = "👍 " + likesCount;
dislikesBtn.innerText = "👎 " + dislikesCount;

likesBtn.addEventListener("click", () => {
  likesCount++;
  likesBtn.innerText = "👍 " + likesCount;
  setCookie();
});

dislikesBtn.addEventListener("click", () => {
  dislikesCount++;
  dislikesBtn.innerText = "👎 " + dislikesCount;
  setCookie();
});

submitBtn.addEventListener("click", () => {
  const pElem = document.createElement("p");
  pElem.innerText = commentBox.value.trim();
  commentsList.appendChild(pElem);
  commentBox.value = "";
  setCookie();
});

clearBtn.addEventListener("click", () => {
  commentBox.value = "";
});

function setCookie() {
  document.cookie = "voted=true; ;SameSite=Strict; Max-Age=" + 60;
}

window.onload = function() {
  if (document.cookie && document.cookie.indexOf("voted") > -1) {
    likesBtn.disabled = true;
    dislikesBtn.disabled = true;
    submitBtn.disabled = true;
  }
};
