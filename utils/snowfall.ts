const snowContent: string[] = ['&#10052', '&#10053', '&#10054']

const random = (num: number): number => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = (): string => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (count: number, parent: HTMLDivElement) => {
  for (var i = count; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)]
    parent.append(snow);
  }
}

export default createSnow
