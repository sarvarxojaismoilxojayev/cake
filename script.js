const lvlNum = document.querySelector(".header__timer-extra")
let time = 10
const lvlUp = () => {
    lvlNum.innerHTML++
        if (lvlNum.innerHTML < 100) {
            setTimeout(lvlUp, time)
        }
}

lvlUp()

const PRODUCTS = {
    Фруктовый: {
        name: "Фруктовый",
        price: 200000,
        kcall: 220,
        amount: 0,
        get getPrice() {
            return this.price * this.amount
        },
        get getKcall() {
            return this.kcall * this.amount
        },
    },
    Баунти: {
        name: "Баунти",
        price: 420000,
        kcall: 240,
        amount: 0,
        get getPrice() {
            return this.price * this.amount
        },
        get getKcall() {
            return this.kcall * this.amount
        },
    },
    Торт: {
        name: "Торт",
        price: 145000,
        kcall: 260,
        amount: 0,
        get getPrice() {
            return this.price * this.amount
        },
        get getKcall() {
            return this.kcall * this.amount
        },
    },
}

const productsBtn = document.querySelectorAll(".main__product-btn")

const handleChoose = (e) => {
    const clickedButton = e.currentTarget
    const plusOrMinus = clickedButton.getAttribute("data-symbol")
    const product = clickedButton.closest(".main__product")
    const productName = product.getAttribute("id")
    const productNum = product.querySelector(".main__product-num")
    const productPrice = product.querySelector(".main__product-price span")
    const productKcall = product.querySelector(".main__product-kcall span")

    if (plusOrMinus === "+") {
        PRODUCTS[productName].amount++
    } else if (PRODUCTS[productName].amount > 0) {
        PRODUCTS[productName].amount--
    }

    productNum.innerHTML = PRODUCTS[productName].amount
    productPrice.innerHTML = PRODUCTS[productName].getPrice
    productKcall.innerHTML = PRODUCTS[productName].getKcall
}


for (let i = 0; i < productsBtn.length; i++) {
    const btn = productsBtn[i]
    btn.onclick = handleChoose
}


const addCart = document.querySelector('.addCart')
const receiptWrapper = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptContent = document.querySelector('.receipt__window-out')
const receiptPay = document.querySelector('.receipt__window-btn')


addCart.onclick = writeReceipt

function writeReceipt() {
    receiptWrapper.style.display = 'flex'
    setTimeout(() => (receiptWrapper.style.opacity = '1'))
    setTimeout(() => (receiptWindow.style.top = '20%'), 250)

    const addedProducts = []
    for (const key in PRODUCTS) {
        const product = PRODUCTS[key]
        if (product.amount) addedProducts.push(product)
    }

    let totalPrice = 0
    let totalKcall = 0

    let receiptOut = '<div class="products__list">'
    for (let i = 0; i < addedProducts.length; i++) {
        const product = addedProducts[i]
        totalPrice += product.getPrice
        totalKcall += product.getKcall
        receiptOut += `
        <div class="products__item">
        <span class="products__num">${i+1}</span>
        <span class="products__name">${product.name}</span>
        <span class="products__amout">${product.price} x ${product.amount}</span>
        <span class="products__summ">${product.getPrice}</span>
    </div>`
    }

    receiptOut += `
    </div>
     <div class="products__total">
         <span class="products__total-kcall"><output>${totalKcall}</output>Calories</span>
         <span class="products__total-price">Price: <output>${totalPrice}</output>Sum</span>
     </div>`
    receiptContent.innerHTML = receiptOut

}

receiptPay.onclick = closeReceipt

function closeReceipt() {
    location.reload()
}








































// const a = {
//     1:'hello',
//     2:'world',
//     3:'good',
//     4:'bye'
// }

// for(var i = 1; i < 5; i++){
//     console.log(a[i])
// }

// const array = [
//     'hello',
//     'world',
//     'good',
//     'bye'
// ]

// console.log(array)

// const users = ['Said', 'Doniyor', 'Aziz', 'Feruz']

// const text = 'Hell How are you'
// console.log(text.split(' '))
// // console.log(text[5])

// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.push(6)
// console.log(arr)