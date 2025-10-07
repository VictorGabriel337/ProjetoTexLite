var speed = 0;
var prevSpeed = 0;
var currentScale = 1;

function increaseSpeed() {
    if (speed < 180) {
        prevSpeed = speed;
        speed = speed + 10;
        addClass();
        currentScale = currentScale + 1;
        changeActive();
        changeText();

    }
}

function decreaseSpeed() {
    if (speed > 0) {
        prevSpeed = speed;
        speed = speed - 10;
        addClass();
        currentScale = currentScale - 1;
        changeActive();
        changeText();
        
    }
}

function addClass() {
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el) {
        if (el.classList.contains(prevClass)) {
            el.classList.remove(prevClass);
        }
        el.classList.add(newClass);
    }
}



function changeActive() {
    let allScales = document.querySelectorAll('.speedometer-scale');
    let scaleIndex = speed / 10;

    // Remove 'active' de todos se for zero
    if (speed === 0) {
        allScales.forEach(el => el.classList.remove('active'));
    } else {
        allScales.forEach((el, idx) => {
            if (idx < scaleIndex +1 && speed > 0) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
}



function changeText(){
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;
}




window.addEventListener("load", () => {
  // Seleciona todos os ponteiros
  const centerArrow = document.querySelector(".arrow-wrapper");
  const leftArrow = document.querySelector(".arrow-wrapper-left");
  const rightArrow = document.querySelector(".arrow-wrapper-right");

  // Classe inicial e máxima (ajuste conforme seu CSS)
  const centerStart = "speed-0";
  const centerMax = "speed-180"; // você tem até speed-180 no CSS

  const leftStart = "speed-left-0";
  const leftMax = "speed-left-120"; // você pode criar essa se quiser mais amplitude

  const rightStart = "speed-right-0";
  const rightMax = "speed-right-90"; // ajuste conforme necessário

  // Função para animar via troca de classes
  const animatePointer = (element, startClass, maxClass) => {
    if (!element) return;

    // Remove qualquer classe anterior de rotação
    element.classList.remove(startClass);
    element.classList.add(maxClass);

    // Volta ao estado inicial depois de 1,5s
    setTimeout(() => {
      element.classList.remove(maxClass);
      element.classList.add(startClass);
    }, 1500);
  };

  // Executa todos com pequeno atraso após carregar
  setTimeout(() => {
    animatePointer(centerArrow, centerStart, centerMax);
    animatePointer(leftArrow, leftStart, leftMax);
    animatePointer(rightArrow, rightStart, rightMax);
  }, 500);
});
