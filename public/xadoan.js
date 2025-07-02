$(document).ready(function () {
    // Hàm kiểm tra overlay
    function checkOverlay() {
        var header = $('header');
        var background = $('.background');

        // Lấy kích thước và tọa độ của header và background
        var headerRect = header[0].getBoundingClientRect();
        var backgroundRect = background[0].getBoundingClientRect();
        var backgroundRect1 = background[1].getBoundingClientRect();

        // Kiểm tra xem header có đè lên background không
        if (
            (headerRect.left < backgroundRect.right &&
                headerRect.right > backgroundRect.left &&
                headerRect.top < backgroundRect.bottom &&
                headerRect.bottom > backgroundRect.top) ||
            (headerRect.left < backgroundRect1.right &&
                headerRect.right > backgroundRect1.left &&
                headerRect.top < backgroundRect1.bottom &&
                headerRect.bottom > backgroundRect1.top)
        ) {
            console.log("1");
            $('.red-fill').addClass('black-fill');
            $('#blink').addClass('black-fill');
            $('header').find('hr').addClass('black-fill');

            $('.header-left > span').hover(function () {
                $(this).css('text-decoration-color', 'var(--black');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('.header-right > span > a').hover(function () {
                $(this).css('text-decoration-color', 'var(--black');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });

            $('.header-right > span').css('color', 'var(--red)');
            $('.header-left > span').css('color', 'var(--red)');
            $('#hamburger > span').css('background', 'var(--white)')
            $('.open').find('span').css('background', 'var(--red)')

        } else {
            console.log("2");
            $('.red-fill').removeClass('black-fill');
            $('#blink').removeClass('black-fill');
            $('header').find('hr').removeClass('black-fill');

            $('.header-left > span').hover(function () {
                $(this).css('text-decoration-color', 'var(--red)');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('.header-right > span > a').hover(function () {
                $(this).css('text-decoration-color', 'var(--red)');
            }, function () {
                $(this).css('text-decoration-color', 'transparent');
            });
            $('.header-right > span').css('color', 'var(--white)');
            $('.header-left > span').css('color', 'var(--white)');

            $('#hamburger > span').css('background', 'var(--red)')
        }
    }

    // Gọi hàm kiểm tra khi trang được tải xong và khi có sự kiện scroll hoặc resize
    $(window).on('load scroll resize', function () {
        checkOverlay();
    });
    $('#hamburger').on('click', function () {
        checkOverlay();
    });

    if (window.innerWidth < 992) {
        $('#con').html('LUNCH when sun up <br> drunk when sundown');
    }
});