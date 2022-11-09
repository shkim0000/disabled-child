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
        }else if($(this).hasClass("pop5")){
            $(".popup.pop5").addClass("on");
        }else if($(this).hasClass("pop6")){
            $(".popup.pop6").addClass("on");
        }else if($(this).hasClass("pop7")){
            $(".popup.pop7").addClass("on");
        }else if($(this).hasClass("pop8")){
            $(".popup.pop8").addClass("on");
        }else if($(this).hasClass("pop9")){
            $(".popup.pop9").addClass("on");
        }else if($(this).hasClass("pop10")){
            $(".popup.pop10").addClass("on");
        }else if($(this).hasClass("pop11")){
            $(".popup.pop11").addClass("on");
        }else if($(this).hasClass("pop12")){
            $(".popup.pop12").addClass("on");
        }else if($(this).hasClass("pop13")){
            $(".popup.pop13").addClass("on");
        }else if($(this).hasClass("pop14")){
            $(".popup.pop14").addClass("on");
        }else if($(this).hasClass("pop15")){
            $(".popup.pop15").addClass("on");
        }else if($(this).hasClass("pop16")){
            $(".popup.pop16").addClass("on");
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


    // 수료증 출력
    $(".print-btn").on("click", function(){
        window.print();
        $("body").css("overflow","auto");
        $(this).parents(".popup").removeClass("on");
    });


    // DatePicker
    $( ".datepicker" ).datepicker({
        dateFormat: 'yy.mm.dd',
        showOn: "button",
        buttonImage: "../img/down-arrow.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });


});
