// 사용자에게 숫자를 입력 받아 양수,0,음수를 구분하는 프로그램 
var input = prompt("받아 양수,0,음수중에 하나를 넣어주세요");

if( input>1){
    document.write(input+"양수입니다")
}else if(input=0){
    document.write("0")
}else{
    document.write(input+"음수입니다")
}