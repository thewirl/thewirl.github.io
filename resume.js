//@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-V3-or-later
$(document).ready(function(){
	$("#showkey").on("click", function() {
		if($("#pubkey").hasClass("hidden")){
			$("#pubkey").slideDown("slow");	
			$("#pubkey").removeClass("hidden");	
			$("#pubkey").focus();
			$("#pubkey").select();
		}else{
			$("#pubkey").slideToggle("slow");
		}
	});
	$("#uxadm").on("click", function() {
		$("#uxadm").children().slideToggle("slow");
		$("#sweng").children().slideUp("slow");
		$("#progr").children().slideUp("slow");
		$("#ifsec").children().slideUp("slow");
		$("#dev").children().slideUp("slow");
		$("#web").children().slideUp("slow");
	});
	$("#sweng").on("click", function() {
		$("#uxadm").children().slideUp("slow");
		$("#sweng").children().slideToggle("slow");
		$("#progr").children().slideUp("slow");
		$("#ifsec").children().slideUp("slow");
		$("#dev").children().slideUp("slow");
		$("#web").children().slideUp("slow");
	});
	$("#progr").on("click", function() {
		$("#uxadm").children().slideUp("slow");
		$("#sweng").children().slideUp("slow");
		$("#progr").children().slideToggle("slow");
		$("#ifsec").children().slideUp("slow");
		$("#dev").children().slideUp("slow");
		$("#web").children().slideUp("slow");
	});
	$("#ifsec").on("click", function() {
		$("#uxadm").children().slideUp("slow");
		$("#sweng").children().slideUp("slow");
		$("#progr").children().slideUp("slow");
		$("#ifsec").children().slideToggle("slow");
		$("#dev").children().slideUp("slow");
		$("#web").children().slideUp("slow");
	});
	$("#dev").on("click", function() {
		$("#uxadm").children().slideUp("slow");
		$("#sweng").children().slideUp("slow");
		$("#progr").children().slideUp("slow");
		$("#ifsec").children().slideUp("slow");
		$("#dev").children().slideToggle("slow");
		$("#web").children().slideUp("slow");
	});
	$("#web").on("click", function() {
		$("#uxadm").children().slideUp("slow");
		$("#sweng").children().slideUp("slow");
		$("#progr").children().slideUp("slow");
		$("#ifsec").children().slideUp("slow");
		$("#dev").children().slideUp("slow");
		$("#web").children().slideToggle("slow");
	});
	$("#pubkey").on("click", function() {
		$("#pubkey").focus();
		$("#pubkey").select();
	});
/*	$(".navb").mousedown(function(){
		$(this).css("border-color","purple");
	});
	$(".navb").mouseup(function(){
		$(this).css("border-color","blue");
	});
*/
});

