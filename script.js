document.addEventListener("DOMContentLoaded", function () {
  // Fonctionnalité 1 :
  let footer = document.querySelector("footer");
  let clickCount = 1;

  footer.addEventListener("click", function () {
    console.log("clic numéro " + clickCount);
    clickCount++;
  });

  // Fonctionnalité 2 :
  let navbarToggleBtn = document.querySelector(".navbar-toggler");
  let navbarHeader = document.getElementById("navbarHeader");

  navbarToggleBtn.addEventListener("click", function () {
    navbarHeader.classList.toggle("collapse");
  });

  // Fonctionnalité 3 :
  let firstCard = document.querySelector(".col-md-4 .card");
  let editButton1 = firstCard.querySelector(".btn-outline-secondary");

  editButton1.addEventListener("click", function () {
    firstCard.style.color = "red";
  });

  // Fonctionnalité 4 :
  let secondCard = document.querySelectorAll(".col-md-4 .card")[1];
  let editButton2 = secondCard.querySelector(".btn-outline-secondary");

  editButton2.addEventListener("click", function () {
    if (secondCard.style.color === "green") {
      secondCard.style.color = "";
    } else {
      secondCard.style.color = "green";
    }
  });

  // Fonctionnalité 5 :
  let navbar = document.querySelector(".navbar");
  let bootstrapLink = document.querySelector(
    'link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]'
  );

  navbar.addEventListener("dblclick", function () {
    if (bootstrapLink.disabled) {
      bootstrapLink.removeAttribute("disabled");
    } else {
      bootstrapLink.setAttribute("disabled", "true");
    }
  });

  // Fonctionnalité 6 :
  let viewButton = document.querySelectorAll(".btn-success");

  viewButton.forEach(function (viewButton) {
    viewButton.addEventListener("mouseover", function () {
      let card = viewButton.closest(".card");
      let cardImage = card.querySelector(".card-img-top");

      if (!card.classList.contains("card-hovered")) {
        cardImage.style.width = "20%";
        card.classList.add("card-hovered");
      } else {
        cardImage.style.width = "";
        card.classList.remove("card-hovered");
      }
    });
  });

  // Fonctionnalité 7 :
  let nextButton = document.querySelector(".btn-secondary");
  let cardContainer = document.querySelector(".album .container .row");

  nextButton.addEventListener("click", function () {
    let lastCard = cardContainer.lastElementChild;
    cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
  });

  // Fonctionnalité 8 :
  let backButton = document.querySelector(".btn-primary");

  backButton.addEventListener("click", function (event) {
    event.preventDefault();

    let cardContainer = document.querySelector(".album .container .row");
    let firstCard = cardContainer.firstElementChild;
    cardContainer.insertBefore(
      firstCard,
      cardContainer.lastElementChild.nextSibling
    );
  });

  // Fonctionnalité 9 :
  let logo = document.querySelector(".navbar-brand");
  let body = document.body;
  function resetPageLayout() {
    body.classList.remove("col-4", "offset-md-0", "offset-md-4", "offset-md-8");
  }

  document.addEventListener("keypress", function (event) {
    switch (event.key) {
      case "a":
        body.classList.add("col-4", "offset-md-0");
        break;
      case "y":
        body.classList.add("col-4", "offset-md-4");
        break;
      case "p":
        body.classList.add("col-4", "offset-md-8");
        break;
      case "b":
        resetPageLayout();
        break;
      default:
        break;
    }
  });
});
