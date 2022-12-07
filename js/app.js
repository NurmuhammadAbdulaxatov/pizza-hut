let menu = document.querySelector("form");
let recept = document.querySelector(".pitsa");
let yupqa = document.querySelector("#Yupqa");
let qalin = document.querySelector("#Qalin");
let csir = document.querySelector(".sir");
let csirx = document.querySelector(".sirx");
let sir = document.querySelector("#sir");
let sirx = document.querySelector("#sirx");
let pamidor = document.querySelector("#pamidor");
let cpamidor = document.querySelectorAll(".pomidors");
let bodring = document.querySelector("#bodring");
let zaytun = document.querySelector("#zaytun");
let ketchup = document.querySelector("#ketchup");
let mayanez = document.querySelector("#mayanez");
let qoziqorin = document.querySelector("#qoziqorin");
let kolbasa = document.querySelector("#kolbasa");
let obw = document.querySelector(".obw");
let shot = 0;

yupqa.addEventListener("click", () => {
  shot += 1.3;
  recept.style.opacity = "1";
  recept.style.scale = "1";
  obw.textContent = `${shot}$`;
});

qalin.addEventListener("click", () => {
  shot += 1.5;
  recept.style.opacity = "1";
  recept.style.scale = "1.1";
  obw.textContent = `${shot}$`;
});

sir.addEventListener("click", () => {
  shot += 2;
  csir.style.display = "block";
  obw.textContent = `${shot}$`;
});

pamidor.addEventListener("click", () => {
  let pom1 = document.querySelector(".pomidor");
  let pom2 = document.querySelector(".pomidor2");
  let pom3 = document.querySelector(".pomidor3");
  let pom4 = document.querySelector(".pomidor4");
  let pom5 = document.querySelector(".pomidor5");

  if (pamidor.checked) {
    shot += 1.3;
    pom1.style.opacity = "1";
    pom2.style.opacity = "1";
    pom3.style.opacity = "1";
    pom4.style.opacity = "1";
    pom5.style.opacity = "1";
  } else {
    shot -= 1.3;
    pom1.style.opacity = "0";
    pom2.style.opacity = "0";
    pom3.style.opacity = "0";
    pom4.style.opacity = "0";
    pom5.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

bodring.addEventListener("click", () => {
  let bod1 = document.querySelector(".bodring");
  let bod2 = document.querySelector(".bodring2");
  let bod3 = document.querySelector(".bodring3");
  let bod4 = document.querySelector(".bodring4");
  let bod5 = document.querySelector(".bodring5");

  if (bodring.checked) {
    shot += 1.5;
    bod1.style.opacity = "1";
    bod2.style.opacity = "1";
    bod3.style.opacity = "1";
    bod4.style.opacity = "1";
    bod5.style.opacity = "1";
  } else {
    shot -= 1.5;
    bod1.style.opacity = "0";
    bod2.style.opacity = "0";
    bod3.style.opacity = "0";
    bod4.style.opacity = "0";
    bod5.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

zaytun.addEventListener("click", () => {
  let zay1 = document.querySelector(".zaytun");
  let zay2 = document.querySelector(".zaytun2");
  let zay3 = document.querySelector(".zaytun3");
  let zay4 = document.querySelector(".zaytun4");
  let zay5 = document.querySelector(".zaytun5");

  if (zaytun.checked) {
    shot += 1;
    zay1.style.opacity = "1";
    zay2.style.opacity = "1";
    zay3.style.opacity = "1";
    zay4.style.opacity = "1";
    zay5.style.opacity = "1";
  } else {
    shot -= 1;
    zay1.style.opacity = "0";
    zay2.style.opacity = "0";
    zay3.style.opacity = "0";
    zay4.style.opacity = "0";
    zay5.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

ketchup.addEventListener("click", () => {
  let ket1 = document.querySelector(".ketchup");
  let ket2 = document.querySelector(".ketchup2");

  if (ketchup.checked) {
    shot += 1;
    ket1.style.opacity = "1";
    ket2.style.opacity = "1";
  } else {
    shot -= 1;
    ket1.style.opacity = "0";
    ket2.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

mayanez.addEventListener("click", () => {
  let may1 = document.querySelector(".mayanez");
  let may2 = document.querySelector(".mayanez2");

  if (mayanez.checked) {
    shot += 1;
    may1.style.opacity = "1";
    may2.style.opacity = "1";
  } else {
    shot -= 1;
    may1.style.opacity = "0";
    may2.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

qoziqorin.addEventListener("click", () => {
  let qoz1 = document.querySelector(".qoziqorin");
  let qoz2 = document.querySelector(".qoziqorin2");
  let qoz3 = document.querySelector(".qoziqorin3");

  if (qoziqorin.checked) {
    shot += 2;
    qoz1.style.opacity = "1";
    qoz2.style.opacity = "1";
    qoz3.style.opacity = "1";
  } else {
    shot += 2;
    qoz1.style.opacity = "0";
    qoz2.style.opacity = "0";
    qoz3.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});

kolbasa.addEventListener("click", () => {
  let kol1 = document.querySelector(".kolbasa");
  let kol2 = document.querySelector(".kolbasa2");
  let kol3 = document.querySelector(".kolbasa3");
  let kol4 = document.querySelector(".kolbasa4");

  if (kolbasa.checked) {
    shot += 3;
    kol1.style.opacity = "1";
    kol2.style.opacity = "1";
    kol3.style.opacity = "1";
    kol4.style.opacity = "1";
  } else {
    shot -= 3;
    kol1.style.opacity = "0";
    kol2.style.opacity = "0";
    kol3.style.opacity = "0";
    kol4.style.opacity = "0";
  }
  obw.textContent = `${shot}$`;
});
