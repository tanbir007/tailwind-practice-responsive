
const numbers =[1,15,2,3,10]

// reduce
// const total = numbers.reduce((sum,num)=>sum+num,0)
// console.log(total);

//forOf
// const numFunction = (numbers) =>{
//      let output =[]
//     for (const  num of numbers) {
//         const sum =num *2

//         output.push(sum)
        
//     }

//     return output;
// }

//Map
// const numFunction =numbers.map(n=>n*10)
// console.log(numFunction);
// const x =numFunction(numbers)
// console.log(x);

const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }

    const {price} = product.price;
    console.log(price);