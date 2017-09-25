/**
 * Created by Administrator on 2017/9/22.
 */

//$(function(){
//    $(".check").click(function(){
//        Input1()
//    });
//});
//
//
//function Input1(){
//    var x=$(".myInput1").val();
//    if(x.match(/^1[3-5,8][0-9]{9}$/)){
//        alert("abc")
//    }
//    else {
//        alert("cba")
//    }
//}
//



var validate={
    isEmpty:function(x){
        if(x==""){
            return true
        }
        else{
            return false
        }
    },

    isNumber:function(x){
        if(x.match(/^\d+$/)){
            return true
        }
        else{
            return false
        }
    },

    isLetter: function (x) {
        if(x.match(/^[A-Za-z]+$/)){
            console.log("true")
        }
        else{
            return false
        }
    },

    isTelephone:function(x){
        if(x.match(/^1[3-5|8]\d{9}$/)){
            return true
        }
        else{
            return false
        }
    },

    isEmail:function(x){
        if(x.match(/^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z]{2,3}){1,2}$/)){
            return true
        }
        else{
            return false
        }
    },

    isChinese:function(x){
        if(x.match(/^[\u4e00-\u9fa5]$/)){
            return true
        }
        else{
            return false
        }
    },

    isPassward:function(x){
        if(x.match(/^\w{6,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    isNickname:function(x){
        if(x.match(/^\w{3,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    isMoney:function(x){
        if(x.match(/^[0-9]*\.[0-9]{2}$/)){
            return true
        }
        else{
            return false
        }
    },

    isIdcard:function(x){
        if(x.match(/^[0-9]{6}[1|2][0|1|9][0-9]{2}[0|1][0-9][0-3][0-9]{4}[0-9|x]$/)){
            return true
        }
        else{
            return false
        }
    },

    isUrl:function(x){
        if(x.match(/^https:\/\/www\.[a-z0-9_-]+(\.[a-z]{2,3}){1,2}(\/[a-z0-9_-]+)*$/)){
            return true
        }
        else{
            return false
        }
    },

    isDate:function(x){
        if(x.match(/^\d{4}\-\d{2}\-\d{2}$/)){
            var dateArray= x.split("-");
            var a=parseInt(dateArray[0]);
            var b=parseInt(dateArray[1]);
            var c=parseInt(dateArray[2]);
            if(a<2100 && b<13 && c<32){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    },

    isTime:function(x){
        if(x.match(/^\d{2}:\d{2}:\d{2}$/)){
            var timeArray= x.split(":");
            var a=parseInt(timeArray[0]);
            var b=parseInt(timeArray[1]);
            var c=parseInt(timeArray[2]);
            if(a<25 && b<61 &&c<61){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    },

    isInt:function(x){
       if(x.match(/^[1-9][0-9]*$/)){
           return true
       }
        else{
           return false
       }
    },

    isCreditcard:function(x){
        if(x.match(/^[3-6][0-9]{15,17}$/)){
            return true
        }
        else{
            return false
        }
    },




};




$(function(){
    var vD=Object.create(validate);

    $("#btn1").click(function(){
        var y=$(".empty").val();
        vD.isEmpty(y)
    });

    $("#btn2").click(function(){
        var y=$(".number").val();
        vD.isNumber(y)
    });

    $("#btn3").click(function(){
        var y=$(".letter").val();
        vD.isLetter(y)
    });

    $("#btn4").click(function(){
        var y=$(".telephone").val();
        vD.isTelephone(y)
    });

    $("#btn5").click(function(){
        var y=$(".email").val();
        vD.isEmail(y)
    });

    $("#btn6").click(function(){
        var y=$(".chinese").val();
        vD.isChinese(y)
    });

    $("#btn7").click(function(){
        var y=$(".passward").val();
        vD.isPassward(y)
    });

    $("#btn8").click(function(){
        var y=$(".nickname").val();
        vD.isNickname(y)
    });

    $("#btn9").click(function(){
        var y=$(".money").val();
        vD.isMoney(y)
    });

    $("#btn10").click(function(){
        var y=$(".idcard").val();
        vD.isIdcard(y)
    });

    $("#btn11").click(function(){
        var y=$(".url").val();
        vD.isUrl(y)
    });

    $("#btn12").click(function(){
        var y=$(".date").val();
        vD.isDate(y)
    });

    $("#btn13").click(function(){
        var y=$(".time").val();
        vD.isTime(y)
    });

    $("#btn14").click(function(){
        var y=$(".int").val();
        vD.isInt(y)
    });

    $("#btn15").click(function(){
        var y=$(".creditcard").val();
        vD.isCreditcard(y)
    });
});