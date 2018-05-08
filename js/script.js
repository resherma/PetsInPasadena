/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	$('.audioimagebox').mouseenter(function(){
		//console.log('captionappears');
		$(this).find('.textlayer').slideDown();

		var bin = $(this).attr('data-sound');

		console.log(bin);

		$('#player').attr('src', bin);

		$('#player').get(0).play();
	});

	$('.audioimagebox').mouseleave(function(){
		//console.log('captionappears');
		$(this).find('.textlayer').slideUp();

		$('#player').get(0).pause();

	});	

}); //end document.ready block

