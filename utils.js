/**
 * Created by Administrator on 2017/9/22.
 */

$(function(){
    $(":button").click(function(){
        myForm1();
    });
});

//必填项验证
function myForm1(){
    var x=$(".myForm1").find(".myInput1");
    if(x.val()==""){
        //return false
        alert("wrong")
    }
    else{
        alert("ng")
    }
}