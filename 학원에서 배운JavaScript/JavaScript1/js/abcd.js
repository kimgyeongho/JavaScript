//사용자로 부터 점수 입력 
//90점 이상이면 A
//89~80점이면 B C D F
var num1 =prompt("점수","점수를 입력해주세요"); 

if(num1>=90){
    document.write("A입니다.")
}else{
   document.write("B C D F 입니다.")
}
