import dayjs from "dayjs"
const form = document.querySelector("form")
const clienteName = document.getElementById("client")
const selectedDate = document.getElementById("date")


// Data atual para a input para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregar a página
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clienteName.value.trim()
    
    if(!name){
      return alert("Informe o nome do cliente!")
    }

    // Recuperando o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    // Recuperando o horário selecionado
    if(!hourSelected){
      return alert("Selecione a hora.")
    }

    // Recuperar somente a hora 
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gerar ID
    const id = new Date().getTime()

    console.log({
      id, name, when
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }

}