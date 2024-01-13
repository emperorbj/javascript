// //ES 6 classes //
// class User {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     calcAge(){
//         const dateOfBirth = 2023 - `${this.age}`
//         return dateOfBirth
//     }
// //GETTERS
//     get fullDetail(){
//         return `${this.name} is ${this.age} years old`
//     }
// //SETTERS
//     set newAge(presentAge){
//         return presentAge = this.age
//     }
// }

// // creating instances//
// const user1 = new User('Diego',45)

// console.log(user1)
// console.log(user1.calcAge())
// console.log(user1.fullDetail)
// console.log(user1.presentAge = 60)
// console.log(user1)

// / //  / / / / / / / / / / / / / / / / / / / / / / /  // / / / / / / / / / / / /  / / / / / / / /


// API
const container = document.querySelector('.api-image')
const error = document.querySelector('h2')
const image = document.querySelector('img')
const url = ' https://nekos.best/api/v2/hug?amount=2';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.results[1].url)
    let imageurl = data.results[1].url

    // const html = `
    // <div class="api-image">
    //     <img src="${imageurl}" alt="">
    // </div>`

    // OR

    image.src = data.results[1].url

    // container.insertAdjacentHTML('beforeend',html)

})
// / / / / / / /  /  // / / / / / / /  ERROR HANDLING//
.catch(err => {
    error.innerHTML = `error ${err.message} was detected`
    console.error(`${err.message}`)
})
