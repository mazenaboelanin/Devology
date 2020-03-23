

$(document).ready(function(){

    var leftArrow = $("#test .fa-chevron-circle-left") ,
        rightArrow = $('#test .fa-chevron-circle-right');

    // Testimonials slider

    //check function 
    function checkClients()
    {
        if($('.client:first').hasClass('active'))
        {
            leftArrow.fadeOut();
        }
        else
        {
            leftArrow.fadeIn();
        }
        if($('.client:last').hasClass('active'))
        {
            rightArrow.fadeOut();
        }
        else
        {
            rightArrow.fadeIn();
        }
    }

    checkClients();

    $('#test i').click(function(){


        if($(this).hasClass('fa-chevron-circle-right'))
        {
            $('#test .active').fadeOut(100 , function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

               checkClients();

            });
        }
        else
        {
            $('#test .active').fadeOut(100 , function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

               checkClients();

            });
        }
        

    });



});