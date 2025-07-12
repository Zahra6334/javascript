// conditionals= şart blokları
var not=60 //alınan not yüksekse şarttan
if(not>50)
{
    console.log('geçtiniz')//gecer
}
if(not<=50)
{
    console.log('kaldınız')
}

var not=40//alınan not 
if(not>50)
{
    console.log('geçtiniz')
}
if(not<=50)
{
    console.log('kaldınız')//kaldınız
}

var not=40//alınan not  düşükse şarttan
if(not>50)
{
    console.log('geçtiniz')
}
if(not<=50)
{
    console.log('kaldınız')//kaldınız
}

 var not =70//alınan not 
if(not>50)
{
    console.log('geçtiniz')//50den buyukse bunu yap
}
else //burada not 50den kucukse bunu yap
{
    console.log('kaldınız')
}


var not =45//alınan not 
if(not>50)
{
    console.log('geçtiniz')//50den buyukse bunu yap
}
else if(not>=40)//50 ile 40 arasında bunu yap
{
    console.log('bütünlemeye kaldınız')
}
else{//40tan kucukse bunu yap
    console.log('kaldınız')
}