$(document).ready(function () {
    $('.button').each(function () {
        const $button = $(this);
        const $blinkBtn = $button.find('.blink-btn');

        $button.on('mouseenter', function () {
            $blinkBtn.css('transform', 'translateY(-100%)');
        });

        $button.on('mouseleave', function () {
            $blinkBtn.css('transform', 'translateY(0)');
        });
    });
    function checkFavicon() {
        // Tìm thẻ link có rel là 'icon' và có thuộc tính href
        var faviconLink = $('link[rel="icon"][href]');

        if (faviconLink.length > 0) {
            console.log('Trang web sử dụng favicon:', faviconLink.attr('href'));
            return true;
        } else {
            console.log('Trang web không sử dụng favicon.');
            return false;
        }
    }

    // Gọi hàm kiểm tra khi trang được tải xong
    checkFavicon();
 
});