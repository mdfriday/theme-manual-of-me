$(window).ready(function() {
    $(".slideto").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},1000);
    });
    
    $('.ephemeral').delay(5000).slideUp();
});