const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('header');

  auth.onAuthStateChanged(user => {
    if (user) {
      header.innerHTML = `
        <div class="login-status-bar">
          <span>目前登入：${user.email}</span>
          <button onclick="logout()">登出</button>
        </div>
      `;
    } else {
      // 沒登入就不顯示任何帳號資訊，但保留頁面結構
      header.innerHTML = `
        <div class="login-status-bar">
          <span>尚未登入</span>
        </div>
      `;
    }
  });
});

function logout() {
  firebase.auth().signOut().then(() => {
    alert("已登出");
    window.location.href = "index.html"; // ✅ 改成跳回首頁
  });
}
