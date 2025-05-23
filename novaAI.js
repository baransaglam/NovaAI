document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll(".text-input");
  const btn = document.querySelector(".primary-btn");
  const signin = document.getElementById("signin");

  // Giriş animasyonu
  signin.style.opacity = 0;
  signin.style.transform = "translateY(-20px)";
  setTimeout(() => {
    signin.style.transition = "all 0.6s ease";
    signin.style.opacity = 1;
    signin.style.transform = "translateY(0)";
  }, 200);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "1px solid red";
        valid = false;
      } else {
        input.style.border = "";
      }
    });

    if (!valid) {
      alert("Please fill in all fields.");
      return;
    }

    // Giriş kontrolü
    if (username === "user" && password === "123") {
      showSuccessPanel();
    } else {
      alert("Invalid credentials.");
      inputs.forEach(input => {
        input.style.border = "1px solid red";
      });
    }
  });

 function showSuccessPanel() {
  const panel = document.createElement("div");
  panel.classList.add("success-panel");
  panel.innerHTML = "<div class='spinner'></div><p>✔ Logged in successfully</p>";

  document.body.appendChild(panel);

  setTimeout(() => {
    panel.classList.add("visible");
  }, 50);

  // ✅ Başarılı girişten 2 saniye sonra novaChat.html sayfasına yönlendir
  setTimeout(() => {
    window.location.href = "novaChat.html";
  }, 2000);
}

});
