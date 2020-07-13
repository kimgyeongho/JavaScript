//배열 
var i =5,i1 =5, i2 = 0; 
var arr = [];

for(var i3=0; i3<i; i++){
  arr[i3] =[];
  i2= i2+1;
  for(var j3=0; j3<i2; j3++){
    arr[i3][j3] = i2;
  } 
}
























for(var i3=0 ;i3<i; i++){
  for(var j3=0; j<i2; j3++){
    document.write(arr[i3][j3])
  }
  document.write("\n")
}
