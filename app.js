const moonPath =
  "M16.5 30C16.5 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 16.5 13.4315 16.5 30Z";

const sunPath =
  "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(225,225,225)"
      },
      "-=700"
    );
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
