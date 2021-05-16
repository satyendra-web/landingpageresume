// load first page on refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
$(function() {

    var navbardiv = document.querySelector(".navbardiv")
    var ham = document.querySelector(".ham")
        // toggles hamburger menu in and out when clicking on the hamburger
    function toggleHamburger() {
        navbardiv.classList.toggle("showNav")
        ham.classList.toggle("showClose")
    }

    ham.addEventListener("click", toggleHamburger)

    // toggle when clicking on links

    var menuLinks = document.querySelectorAll(".navLink")
    menuLinks.forEach(
        function(navLink) {
            navLink.addEventListener("click", toggleHamburger)
        }
    )

    //add scroll on anchor tag of nav
    $(".navbardiv").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            behavior: 'smooth',
            scrollTop: $(section).offset().top
        });
    });

    // Add border to navbar on scroll
    var navHeight = $('.nav-area').outerHeight();
    console.log(navHeight);

    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        if (scrolled > navHeight) {
            $('.nav-area').addClass('animate');
        } else {
            $('.nav-area').removeClass('animate');
        }
    });
    var navHeight1 = $('.navigation').outerHeight();
    console.log(navHeight1);

    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        if (scrolled > navHeight1) {
            $('.navigation').addClass('animate');
        } else {
            $('.navigation').removeClass('animate');
        }
    });
    // Add animation to work images and section
    var sectionHeight = parseInt($('#home').innerHeight()) - 0.95 * (parseInt($('#home').innerHeight()));
    console.log("sectionHeight=" + sectionHeight);

    $(document).scroll(function() {
        var scrolled = $(document).scrollTop();
        console.log('scrolled:' + scrolled);
        if (scrolled > sectionHeight) {
            $('#work .content').addClass("fadeIn");
            for (let i = 0; i < 8; i++) {
                $('#img' + i + '').addClass('div' + i + 'Animation');
            }

        } else {
            $('#work .content').removeClass("fadeIn");

            for (let i = 0; i < 8; i++) {
                $('#img' + i + '').removeClass('div' + i + 'Animation');
            }
        }
    });


    // Add animation to skills section
    var sectionskillsHeight = parseInt($('#home').innerHeight()) + 0.1 * (parseInt($('#work').innerHeight()));
    console.log("sectionskillsHeight=" + sectionskillsHeight);

    $(document).scroll(function() {
        var scrolled = $(document).scrollTop();
        // console.log('scrolled:' + scrolled);
        if (scrolled > sectionskillsHeight) {
            $('#skills .content').addClass("fadeIn");
            $('#skills .container .skills').addClass("entryAnimation");
        } else {
            $('#skills .content').removeClass("fadeIn");
            $('#skills .container .skills').removeClass("entryAnimation");
        }
    });

    // Add animation to about section
    var sectionAboutHeight = parseInt($('#home').innerHeight()) + parseInt($('#work').innerHeight()) + 0.1 * (parseInt($('#skills').innerHeight()));
    // console.log("sectionaboutHeight=" + sectionAboutHeight);

    $(document).scroll(function() {
        var scrolled = $(document).scrollTop();
        // console.log('scrolled:' + scrolled);
        if (scrolled > sectionAboutHeight) {
            $('#about .content').addClass("fadeIn");

        } else {
            $('#about .content').removeClass("fadeIn");
        }
    });


})

