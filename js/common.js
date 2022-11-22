$(function(){

    /* 사이드바 연결 */
    if(!$("body").hasClass("no-commons")){
        $("body").prepend(
          "<div class='side-menu'>\n" +
          "    <ul class='main-menu'>\n" +
          "        <li><a href='#'><img src='../img/home-icon.svg' alt=''><img src='../img/home-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>대시보드</span></a>\n" +
          "        </li>\n" +
          "        <li><a href=#><img src='../img/group-icon.svg' alt=''><img src='../img/group-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>돌봄 서비스</span></a>\n" +
          "            <ul class='second-menu'>\n" +
          "                <li><a href='#'>배정조회</a></li>\n" +
          "                <li><a href='#'>서비스 관리<img src='../img/down-arrow.svg'></a>\n" +
          "                    <ul class='third-menu'>\n" +
          "                        <li><a href='#'>서비스 조회</a></li>\n" +
          "                        <li><a href='#'>월간 서비스 계획</a></li>\n" +
          "                    </ul>\n" +
          "                </li>\n" +
          "            </ul>\n" +
          "        </li>\n" +
          "        <li><a href='#'><img src='../img/assign-icon.svg' alt=''><img src='../img/assign-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>교육의수</span></a>\n" +
          "            <ul class='second-menu'>\n" +
          "                <li><a href='#'>교육이수현황 조회</a></li>\n" +
          "            </ul>\n" +
          "        </li>\n" +
          "        <li><a href='#'><img src='../img/find-icon.svg' alt=''><img src='../img/find-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>돌보미 급여조회</span></a>\n" +
          "            <ul class='second-menu'>\n" +
          "                <li><a href='#'>급여 조회</a></li>\n" +
          "            </ul>\n" +
          "        </li>\n" +
          "        <li><a href='#'><img src='../img/note-icon.svg' alt=><img src='../img/note-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>게시판</span></a>\n" +
          "            <ul class='second-menu'>\n" +
          "                <li><a href='#'>공지사항</a></li>\n" +
          "                <li><a href='#'>커뮤니티</a></li>\n" +
          "                <li><a href='#'>1:1문의</a></li>\n" +
          "            </ul>\n" +
          "        </li>\n" +
          "        <li><a href='#'><img src='../img/setting-icon.svg' alt=''><img src='../img/setting-wt-icon.svg' class='icon-focus'><span class='title only-tablet'>관리자페이지</span></a>\n" +
          "            <ul class='second-menu'>\n" +
          "                <li><a href='#'>서비스현황<img src='../img/down-arrow.svg'></a>\n" +
          "                    <ul class='third-menu'>\n" +
          "                        <li><a href='#'>돌보미 정보</a></li>\n" +
          "                        <li><a href='#'>이용자 정보</a></li>\n" +
          "                        <li><a href='#'>서비스 모니터링</a></li>\n" +
          "                    </ul>\n" +
          "                </li>\n" +
          "                <li><a href='#'>사업실적<img src='../img/down-arrow.svg'></a>\n" +
          "                    <ul class='third-menu'>\n" +
          "                        <li><a href='#'>지역 현황</a></li>\n" +
          "                        <li><a href='#'>돌봄 서비스 현황</a></li>\n" +
          "                        <li><a href='#'>장애아 돌보미 현황</a></li>\n" +
          "                        <li><a href='#'>휴식지원 프로그램 현황</a></li>\n" +
          "                        <li><a href='#'>연간 사업 이용만족도 통계</a></li>\n" +
          "                        <li><a href='#'>돌보미 교육만족도 관리</a></li>\n" +
          "                        <li><a href='#'>교육이수확인</a></li>\n" +
          "                    </ul>\n" +
          "                </li>\n" +
          "                <li><a href='#'>시스템총괄<img src='../img/down-arrow.svg'></a>\n" +
          "                    <ul class='third-menu'>\n" +
          "                        <li><a href='#'>돌봄서비스 소개 관리</a></li>\n" +
          "                        <li><a href='#'>휴식지원프로그램 소개 관리</a></li>\n" +
          "                        <li><a href='#'>오시는 길 관리</a></li>\n" +
          "                        <li><a href='#'>관련 사이트 관리</a></li>\n" +
          "                        <li><a href='#'>시스템 파라미터 관리</a></li>\n" +
          "                    </ul>\n" +
          "                </li>\n" +
          "                <li><a href='#'>메시지발송</a></li>\n" +
          "            </ul>\n" +
          "        </li>\n" +
          "    </ul>\n" +
          "    <div class=sub-menu-bg></div>\n" +
          "</div>"
        );
    }

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
        }else if($(this).hasClass("pop23")){
            $(".popup.pop23").addClass("on");
        }else if($(this).hasClass("pop24")){
            $(".popup.pop24").addClass("on");
        }
    });


    $(".popup").on("click", function(e){
        if(e.target === this){
            $("body").css("overflow","auto");
            $(this).removeClass("on");
        }
    });
    
    $(".popup .pop-close, .popup .ok-btn, .popup , .close-btn , .store_btn ").on("click", function(){
        $("body").css("overflow","auto");
        $(this).parents(".popup").removeClass("on");
    });

    // 저장 버튼 SA-08-10
    // $('button.store-btn').on('click', function() {
    //     $("div.popup.popup23, div.popup.popup24 ").addClass("on")
    //     $('div.popup').on('scroll touchmove mousewheel', function(event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         return false;
    //     });
    // })


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
        console.log('클릭중')
        if($(this).next().length >= 1){
            if(!$(this).hasClass("on")){
                $('ul.main-menu > li > a').removeClass('on')
                $(this).addClass("on");
                $('ul.second-menu').removeClass('on').slideUp(300);
                $(this).next().addClass('on').slideDown(300);
                $('ul.second-menu > li > a').removeClass('on');
                $('ul.third-menu').slideUp(0)
                $('div.sub-menu-bg').addClass('on');

            }else{
                $(this).removeClass("on");
                $('ul.second-menu').removeClass('on') 
                $(this).next().removeClass('on').slideUp(300);
                $('div.sub-menu-bg').removeClass('on');
            }
        } else {
            $('ul.main-menu > li > a').removeClass('on')
            $("ul.second-menu").removeClass('on').slideUp(300);
            $('div.sub-menu-bg').removeClass('on');
        }
    });

    // 3뎁스
    $("ul.second-menu > li > a").on("click", function() {
        if($(this).next().length >= 1){
            if(!$(this).hasClass("on")){
                $('ul.second-menu > li > a').removeClass('on')
                $(this).addClass("on");
                $('ul.third-menu').slideUp(300);
                $(this).next().slideDown(300);

            }else{
                $(this).removeClass("on");
                $('ul.second-menu > li > a').removeClass('on')
                $(this).next().slideUp(300);
            }
        }

        // 스크롤 자동 밑으로 이동
        $(".side-menu").animate({
            scrollTop: $('.side-menu').height()
        }, 1000);
    });

     //모바일버전
    // width사이즈를 측정해서 resize 체크해야함.
    var screenWidth = $(window).width();

    if (screenWidth > 1440) {
        $('div.side-menu').removeClass('on');
    }

    $('a.hamburger-button').on('click', function() {
        $('div.side-menu').toggleClass('on');
        if($('div.side-menu').hasClass('on')) {
            $('a.hamburger-button').addClass('close');
            
        } else {
            $('a.hamburger-button').removeClass('close');
            // 열고 닫을 때 화면 정리해주기
            $('div.side-menu > ul.main-menu > li > a').removeClass('on')
            $('ul.second-menu').slideUp(500)
            $('ul.second-menu > li > a').removeClass('on');
            $('ul.third-menu').slideUp(500);
        }
    });

    $(window).resize(function() {
        var screenWidth = $(window).width();

        if(screenWidth > 1400) {
            // 1400 이상이면 모바일 버전 정리해
            $('div.side-menu').removeClass('on');
            $('div.sub-menu-bg').removeClass('on');
            $('a.hamburger-button').removeClass('close');
            resetNav();
        } else {
            // 1400보다 작으면 pc버전 정리해
            $('div.sub-menu-bg').removeClass('on');
            resetNav();
        }

        
    });

    function resetNav() {
        $('div.side-menu > ul.main-menu > li > a').removeClass('on')
        $('ul.second-menu').removeClass('on');
        $('ul.second-menu').slideUp(500);
        $('ul.second-menu > li > a').removeClass('on');
        $('ul.third-menu').slideUp(500);  
    }

});
