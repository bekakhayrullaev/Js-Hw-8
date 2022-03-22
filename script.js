// Добавление машины в арр

// 1 Спрашивается название
// 2 Если отвечу то след вопрос (прайс)
// 3 Год машины 
// 4 Если год машины меньше 2010
// то цена падает на 20%
// и добавляется в массив
// 5 Перед добавлением он должен показать всю информацию которую мы ввели 
// и спросить добавить или нет

let discount = 20
let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
        
    }
]

for(let item of arr_cars){
    if(item.year <= 2010){
        item.salePrice = item.price - (discount * item.price / 100)
    } else {
        item.salePrice = item.price
    } 
}


let car = prompt('Марка машины ?')
let price = +prompt('За сколько хотите продать ?')
let year  = +prompt('Год машины?')

if(confirm(`
  Нaзвание: ${car} 
  Стоимость: ${price} 
  Год: ${year}
 `) == true){
    let salePrice = price
    if(year <= 2010){
       salePrice = price - (discount * price / 100)
    } 
    let newCar = {
        car: car,
        price: price,
        year: year,
        salePrice: salePrice
       
    }
    arr_cars.push(newCar)
   

} else {
  
} 

console.log(arr_cars);