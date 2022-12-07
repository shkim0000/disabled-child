$(function(){
    $(document).ready(function(){
        /* 넘버리스트 숫자넣기 */
        $(".front-number > li").each(function () {
            let thisIndex = $(this).index() + 1;
            $(this).attr("data-content", (thisIndex+")"));
        });
    });

    // 헤더 자동으로 넣기
    $('body').prepend(`
        <header id="header">
        <div class="content-box j-between a-center">
        <a href="#" title="hamburger-button" class="hamburger-button only-tablet on"><span class="bar">메뉴 열고/닫기</span></a>
        <h1>
            <a href="#">
                장애아가족 양육지원사업
            </a>
        </h1>
        <div class="menu-wrap j-between a-center">
            <ul class="menu">
                <li><a href="#">장애아 양육지원사업</a></li>
                <li><a href="#">돌봄서비스</a></li>
                <li><a href="#">휴식지원 프로그램</a></li>
                <li><a href="#">장애아 돌보미</a></li>
                <li><a href="#">정보마당</a></li>
            </ul>
            <div class="member-box">
                <button type="button" class="btn line">로그인</button>
                <button type="button" class="btn line">서비스</button>
            </div>
        </div>
        </div>
    </header>
    `);

    // footer 자동으로 넣기
    $('body').append(`
        <footer id="footer">
        <div class="content-box j-between">
            <div class="btn-wrap a-center">
                <button type="button" class="btn foot">개인정보처리방침</button>
                <button type="button" class="btn foot">저작권정책</button>
            </div>
            <div class="footer-info-box">
                <ul class="footer-info-list">
                    <li>[07236] 서울시 영등포구 의사당대로 22 이룸센터 7층 중앙장애아동, 발달장애인지원센터</li>
                    <li>대표전화   02-3433-0743</li>
                    <li>발달재활서비스 제공인력 자격관리   1544-6065</li>
                    <li>팩스   02-3433-0739</li>
                    <li>발달장애인 권리구제 상담   1522-2882</li>
                </ul>
                <p class="copyright">COPYRIGHTS⒞ 2017 NATIONAL CENTER FOR DISABLED CHILDREN AND DEVELOPMENTAL DISABILITIES. ALL RIGHTS RESERVED</p>
            </div>
            <div class="select-box a-center">
                <div class="select">
                <select name="" id="">
                    <option value="0">관련사이트</option>
                </select>
                </div>
            </div>
        </div>
    </footer>
    `);






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


    // 반응형 헤더: 햄버거 버튼
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


    /* 메인 슬라이더 */
    const swiper1 = new Swiper('.slide-box', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        speed:1000,
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 5000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
          },
    });

    /* information-yard-4.html */
    const swiper2 = new Swiper('.slide-box2', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        speed:1000,
    });

    var slideNum = $('span.slide-num');
    var slideNum = $('.slide-list2 > li').length;

    $('span.slide-length').text(slideNum-2);

    swiper2.on('slideChange', function(){
        var idx = swiper2.activeIndex;

        if(idx >= (slideNum-1)) {
            idx = 1;
        }else if(idx == 0){
            idx = (slideNum-2);
        }

        $('span.slide-num').text(idx)
    });


});
