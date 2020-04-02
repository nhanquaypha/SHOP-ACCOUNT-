$(document).ready(function () {
    var btb= document.getElementById('bt_doihinh');
    btb.onclick = changeimg_zoom;
});
var hinh1 = 1;
function changeimg_zoom (){
    if (hinh1==1) {
        $('#hinh').addClass('m2');
        $('#hinh').attr("src","meomeme.jpg");
        hinh1 = 2;
    } else if(hinh1==2) {
        $('#hinh').addClass('m3');
        $('#hinh').attr("src","meomeme2.jpg");
        hinh1 = 3 ;
    }
        else {
            $('#hinh').removeClass('m2').removeClass('m3');
            hinh1=1;
    }
}