 Template.people.rendered = function() {

  $("[rel='tooltip']").tooltip();    
 
    $('.snipthumbnail').hover(
        function(){
            $(this).find('.snipcaption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.snipcaption').slideUp(250); //.fadeOut(205)
        }
    ); 

 }