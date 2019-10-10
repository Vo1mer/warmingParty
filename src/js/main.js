$(document).ready(function() {

    $('#menu').on('click', 'a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    var $agendaCards = $('#agendaCards');
    $(window).on('scroll', function () {
        if (window.scrollY > 550) {
            $agendaCards.addClass('active');
        }
    });

    var validName = false;
    var validMail = false;
    var validArrive = false;
    var validSelect = false;
    var validStay = false;
    var validDiet = false;

    $('#form').submit(function (event) {
        event.preventDefault();

        var name = $('#name').val();
        var mail = $('#email').val();
        var select = parseInt($('#select').val());
        var arrive = $('#arrive').val();
        var stay = $('#stay').val();
        var diet = $('#diet').val();

        if (name === ""){
            $('#name').removeClass("is-valid").addClass('is-invalid');

        } else {
            $('#name').removeClass("is-invalid").addClass('is-valid');
            validName = true;
        }

        if (mail === ""){
            $('#email').removeClass("is-valid").addClass('is-invalid');
        } else {
            $('#email').removeClass("is-invalid").addClass('is-valid');
            validMail = true;
        }

        if (select === 0){
            $('#select').removeClass("is-valid").addClass('is-invalid');

        } else {
            $('#select').removeClass("is-invalid").addClass('is-valid');
            validSelect = true;
        }

        if (arrive === ""){
            $('#arrive').removeClass("is-valid").addClass('is-invalid');
        } else {
            $('#arrive').removeClass("is-invalid").addClass('is-valid');
            validArrive = true;
        }

        if (stay === ""){
            $('#stay').removeClass("is-valid").addClass('is-invalid');
        } else {
            $('#stay').removeClass("is-invalid").addClass('is-valid');
            validStay = true;
        }

        if (diet === ""){
            $('#diet').removeClass("is-valid").addClass('is-invalid');
        } else {
            $('#diet').removeClass("is-invalid").addClass('is-valid');
            validDiet = true;
        }


        if (validName === true && validMail === true && validSelect === true && validArrive === true
            && validStay === true && validDiet === true){

            $('form').unbind('submit').submit();
        }

    })

});

