(function($){
  $(document).ready(function(){
  	 $('.pacote_button').live('mousedown', function(){
        var str = $(this).attr('class');
       
        
        var substr = str.split(' ');
        var class_select = substr[1];
        if(class_select == 'pacote_personalizado')
        	exit();
         $('.pacote_button').removeClass('active');
        $(this).addClass('active');
        $('#-support-simulador-componentes .form-item input').selected(false);
        $('#-support-simulador-componentes .form-item input.'+class_select).selected(true);

        
     }); 
     $('#-support-simulador-componentes .form-item input').live('change', function(){
        $('.pacote_button').removeClass('active');
        $('.pacote_button.pacote_personalizado').addClass('active');

     });
  });
})(jQuery);


