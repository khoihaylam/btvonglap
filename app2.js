let browser=String(prompt("nhập chuỗi"))
switch(browser){

    case "edge":
        alert("you got the edge");
        break;
    case "chrome":
    case "Firebox":
    case "safari":
    case "opera":
        alert("okay we support these browser too");
        break;    
    default:
        alert("we hope that this page looks ok!")          
}
//bài 2
var a=Number(prompt("nhập a:"))
switch(a){
    case 0:
        alert('0')
        break;
    case 1:
        alert('1')    
    case 2:
    case 3:
        alert('2,3')        
}
//bài 3
var e=Number(prompt("nhập e:"))
if(e>0){
    alert('1')
}
else if(e<0){
    alert('-1')
}
else{
    alert('0')
}
//kiểm tra năm nhuận
var c=Number(prompt("nhập c:"))
if (c%4==0&& c%100!=0){
    alert("là năm nhuận")
}
else if(c%100==0&& c%400==0){
    alert("là năm nhuận")
}
else if(c%100==0&& c%400!=0){
    alert("k phải là năm nhuận")
}
else{
    alert("k phải là năm nhuận")
}
//bài tập vòng lặp
//bài 1
for (let i=1;i<=100;i++){
    if (i==99){
    }
    console.log("thông báo đã hoàn thành")
}
//bài 7 tính giai thừa
let n=Number(prompt("nhập số nguyên dương n:"))
if (n<0){
    alert("vui lòng nhập lại")
}
else{
    var giaithua=1;
    for (let i=1;i<=n;i++){
        giaithua=giaithua*i
        console.log(giaithua)
    }
}
//bài 5
let tong=0;
let cout=0;
while (cout<30){
    cout=cout+1;
    if (cout%7==0){
        tong=tong+cout
    }



}
console.log(tong)

//bai 6
for (let i=1;i<=100;i++){
    switch (i%3){
        case 0:
            console.log("fizz")
    }
    switch (i%5){
        case 0:
            console.log("buzz")
    }
    switch (i%15){
        case 0:
            console.log("fizzbuzz");
        default:
            console.log("còn lại th")
    }
 }
//bài 2
function fibonassi(n){

if (n<0){
    return -1;
}
else if (n==0||n==1){
    return n;
}
else{
    return fibonassi(n-1)+fibonassi(n-2)
}
}
for (let i=0;i<=10;i++){
    console.log(fibonassi(i))
}
//bài 3
function fibonassi(k){
    if (k==0||k==1){
    return k;
    }
    else{
        return fibonassi(k-1)+fibonassi(k-2);
    }
}
for (let i=0;i<=11;i++){
    if (fibonassi(i)%5==0){
        console.log(fibonassi(i))
    }
}
//bài 4
function fibonassi(c){
    if (c==0||c==1){
        return c;
    }
    else{
        return fibonassi(c-1)+fibonassi(c-2);
    }
}
var sum=0
for (let i=0;i<=10;i++){
    sum=sum+fibonassi(i)
  
}
console.log(sum)





