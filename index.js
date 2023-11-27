window.addEventListener("scroll", revealElements);

document.addEventListener("DOMContentLoaded", function () {
  revealElements(); // Chama a função para revelar os elementos ao carregar a página
});

function revealElements() {
  // const elements = document.querySelectorAll(".scroll-reveal");
  // elements.forEach((element) => {
  //   const elementTop = element.getBoundingClientRect().top;
  //   const windowHeight = window.innerHeight;

  //   if (elementTop < windowHeight) {
  //     element.classList.add("active");
  //   }
  // });
  const elements = document.querySelectorAll(".scroll-reveal");
  elements.forEach((element) => {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;
    const elementHeight = elementRect.height;
    const windowHeight = window.innerHeight;

    // Calcula o ponto médio vertical do elemento
    const elementMidPoint = elementTop + elementHeight / 2;

    if (elementMidPoint < windowHeight) {
      element.classList.add("active");
    }
  });
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações desejadas
    // Por exemplo, você pode usar uma solicitação AJAX para enviá-los.

    // Reinicie os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Mensagem enviada com sucesso!");
  }
});

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector("#menu-icon").classList.remove("fa-times");
    document.querySelector("#menu-icon").classList.add("fa-bars");

  } else {
    menuMobile.classList.add("open");
    document.querySelector("#menu-icon").classList.remove("fa-bars");
    document.querySelector("#menu-icon").classList.add("fa-times");

  }
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
  } else {

  }
}
