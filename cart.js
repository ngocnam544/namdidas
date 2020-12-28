var price1=50,price2=75,price3=75;
function total(){
    var sum = price1+price2+price3;
    var tt = sum +35;
   $("td.subtotal").html('$'+ sum);
   $("td.total").html('$'+tt);
}
function changeFunction1(){

    $("td.price1").html('$'+ 50*$(".item1-quantity").val());
     price1 = 50*$(".item1-quantity").val();
     total();
    
}
function changeFunction2(){
    $("td.price2").html('$'+ 75*$(".item2-quantity").val());
     price2= 75*$(".item2-quantity").val();
     total();
}

function changeFunction3(){
    $("td.price3").html('$'+ 75*$(".item3-quantity").val());
    price3 = 75*$(".item3-quantity").val();
    total();
}
function buyFunction(){

   var r =  confirm("Xác nhận mua hàng ?")
   if (r==true)
   {
       alert ("Cảm ơn bạn đã đặt hàng!");
   }
}
function rmFunction(){
    $('#row1').remove();

    total();
}


