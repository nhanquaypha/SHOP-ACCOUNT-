function myevent(){
   /* alert("WEB GIAO DỊCH ẢO !!");*/
    var obj  = document.getElementById('left');
    obj.onmouseover = main_left_onover; /*top nap the thang*/
} 
function main_left_onover(){
   var obj = document.getElementById('left');
   obj.innerHTML = "DỮ LIỆU ẢO ĐỪNG TIN !!";
   obj.setAttribute('style','background: white');
}
function main_left_out(){
    var obj = document.getElementById('left');
    obj.setAttribute('style','background: white');
}