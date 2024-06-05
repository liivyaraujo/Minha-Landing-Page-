/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

//a partir daqui é o forms :

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o formulário
  const form = document.getElementById("contactForm");

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener("submit", function (event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Obtém os dados do formulário
    const formData = {
      nome: document.getElementById("name").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("phone").value,
      mensagem: document.getElementById("message").value,
    };

    // Exibe os dados do formulário no console em formato JSON
    console.log("Dados:", formData);

    // Simula uma requisição POST
    console.log("Enviando requisição...");

    // Simulação de uma requisição POST utilizando fetch
    fetch("http://localhost:9999/enviodados", {
      // Corrigida a URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Sucesso:", data);
        alert("Dados enviados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar os dados.");
      });

    // Limpa os campos do formulário (opcional)
    form.reset();
  });
});
