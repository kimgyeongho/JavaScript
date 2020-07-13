// 사용자에게 숫자를 입력 받아 홀수와 짝수를 구분하는 프로그램
var input1 = prompt("숫자를 입력해주세요");
var input2 = input1/2;
if(input2=0){
    document.write(input1+"홀수입니다");
}else{
    document.write(input1+"짝수입니다");
}
