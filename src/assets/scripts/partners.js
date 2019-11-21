var partners = [
  {
    name: "Bradley Hunter",
    description: "Based in Chicago. I love playing tennis and loud music.",
    image: "./img/partners/bradley.png"
  },
  {
    name: "Marie Bennett",
    description:
      "Currently living in Colorado. Lover of art, languages and travelling.",
    image: "./img/partners/marie.png"
  },
  {
    name: "Diana Wells",
    description:
      "Living in Athens, Greece. I love black and white classics, chillout music and green tea.",
    image: "./img/partners/diana.png"
  },
  {
    name: "Christopher Pierce",
    description:
      "Star Wars fanatic. I have a persistent enthusiasm to create new things.",
    image: "./img/partners/cristopher.png"
  }
];

function loadPartners() {
  var page = document.getElementById("partner-container");
  for (var i = 0; i < partners.length; i++) {
    var partner = partners[i];
    page.innerHTML +=
      '<div class="partner-content container__col-12 container__col-md-6 container__col-lg-3">\n' +
      '<img src="' +
      partner.image +
      '" class="partner-avatar" alt="' +
      partner.name +
      '"/>\n' +
      '<span class="header-partner">' +
      partner.name +
      "</span>" +
      '<span class="desc-partner">' +
      partner.description +
      "</span>" +
      "</div>";
  }
}

loadPartners();
