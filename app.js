window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual");
    const colors = [
        "orangered",
        "rgb(212, 0, 255)",
        "rgb(255, 238, 0)",
        "rgb(4, 0, 255)",
        "rgba(0, 255, 149, 0.767)",
        "rgb(99, 73, 64)"
    ];

    //Adding a eventlistner
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    const createBubble = (index) => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});