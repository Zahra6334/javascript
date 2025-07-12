function SayiUret(){
    console.log(Math.ceil(Math.random() * 49)) //1ile 49 sayilar arasında sayılar seçilecektir
}
SayiUret()

var sayi1=Math.ceil(Math.random() *49)
var sayi2=Math.ceil(Math.random() *49)
var sayi3=Math.ceil(Math.random() *49)
var sayi4=Math.ceil(Math.random() *49)
var sayi5=Math.ceil(Math.random() *49)
var sayi6=Math.ceil(Math.random() *49)
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6) 

function SayiUret(){
  return console.log(Math.ceil(Math.random() * 60))// 1 ile 60 arasında sayılar secilecektir
}
SayiUret()

var sayi1=SayiUret()
var sayi2=SayiUret()
var sayi3=SayiUret()
var sayi4=SayiUret()
var sayi5=SayiUret()
var sayi6=SayiUret()
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6)

//  function prametre yolmak,  sabit bir değişken arasında değilde isteyen sayı arasında değişken secsin

function SayiUret(ustlimit){
 return console.log(Math.ceil(Math.random() * ustlimit));// 1 ile 60 arasında sayılar secilecektir
}
SayiUret()
// her sayi için en ustlimit farklı ve ona göre random sayi secilecektir
var sayi1=SayiUret(45)// sayi1 için en uslimit 45 45 ten buyuk sayı secilmez
var sayi2=SayiUret(48)// sayi2 içinde en ustlimit 48 
var sayi3=SayiUret(49)
var sayi4=SayiUret(60)
var sayi5=SayiUret(30)
var sayi6=SayiUret(20)
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6)

function SayiUret(ustlimit=45){
 return console.log(Math.ceil(Math.random() * ustlimit));// 1 ile 60 arasında sayılar secilecektir
}
SayiUret()
// her sayi için en ustlimit farklı ve ona göre random sayi secilecektir
var sayi1=SayiUret(100)// bu sayi için 100 belirlenimiş en ustlimmiti belii  ama diğer sailar için belirlenen default sayi olan 45 olacak 
var sayi2=SayiUret()
var sayi3=SayiUret()
var sayi4=SayiUret()
var sayi5=SayiUret()
var sayi6=SayiUret()
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6)
 //eger default sayı belirlenmemiş  ise sadece sayi1 için sayi random secilir diğerler NaN  yani undefined olur
function SayiUret(ustlimit){
  return console.log(Math.ceil(Math.random() * ustlimit))
}
SayiUret()

var sayi1=SayiUret(100)
var sayi2=SayiUret()
var sayi3=SayiUret()
var sayi4=SayiUret()
var sayi5=SayiUret()
var sayi6=SayiUret()
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6)


// değişkenler eger değişken globalde tanımlanmiş ise her yerde erişilir ama sadece function içinde tanımlanmiş ise erişilmez 
 var degisken ="deger"
function SayiUret(ustlimit=49){
    console.log(degisken)
  return console.log(Math.ceil(Math.random() * ustlimit))
}
console.log(degisken)// tanımladım sonra yazıdım ve erişebilir
//console.log(ustlimit) //suan ilk bunu yazıdım sadece buraya yazarsak hata verir çünkü tanımlı değil
SayiUret()

var sayi1=SayiUret()
var sayi2=SayiUret()
var sayi3=SayiUret()
var sayi4=SayiUret()
var sayi5=SayiUret()
var sayi6=SayiUret()
console.log('Kolon:' + sayi1 +' '+sayi2 +' '+sayi3 +' '+sayi4 +' '+ sayi5 +' '+ sayi6)
