$(document).ready(function() {
    $(".btn-dangnhap").click(function(){
      console.log("click");
      dangnhap();
    });
    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
       dangnhap();
      }
    });
});
function dangnhap(){
  $.ajax({
    method: "POST",
    url: "/",
    data: {username: $("#inputUsername").val(), password:$("#inputPass").val()}
  }).done(function(msg) {
    window.location.replace(msg);
  });
}