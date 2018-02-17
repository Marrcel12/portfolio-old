'use strict';

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
        $("#main-nav").css("background-color","white");
         $(".nav-link").css("color", "black");   
        }
        else {
            $("#main-nav").css("background-color","");
            $(".nav-link").css("color", "white");  
        }
    });
}
);