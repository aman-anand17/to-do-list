$('ul').on('click','li', function(){
	$(this).toggleClass("completed");
});

$('ul').on('click','span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input').keypress(function(event){
	if(event.which === 13){
		let addtodo = $(this).val();
		$('ul').append("<li><span><i class='fas fa-trash'></i></span>"+ addtodo +"</li>");
		$(this).val('');
	}
});

$('.fa-plus').on('click',function(){
	$('input').fadeToggle(600);
});