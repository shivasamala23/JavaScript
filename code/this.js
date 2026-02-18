// This keyword is special Keyword it changes the nature will changes thats why we use This keyword

//global scope

console.log(this)

//function inside

function abcd(){
    console.log(this)
}
abcd();

//inside Method
// ????? if this function is arrow it will loose the Value

let obj={
    name:"shiva",   
    age:50,
    fun:function(){  
        console.log(this.age)
    }

}
obj.fun();

//inside Event 

document.querySelector("h1").addEventListener("mouseover", function (){
    this.style.color="red"
})
document.querySelector("h1").addEventListener("mouseout", function (){
    this.style.color="black"
})

// inside the class it will create a empty Object
class Abcd{
   constructor(){
    this.a=12
   }
}
let val = new Abcd()
console.log(val)