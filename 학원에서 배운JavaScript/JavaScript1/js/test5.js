//1~100까지 3의 배수의 합
var sum = 0
for(var i= 0; i<=100;i++){
    if(i%3 ==0){
    sum+=i
    }
}
document.write(sum)
