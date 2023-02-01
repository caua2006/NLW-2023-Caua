const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString().slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  alert("Dia incluso com sucesso")
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("NLWSETUP", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSETUP")) || {}
nlwSetup.setData(data)
nlwSetup.load()

// let gastosFamily = {
//   receitas: [45, 78, 34],
//   despesas: [67, 56, 12],
// }
// function calculo(ganhos, percas) {
//   let somaDosGanhos = 0
//   let somaDasPercas = 0
//   for (let num of ganhos) {
//     somaDosGanhos += num
//   }
//   for (let num of percas) {
//     somaDasPercas += num
//   }
//   let saldo = somaDosGanhos - somaDasPercas
//   if (saldo >= 0) {
//     return "O saldo é positivo, pois é " + saldo
//   } else if (saldo < 0) {
//     return "O saldo é negativo, pois é " + saldo
//   }
// }

// console.log(calculo(gastosFamily.receitas, gastosFamily.despesas))

// const booksByCategory = [
//   {
//     category: "Riqueza",
//     books: [
//       {
//         title: "Os segredos da mente milionária",
//         author: "T. Harv Eker",
//       },
//       {
//         title: "O homem mais rico da Babilônia",
//         author: "George S. Clason",
//       },
//       {
//         title: "Pai rico, pai pobre",
//         author: "Robert T. Kiyosaki e Sharon L. Lechter",
//       },
//     ],
//   },
//   {
//     category: "Inteligência Emocional",
//     books: [
//       {
//         title: "Você é Insubstituível",
//         author: "Augusto Cury",
//       },
//       {
//         title: "Ansiedade – Como enfrentar o mal do século",
//         author: "Augusto Cury",
//       },
//       {
//         title: "Os 7 hábitos das pessoas altamente eficazes",
//         author: "Stephen R. Covey",
//       },
//     ],
//   },
// ]
// let autores = []
// for (let category of booksByCategory) {
//   for (let livros of category.books) {
//     autores.push(livros.author)
//     console.log(autores)
//     console.log(livros.author)
//   }
// }
