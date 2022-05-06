const toasts = {
  error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    msg: "Đăng nhập thất bại, tài khoản hoặc mật khẩu không chính xác !",
  },
};
function createToast(status) {
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;
  toast.innerHTML = `
  ${toasts[status].icon}
  <span class="msg">${toasts[status].msg}</span>
  <span class="countdown"></span>
  `;
  document.querySelector("#toasts").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "hide_slide 1s ease forwards";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}

function login() {
  if (document.getElementById("toasts").firstChild) {
    document.getElementById("toasts").innerHTML = "";
  }
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  event.preventDefault();
  if (username === "john" && password === "1234") {
    localStorage.setItem(
      "user",
      JSON.stringify({ username: "john", password: "1234" })
    );
    document.getElementById("loginForm").submit();
  } else {
    createToast("error");
  }
}

window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let { username, password } = user;
  if (username === "john" && password === "1234") {
    window.location.href = "./dashboard.html";
  }
};
