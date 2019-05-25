
$(document).ready(function(){

$("#cuurent_pwd").keyup(function(){
	var cuurent_pwd = $("#cuurent_pwd").val();
	$.ajax({
		type:'get',
		url:'/admin/check-pwd',
		data:{cuurent_pwd:cuurent_pwd},
		success:function(resp){
		//	alert(resp);
		if(resp=="false"){
			$("#chkPwd").html("<font color='red'>Current Password is Incorrect</font>");

		}else if(resp=="true"){
			$("#chkPwd").html("<font color='green'>Current Password is Correct</font>");
		}

	

		},error:function(){
			alert("error");

		}



	});

});
	
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();
	
	$('select').select2();
	
	// Form Validation
    $("#basic_validate").validate({
		rules:{
			required:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
    // Category Validation
		$("#add_category").validate({
			rules:{
				category_name:{
					required:true
				},
				url:{
					required:true
				}
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
				$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
				$(element).parents('.control-group').addClass('success');
			}
		});
	
		// Product Validation
		$("#add_product").validate({
			rules:{
				category_id:{
					required:true
				},
				product_name:{
					required:true
				},
				product_code:{
					required:true
				},
				product_color:{
					required:true
				},
				price:{
					required:true,
					number:true
				},
				image:{
					required:true
				}
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
				$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
				$(element).parents('.control-group').addClass('success');
			}
		});
	
		// Product Validation
		$("#edit_product").validate({
			rules:{
				category_id:{
					required:true
				},
				product_name:{
					required:true
				},
				product_code:{
					required:true
				},
				product_color:{
					required:true
				},
				price:{
					required:true,
					number:true
				}
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
				$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
				$(element).parents('.control-group').addClass('success');
			}
		});
	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
			cuurent_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#new_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	$(document).on('click','.deleteRecord',function(e){
		var id = $(this).attr('rel');
		var deleteFunction = $(this).attr('rel1');
		swal({
			title: "Are you sure?",
			text: "Your will not be able to recover this Record Again!",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		},
		function(){
				window.location.href="/admin/"+deleteFunction+"/"+id;
		});
});


});
