var steps = [
    {
        "id": "STEP 1",
        "image": "./img/steps/Step1.png",
        "title": "Sed leo enim, condimentum",
        "detail": "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
    },
    {
        "id": "STEP 2",
        "image": "./img/steps/Step2.png",
        "title": "Morbi velit risus",
        "detail": "Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
    },
    {
        "id": "STEP 3",
        "image": "./img/steps/Step3.png",
        "title": "Sed leo enim, condimentum",
        "detail": "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
    }
];
function loadSteps() {
    for (var i = 0; i < steps.length; i++) {
        var step = steps[i];
        document.getElementById("step-container")
        .innerHTML += 
            "<div class=\"steps\">\n" +
                "<img src=\"" + step.image + "\" alt=\"" + step.id + "\"/>\n" + 
                "<div>"+
                    "<button>" + step.id + "</button>"+
                    " <span class=\"step-header\">" + step.title + "</span>\n" +
                    " <span class=\"step-desc\">" + step.detail + "</span>\n" +
                " </div>"+
            " </div>";
    }
}

loadSteps();