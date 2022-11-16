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
        }else if($(this).hasClass("pop17")){
            $(".popup.pop17").addClass("on");
        }else if($(this).hasClass("pop18")){
            $(".popup.pop18").addClass("on");
        }else if($(this).hasClass("pop19")){
            $(".popup.pop19").addClass("on");
        }else if($(this).hasClass("pop20")){
            $(".popup.pop20").addClass("on");
        }else if($(this).hasClass("pop21")){
            $(".popup.pop21").addClass("on");
        }else if($(this).hasClass("pop22")){
            $(".popup.pop22").addClass("on");
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

    // 사이드메뉴
    $(".second-menu").slideUp(0);
    $(".third-menu").slideUp(0);
    $('.div.sub-menu-bg').removeClass('on');

    $("ul.main-menu > li > a").on("click", function(){
        if($(this).next().length >= 1){
            if(!$(this).hasClass("on")){
                $('ul.main-menu > li > a').removeClass('on')
                $(this).addClass("on");
                $('ul.second-menu').removeClass('on').slideUp(0);
                $(this).next().addClass('on').slideDown(500);
                $('ul.second-menu > li > a').removeClass('on');
                $('ul.third-menu').slideUp(0)
                $('div.sub-menu-bg').addClass('on');

            }else{
                $(this).removeClass("on");
                $('ul.second-menu').removeClass('on') 
                $(this).next().removeClass('on').slideUp(500);
                $('div.sub-menu-bg').removeClass('on');
            }
        } else {
            $('ul.main-menu > li > a').removeClass('on')
            $("ul.second-menu").removeClass('on').slideUp(0);
            $('div.sub-menu-bg').removeClass('on');
        }
    });

    // 3뎁스
    $("ul.second-menu > li > a").on("click", function() {
        if($(this).next().length >= 1){
            if(!$(this).hasClass("on")){
                $('ul.second-menu > li > a').removeClass('on')
                $(this).addClass("on");
                $('ul.third-menu').slideUp(500);
                $(this).next().slideDown(500);
            }else{
                $(this).removeClass("on");
                $('ul.second-menu > li > a').removeClass('on')
                $(this).next().slideUp(500);
            }
        }

    })



    
        // $('ul.main-menu > li > a').on('click', function() {
        //     var index = $(this).parent().index();
        //     $('ul.third-menu').removeClass('on');
        //     $('div.sub-menu-bg').toggleClass('on');
        //     $('ul.second-menu:eq('+ (index - 1) +')').toggleClass('on');

        //     해당하는 ul.second가 있으면 보여주기
        //     if($('ul.main-menu > li:eq('+ index +') >ul.second-menu').length) {
        //         // $('ul.second-menu').removeClass('on');
        //         // $('ul.second-menu:eq('+ (index - 1) +')').addClass('on');
        //         // $('ul.third-menu').removeClass('on');
        //         // $('div.sub-menu-bg').addClass('on');

        //         두번클릭했을 때 사이드 메뉴가 닫혀야 함
        //         if($('ul.second-menu:eq('+ (index - 1) +')').outerHeight(true)) {
        //             console.log('dkfjkdjk')
        //             $('ul.main-menu > li > a').on('click', function() {
        //                 console.log('dksjfkjafdkljsdlkjkldsjflksjdkfj');
        //                 // $('ul.second-menu:eq('+ (index - 1) +')').toggleClass('on');
        //                 // $('ul.third-menu').toggleClass('on');
        //                 // $('div.sub-menu-bg').toggleClass('on');
        //             })
        //         }



         // 3번째 뎁스
        //         $('ul.second-menu:eq('+ (index - 1) +') > li > a').on('click', function() {
        //         var idx = $(this).parent().index();
        //             if(index === 1) {
        //                 if($('ul.second-menu:eq('+ (index - 1) +') > li:eq('+idx+') > ul.third-menu').length) {
        //                     $('ul.third-menu').addClass('on');
        //                 } else {
        //                     $('ul.third-menu').removeClass('on');
        //                 }

        //             } else {
        //                 $('ul.second-menu:eq('+ (index - 1) +') > li > ul.third-menu').removeClass('on');
        //                 $('ul.second-menu:eq('+ (index - 1) +') > li > ul.third-menu:eq('+idx+')').addClass('on');
        //             }
        //         });
        //     } else {
        //         $('div.sub-menu-bg').removeClass('on')
        //         $('ul.second-menu').removeClass('on');
        //         $('ul.third-menu').removeClass('on');
        //     }
        // });


    

});
