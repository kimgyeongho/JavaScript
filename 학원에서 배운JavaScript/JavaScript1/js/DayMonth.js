var data = new Date();
var hour1 = data.getMonth();
var hour2 = data.getDay(); 
var hour3 = data.getHours();
document.write("현재는"+(hour1+1)+"월입니다.<br/>");
switch(hour2){
    case 0 :
        document.write("월요일 입니다.<br/>");
        break;
        case 1 :
        document.write("화요일 입니다.<br/>");
        break;
        case 2 :
        document.write("수요일 입니다.<br/>");
        break;
        case 3 :
        document.write("목요일 입니다.<br/>");
        break;
        case 4 :
        document.write("금요일 입니다.<br/>");
        break;
        case 5 :
        document.write("토요일 입니다.<br/>");
        break;
        case 6 :
        document.write("일요일 입니다.<br/>");
        break;
}
if(hour3 <12){
    document.write("오전입니다")
}else{
    document.write("오후입니다")
}