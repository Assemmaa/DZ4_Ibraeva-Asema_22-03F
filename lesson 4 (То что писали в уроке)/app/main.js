// // console.log('hi')
//JSON
// const obj = {
//     name: 'John',
//     age: 25
// }
//
// const data = JSON.stringify(obj)
// const newObj =JSON.parse(data)
// console.log(data, '1 step')
// console.log(obj, '2 step [obj => JSON]')
// console.log(newObj, '3 step[JSON => obj]')

//GET - POST - PUT - DELETE
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest() //создание вопроса [1]
    request.open("GET", "data.json") // объевление метода запроса  и указание пути [2]
    request.setRequestHeader("Content-type", "application/json") //указывание заголовка [3]
    request.send() //отправка запроса [4]
    request.addEventListener('load', () => {
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
        
    })
})
