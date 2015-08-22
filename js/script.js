/*----------------------------------------------------------------------
| Script Name: opinion poll of extreme poll
------------------------------------------------------------------------
| Author: Orangebd
------------------------------------------------------------------------*/
/**
 * FUNCITON FOR SUBMIT POLL
 */
function submit_poll(vote_index){
	var poll_id 		= $('input[name="select_poll_id"]').val();
	var poll_options	= $('input[name="poll_options"]').val();
	var poll_temp_loc 	= $('input[name="poll_temp_loc"]').val();
	var poll_temp_url 	= $('input[name="poll_temp_url"]').val();
	
	var URL	= poll_temp_url + '/vote_submit.php';
	$.ajax({
		url:URL,
		type:"POST",
		data:{poll_id:poll_id, poll_options:poll_options, vote_index:vote_index},
		beforeSend:function(){
			$('.extreme_poll > .poll_submit_overlay').fadeIn();
			$('.extreme_poll > .poll_submit_preloader').fadeIn();
		},
		success:function(msg){
			$('.extreme_poll > .poll_options,.extreme_poll > .poll_submit_btn').hide();
			$('.extreme_poll > .poll_submit_overlay,.extreme_poll > .poll_submit_preloader').fadeOut();	
			
			$('.extreme_poll > .poll_result').fadeIn().html(msg);
		},			 	
		error:function(jqXHR, textStatus, errorMessage){
		}	
	});
}

$(function(){
	/*
	 ** Window Load functions
	 */
	$(window).bind("load resize", function(){		
		if($('.extreme_poll').is(':visible')){
			load_pie_chart('.poll_comp_data','pollCompChartContainer','');
		}
		
		if($('.ultimate_poll').is(':visible')){
			/**
			 * Polling reports
			 */
			$.each($('.ultimate_poll .vote_progressbar'), function() {
				data = $(this).attr('data-val');
				$(this).animate({
					'width' : data + '%'
				},1000);
			});
		}
	});
		
	/*
	 * EXTREME POLLING SCRIPT
	 */
	if($('.extreme_poll').is(':visible')){
		$('.extreme_poll > .poll_options .data').click(function(){
			var sel_val = $(this).attr('data-val');
			$('input[name="selected_votes"]').val(sel_val);
			
			$('.extreme_poll > .poll_options .data').removeClass('active');
			$(this).addClass('active');
			
			$('div.extreme_poll > div.err_msg').fadeOut();
		});
		
		$('.extreme_poll .poll_submit').click(function(){		
			var vote_index 		= $('input[name="selected_votes"]').val();
			
			if(vote_index==''){
				$('.extreme_poll .err_msg').fadeIn().html('<i class="fa fa-info"></i>অনুগ্রহ করে আপনার পছন্দ নির্বাচন করুন।');
			}else{			
				submit_poll(vote_index);
			}
		});
		
		if($('.extreme_poll > .poll_result').is(':visible')){
			var vote_index = '';
			submit_poll(vote_index)
		}
	}
});