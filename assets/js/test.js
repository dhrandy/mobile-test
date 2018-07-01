$(document).ready(function(){
	$("#find").click(function(){
		$(".address-form").modal('show');
	});
	$(".address-form").modal({
        closable: true,
	});
});

$('.address-form').modal('refresh');