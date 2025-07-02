
function autoAdjustFontSize() {
    var element = document.getElementById('autoFontSize');

    var maxWidth;
    if (window.innerWidth < 767) { maxWidth = window.innerWidth; } else { maxWidth = element.clientWidth; }

    for (var fontSize = 95; fontSize <= 260; fontSize++) {
        element.style.fontSize = fontSize + 'px';
        console.log("autoFontSize" + element.scrollWidth + " " + maxWidth);
        if (element.scrollWidth > maxWidth) {
            var size = fontSize - 1;
            element.style.fontSize = size + 'px';
            var allSpans = $("#autoFontSize").find("span");
            allSpans.each(function () {
                $(this).css("line-height", '');
            });
            console.log(1);
            break;
        }
    }
    if (window.innerWidth < 991 && window.innerWidth >= 767
        && element.scrollWidth < 991) {
        element.style.fontSize = 200 + 'px';
        element.style.lineHeight = 200 + 'px'; console.log(2);
    } else if (window.innerWidth < 767) {
        element.style.fontSize = 115 + 'px';
        element.style.lineHeight = 115 + 'px';
        console.log(window.innerWidth + "  " + element.clientWidth);
        console.log(3);
    }
}

// Gọi hàm sau khi trang tải hoàn tất
window.onload = autoAdjustFontSize;
// Gọi hàm sau mỗi lần thay đổi kích thước cửa sổ
window.onresize = autoAdjustFontSize;

$(document).ready(function () {
    //octopus animation 
    if (window.innerWidth >= 991) {
        setTimeout(function () {
            $("#octopus-start").removeClass('d-none');
        }, 2000);
        console.log('Octopus animation 1');
    } else if (window.innerWidth < 991) {
        $("#octopus-end").removeClass('d-none');
        console.log('Octopus animation 2');
    }
    console.log(window.innerWidth);
    if ((window.innerWidth < 767 && window.innerWidth >= 541) || window.innerWidth <= 480) {
        $("#octopus-end").css('transform', 'translateX(-25%) scale(1.4)');
    } else if (window.innerWidth < 541 && window.innerWidth > 480) {
        $("#octopus-end").css('transform', ' translateX(-14%) scale(1.4)');
    }
    if (window.innerWidth < 376) {
        $("#octopus-end").css('transform', ' translateX(-21%) scale(1.4)');
    }


    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev btn-arrow btn-arrow-left d-none" style="position: absolute; top: 50%;  left: 0;z-index: 99;">Thái</button>',
        nextArrow: '<button type="button" class="slick-prev btn-arrow btn-arrow-right d-none" style="position: absolute; top: 50%;  right: 0;z-index: 99;">Thái</button>',
    });

});