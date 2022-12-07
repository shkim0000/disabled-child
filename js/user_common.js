$(function(){
    $(document).ready(function(){
        /* 넘버리스트 숫자넣기 */
        $(".front-number > li").each(function () {
            let thisIndex = $(this).index() + 1;
            $(this).attr("data-content", (thisIndex+")"));
        });
    });

    /* 팝업 열기 */
    $(".pop-btn").on("click", function() {
        $("body").addClass("on");
        if ($(this).hasClass("pop1")) {
            $(".popup.pop1").addClass("on");
        }
    });

    /* 팝업 닫기 (배경 선택) */
    $(".popup").on("click", function(e){
        if(e.target === this){
            $("body").removeClass("on");
            $(this).removeClass("on");
        }
    });

    /* 팝업 닫기 버튼 */
    $(".popup .pop-close, .popup .close-btn").on("click", function(){
        $("body").css("overflow","auto");
        $(this).parents(".popup").removeClass("on");
    });

    /* 탭 버튼 */
    $(".tab-wrap .btn").on("click", function(){
        let tabNum = $(this).parent().index();
        $(".tab-wrap .btn").removeClass("on").parent().eq(tabNum).find(".btn").addClass("on");
        $(".tab-box .tabs").removeClass("on").eq(tabNum).addClass("on");
    });


    $('a.hamburger-button').on('click', function() {
        $('body').css({overflowY:'hidden'});
        $('div.menu-wrap').toggleClass('on');
        if($('div.menu-wrap').hasClass('on')) {
            $('a.hamburger-button').addClass('close');
            
        } else {
            $('body').css({overflowY:'auto'});
            $('a.hamburger-button').removeClass('close');
            // 열고 닫을 때 화면 정리해주기
        }
    });

});
