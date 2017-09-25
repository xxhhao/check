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
        if(!isNaN(x)){
            return true
        }
        else{
            return false
        }
    },

    isLetter: function (x) {
        if(x.match(/^[A-Za-z]$/)){
            return true
        }
        else{
            return false
        }
    },

    isTelephone:function(x){
        if(x.match(/^1[3-5,8][0-9]{9}$/)){
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
        if(x.match(/^[\w]{6,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    isUsername:function(x){
        if(x.match(/^[\w]{3,20}$/)){
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
      if(x.length=18&& x.match(/^[0-9]{6}[1,2][0-1,9][0-9]{2}[0,1][0-9][0-3][0-9]{4}[0-9,x]$/)){
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
        var y=$(".empty").val()
        vD.isEmpty(y)
    })
})