//   Change theme
$('#b1').click(

    function() {
        document.getElementById("b1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M39.41667,39.41667h93.16667v93.16667h-93.16667z" fill="#ff9800"></path><path d="M21.49961,86.00113l64.49927,-64.50152l64.50152,64.49927l-64.49927,64.50152z" fill="#ff9800"></path><path d="M46.58333,86c0,21.77592 17.64075,39.41667 39.41667,39.41667c21.77233,0 39.41667,-17.64075 39.41667,-39.41667c0,-21.77592 -17.64433,-39.41667 -39.41667,-39.41667c-21.77592,0 -39.41667,17.64075 -39.41667,39.41667" fill="#ffeb3b"></path></g></g></svg>';


        if ($('body').hasClass('light')) {
            $('body').addClass('dark');
            $('body').removeClass('light');
            $('.nav-area').addClass('dark');
            $('.nav-area').removeClass('light');
            $('.nav-small').addClass('dark');
            $('.nav-small').removeClass('light');
            $('.ham').addClass('dark');
            $('.ham').removeClass('light');
            $('.nav-a').addClass('dark');
            $('.nav-a').removeClass('light');
            $('.description').addClass('dark');
            $('.description').removeClass('light');
            $('#b1').addClass('dark');
            $('#b1').removeClass('light');

            $('#work .content div').addClass('light');
            $('#work .content div').removeClass('dark');
            $('.footerid').removeClass('light');
            $('.footerid').addClass('dark');

        } else {
            document.getElementById("b1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M113.69716,105.61316c-21.9816,0 -39.80252,-17.8192 -39.80252,-39.80252c0,-15.13944 8.45552,-28.30432 20.89972,-35.03296c-0.25628,-0.00344 -0.50912,-0.01892 -0.7654,-0.01892c-29.4722,0 -53.36472,23.89252 -53.36472,53.36472c0,29.4722 23.89252,53.36472 53.36472,53.36472c28.46428,0 51.71868,-22.28776 53.27528,-50.36332c-7.05888,11.10948 -19.46696,18.48828 -33.60708,18.48828z" fill="#f1c40f"></path><path d="M94.03068,139.20648c-30.37348,0 -55.08472,-24.70952 -55.08472,-55.083c0,-30.37348 24.71124,-55.08472 55.08472,-55.08472c0.1634,0 0.32508,0.00516 0.48848,0.01204l0.29928,0.0086c0.7826,0.01032 1.46028,0.54868 1.64776,1.30892c0.18748,0.76024 -0.1634,1.55144 -0.85312,1.92468c-12.33412,6.66844 -19.99672,19.5134 -19.99672,33.51936c0,20.99776 17.08304,38.08252 38.08252,38.08252c13.09436,0 25.11716,-6.6134 32.15712,-17.6902c0.41968,-0.66048 1.23496,-0.95288 1.97628,-0.71552c0.74648,0.2408 1.23496,0.95288 1.19196,1.73376c-1.61852,29.14712 -25.7742,51.98356 -54.99356,51.98356zM88.54904,32.766c-25.91008,2.74512 -46.16308,24.73016 -46.16308,51.35576c0,28.47632 23.1684,51.643 51.64472,51.643c25.28056,0 46.51912,-18.23372 50.83804,-42.527c-7.82428,8.92164 -19.07652,14.09196 -31.16984,14.09196c-22.89492,0 -41.52252,-18.62588 -41.52252,-41.52252c0,-13.09264 6.14212,-25.25648 16.37268,-33.0412z" fill="#e67e22"></path><path d="M40.27724,31.51728l2.03992,4.13144l4.55972,0.6622l-3.29896,3.2164l0.77744,4.5408l-4.07812,-2.14312l-4.07812,2.14312l0.77916,-4.5408l-3.29896,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M44.35536,44.92812c-0.1376,0 -0.2752,-0.03268 -0.39904,-0.09976l-3.67908,-1.93328l-3.67908,1.93328c-0.28724,0.1548 -0.63984,0.12728 -0.90472,-0.06536c-0.26488,-0.19092 -0.39732,-0.51772 -0.34228,-0.84108l0.70176,-4.09532l-2.9756,-2.89992c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31132 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59856l1.83868,-3.72724c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72724l4.11252,0.59856c0.32336,0.04644 0.5934,0.2752 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.89992l0.70176,4.09532c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.14964,0.11008 -0.3268,0.16512 -0.50568,0.16512zM40.27724,41.065c0.1376,0 0.2752,0.0344 0.39904,0.09976l2.537,1.33128l-0.48332,-2.82596c-0.04816,-0.27864 0.04472,-0.56244 0.24768,-0.76024l2.05196,-1.99864l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56968l-1.26764,2.56968c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956l-2.83456,0.41108l2.05196,1.99864c0.20296,0.1978 0.29412,0.4816 0.24768,0.76024l-0.48332,2.82596l2.537,-1.33128c0.11868,-0.06536 0.25456,-0.09976 0.39216,-0.09976z" fill="#e67e22"></path><path d="M86.80152,108.59564l2.03992,4.13316l4.55972,0.6622l-3.30068,3.2164l0.77916,4.5408l-4.07812,-2.14484l-4.07812,2.14484l0.77916,-4.5408l-3.30068,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M82.7234,122.0082c-0.17888,0 -0.35604,-0.05504 -0.50568,-0.16512c-0.26488,-0.19092 -0.39732,-0.51772 -0.34228,-0.84108l0.70176,-4.0936l-2.9756,-2.90164c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31304 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59856l1.83868,-3.72552c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72552l4.11252,0.59856c0.32336,0.04644 0.5934,0.27348 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.90164l0.70348,4.0936c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.26316,0.19436 -0.61576,0.22188 -0.90472,0.06536l-3.67908,-1.93328l-3.67908,1.93328c-0.12556,0.06708 -0.26316,0.09976 -0.40076,0.09976zM82.04916,113.98956l2.05196,2.00036c0.20296,0.1978 0.29412,0.4816 0.24768,0.76196l-0.48332,2.82252l2.537,-1.33128c0.25112,-0.13072 0.54868,-0.13072 0.7998,0l2.537,1.33128l-0.48504,-2.82252c-0.04816,-0.27864 0.04472,-0.56416 0.24768,-0.76196l2.05196,-2.00036l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56796l-1.26764,2.56796c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956zM49.13352,75.9896c-0.03096,0 -0.06364,-0.00172 -0.0946,-0.00516c-0.47128,-0.0516 -0.81356,-0.47644 -0.76024,-0.94944c0.5332,-4.8332 1.83696,-9.51676 3.87516,-13.92168c2.17408,-4.69388 5.11872,-8.95432 8.7548,-12.66092c0.33196,-0.33884 0.8772,-0.344 1.21604,-0.01032c0.33884,0.33196 0.344,0.8772 0.01204,1.21604c-3.49848,3.56384 -6.33304,7.6626 -8.42284,12.1776c-1.95908,4.23636 -3.21296,8.73932 -3.72552,13.38676c-0.04988,0.44032 -0.4214,0.76712 -0.85484,0.76712zM67.53924,44.78708c-0.27004,0 -0.53492,-0.12556 -0.70176,-0.36292c-0.2752,-0.38872 -0.18404,-0.92364 0.20468,-1.19884c3.87516,-2.74684 8.12872,-4.8504 12.642,-6.25392c0.45924,-0.14448 0.93568,0.11352 1.07672,0.56588c0.14104,0.45408 -0.1118,0.93568 -0.56588,1.07672c-4.33956,1.34848 -8.43144,3.37292 -12.15868,6.01484c-0.15136,0.10664 -0.32508,0.15824 -0.49708,0.15824z" fill="#e67e22"></path><path d="M105.4188,62.092l2.03992,4.13316l4.55972,0.6622l-3.29896,3.2164l0.77916,4.5408l-4.07984,-2.14484l-4.07812,2.14484l0.77916,-4.5408l-3.29896,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M101.34068,75.50456c-0.17888,0 -0.35604,-0.05504 -0.50568,-0.16512c-0.26488,-0.19092 -0.39732,-0.51944 -0.34228,-0.84108l0.70348,-4.0936l-2.9756,-2.90164c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31304 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59684l1.83868,-3.72724c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72724l4.11252,0.59684c0.32336,0.04644 0.5934,0.27348 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.90164l0.70348,4.0936c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.26316,0.19436 -0.61576,0.22188 -0.90472,0.06536l-3.67908,-1.93328l-3.67908,1.93328c-0.12728,0.06708 -0.26488,0.09976 -0.40248,0.09976zM105.4188,71.63972c0.1376,0 0.2752,0.0344 0.39904,0.09976l2.537,1.33128l-0.48504,-2.82252c-0.04816,-0.27864 0.04472,-0.56416 0.24768,-0.76196l2.05196,-1.99864l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56968l-1.26764,2.56968c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956l-2.83456,0.41108l2.05196,1.99864c0.20296,0.1978 0.29412,0.48332 0.24768,0.76196l-0.48504,2.82252l2.537,-1.33128c0.12212,-0.06536 0.258,-0.09976 0.3956,-0.09976z" fill="#e67e22"></path></g></g></svg>';

            $('body').addClass('light');
            $('body').removeClass('dark');
            $('.nav-area').removeClass('dark');
            $('.nav-area').addClass('light');
            $('.nav-small').removeClass('dark');
            $('.nav-small').addClass('light');
            $('.ham').removeClass('dark');
            $('.ham').addClass('light');
            $('.nav-a').addClass('light');
            $('.nav-a').removeClass('dark');
            $('.description').removeClass('dark');
            $('.description').addClass('light');
            $('#b1').removeClass('dark');
            $('#b1').addClass('light');
            $('#work .content div').removeClass('light');
            $('#work .content div').addClass('dark');
            $('.footerid').removeClass('dark');
            $('.footerid').addClass('light');

        }
    }
);

$('#b2').click(

    function() {
        document.getElementById("b2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M39.41667,39.41667h93.16667v93.16667h-93.16667z" fill="#ff9800"></path><path d="M21.49961,86.00113l64.49927,-64.50152l64.50152,64.49927l-64.49927,64.50152z" fill="#ff9800"></path><path d="M46.58333,86c0,21.77592 17.64075,39.41667 39.41667,39.41667c21.77233,0 39.41667,-17.64075 39.41667,-39.41667c0,-21.77592 -17.64433,-39.41667 -39.41667,-39.41667c-21.77592,0 -39.41667,17.64075 -39.41667,39.41667" fill="#ffeb3b"></path></g></g></svg>';


        if ($('body').hasClass('light')) {
            $('body').addClass('dark');
            $('body').removeClass('light');
            $('.nav-area').addClass('dark');
            $('.nav-area').removeClass('light');
            $('.nav-small').addClass('dark');
            $('.nav-small').removeClass('light');
            $('.ham').addClass('dark');
            $('.ham').removeClass('light');
            $('.nav-a').addClass('dark');
            $('.nav-a').removeClass('light');
            $('.description').addClass('dark');
            $('.description').removeClass('light');
            // $('#b2').addClass('dark');
            // $('#b2').removeClass('light');
            $('#work .content div').addClass('light');
            $('#work .content div').removeClass('dark');
            $('.navigation').removeClass('light');
            $('.navigation').addClass('dark');
        } else {
            document.getElementById("b2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M113.69716,105.61316c-21.9816,0 -39.80252,-17.8192 -39.80252,-39.80252c0,-15.13944 8.45552,-28.30432 20.89972,-35.03296c-0.25628,-0.00344 -0.50912,-0.01892 -0.7654,-0.01892c-29.4722,0 -53.36472,23.89252 -53.36472,53.36472c0,29.4722 23.89252,53.36472 53.36472,53.36472c28.46428,0 51.71868,-22.28776 53.27528,-50.36332c-7.05888,11.10948 -19.46696,18.48828 -33.60708,18.48828z" fill="#f1c40f"></path><path d="M94.03068,139.20648c-30.37348,0 -55.08472,-24.70952 -55.08472,-55.083c0,-30.37348 24.71124,-55.08472 55.08472,-55.08472c0.1634,0 0.32508,0.00516 0.48848,0.01204l0.29928,0.0086c0.7826,0.01032 1.46028,0.54868 1.64776,1.30892c0.18748,0.76024 -0.1634,1.55144 -0.85312,1.92468c-12.33412,6.66844 -19.99672,19.5134 -19.99672,33.51936c0,20.99776 17.08304,38.08252 38.08252,38.08252c13.09436,0 25.11716,-6.6134 32.15712,-17.6902c0.41968,-0.66048 1.23496,-0.95288 1.97628,-0.71552c0.74648,0.2408 1.23496,0.95288 1.19196,1.73376c-1.61852,29.14712 -25.7742,51.98356 -54.99356,51.98356zM88.54904,32.766c-25.91008,2.74512 -46.16308,24.73016 -46.16308,51.35576c0,28.47632 23.1684,51.643 51.64472,51.643c25.28056,0 46.51912,-18.23372 50.83804,-42.527c-7.82428,8.92164 -19.07652,14.09196 -31.16984,14.09196c-22.89492,0 -41.52252,-18.62588 -41.52252,-41.52252c0,-13.09264 6.14212,-25.25648 16.37268,-33.0412z" fill="#e67e22"></path><path d="M40.27724,31.51728l2.03992,4.13144l4.55972,0.6622l-3.29896,3.2164l0.77744,4.5408l-4.07812,-2.14312l-4.07812,2.14312l0.77916,-4.5408l-3.29896,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M44.35536,44.92812c-0.1376,0 -0.2752,-0.03268 -0.39904,-0.09976l-3.67908,-1.93328l-3.67908,1.93328c-0.28724,0.1548 -0.63984,0.12728 -0.90472,-0.06536c-0.26488,-0.19092 -0.39732,-0.51772 -0.34228,-0.84108l0.70176,-4.09532l-2.9756,-2.89992c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31132 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59856l1.83868,-3.72724c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72724l4.11252,0.59856c0.32336,0.04644 0.5934,0.2752 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.89992l0.70176,4.09532c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.14964,0.11008 -0.3268,0.16512 -0.50568,0.16512zM40.27724,41.065c0.1376,0 0.2752,0.0344 0.39904,0.09976l2.537,1.33128l-0.48332,-2.82596c-0.04816,-0.27864 0.04472,-0.56244 0.24768,-0.76024l2.05196,-1.99864l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56968l-1.26764,2.56968c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956l-2.83456,0.41108l2.05196,1.99864c0.20296,0.1978 0.29412,0.4816 0.24768,0.76024l-0.48332,2.82596l2.537,-1.33128c0.11868,-0.06536 0.25456,-0.09976 0.39216,-0.09976z" fill="#e67e22"></path><path d="M86.80152,108.59564l2.03992,4.13316l4.55972,0.6622l-3.30068,3.2164l0.77916,4.5408l-4.07812,-2.14484l-4.07812,2.14484l0.77916,-4.5408l-3.30068,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M82.7234,122.0082c-0.17888,0 -0.35604,-0.05504 -0.50568,-0.16512c-0.26488,-0.19092 -0.39732,-0.51772 -0.34228,-0.84108l0.70176,-4.0936l-2.9756,-2.90164c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31304 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59856l1.83868,-3.72552c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72552l4.11252,0.59856c0.32336,0.04644 0.5934,0.27348 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.90164l0.70348,4.0936c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.26316,0.19436 -0.61576,0.22188 -0.90472,0.06536l-3.67908,-1.93328l-3.67908,1.93328c-0.12556,0.06708 -0.26316,0.09976 -0.40076,0.09976zM82.04916,113.98956l2.05196,2.00036c0.20296,0.1978 0.29412,0.4816 0.24768,0.76196l-0.48332,2.82252l2.537,-1.33128c0.25112,-0.13072 0.54868,-0.13072 0.7998,0l2.537,1.33128l-0.48504,-2.82252c-0.04816,-0.27864 0.04472,-0.56416 0.24768,-0.76196l2.05196,-2.00036l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56796l-1.26764,2.56796c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956zM49.13352,75.9896c-0.03096,0 -0.06364,-0.00172 -0.0946,-0.00516c-0.47128,-0.0516 -0.81356,-0.47644 -0.76024,-0.94944c0.5332,-4.8332 1.83696,-9.51676 3.87516,-13.92168c2.17408,-4.69388 5.11872,-8.95432 8.7548,-12.66092c0.33196,-0.33884 0.8772,-0.344 1.21604,-0.01032c0.33884,0.33196 0.344,0.8772 0.01204,1.21604c-3.49848,3.56384 -6.33304,7.6626 -8.42284,12.1776c-1.95908,4.23636 -3.21296,8.73932 -3.72552,13.38676c-0.04988,0.44032 -0.4214,0.76712 -0.85484,0.76712zM67.53924,44.78708c-0.27004,0 -0.53492,-0.12556 -0.70176,-0.36292c-0.2752,-0.38872 -0.18404,-0.92364 0.20468,-1.19884c3.87516,-2.74684 8.12872,-4.8504 12.642,-6.25392c0.45924,-0.14448 0.93568,0.11352 1.07672,0.56588c0.14104,0.45408 -0.1118,0.93568 -0.56588,1.07672c-4.33956,1.34848 -8.43144,3.37292 -12.15868,6.01484c-0.15136,0.10664 -0.32508,0.15824 -0.49708,0.15824z" fill="#e67e22"></path><path d="M105.4188,62.092l2.03992,4.13316l4.55972,0.6622l-3.29896,3.2164l0.77916,4.5408l-4.07984,-2.14484l-4.07812,2.14484l0.77916,-4.5408l-3.29896,-3.2164l4.55972,-0.6622z" fill="#ffffff"></path><path d="M101.34068,75.50456c-0.17888,0 -0.35604,-0.05504 -0.50568,-0.16512c-0.26488,-0.19092 -0.39732,-0.51944 -0.34228,-0.84108l0.70348,-4.0936l-2.9756,-2.90164c-0.23392,-0.22876 -0.3182,-0.57104 -0.21672,-0.88236c0.10148,-0.31304 0.3698,-0.53836 0.69488,-0.58652l4.11252,-0.59684l1.83868,-3.72724c0.28896,-0.5848 1.25388,-0.5848 1.54112,0l1.83868,3.72724l4.11252,0.59684c0.32336,0.04644 0.5934,0.27348 0.69488,0.58652c0.10148,0.31132 0.0172,0.6536 -0.21672,0.88236l-2.9756,2.90164l0.70348,4.0936c0.05504,0.32336 -0.0774,0.65016 -0.34228,0.84108c-0.26316,0.19436 -0.61576,0.22188 -0.90472,0.06536l-3.67908,-1.93328l-3.67908,1.93328c-0.12728,0.06708 -0.26488,0.09976 -0.40248,0.09976zM105.4188,71.63972c0.1376,0 0.2752,0.0344 0.39904,0.09976l2.537,1.33128l-0.48504,-2.82252c-0.04816,-0.27864 0.04472,-0.56416 0.24768,-0.76196l2.05196,-1.99864l-2.83456,-0.41108c-0.28036,-0.04128 -0.52288,-0.21672 -0.64672,-0.46956l-1.26764,-2.56968l-1.26764,2.56968c-0.12556,0.25284 -0.36636,0.42828 -0.64672,0.46956l-2.83456,0.41108l2.05196,1.99864c0.20296,0.1978 0.29412,0.48332 0.24768,0.76196l-0.48504,2.82252l2.537,-1.33128c0.12212,-0.06536 0.258,-0.09976 0.3956,-0.09976z" fill="#e67e22"></path></g></g></svg>';

            $('body').addClass('light');
            $('body').removeClass('dark');
            $('.nav-area').removeClass('dark');
            $('.nav-area').addClass('light');
            $('.nav-small').removeClass('dark');
            $('.nav-small').addClass('light');
            $('.ham').removeClass('dark');
            $('.ham').addClass('light');
            $('.nav-a').addClass('light');
            $('.nav-a').removeClass('dark');
            $('.description').removeClass('dark');
            $('.description').addClass('light');
            // $('#b2').removeClass('dark');
            // $('#b2').addClass('light');
            $('#work .content div').removeClass('light');
            $('#work .content div').addClass('dark');
            $('.navigation').addClass('light');
            $('.navigation').removeClass('dark');
        }
    }
);




