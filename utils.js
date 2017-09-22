/**
 * Created by Administrator on 2017/9/22.
 */

$(function(){
    $(".check").click(function(){
        myInput1();
        myInput2();
        myInput3();
    });
});

//必填项验证
function myInput1(){
    var x=$(".myInput1");
    if(x.val()==""){
        return false
    }
    else{
        return true
    }
}

//数字验证
function myInput2(){
    var x=$(".myInput2");
    if(isNaN(x.val())){
        return false
    }
    else{
        return true
    }
}

//英文字母验证
function myInput3(){
    var x=$(".myInput3");
    if(!x.val().match(/^[A-Za-z]+$/)){
        alert("www")
    }
    else{
        return true
    }
}