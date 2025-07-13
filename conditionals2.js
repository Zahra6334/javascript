var sayi1=10
var sayi2=2

if(sayi1==sayi2){
    console.log("eşit") //bir şey yazmaz çünkü eişt değil
}
var sayi1=10
var sayi2=10

if(sayi1==sayi2){
    console.log("eşit") //eişt yazar sayilar eişt çünkü
}

var sayi1=10
var sayi2=20
var sayi3=30
if(sayi1==sayi2==sayi3){// böyle bir şey yok 
    console.log("eşit") //bir şey yazmaz
}
// && and kullanırsak ancak olur
var sayi1=10
var sayi2=20
var sayi3=30
if(sayi1==sayi2 && sayi1==sayi3 ){
    console.log("eşit") 
}
// || veya kullanırsak bu iki şarttan biri sağlarsa çalişir
var sayi1=10
var sayi2=20
var sayi3=30
if(sayi1==sayi2 ||sayi1==sayi3 ){
    console.log("eşit") 
}
