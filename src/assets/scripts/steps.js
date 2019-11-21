var steps = [
  {
    id: "STEP 1",
    image: "./img/steps/Step1.png",
    title: "Sed leo enim, condimentum",
    detail:
      "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
  },
  {
    id: "STEP 2",
    image: "./img/steps/Step2.png",
    title: "Morbi velit risus",
    detail:
      "Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
  },
  {
    id: "STEP 3",
    image: "./img/steps/Step3.png",
    title: "Sed leo enim, condimentum",
    detail:
      "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
  }
];
function loadSteps() {
  for (var i = 0; i < steps.length; i++) {
    console.log(steps);
    var step = steps[i];
    console.log(step);
    document.getElementById("step-container").innerHTML +=
      '<div class="container__col-12 container__col-md-4 container__col-lg-4">\n' +
      '<div class="flex-column" style="background: url(' +
      step.image +
      ') no-repeat top center; height: 400px; width: 300px;margin: 5px;justify-content:flex-end">\n' +
      "<button>" +
      step.id +
      "</button>" +
      '<span class="step-header">' +
      step.title +
      "</span>" +
      '<span class="step-desc">' +
      step.detail +
      "</span>" +
      "</div>" +
      "</div>";
  }
}

loadSteps();
