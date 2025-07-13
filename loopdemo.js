function SayiUret(ustlimit =49){
 return console.log(Math.ceil(Math.random() * ustlimit));     
}
console.log(SayiUret())// rastgele 49 den küçük bir sayi uretır

// 6 kere çalişacak bu döngü ve 6 sayi uretecek
for(var i=1;i<=6;i++){
    console.log(SayiUret())
}
// diylimki 8 kolun oyunasın 8 demek 8 tane 6li sayi uretmek demek
for(var i=1;i<=8;i++){
    console.log("kolun")
    for(var j=1; j<=6;j++){
        console.log(SayiUret())
    }
}