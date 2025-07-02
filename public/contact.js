$(document).on('mousemove', function (e) {
    var eyeMove = $('#eye-move');
    var t = (e.clientX / window.innerWidth * 100) - 50;
    var k = (e.clientY / window.innerHeight * 100 + 3) - 50;

    // Giới hạn giá trị của k và t
    k = Math.min(40, Math.max(-14, k));
    t = Math.min(30, Math.max(-30, t));

    eyeMove.css('transform', 'translate(' + t + '%,' + k + '%)');
});

function openMailLink() {
    window.open('https://mail.google.com/mail/u/0/?fs=1&to=tramthaovy05@gmail.com&tf=cm', '_blank');
}
function openFBLink() {
    window.open('https://www.facebook.com/thaovy.tram.127', '_blank');
}
function openLKLink() {
    window.open('https://www.linkedin.com/in/thao-vy-tram-8a02842a6/', '_blank');
}
function openBehanceLink() {
    window.open('https://www.behance.net/vytram', '_blank');
}