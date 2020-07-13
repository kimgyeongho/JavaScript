//별
for(var i =1; i<=10; i++){
  for(var j =1; j<=i; j++){
    document.write("*")
  }
  document.write("<br/>")
  if (i == 5)
  break
  }
  var sum =0;
  for(var i = 1; i<=100; i++){
    if (i%3 ==0) {
      continue
    }
  sum +=i;
  }
document.write("3배 배수를 제외한 합계"+sum)

