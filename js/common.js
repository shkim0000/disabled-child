$(function(){
    /* 팝업 */
    $(".pop-btn").on("click", function(){
        $("body").css("overflow","hidden");
        if($(this).hasClass("pop1")){
            $(".popup.pop1").addClass("on");
        }else if($(this).hasClass("pop2")){
            $(".popup.pop2").addClass("on");
        }else if($(this).hasClass("pop3")){
            $(".popup.pop3").addClass("on");
        }else if($(this).hasClass("pop4")){
            $(".popup.pop4").addClass("on");
        }
    });
    $(".popup").on("click", function(e){
        if(e.target === this){
            $("body").css("overflow","auto");
            $(this).removeClass("on");
        }
    });
    $(".popup .pop-close, .popup .ok-btn, .popup .close-btn").on("click", function(){
        $("body").css("overflow","auto");
        $(this).parents(".popup").removeClass("on");
    });
    /* // 팝업 */
});
