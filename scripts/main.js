// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world'

// 변수 선언하는 명령어 : 파이선은 변수 선언, 값 할당을 동시에 진행함
var myVariable
// 값 할당
myVariable =10
// 출력
// console.log(myVariable)

// ES6 이전 버전 (변수 등 사용할 때): let은 이전 버전에서 주로 사용. 최근에는 let을 주로 사용
// var myV1 = 1

//변경 가능한 변수 사용할 때 let 사용
// let myV2 = 2

// 불변 가능한 상수 사용할 때 const 사용
// const myV3 = 3

// var은 재할당 가능
// var myV1 = 10
// myV1 = 20

// let은 재선언 불가능 할당은 가능
// let myV2=20
// myV2 = 20

//const는 재선언 불가능, 재할당도 불가능
//const myV3 = 30
// myV3 = 30
// console.log(myV1, myV2, myV3)

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3, 4, 5]
let e = {
    'a':10,
}

console.log(a,b,c,d,e)

d.push(10)
console.log(d)

e.name = 'kim'
e.location = 'seoul'
console.log(e)

let myVarA = '10'
let myVarB = 10

// console.log(myVarA == myVarB)
// console.log(myVarA === myVarB)

// 조건문

// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//     alert('i love choco')

// } else if (icecream = 'vanila') {
//     console.log('vanila')
// } else {
//     console.log(':(')
// }

// 반복문
console.log('while')
let i = 0
while (i < 5) {
    console.log(i)
    // i += 1
    i++
}

//for문 (반복문)

console.log('for1')
for (let i=0 ; i<5 ; i++) {
    console.log(i)
}

console.log('for2')
let myArray = [1, 2, 3, 4, 5]
for (let i=0 ; i<myArray.length ; i++){
    console.log(myArray[i])
}

//인덱스 순서 접근
console.log('for in')
for (let item in myArray) {
    console.log(item)
}
//값에 대한 접근
console.log('for of')
for (let item of myArray) {
    console.log(item)
}

console.log('forEach')
myArray.forEach( function(item, index, array){
    console.log(item, index, array)
})

// 함수

function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}

// console.log(multiply1(2,3))

// 함수 표현식
let multiply2 = function(num1, num2){
    let result = num1 * num2
    return result
}

console.log(multiply2(2,3))

//화살표 함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}

console.log(multiply3(3,4))

// 화살표 함수 생략 1
// { } 안에 코드가 return하는 문장이 하나만 있는 경우
// {}, return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2

console.log(multiply4(8,9))

//화살표 함수 생략 2
// ( ) 안에 매개변수가 하나만 있다면 ( )를 생략 가능
let multiply5 = (num) => {return num*2}
console.log(multiply5(10))

//이벤트 (화면을 클릭했을 때 이벤트 나오게 하는 법)
// document.querySelector('html').onclick = function(){
//     alert('ouch!!!')
//     console.log('hello')
// }

let myH1 = document.querySelector('h1')
// addEventListener(무슨 일이 일어났을 때 알려주는 인자=type, 무슨 행동을 할지 알려주는 인자=listener)
myH1.addEventListener('click', function(e){
    console.log('hello')
    console.log(e)
    console.log(e.target)
})

let myImage = document.querySelector('img')
myImage.addEventListener('click', function(e){
    let src = myImage.getAttribute('src')

    if (src==='images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/d.jfif')
    } else (
        myImage.setAttribute('src', 'images/firefox-icon.png')
    )
})

// 비동기 
// console.log('hi')
// setTimeout(function(){console.log('1234')}, 1000) //콜백 함수
// console.log('bye')

// 비동기 처리 방식 1 (promise 패턴)
const URL = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))
console.log('after fetch')

// 비동기 처리 방식 2 (async await)
async function fetchAndPrint(){
    let res = await fetch(URL)
    let result = await res.json()

    console.log(result)
}
fetchAndPrint()

let liList = document.querySelectorAll('li')

console.log(liList)

liList.forEach(function(li){
    li.style.color = 'red'
    li.style.backgroundColor = 'green'
})

liList.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
    })
})