const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Player {
  constructor(x, y, width, height) {
    this.x = 225;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.color = color;
  }
}
// PREFERI NAO COPIAR SOLUCOES PQ EU NAO ENTENDI COMO FAZER:

  // COMO CRIAR UM OBJECT DA IMAGEM QUE PODE SER CONTRALADO
  // COMO USAR PROPRIEDADES DA CLASSE


  window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const player = new Player(x, 50, 100, 100, "green");

  function startGame() {
    const car = new Image();
    car.src = `./images/car.png`;
    const img = new Image();
    img.src = `./images/road.png`;
    img.onload = () => {
      let xPos = 225;
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(car, xPos, 620, 50, 80);
      ctx.drawImage(player, x, 620, 50, 80)
      document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowLeft") {
          car.x += 1;
        } else if (event.key == "ArrowRight") {
          car.x -= 1;
        }
      });
    };
  }
};
