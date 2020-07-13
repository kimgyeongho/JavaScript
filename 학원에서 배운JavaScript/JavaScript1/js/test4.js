//1~100까지 홀수합과 짝수합을 출력하시오
var sum =0
var sum1 =0
for(var input1=0; input1<=100;input1+=2){
   sum += input1;
   sum1 += input1-1;
   
}
document.write(sum+"짝수의 합")
document.write((sum1+1)+"짝수의 합")

