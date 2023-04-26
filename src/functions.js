//FUNCTIONS
/*function addToCart(productName="elma",quantity) {//elma burada default değer
    console.log("sepete eklendi!: ürün :"+productName+" adet:"+quantity);
}
//addToCart()
addToCart(10);//böyle bir durumda 10 ilk parametreye eklenir .bunun yerine default belirttiğin productName i en sona yaz
//addToCart(15);*/

/*function addToCart(quantity,productName="elma"){
    console.log("sepete eklendi!: ürün :"+productName+" adet:"+quantity);

}
//addToCart(10);

let sayHello=()=>{
    console.log("hello world")
}
sayHello()


let sayHello2=function(){
    console.log("hello world 2");
}
sayHello2()*/

/*function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("elma",2,20)
addToCart2("armut",3,15)
addToCart2("elma",6,26)*/


/*let product1 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
}

function addToCart3(product) {
    console.log("ürün:" + product.productName + " adedi:" + product.quantity + " fiyat:" + product.unitPrice)
}*/
//obje notasyonu

/*addToCart3(product1)
let product2 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
}
let product3 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
}
product2=product3
product3.productName="mandalina";
console.log(product2.productName)//ekrana mandalin yazar. obje:referans tipdir*/

/*let sayi1=50
let sayi2=100
sayi1=sayi2;
sayi2=150
console.log(sayi1)//number=değer tip olfukları için sayi1 100 değerini alır ve sayi2 ile iletişimini koparır*/


function addToCart4(products){
    console.log(products)

}
//array içinde objelerde tutulabilir
let products =[
    {productName:"Elma",quantity:5,unitPrice:20},
    {productName:"Armut",quantity:5,unitPrice:20},
    {productName:"Karpuz",quantity:5,unitPrice:20}
]
//addToCart4(products)

/*function add(bisey,...numbers){//...numbers array haline gelir=REST OPERATÖRÜ.burada elinde bir arary olmadığına dikkat et
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
      total=total+numbers[i]
    }
   // console.log(total)
   // console.log(bisey)
   
}

add(20,30)
add(20,30,40,510,50)*/



/*
let numbers=[10,20,30,40,50,60]
console.log(Math.max(...numbers))//sana gelen numbers arrayini ayırmaya yarar*/

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"iç anadalu",population:"20M"},
    {name:"marmara",population:"30M"},
    {name:"karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["istanbul","bursa"],
        ["sinop","Trabzon"],
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
let newproductName,newquantity,newunitPrice
({ productName:newproductName,quantity:newquantity,unitPrice:newunitPrice} 
={productName:"Elma",quantity:5,unitPrice:20})
console.log(newproductName)