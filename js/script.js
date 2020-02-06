$(document).ready(function () {
    $( "#clickme" ).click(function() {
        $( "#to_open" ).slideDown( "slow");
        $("#clickme").addClass("display_none")
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
        }
    })
    $(".fixed").on("click", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
})
