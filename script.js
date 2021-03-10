let out = document.querySelector('.output')
let buttons = document.querySelectorAll('.calculator button')

// переменная которая хранит вводимое число
let num = ''
// переменная которая хранит все выражение
let expression = ''
// переменная которая позволяет при первом знаке ничего не делать
let checkNum = false
// перебираем все кнопки
let operations = ['+', '-', '/', '*']
buttons.forEach((btn) => {
  // на каждую кнопку навешиваем событие клика
  btn.addEventListener('click', () => {
    // содержимое кнопки на которую кликнули
    let currentValue = btn.textContent
    // если кликнули на кнопку очистить
    if (currentValue === 'c') {
     clear()
      // если кликнули на кнопку равенства
    } else if (currentValue === '=') {
      result()
      // если кликнули на кнопку с операцией
    } else if (operations.includes(currentValue)) {
      // проверка, если нажали на знак первый раз, то ничего считать не надо
     if (operations.includes(expression[expression.length - 1])){
       expression = expression.slice(0, expression.length -1) + currentValue
     } else {
       if (checkNum === false) {
         expression = expression + currentValue
         checkNum = true
         // иначе считаем результат выражения, вставляем его в output
         // и только потом добавляем новый знак в выражение
       } else {
         out.textContent = eval(expression)
         expression = eval(expression) + currentValue
         console.log(expression)
       }
     }
      // очищаем переменную с число, т.к ожидаем ввод нового
      num = ''
      // если нажали на цифру
    } else {
      addNumber(currentValue)
    }
  })
})


function clear() {
  out.textContent = '0'
  expression = ''
  num = ''
}

function result() {
  out.textContent = eval(expression)
  num = ''
}

function addNumber(currentValue) {
  // добавили цифру к предыдущей
  num = num + currentValue
  // добавили цифру к выражению
  expression = expression + currentValue
  // вывели число на экран
  out.textContent = num
}