// FEITA COM FUNÇÃO FÁBRICA

// function criaCalculadora() {
//   return {
//     display: document.querySelector(".display"),

//     inicia() {
//       this.cliqueBotoes();
//       this.pressionaBackSpace();
//       this.pressionaEnter();
//     },

//     pressionaBackSpace() {
//       this.display.addEventListener("keydown", (e) => {
//         if (e.keyCode === 8) {
//           e.preventDefault();
//           this.clearDisplay();
//         }
//       });
//     },

//     pressionaEnter() {
//       this.display.addEventListener("keyup", (e) => {
//         //uso do arrow function e para nao perder o this
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert("Conta inválida");
//           return;
//         }

//         this.display.value = String(conta);
//       } catch (e) {
//         alert("Conta inválida");
//         return;
//       }
//     },

//     clearDisplay() {
//       this.display.value = "";
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes() {
//       document.addEventListener("click", (e) => {
//         const el = e.target;

//         if (el.classList.contains("btn-num")) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if (el.classList.contains("btn-clear")) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains("btn-del")) {
//           this.apagaUm();
//         }

//         if (el.classList.contains("btn-eq")) {
//           this.realizaConta();
//         }

//         this.display.focus();
//       });
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     },
//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

// FEITA COM FUNÇÃO CONSTRUTORA

class Calculadora {
  constructor() {
    // Atributos ou métodos públicos | pode ser acessado de fora utilizando .
    this.display = document.querySelector(".display");
    this.inicia = function () {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    };
    this.pressionaBackSpace = function () {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    };
    this.pressionaEnter = function () {
      this.display.addEventListener("keyup", (e) => {
        //uso do arrow function e para nao perder o this
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
    this.realizaConta = function () {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    };
    this.clearDisplay = function () {
      this.display.value = "";
    };
    this.apagaUm = function () {
      this.display.value = this.display.value.slice(0, -1);
    };
    this.cliqueBotoes = function () {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }

        this.display.focus();
      });
    };
    this.btnParaDisplay = function (valor) {
      this.display.value += valor;
    };
  }
}

const calculadora = new Calculadora();
calculadora.inicia();
