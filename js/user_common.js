$(function(){
    $(document).ready(function(){
        /* 넘버리스트 숫자넣기 */
        $(".front-number > li").each(function () {
            let thisIndex = $(this).index() + 1;
            $(this).attr("data-content", (thisIndex+")"));
        });
    });

    $(".pop-btn").on("click", function() {
        $("body").addClass("on");
        if ($(this).hasClass("pop1")) {
            $(".popup.pop1").addClass("on");
        }
    });

    $(".popup").on("click", function(e){
        if(e.target === this){
            $("body").removeClass("on");
            $(this).removeClass("on");
        }
    });

    $(".popup .pop-close, .popup .close-btn").on("click", function(){
        $("body").css("overflow","auto");
        $(this).parents(".popup").removeClass("on");
    });
});
