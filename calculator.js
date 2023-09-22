var yourName = document.getElementById("yourName"),
    theirName = document.getElementById("theirName"),
    calcBtn = document.querySelector("button"),
    yourlovescoreis = document.getElementById("yourlovescoreis"),
    loveScore = Math.random() * 100,
    loveInfo = document.getElementById("loveinfo"),
    reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

var gradeA = new Audio("audio/Jesus-Jesus-Jesus-comedy-sound-effect-1.mp3");
var gradeD = new Audio("audio/you-think-say-you-dey-wise.mp3");
var gradeNone = new Audio("audio/They-av-left-you-behind.mp3");
var gradeE = new Audio("audio/Oh-no-no-no-laugh-music.mp3");
var gradeFF = new Audio("audio/yee-yee-yeeee-sound-effect.mp3");
var gradeF = new Audio("audio/Slap (Sound Effect) (128 kbps).mp3");
var gradeC = new Audio("audio/Something-About-To-Happen.mp3");
var gradeB = new Audio("audio/Will-You-Keep-Quiet.mp3");
var gradeAAA = new Audio("audio/Why-Are-You-Running.mp3");
var gradeAA = new Audio("audio/There-Is-God-O.mp3");
var gradeInvalid = new Audio("audio/Wrong-Answer.mp3");

function playMusic() {
  gradeA.play();
  gradeD.play();
  gradeNone.play();
  gradeE.play();
  gradeF.play();
  gradeFF.play();
  gradeC.play();
  gradeB.play();
  gradeAAA.play();
  gradeAA.play();
  gradeInvalid.play();
}


function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


function love() {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}
    (async function () {
    var i = 0;
    while (i < loveScore) {
    document.getElementById("score").innerHTML = i + "%";
    await sleep(20);
    i++;
    }
})();
}


calcBtn.addEventListener("click", function (e) {
  loveScore = Math.random() * 100; 
    e.preventDefault();
    if (yourName.value == "" && theirName.value == "") {
    alert("You can't leave fields empty");
    gradeNone.play()
}
    else if (yourName.value == "") {
    alert("Please Enter Your Name");
    gradeInvalid.play();
    }
else if (theirName.value == "") {
    alert("Please Enter His/Her Name");
    gradeInvalid.play();
}

    else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeA.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Oil & Water. I'm sorry, but this is not enough for a perfect relationship.";
} else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your Love Score is";
        love();
        reloadBtn.style.display = "block";
        gradeF.play()
        loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Bird & Sky. But need to put a little concentration on your love.";
} else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeFF.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Soil & Seed. You should take care of your love more! ";
} else if (loveScore <= 40) {
        yourlovescoreis.innerHTML = "Your Love Score is";
        love();
        reloadBtn.style.display = "block";
        gradeE.play()
        loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Romeo & Juliet. There is no fake things in your love. Go Ahead!";
} else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeD.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Marie & Pierre Curie. That's a good combination. You are a good example of true love.";
} else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeC.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like The Earth & The Moon. You cannot live without each other.";
} else if (loveScore <= 70) {
        yourlovescoreis.innerHTML = "Your Love Score is";
        love();
        reloadBtn.style.display = "block";
        gradeB.play()
        loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like River & Sea. Spread Love, not Hate.";
} else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeAAA.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like glue. Nothing can seperate you from each other. Love is Forever.";
} else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeAA.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other more than anything in the world! You are the best example of true love.";
} else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeA.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Ertuğrul Gazi & Halime Sultan. You should get married with " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " very soon. Best of Luck!";
}else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    gradeA.play()
    loveInfo.innerHTML =
        "<b>You</b> and " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " love each other like Ertuğrul Gazi & Halime Sultan. You should get married with " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " very soon. Best of Luck!";
}
});
