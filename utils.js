/**
 * Created by Administrator on 2017/9/22.
 */

$(function(){
    $(".check").click(function(){
        console.log()
    });
});


var validate={
    isEmpty:function(){
        var x=this.val();
        if(x==""){
            return true
        }
        else{
            return false
        }
    },

    isNumber:function(){
        if(!isNaN(x)){
            return true
        }
        else{
            return false
        }
    },

    isLetter: function () {
        if(x.match(/^[A-Za-z]$/)){
            return true
        }
        else{
            return false
        }
    },

    isTelephone:function(){
        if(x.match(/^1[3-5,8][0-9]{9}$/)){
            return true
        }
        else{
            return false
        }
    },

    isEmail:function(){
        if(x.match(/^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z]{2,3}){1,2}$/)){
            return true
        }
        else{
            return false
        }
    },

    isChinese:function(){
        if(x.match(/^[\u2E80-\u9FFF]$/)){
            return true
        }
        else{
            return false
        }
    },

    isPassward:function(){
        if(x.match(/^[\w]{6,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    isUsername:function(){
        if(x.match(/^[\w]{3,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    is
};