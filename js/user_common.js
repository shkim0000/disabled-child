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
                <li>
                    <a href="#">장애아 양육지원사업</a>
                    <ul class="second-depth">
                        <li>
                            <a href="#">장애아가족 양육지원사업</a>
                            <ul class="third-depth">
                                <li><a href="#">목적 및 추진방향</a></li>
                                <li><a href="#">연혁</a></li>
                                <li><a href="#">사업내용</a></li>
                                <li><a href="#">근거법령 및 추진체계</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">사업현황</a>
                            <ul class="third-depth">
                                <li><a href="#">돌봄 서비스</a></li>
                                <li><a href="#">휴식지원 프로그램</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">사업시행 기관</a>
                        </li>
                        <li>
                            <a href="#">오시는 길</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">돌봄서비스</a>
                    <ul class="second-depth">
                        <li><a href="#">지원대상</a></li>
                        <li><a href="#">지원내용</a></li>
                        <li><a href="#">선정기준 및 이용 절차</a></li>
                        <li><a href="#">이용요금</a></li>
                        <li><a href="#">서비스 중지</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">휴식지원 프로그램</a>
                    <ul class="second-depth">
                        <li><a href="#">지원대상</a></li>
                        <li><a href="#">지원내용</a></li>
                        <li><a href="#">선정기준 및 이용 절차</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">장애아 돌보미</a>
                    <ul class="second-depth">
                        <li><a href="#">자격기준 및 양성교육</a></li>
                        <li><a href="#">선발 및 활동절차</a></li>
                        <li><a href="#">주요활동</a></li>
                        <li><a href="#">근무조건</a></li>
                        <li><a href="#">연계중지 및 활동중지</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">정보마당</a>
                    <ul class="second-depth">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">갤러리</a></li>
                        <li><a href="#">자주 묻는 질문</a></li>
                        <li><a href="#">자료실</a></li>
                    </ul>
                </li>
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
            $('.menu > li > a').removeClass('on')
            $('ul.second-depth').slideUp(500)
            $('ul.second-depth > li > a').removeClass('on');
            $('ul.third-depth').slideUp(500);

        }
    });

    $(".second-depth, .third-depth").slideUp(0);

    $(".menu > li > a, .second-depth a").on("click", function(){
        if($(window).innerWidth() <= 1350){
            if(!$(this).next().hasClass("on")){
                $(this).next().addClass("on").slideDown();
            }else{
                $(this).next().removeClass("on").slideUp();
            }
        }
    });

    $(window).resize(function(){
        if($(window).innerWidth() >= 1350){
            $('.hamburger-button').removeClass('close');
            $(".second-depth, .third-depth").removeClass("on").stop().slideUp(0);
        }
    });





});
