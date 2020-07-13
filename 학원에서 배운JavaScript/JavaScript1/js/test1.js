var data = new Date();
var hour3 = data.getHours();

//11시 미만 아침먹을 시간
//오후 3시 미만 점심 먹을 시간
//오후 3 이후 저녁 먹을 시간 
if(hour3 < 11){
    document.write("아침 먹을 시간 ");
}else if(hour3 <15&& hour3 > 11){
    document.write("점심 먹을 시간");
}else
document.write("저녁 먹을 시간"); 