// // Let
// let name = 'Khanh';
// {
//     let name = 'Bao';
//     console.log(name); //Bao
// }
// console.log(name); // Khanh


// // Const
// const Pi = 3.14;


// // Arrow function
// // function expression
// let x = function(a, b) {
//     return a + b
// } 

// // function expression using arraow function
// let y = (a, b) => a + b;


// // Map 

// let arr = [1, 2, 3, 4, 5, 6]
// // Tăng phần tử mảng lên gấp đôi
// // C1: for-loop
// for (let key of arr) {
//     console.log(key*2);
// }
// console.log(arr);
// // C2: dùng map
// let arr1 = arr.map((item) => {
//     return item*2
// })
// console.log(arr1);


// // Filter
// let arr = [1, 2, 3, 4, 5, 6]
// // Trả về các phần tử lớn hơn 3
// let arr3 = arr.filter((item) => {
//     return item > 3
// })
// console.log(arr3);


// // Reduce
// arr.reduce(callback, [, initialValue])
// arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// // Ví dụ về reduce
// const value = 0;
// const number = [10, 20, 30];

// // tính tổng
// for (let i = 0; i < number.length; i++) {
//     value += number[i]
// } // value = 0, sau khi chạy xong hàm thì value = 60

// // Nếu sử dụng reduce
// const numbers = [5, 10, 15];
// const total = numbers.reduce((accumulator, item) => accumulator + item)
// // total = 30 mà ko cần phải khai báo thêm biến


// B1
const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    },
]

let animalName = animals.map((item) => {
    return item.name
})
console.log(animalName); 


// B2
var numbers = [1,2,3,4,5,6,7,8,9]
const evenNumbers = numbers.filter(num => {
    return num%2 === 0;
});
console.log(evenNumbers);

// B3
var strings = ["cat", "dog", "hat", "mat", "java"]
const at_strings = strings.filter(str => {
    return str.includes("at");
})
console.log(at_strings);

//  B4
const playerProfile = [
    { name: "Ronaldo", team: "MU?" },
    { name: "Messi", team: "Barca" },
    { name: "Neymar", team: "PSG" },
];
const modifyArray = data => {
    return data.reduce((obj, item) => {
        obj[item.name] = { team: item.team}
        return obj
    }, {})
}
const playerProfileModified = getMapFromArray(playerProfile)
console.log(playerProfileModified);