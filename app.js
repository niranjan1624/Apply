
var student = {
					login_credentials: {
						
						username: "",
						password:"pass"
					},
					
					profile: {
						personal_information: {
							first_name:"",
							middle_name:"",
							last_name:"",
							gender:"",
							dob:"",
							ssn_no:"",
						},
						address: {
							country:"",
							address1:"",
							address2:"",
							address3:"",
							city:"",
							state:"",
							zipcode:""
						},
						contact_details: {
							email:"",
							phone_no:"",
							skype_id:""
							
						},
						geography: {
							country_of_birth:"",
							city_of_birth:"",
							citizenship:""
						},

						disciplinary_history: {
							disciplinary_history:""
						},
						criminal_history: {
							criminal_history:""
						}
					},
					
					family: {
						household:{
							which_parent_do_you_live_with:"",
							martial_status:"",
							do_you_have_children:""
							
						},
						parent1: {
							type:"Father",
							living:"",
							first_name:"",
							middle_name:"",
							last_name:"",
							email:"",
							phone:"",
							address:"",
							occupation:"",
							employment_status:"",
							name_of_employer:"",
							education_level:""
						},
						
						parent2: {
							type:"Mother",
							living:"",
							first_name:"",
							middle_name:"",
							last_name:"",
							email:"",
							phone:"",
							address:"",
							address:"",
							occupation:"",
							employment_status:"",
							name_of_employer:"",
							education_level:""
						}
					},
					education: {
						school: {
							no_of_schools: "",
							school_name: "",
							date_of_graduation:"",
							counsellor_first_name:"",
							counsellor_middle_name:"",
							counsellor_last_name:"",
							counsellor_phone:"",
							counsellor_email:""
						},
						education_interruption:{
							education_interruption:""
						},
						collage_university: {
							no_of_collage_or_university_level_courses_taken:""
						},
						grades: {
							class_ranking:"",
							grad_class_size:"",
							cumulative_GPA:"",
							GPA_scale:""
							
						}
					},
					tests: {
						test: {
							tests_taken:"",
							test_name: "",
							highest_critical_reading_score:"",
							highest_math_score:"",
							highest_writing_score:""
						}
					}
				  }
var values = {};
var tests_taken = 0
var no_schools = 0
var student1 = {}
function createInput(ele,type,clsname,id,required){
	var div1 = document.createElement('div')
	div1.className = "col-xs-8"
	var field = document.createElement("input");
	field.type = type;
	field.className = clsname;
	field.id = id;
	field.required=required;
	field.onpaste = true;
	document.getElementsById(id).appendChild(field);
	document.getElementById(ele).appendChild(div);
}
function createLabel(ele,name,value,id,required){
	var wrapper = $("#"+ele);
	if (required)
		$(wrapper).append( '<br/><div class=form-group> <label class=control-label col-xs-4 for='+name+' name='+name+'>'+value+'&nbsp;<span style="color:red;">*</span><br/></label></div>');
	else
		$(wrapper).append( '<div class=form-group> <label class=control-label col-xs-4 for='+name+' name='+name+'>'+value+'</label></div>');
}
function createHiddenfield(ele,id) {
	var field = document.createElement("p");
	field.id = id;
	//field.className = "error";
	field.hidden = true;
	document.getElementById(ele).appendChild(field);
}
function showMsg(id,msg) {
	$(id).show()
	$(id).html(msg);
}
$(document).ready(function() {
	if(getCurentFileName() == "Apply.html") {
		//loginCredential();
		$("#welcome").show();
		$("#crimHis").hide();
			$("#discHis").hide();
		sessionexist();
		$('#p1_mob').val('+91');
		$("#p1_mob").intlTelInput();						
		$("#p1_mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	

		$('#p2_mob').val('+91');
		$("#p2_mob").intlTelInput();						
		$("#p2_mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	
	}
	else if (getCurentFileName() == "Apply2.html") {

		
		/* if(localStorage.user != undefined)  {
		RegInfo();
		$("#mob").intlTelInput();
		 $("#mob").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
			allowNumbers(e);
		}
    });
	} else {
		window.location.href = "Apply.html"
		
	} */
	}
	else if(getCurentFileName() == "addressinfo.html") {
		sessionexist();
		$("#mob").intlTelInput();
		$("#mob").focusout(function(){
			 validateField("#mob", "mob")
		 });
		 $("#address1").focusout(function(){
				 validateField("#address1", "text","House Number")
		 });
		  $("#address2").focusout(function(){
				 validateField("#address2", "text", "Street")
		 });
		  $("#city").focusout(function(){
				 validateField("#city", "text","City")
		 });
		  $("#zipcode").focusout(function(){
				 validateField("#zipcode", "text")
		 }); 
	}
	else if(getCurentFileName() == "personalinfo.html") {
		$("#welcome").show();
		var emaill = ""
		var student1 = {};
		sessionexist();
		/* $('#collapseTwo').collapse('toggle');
		$('#collapseThreee').collapse('toggle');
		$('#collapseFourr').collapse('toggle');
		$('#collapseFivee').collapse('toggle');
		$('#collapseSix').collapse('toggle');
		
		$('#1collapseTwoo').collapse('toggle');
		$('#1collapseThreee').collapse('toggle');
		
		$('#2collapseTwoo').collapse('toggle');
		$('#2collapseThreee').collapse('toggle');
		$('#2collapseFourr').collapse('toggle');*/
		
		// get student object from datastore
		
		
		
		//console.log(student1);
		//fjuApplication(student1);
			 $("#first_name").focusout(function(){
				validateField("#first_name", "name")
			});
			  $("#last_name").focusout(function(){
					 validateField("#last_name", "name")
			});
			/* $("#middle_name").focusout(function(){
					 validateField("#middle_name", "name")
			});
		 */
	} else if(getCurentFileName() ==  "geography.html") {
		$("#welcome").show();
		sessionexist();
		$("#ciob").focusout(function(){
				validateField("#ciob", "text","City of Birth")
		});
		$("#cityzenship").focusout(function(){
				validateField("#cityzenship", "text","Citizenship")
		});
		$("#disHis").focusout(function(){
				validateField("#disHis", "text","Disciplinary History")
		});
		$("#crimHis").focusout(function(){
				validateField("#crimHis", "text","Criminal History")
		});
			
	}  else if(getCurentFileName() ==  "household.html") {
		$("#welcome").show();
		sessionexist();
	} else if(getCurentFileName() ==  "parent1.html") {
		$("#welcome").show();
		sessionexist();
		
		$('div input[id][type]').each(function(){
			if($(this).attr('id') != "p1_middle_name") {
				console.log();
				  $("#"+$(this).attr('id')).focusout(function(){
				  validateField("#"+$(this).attr('id'), "#"+$(this).attr('type'))
			
			}); 
			}
			});
	
		
		$('#p1_mob').val('+91');
		$("#p1_mob").intlTelInput();						
		$("#p1_mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	
	} else if(getCurentFileName() ==  "parent2.html") {
		$("#welcome").show();
		sessionexist();
		
		$('div input[id][type]').each(function(){
			if($(this).attr('id') != "p2_middle_name") {
				  $("#"+$(this).attr('id')).focusout(function(){
				  validateField("#"+$(this).attr('id'), "#"+$(this).attr('type'))
			
			}); 
			}
			});
	
		
		$('#p2_mob').val('+91');
		$("#p2_mob").intlTelInput();						
		$("#p2_mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	
	}else if(getCurentFileName() ==  "parent2.html") {
		$("#welcome").show();
		sessionexist();
		
		$('div input[id][type]').each(function(){
			if($(this).attr('id') != "1middle_name") {
				  $("#"+$(this).attr('id')).focusout(function(){
				  validateField("#"+$(this).attr('id'), "#"+$(this).attr('type'))
			
			}); 
			}
		});
		$('#1mob').val('+91');
		$("#1mob").intlTelInput();						
		$("#1mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	
	}
	else if(getCurentFileName() == "apply-pin.html") {
		$("#sendPin").hide();
		$('#mob').val('+91');
		$("#mob").intlTelInput();						
		$("#mob").keydown(function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if (e.keyCode != 187 && e.keyCode != 16) {
				allowNumbers(e);
			}
		});	
		$("#welcome").show();
		$.post("/meta/sessionexist",{dummy:"dum"},function(data){
			console.log(data);
			
			if(data != "None")
				window.location.href="Apply.html"
			/*else
				if($.cookie("email")) {
					$('#email').val($.cookie("email"));
					$('#mob').val($.cookie("mob"));
					$('#skype').val($.cookie("skype"));
					$("#pinn").show();
					$("#welcome").html("If "+$.cookie("email") +" is not your  mail id then ")
					$("#welcome").show();
					 $("#em").html("&nbsp Click here")
					 $("#em").show();
					 
				}
			console.log($.cookie("email"));*/
		});


	}/* $(".panel-default").children(".panel-collapse").append('<br/><div class="text-right" style="margin-bottom:20px; margin-right:250px"><button class="btn btn-primary" id="'+i+'"style="color:white; background-color:#2d4250">Submit</button></div>'); */
});
function insertBef(id) {
	 $(id).insertBefore($("#sex"));
}
function fjuApplication(student) {

	/* 
	$('#mob').val('+91');
	$("#mob").intlTelInput();
	 $("#mob").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
			allowNumbers(e);
		}
    }); */
	
	$('#p1_mob').val('+91');
	$("#p1_mob").intlTelInput();						
	$("#p1_mob").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
			allowNumbers(e);
		}
    });	
	$('#p2_mob').val('+91');
	$("#p2_mob").intlTelInput();						
	$("#p2_mob").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
			allowNumbers(e);
		}
    });
	$('#ncc').keydown(function(e) {
		allowNumbers(e);
	});

	
	$('#grad_cls_size').keydown(function(e) {
		allowNumbers(e);
	});
	$('#cgpa').keydown(function(e) {
		allowNumbers(e);
	});
	$('#gpas').keydown(function(e) {
		allowNumbers(e);
	});
	

	

	
}
function createTestFields(id) {
	
	createLabel("3collapseOne", id+"test_name", "Test Name",id+"testt_name",true);
	createHiddenfield("3collapseOne",id+"test_name_error");
	createInput("3collapseOne", "text", "input", id+"test_name",true);
	
	createLabel("3collapseOne", id+"hcrs", "Highest Critical Reading Score",id+"hcrss",true);
	createHiddenfield("3collapseOne",id+"hcrs_error");
	createInput("3collapseOne", "text", "input", id+"hcrs",true);	
	
	createLabel("3collapseOne", id+"hms", "Highest Math Score",id+"hmss",true);
	createHiddenfield("3collapseOne",id+"hms_error");
	createInput("3collapseOne", "text", "input", id+"hms",true);
	
	createLabel("3collapseOne", id+"hws", "Highest Writing Score",id+"hwss",true);
	createHiddenfield("3collapseOne",id+"hws_error");
	createInput("3collapseOne", "text", "input", id+"hws",true);

	
}
function createSchoolFields(id){
	var field = document.createElement("h3");
	field.title = "School "+id
	field.id = id+"head"
	document.getElementById("2collapseOne").appendChild(field);
	$('#'+id+"head").attr('title', 'School '+id + ':');
	createLabel("2collapseOne", id+"schl_name", "School Name",id+"schll_name",true);
	createInput("2collapseOne", "text", "input", id+"schl_name",true);
	createHiddenfield("2collapseOne",id+"schl_name_error");
	
	createLabel("2collapseOne", id+"dog", "Date of Graduation",id+"dogg",true);
	createInput("2collapseOne", "text", "input", id+"dog",true);
	createHiddenfield("2collapseOne",id+"dog_error");
	console.log(student.profile.address.country);
	if(student.profile.address.country != "India" ) {

		createLabel("2collapseOne", id+"first_name", "Counsellor First name",id+"first",true);
		createInput("2collapseOne", "text", "input", id+"first_name",true);
		createHiddenfield("2collapseOne",id+"first_name_error");
		
		createLabel("2collapseOne", id+"middle_name", "Counsellor Middle name",id+"middle",false);
		createInput("2collapseOne", "text", "input", id+"middle_name",false);
		createHiddenfield("2collapseOne",id+"middle_name_error");
		
		createLabel("2collapseOne", id+"last_name", "Counsellor Last name",id+"last",true);
		createInput("2collapseOne", "text", "input", id+"last_name",true);
		createHiddenfield("2collapseOne",id+"last_name_error");
		
		createLabel("2collapseOne", id+"email", "Counsellor Email Address",id+"emaill",true);
		createInput("2collapseOne", "email", "input", id+"email",true);
		createHiddenfield("2collapseOne","email_error");
		
		createLabel("2collapseOne", id+"mob", "Counsellor Phone",id+"phone",true);
		createInput("2collapseOne", "tell", "input", id+"mob",true);
		createHiddenfield("2collapseOne",id+"mob_error");
		
		$('#'+id+'mob').val('+1');
		$('#'+id+'mob').intlTelInput();	
		 $('#'+id+'mob').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
			allowNumbers(e);
		}
    });
	}
}
$('select').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
	var id = this.id;
	console.log(id + "  "+ valueSelected )
    if(valueSelected == "Married" || valueSelected == "Separated" || valueSelected == "Divorced"){
		$('#mart').show();
		//$('#dyhcl').show();
	}
	if(valueSelected == "Unmarried") {
		console.log("trying to hide")
		$('#mart').hide();
		//$('#dyhcl').hide();
	}
	if(id == "p1_living") {
		if(valueSelected == "No")
			$("#p1_divFields").hide()
		else
			$("#p1_divFields").show()
	}
	if(id == "p2_living") {
		if(valueSelected == "No")
			$("#p2_divFields").hide()
		else 
			$("#p2_divFields").show()

		
	}
	if(id == "month" || id == "day" || id == "year") 
		$("#dob_error").hide();
	if(id == "state") 
		$("#state_error").hide();
	if(id == "country")
		$("#country_error").hide();
	/* if(id == "no_of_sch") {
		$('#2collapseOne').empty();
		var i = 0;
		while(i < valueSelected) {
			i++;
			createSchoolFields(i)
		}
	} */
	if(id == "tests_taken") {
		$('#3collapseOne').empty();
		var i = 0;
		while(i < valueSelected) {
			i++;
			createTestFields(i)
		}
	}
			$('div input[id][type]:required').each(function(){
			  $("#"+$(this).attr('id')).focusout(function(){
			  validateField("#"+$(this).attr('id'), "#"+$(this).attr('type'))
		}); 
		});
});
function RegInfo() {
	
	 var wrapper = $(".AccReg-form"); 
	$(wrapper).append("<ul>")
			 createLabel("Register1", "first_name", "First/given name","first",true);
			 createHiddenfield("Register1","first_name_error");
			 createInput("Register1", "text", "defaultTextInput input", "first_name",true);
			 
			 createLabel("Register1", "last_name", "Last/family/surname","last",true);
			 createHiddenfield("Register1","last_name_error");
			 createInput("Register1", "text", "defaultTextInput input", "last_name",true);

			 createLabel("register2", "skype", "Skype ID","last",false);
			 createInput("register2", "text", "defaultTextInput input", "skype",false);

	$(wrapper).append("</ul>");
	 $("#first_name").focusout(function(){
		 validateField("#first_name", "text")
 });
  $("#last_name").focusout(function(){
		 validateField("#last_name", "text")
 });
 $("#mob").focusout(function(){
		 validateField("#mob", "mob")
 });
 $("#address1").focusout(function(){
		 validateField("#address1", "text")
 });
  $("#address2").focusout(function(){
		 validateField("#address2", "text")
 });
  $("#city").focusout(function(){
		 validateField("#city", "text")
 });
  $("#state").focusout(function(){
		 validateField("#state", "text")
 });
  $("#zipcode").focusout(function(){
		 validateField("#zipcode", "text")
 }); 

 
}
function loginCredential(){
	 var wrapper = $(".Register0"); //Fields wrapper
		$(wrapper).append("<ul>")
			 createLabel("Register0", "email", "Email Address");
			 createHiddenfield("Register0","email_error")
			 createInput("Register0", "email", "defaultTextInput input", "email",true);
			 
			 
			 createLabel("Register0", "re_email", "Re-type Email Address");
			 createHiddenfield("Register0","re_email_error")
			 createInput("Register0", "email", "defaultTextInput input", "re_email",true);
			 
			 
			 createLabel("Register0", "pass", "Password");
			 createHiddenfield("Register0","pass_error")
			 createInput("Register0", "password", "defaultTextInput input", "pass",true);
			 
			 createLabel("Register0", "re_pass", "Re-type Password");
			 createHiddenfield("Register0","re_pass_error")
			 createInput("Register0", "password", "defaultTextInput input", "re_pass",true);

			disableCopyPaste("#re_email");
			disableCopyPaste("#pass");
			disableCopyPaste("#re_pass");
    $(wrapper).append("</ul>");
$("#email").focusout(function(){
		 validateField("#email", "email")
 });
 $("#re_email").focusout(function(){
		 validateField("#re_email", "email")
 });
 $("#pass").focusout(function(){
		 validateField("#pass", "password")
 });
 $("#re_pass").focusout(function(){
		 validateField("#re_pass", "password")
 });
	
}

$('form#Reg-Form').submit(function() {

	$("form#Reg-Form :input").each(function(){
		var input = $(this);
		var value = input.val();
		var id = input.attr("id");
		values[id] = value;
		
		var selectedVal = "";
	});
	var selected = $("#radioDiv input[type='radio']:checked");
	if (selected.length > 0) {
		selectedVal = selected.val();
		values["gender"] = selectedVal;
	}
	if (validateRegFields(values) && validateField("#mob","mob")) {
		// send all the data to server (data store)
		var student = assignValuesJson(values);
		console.log("passed")
		sendData(student);
	} else {
		//same page should be shown show the errors
		console.log("notPassed")
	}
	window.location.href = "Apply2.html"
	console.log(values);
 });

 $('form#loginForm').submit(function() {
	 console.log("submit");
	 var pass = true;
	if ($("#email").val() != $("#re_email").val()) {
		showMsg("#re_email_error", "Email addresses must match.")
		pass = false
	}
	if ($("#pass").val() != $("#re_pass").val()) {
		showMsg("#re_pass_error", "Passwords must match.")
		pass = false
	}
	if(pass) {
		$.post( "/student/existstudent",{email:$("#email").val()}, function( data ) {
				//console.log(student);
				if (data == "exist") {
					showMsg("#err_101", "Student email address already exist");
					
				}
				else {
					console.log("success");
					student.login_credentials.username = $("#email").val() 
					student.login_credentials.password = $("#pass").val() 
					student.profile.contact_details.email = $("#email").val() 
					sendData(student)
					localStorage.user="dummy";
					window.location.href = "Apply2.html"
				}
			});  
		
	}
 });
function validateField(id,type,name) {
	if(id == "#first_name" ||id == "#p1_first_name"|| id == "#p2_first_name" || id == "#last_name" || id == "#p1_last_name" || id == "#p2_last_name" || id == "#p1_noe" || id == "#p2_noe")
		type = "name";
	var pass = false;
	var value = $(id).val();
	var idd = id;
	id = id+"_error";
	if(value==""){
		
	}

	else {
	switch (type) {
		case "email":
			
			if(value.indexOf("@") == -1)
				showMsg(id, "Email must include one @.")
			else if(value.indexOf(".") == -1)
				showMsg(id, "Email must include one dot (.)")
			else if(value.indexOf("@.") != -1 || value.indexOf(".@") != -1 || value[value.length - 1] == ".")
				showMsg(id,"Email before and after @ cannot start or end with a dot.")
			else if(value[value.length - 1] == "@")
				showMsg(id, "invalid email id.")
			else {
				$(id).hide();
				pass = true;
			}
			break;
		case "name":
			var regx = /^[A-Za-z]+$/;
			var len = 2;
			if(id == "middle_name") {
				len = 0;
			}
			if (!regx.test(value) || value.length < len) {
				showMsg(id, "Only alphabets allowed.")
				pass = false;
			} else {
				pass = true;
				$(id).hide();
			}
			break;
		case "password":
			var msg = ""
			if(value.length < 8 || value.length > 16)
				msg = msg + "Password Length should be between 8 and 16 characters.<br\>";
			if (!value.match(/([A-Z])/))
				msg = msg + "Password must have at least one upper case alphabetic character.<br\>";
			if (!value.match(/([a-z])/))
				msg = msg + "Password must have at least one lower case alphabetic character.<br\>"
			if (!value.match(/([0-9])/))
				msg = msg + "Password must have at least one numeric character.<br\>"
			if (!value.match(/([!@#$%^&*])/))
				msg = msg + "Password must have at least one of the following characters:<br/>! @ # $ % ^ & *<br/>"
			if (value.match(/([ ])/))
				msg = msg + "Password should not have space character(s).<br/>"
			if(msg != "")
				showMsg(id,msg);
			else {
				$(id).hide(); 
				pass = true;
			}
			break;
		case "mob":
			if(value.length < 7) 
				showMsg(id,"Please enter the Phone Number")
			else if(value.substring(0,2) == "+1" && value.length != 12)
				showMsg(id, "Phone - For country code +1 your phone number must be 10 digits.")
			else if(value.length <= 9 || value.length >= 16)
				showMsg(id,"Phone - Phone number must be from 7 to 14 digits.");
			else {
				$(id).hide();
				pass = true;
			}
			break;
		default:
			$(id).hide();
			pass = true;
	}
	if(!pass ) {
		$(idd).css('outline-color','red');
		$(idd).focus();
		console.log(idd);
		} else {
		$(idd).css('outline-color','#1589FF');
	}
	}
	
	return pass;
}
function validateDOB(values){
	var pass = true;
	//var zip = values['zipcode'];
	var mm = values["month"]
	var dd = values["day"]
	var yy = values["year"]
	if (mm==null || dd==null || yy==null)  {
		//showMsg("#dob_error", "Please complete the required field");
		pass  = false
		return false 
	}
	var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
		if (mm==1 || mm>2)
              {
                  if (dd>ListofDays[mm-1])
                  {
                      //alert('Invalid date format!');
                      pass = false;
					  showMsg("#dob_error","Invalid Date of Birth");
					  return false
                  }
              }
              if (mm==2)
              {
                  var lyear = false;
                  if ( (!(yy % 4) && yy % 100) || !(yy % 400))
                  {
                      lyear = true;
                  }
                  if ((lyear==false) && (dd>=29))
                  {
					  showMsg("#dob_error","Invalid Date of Birth");
					  pass = false
                      return false;
                  }
                  if ((lyear==true) && (dd>29))
                  {
					  showMsg("#dob_error","Invalid Date of Birth");
                      pass = false
                      return false;
                  }
              }  
		/* if(zip.length > 10) {
			showMsg("#zipcode_error", "Enter valid zip code");
			pass  = false;
			return false;
		} */
		if(pass)
			$("#dob_error").hide();
	return pass
}
function disableCopyPaste(id){
	  $(id).bind("cut copy paste",function(e) {
          e.preventDefault();
      });
}
function getCurentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}
function assignValuesJson(value) {
if (getCurentFileName() == "Apply2.html") {
		student.profile.personal_information.first_name = values['first_name'];
		student.profile.personal_information.last_name = values['last_name'];
		student.profile.personal_information.gender = values['gender'];
		student.profile.personal_information.dob = values['day']+"/"+ values['month'] + "/" + values['year'];
		student.profile.address.country = values['country'];
		student.profile.address.address1 = values['address1'];
		student.profile.address.address2 = values['address2'];
		student.profile.address.address3 = values['address3'];
		student.profile.address.city = values['city'];
		student.profile.address.state = values['state'];
		student.profile.address.zip_code = values['zipcode'];
		student.profile.contact_details.phone_no = value['mob'];
		student.profile.contact_details.skype_id = value['skype'];
		//send details to datastore
	}
		
		
		return student;
}
function allowNumbers(e) {
	
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl+A, Command+A
				(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
				 // Allow: home, end, left, right, down, up
				(e.keyCode >= 35 && e.keyCode <= 40) || e.keyCode == 187 || e.keyCode == 16) {
					 // let it happen, don't do anything
					 return;
			}
			// Ensure that it is a number and stop the keypress
			
			if (((e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				if(e.keyCode != 187 && e.keyCode != 16)
					e.preventDefault();
	}
}

// Sending all data to data store
$("#1").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		console.log(data);
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			console.log(student);
			student = JSON.parse(student);
					var pass = true;
		if(validateField("#first_name", "name")) {
			student.profile.personal_information.first_name = $("#first_name").val();
			$("#last_name_error").hide();
		}
		 else {
			pass = false;					 
		}
		if($("#middle_name").val() != "") 
			student.profile.personal_information.middle_name = $("#middle_name").val();

		if(validateField("#last_name", "name")) {
			student.profile.personal_information.last_name = $("#last_name").val();
			$("#last_name_error").hide();
		}
		 else {
			pass = false;
		}
		
		var selected = $("#radioDiv input[type='radio']:checked");
		if (selected.length > 0) {
			student.profile.personal_information.gender = selected.val();
			//pass = true;
			$("#gender_error").hide();
		}
		
		if($("#month").val() && $("#day").val() && $("#year").val()) {
			
			var values = {};
			values["month"] = $("#month").val();
			values["day"] = $("#day").val();
			values["year"] = $("#year").val();
			console.log(values)
			if (validateDOB(values)) {
				student.profile.personal_information.dob = $("#day").val() + "/" + $("#month").val()+ "/" + $("#year").val();
				$("#dob_error").hide();
			//	pass = true;
			}
			else {
				pass = false;
				$("#dob_error").show();
				$("#dob_error").css('color','red')
				$("#dob_error").html("Invalid Date of Birth.");
			}
		}
		var ssn = ""
		var pas = true;
		if($("#ssn1").val() != "")
			ssn = $("#ssn1").val() + "-"
		 else {
			pas = false;
		}
		if($("#ssn2").val() != "")
			ssn = ssn+$("#ssn2").val() + "-"
		 else {
			pas = false;
		}
		if($("#ssn3").val() != "")
			ssn = ssn+$("#ssn3").val()
		 else {
			pas = false;
		}
		if (pas && ssn.length == 11) {
			student.profile.personal_information.ssn_no = ssn
			$("#ssn_error").hide();
			//pass = true;
		}
		else if (ssn.length > 0){
			$("#ssn1").css('outline-color','red');
			$("#ssn1").focus()
			showMsg("#ssn_error","Invalid Social Security Number.")
		} else {
			$("#ssn_error").hide();
		}
		//if (pass)
		sendData(student);
		window.location.href = "addressinfo.html"
		});   
	});		
});

$("#2").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			var pass = true;
			student = JSON.parse(student);
		if(validateField("#address1","","House Number"))
			student.profile.address.address1 = $("#address1").val();
		 else {
			pass = false;
		}

		//console.log(pass);
		if(validateField("#zipcode","","Zip/Pin code"))
			student.profile.address.zipcode = $("#zipcode").val();
		 else {
			pass = false;
		}
			if(validateField("#city","","City"))
			student.profile.address.city = $("#city").val();
		 else {
			pass = false;
		}
		if($("#state").val() && validateField("#state","","State"))
			student.profile.address.state = $("#state").val();
		
		if($("#country").val() && validateField("#country")) {
			student.profile.address.country = $("#country").val();
		} else {
			pass = false;
			$("#country_error").show();
			$("#country_error").css('color','red');
			$("#country_error").html("Please select Country.");
		}
		if(validateField("#address2","","Street"))
			student.profile.address.address2 = $("#address2").val();
		 else {
			pass = false;
		}
		if($("#skype").val() != "")
			student.profile.contact_details.skype_id = $('#skype').val();
		console.log(student.profile.address);
		console.log(pass);
		sendData(student);
		//console.log(bootstrap-formhelpers.min.BFHCountriesList);
		
			window.location.href = "geography.html"	
		});     
	});
});

$("#3").click(function(){
	var pass = true
	if(validateField("#email","email")) 
		student.profile.contact_details.email = $('#email').val();
	 else {
		pass = false;
	}
	if(validateField("#mob","mob"))
		student.profile.contact_details.phone_no = $('#mob').val();
	 else {
		pass = false;
	}

	if($("#skype").val() != "")
		student.profile.contact_details.skype_id = $('#skype').val();
	 else {
		pass = false;
	}
	console.log(student.profile.contact_details);
	sendData(student);
	$('#collapseThreee').collapse('toggle');
	$('#collapseFourr').collapse('toggle');
	if(pass)
		$('#sp3').show()
});

$("#4").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			var pass = true
			student = JSON.parse(student);
			student.profile.geography.country_of_birth = $('#cob').val();
			if(validateField("#ciob","","City of Birth"))
				student.profile.geography.city_of_birth = $('#ciob').val();
			else {
				pass = false;
			}
			
			if(validateField("#citizenship","","Citizenship")) {
				student.profile.geography.citizenship = $('#citizenship').val();
				console.log("passerd")
			}
			else {
				pass = false;
			}
			if(validateField("#discHis","","Disciplinary History")) {
				student.profile.disciplinary_history.disciplinary_history = $("#discHis").val();
			}
			else {
				pass = false;
			}
			if(validateField("#crimHis","","Criminal History")) {
				student.profile.criminal_history.criminal_history = $("#crimHis").val();
			} else {
				pass = false;
			}
			console.log(student.profile.geography)
			sendData(student);
			if(pass)
				window.location.href = "household.html";
		});
	});
	
});

$("#5").click(function(){
	var pass = true;
	if(validateField("#discHis")) {
		student.profile.disciplinary_history.disciplinary_history = $("#discHis").val();
		sendData(student);
	}
	else {
		pass = false;
	}
	console.log(student.profile.disciplinary_history)
	$('#collapseFivee').collapse('toggle');
	$('#collapseSix').collapse('toggle');
	if(pass)
		$('#sp5').show()
});

$("#6").click(function(){
	var pass = true;
	if(validateField("#crimHis")) {
		student.profile.criminal_history.criminal_history = $("#crimHis").val();
		sendData(student);
	} else {
		pass = false;
	}
	console.log(student.profile.criminal_history)
	$('#collapseSix').collapse('toggle');
	$('#1collapseOne').collapse('toggle');
	if(pass)
		$('#sp6').show()
});

$("#7").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			student = JSON.parse(student);
			student.family.household.which_parent_do_you_live_with = $("#whichpar").val();
			student.family.household.martial_status = $("#martial").val();
			student.family.household.do_you_have_children = $("#dyhc").val();
			console.log(student.family.household);
			sendData(student);
			window.location.href = "parent1.html"
		});
	});
});

$("#8").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			student = JSON.parse(student);
			var pass = true;
			student.family.parent1.type = "Father";
			student.family.parent1.living = $("#p1_living").val();
			if(validateField("#p1_first_name","name"))
				student.family.parent1.first_name = $("#p1_first_name").val();
			else {
				pass = false;
			}
			console.log(pass)
			if($("#p1_middle_name").val() != "")
				student.family.parent1.middle_name = $("#p1_middle_name").val();
			if(validateField("#p1_last_name","name"))
				student.family.parent1.last_name = $("#p1_last_name").val();
			else {
				pass = false;
			}
				console.log(pass)
			if(validateField("#p1_email","email",""))
				student.family.parent1.email = $('#p1_email').val();
			else {
				pass = false;
			}
			if(validateField("#p1_mob","mob",""))
				student.family.parent1.phone = $('#p1_mob').val();
			else {
				pass = false;
			}
			   
			if(validateField("#p1_ocpn","text","Occupation"))
				student.family.parent1.occupation = $('#p1_ocpn').val();
			else {
				pass = false;
			}
			if(validateField("#p1_emp_status","text","Employment Status"))
				student.family.parent1.employment_status = $('#p1_emp_status').val();
			else {
				pass = false;
			}
			if(validateField("#p1_noe","text","Name of Employer"))
				student.family.parent1.name_of_employer = $('#p1_noe').val();
			else {
				pass = false;
			}
			if(validateField("#p1_edu_level","text","Education Level"))
				student.family.parent1.education_level = $('#p1_edu_level').val();
			else {
				pass = false;
			}
			
				console.log(student.family.parent1)
				sendData(student);
				
			if(pass)
				window.location.href = "parent2.html"
		});
	});
});


$("#9").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			student = JSON.parse(student);
			var pass = true;
			student.family.parent2.type = "Mother";
			student.family.parent2.living = $("#p2_living").val();
			if(validateField("#p2_first_name","name"))
				student.family.parent2.first_name = $("#p2_first_name").val();
			else {
				pass = false;
			}
			console.log(pass)
			if($("#p2_middle_name").val() != "")
				student.family.parent2.middle_name = $("#p2_middle_name").val();
			if(validateField("#p2_last_name","name"))
				student.family.parent2.last_name = $("#p2_last_name").val();
			else {
				pass = false;
			}
				console.log(pass)
			if(validateField("#p2_email","email",""))
				student.family.parent2.email = $('#p2_email').val();
			else {
				pass = false;
			}
			if(validateField("#p2_mob","mob",""))
				student.family.parent2.phone = $('#p2_mob').val();
			else {
				pass = false;
			}
			   
			if(validateField("#p2_ocpn","text","Occupation"))
				student.family.parent2.occupation = $('#p2_ocpn').val();
			else {
				pass = false;
			}
			if(validateField("#p2_emp_status","text","Employment Status"))
				student.family.parent2.employment_status = $('#p2_emp_status').val();
			else {
				pass = false;
			}
			if(validateField("#p2_noe","text","Name of Employer"))
				student.family.parent2.name_of_employer = $('#p2_noe').val();
			else {
				pass = false;
			}
			if(validateField("#p2_edu_level","text","Education Level"))
				student.family.parent2.education_level = $('#p2_edu_level').val();
			else {
				pass = false;
			}
			
				console.log(student.family.parent2)
				sendData(student);
				
			if(pass)
				window.location.href = "personalinfo.html"
		});
	});
});


$("#10").click(function(){
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			var pass = true;
			student = JSON.parse(student)
			var nosc =  1;
			student.education.school.no_of_schools = nosc;
			var sn = []
			var dog = []
			var cfn = []
			var cmn = []
			var cln = []
			var cea = []
			var cp = []

			for(var i =1; i <= nosc; i++) {
				if($("#"+i+"schl_name").val() != "")
					sn[i-1] = $("#"+i+"schl_name").val();
				if($("#"+i+"dog").val() != "")
					dog[i-1] = $("#"+i+"dog").val();
				if($("#"+i+"first_name").val() != "")
					cfn[i-1] = $("#"+i+"first_name").val();
				if($("#"+i+"middle_name").val() != "")
					cmn[i-1] = $("#"+i+"middle_name").val();
				if($("#"+i+"last_name").val() != "")
					cln[i-1] = $("#"+i+"last_name").val();
				if($("#"+i+"email").val() != "")
					cea[i-1] = $("#"+i+"email").val();
				if(validateField("#"+i+"mob","text"))
					cp[i-1] = $("#"+i+"mob").val();
			}
			if(sn.length > 0)
				student.education.school.school_name = sn;
			else {
				pass = false;
			}
			
			if(dog.length > 0)
				student.education.school.date_of_graduation = dog;
			else {
				pass = false;
			}
			
			if(cp.length > 0)
				student.education.school.counsellor_phone= cp
			else {
				pass = false;
			}

			if(cfn.length > 0)
				student.education.school.counsellor_first_name  = cfn
			else {
				pass = false;
			}

			if(cmn.length > 0)
				student.education.school.counsellor_middle_name = cmn
			else {
				pass = false;
			}

			if(cln.length > 0)
				student.education.school.counsellor_last_name = cln;
			else {
				pass = false;
			}

			if(cea.length > 0)
				student.education.school.counsellor_email = cea;
			else {
				pass = false;
			}
			if ($("#edu_intr").val() != "") {
				student.education.education_interruption.education_interruption = $("#edu_intr").val();
			} else {
				pass = false;
			}
			if ($("#ncc").val() != "") {
				student.education.collage_university.no_of_collage_or_university_level_courses_taken = $("#ncc").val();
			} else {
				pass = false;
			}
			sendData(student);
			console.log(student.education.school);
			if(pass)
				console.log(pass)
				//window.location.href = "personalinfo.html"
		});
	});
	
});


$("#11").click(function(){
	var pass = true;
	if ($("#edu_intr").val() != "") {
		student.education.education_interruption.education_interruption = $("#edu_intr").val();
		sendData(student);
	} else {
		pass = false;
	}
	
	$('#2collapseTwoo').collapse('toggle');
	$('#2collapseThreee').collapse('toggle');
	
	if(pass)
		$('#sp11').show()
});


$("#12").click(function(){
	var pass = true;
	if ($("#ncc").val() != "") {
		student.education.collage_university.no_of_collage_or_university_level_courses_taken = $("#ncc").val();
		sendData(student);
	} else {
		pass = false;
	}
	$('#2collapseThreee').collapse('toggle');
	$('#2collapseFourr').collapse('toggle');
	if(pass)
		$('#sp12').show()
});


$("#13").click(function(){
	var pass = true;
	student.education.grades.class_ranking = $("#1cls_rank").val()
	if($("#1cgpa").val() != "")
		student.education.grades.cumulative_GPA = $("#1cgpa").val();
	else {
		pass = false;
	}
	if($("#1gradsize").val() != "")
		student.education.grades.grad_class_size = $("#1gradsize").val();
	else {
		pass = false;
	}
	
	if($("#1gpas").val() != "")
		student.education.grades.GPA_scale = $("#1gpas").val();
	else {
		pass = false;
	}

	sendData(student);
	$('#2collapseFourr').collapse('toggle');
	if(pass)
		$('#sp13').show()
});


$("#14").click(function(){
	var pass = true;
	var tt = $("#tests_taken").val();
	student.tests.test.tests_taken = tt;
	tn = []
	hcrs = []
	hms = []
	hws = []
	for(var i = 1; i <= tt; i++) {
		console.log("inside for loop")
		console.log($("#"+i+"test_name").val());
		console.log($("#"+i+"hcrs").val())
		console.log($("#"+i+"hms").val())
		console.log($("#"+i+"hws").val());
		if($("#"+i+"test_name").val() != "")
			tn[i-1] = $("#"+i+"test_name").val();
		if($("#"+i+"hcrs").val() != "")
			hcrs[i-1] = $("#"+i+"hcrs").val();
		if($("#"+i+"hms").val() != "")
			hms[i-1] = $("#"+i+"hms").val();
		if($("#"+i+"hws").val() != "")
			hws[i-1] = $("#"+i+"hws").val();
	}
	if(tn.length > 0)
		student.tests.test.test_name = tn;
	else {
		pass = false;
	}
	if(hcrs.length > 0)
		student.tests.test.highest_critical_reading_score = hcrs;
	else {
		pass = false;
	}
	if(hms.length > 0)
		student.tests.test.highest_math_score = hms;
	else {
		pass = false;
	}
	if(hws.length > 0)
		student.tests.test.highest_writing_score = hws;
	else {
		pass = false;
	}
	
	//console.log(student.tests.test);
	console.log(tn + hcrs + hws + hms);
	sendData(student);
	$("#3collapseOnee").collapse('toggle');
	if(pass)
		$('#sp14').show()
});

function sendData(student) {	
	$.ajax({
    url: '/student/savedetails',
    type: 'POST',
    data:JSON.stringify(student),
    success: function (data, status) {
		console.log("data " +jQuery.type(data) + "  ||  "+ data);
    },
    error: function (xhr, desc, err) {
      // alert("errorrrr   "+ err + " ||  "+ xhr.status);
    },
});
}
function fillupDetails(student) {
	student = JSON.parse(student)
	$("#first_name").val(student.profile.personal_information.first_name);
		$("#middle_name").val(student.profile.personal_information.middle_name);
		$("#last_name").val(student.profile.personal_information.last_name);
		if(student.profile.personal_information.dob && student.profile.personal_information.dob != ""){
			$("#month").val(student.profile.personal_information.dob.substring(3,5));
			$("#day").val(student.profile.personal_information.dob.substring(0,2));
			$("#year").val(student.profile.personal_information.dob.substring(6,10));
		}
		 var $radios = $('input:radio[name=gender]');
		if($radios.is(':checked') === false) {
			$radios.filter('[value='+student.profile.personal_information.gender+']').prop('checked', true);
		}
		$("#address1").val(student.profile.address.address1);
		$("#address2").val(student.profile.address.address2);
		$("#city").val(student.profile.address.city);
		$("#state").val(student.profile.address.state);
		if(student.profile.address.country)
			$("#country").val(student.profile.address.country);
		$("#zipcode").val(student.profile.address.zipcode);
		
		if(student.profile.geography.country_of_birth)
			$("#cob").val(student.profile.geography.country_of_birth);
		$("#ciob").val(student.profile.geography.city_of_birth);
		if(student.profile.geography.citizenship)
			$("#citizenship").val(student.profile.geography.citizenship);
		if(student.profile.disciplinary_history.disciplinary_history && student.profile.disciplinary_history.disciplinary_history != ""){
			$("#discHis").val(student.profile.disciplinary_history.disciplinary_history);
			$("#discHis").show()
			var $radios = $('input:radio[name=dis]');
			if($radios.is(':checked') === false) {
				$radios.filter('[value=Yes]').prop('checked', true);
			}
		} else {
			var $radios = $('input:radio[name=dis]');
			if($radios.is(':checked') === false) {
				$radios.filter('[value=No]').prop('checked', true);
		}
	}

		

		if(student.profile.criminal_history.criminal_history && student.profile.criminal_history.criminal_history != ""){
			$("#crimHis").val(student.profile.criminal_history.criminal_history);
			$("#crimHis").show();
			var $radios = $('input:radio[name=crim]');
			if($radios.is(':checked') === false) {
				$radios.filter('[value=Yes]').prop('checked', true);
			}
		} else {
			var $radios = $('input:radio[name=crim]');
			if($radios.is(':checked') === false) {
				$radios.filter('[value=No]').prop('checked', true);
		}
	}
	$("#whichpar").val(student.family.household.which_parent_do_you_live_with);
		$("#martial").val(student.family.household.martial_status);
		if(student.family.household.martial_status != "Unmarried")
			$("#mar").show();
		$("#dyhc").val(student.family.household.do_you_have_children);
		$("#p1_first_name").val(student.family.parent1.first_name);
		$("#p1_middle_name").val(student.family.parent1.middle_name);
		$("#p1_last_name").val(student.family.parent1.last_name);
		$("#p1_living").val(student.family.parent1.living);
		$("#p1_ocpn").val(student.family.parent1.occupation);
		$("#p1_noe").val(student.family.parent1.name_of_employer);
		$("#p1_emp_status").val(student.family.parent1.employment_status);
		$("#p1_edu_level").val(student.family.parent1.education_level);
		$("#p1_email").val(student.family.parent1.email);
		$("#p1_mob").val(student.family.parent1.phone);
		$("#p2_first_name").val(student.family.parent2.first_name);
		$("#p2_middle_name").val(student.family.parent2.middle_name);
		$("#p2_last_name").val(student.family.parent2.last_name);
		$("#p2_living").val(student.family.parent2.living);
		$("#p2_ocpn").val(student.family.parent2.occupation);
		$("#p2_noe").val(student.family.parent2.name_of_employer);
		$("#p2_emp_status").val(student.family.parent2.employment_status);
		$("#p2_edu_level").val(student.family.parent2.education_level);
		$("#p2_email").val(student.family.parent2.email);
		$("#p2_mob").val(student.family.parent2.phone);
		

		 $("#t1").val(student.tests.test.t_listening);
 	     $("#t2").val(student.tests.test.t_speaking);
		 $("#t3").val(student.tests.test.t_reading);
		 $("#t4").val(student.tests.test.t_writing);
		 $("#a1").val(student.tests.test.a_english);
		 $("#a3").val(student.tests.test.a_reading);
		 $("#a4").val(student.tests.test.a_science_reasoning);
		 $("#a2").val(student.tests.test.a_mathematics);
		 $("#s1").val(student.tests.test.s_reading);
		 $("#s2").val(student.tests.test.s_mathematics);
		 $("#s3").val(student.tests.test.s_writing);

		 	 $("#1clsrank").val(student.education.grades.class_ranking)
		$("#1cgpa").val(student.education.grades.cumulative_GPA);
		 $("#1gradsize").val(student.education.grades.grad_class_size );
		$("#1gpas").val(student.education.grades.GPA_scale);
		//console.log(student.education.school.dog);
		if(student.education.school.date_of_graduation && student.education.school.date_of_graduation != ""){
			$("#1month").val(student.education.school.date_of_graduation.substring(3,5));
			$("#1day").val(student.education.school.date_of_graduation.substring(0,2));
			$("#1year").val(student.education.school.date_of_graduation.substring(6,10));
		}
		console.log(student.profile.personal_information.ssn_no)
		if(student.profile.personal_information.ssn_no && student.profile.personal_information.ssn_no != "") {
			$("#ssn1").val(student.profile.personal_information.ssn_no.substring(0,3));
			$("#ssn2").val(student.profile.personal_information.ssn_no.substring(4,6));
			$("#ssn3").val(student.profile.personal_information.ssn_no.substring(7,11));
		}
	console.log("filledupdetails")
}
function getStudentObj(emaill) {
	var student = {}
$.post( "/meta/getStudentObj",{email:emaill}, function( stu ) {
				console.log(stu);		
				fillupDetails(stu)
			});     
console.log(student)			
}


$('#sendPin').click(function(){
	//var resp = grecaptcha.getResponse()
	//loadCaptcha();
/* 	$.get("https://www.google.com/recaptcha/api/siteverify",{secret:"6LdzsggTAAAAAMgP4xV_KDRLSLvbEragkVA2NBzJ",response:resp,headers:{"Access-Control-Allow-Origin", "*"}},function(data){
		console.log(data);
	}); */
	if(true) {
		var em = $('#email').val();
		var mob = $('#mob').val();
		var  skype = $('#skype').val();

		$.cookie("email", em);
		$.cookie("mob", mob);
		$.cookie("skype", skype);
		console.log(em);
		$("#email_error").css('color','red')
		if(validateField("#email","email")) {
			$.post("meta/sendpin",{email:em,res:"",mobile:mob,skyp:skype}, function(data){
				$("#email_error").hide();
				$("#email").css('outline-color','#1589FF');
				
				$('#info1').show()
				$('#info2').show()
					console.log(data);
					$('#info1').css('color', 'green');
					$('#info1').css("list-style-type", "bullet");
					$('#info2').css('color', 'green');
					$('#info2').css("list-style-type", "bullet");
					
					$("#info1").html("A PIN has been generated and sent to your email address")
					$("#info2").html("Please check your mail and enter the PIN below in Step 4 to verify");
					$("#sendPin").text("Submit");
					$("#pinn").show();
			});
		} else {
			$("#email").css('outline-color','red');
			$("#email").focus()
			console.log("failed");
		}
	}
});

$('#validate').click(function(){
	//var resp = grecaptcha.getResponse()
	if(true) {
			var pass = true;
			var pi = $("#pin").val();
			var em = $('#email').val();
			var mob = $('#mob').val();
			var skype = $('#skype').val();

		$.cookie("email", em);
		$.cookie("mob", mob);
		$.cookie("skype", skype);
			console.log(pi + " |||  "+ em)
			if(pi == "") {
				$('#info').show();
				$('#info').css('color', 'red');
				$("#pin").css('outline-color','red');
				$("#pin").focus();
				$("#info").html("Please enter generated PIN.");
				pass = false;
			} 
			if(em == "") {
					$("#email").css('outline-color','red');
					$("#email").focus();
					$("#info").html("Please enter generated PIN.");
					$("#email_error").show();
					$("#email_error").css('color','red')
					$("#email_error").html("Please enter email address");
					pass = false;
					
				} 
				if (pass) {
						$.post("meta/validatepin",{pin:pi,email:em}, function(data){
							$("#pin").css('outline-color','#1589FF');
							$("#email").css('outline-color','#1589FF');
							$('#info').show()
							if(data != "failed") {
								$('#info').css('color', 'green');
								$("#info").html("Successfully verified");
								console.log("test");
								$.post("/meta/login",{email:data},function(dataa){
									console.log(dataa);
									window.location.href="Apply.html"
								});
								
							} else {
								$("#email_error").hide();
								$('#info').css('color', 'red');
								$("#info").html("Invalid Pin");
							}
						});
			}
	}
});

var loadCaptcha = function() {
  var captchaContainer = grecaptcha.render('captcha_container', {
    'sitekey' : '6LdzsggTAAAAAArQ1vJvQvfMhl4K7HmYynJT10UC',
    'callback' : function(response) {
      console.log(response);
    }
  });
};
$(document).on("click","a[name='logout']", function (e) {
        $.get("/meta/logout",function(dataa){
			console.log(dataa);
			window.location.href = "apply-pin.html"
		});
    });
	
function sessionexist() {
	
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
			console.log(data);
			if(data == "None")
				window.location.href="apply-pin.html"
			else {
				var html = "If " + data + " is not your email then "  
				$("#welcome").html(html);
				student.profile.contact_details.email = data;
				student.login_credentials.username  = data;
				console.log(getStudentObj(data));
			}
		});
}
$("input[name=gender]:radio").change(function () {
	$("#gender_error").hide();
});
$("input[name=dis]:radio").change(function () {
	var selected = $("#disc input[type='radio']:checked");
	console.log(selected.val())
	if(selected.val() == "Yes")
		$("#discHis").show();
	else
		$("#discHis").hide();
	
	
});

$("input[name=rpin]:radio").change(function () {
	var selected = $("#pinr input[type='radio']:checked");
	console.log(selected.val())
	if(selected.val() == "Yes") {
		$("#sendPin").hide();
		$("#pinn").show();
	}
	else {
		$("#sendPin").show();
		$("#pinn").hide();
	}
});

$("input[name=crim]:radio").change(function () {
	var selected = $("#crimm input[type='radio']:checked");
	if(selected.val() == "Yes")
		$("#crimHis").show();
	else
		$("#crimHis").hide();
});


$('form#studentForm').submit(function() {
	console.log("student form")
	formSubmit();
});
$('form#studentForm2').submit(function() {
	console.log("student form2")
	formSubmit();
});


$(document).on("click","a[name='fillCookies']", function (e) {

	$('#email').val("");
	$('#mob').val("");
	$('#skype').val("");
	$("#pinn").show();
	$("#welcome").hide();
	$("#em").hide();
	});
function formSubmit() {
	
	$.post("/meta/sessionexist",{dummy:"dum"},function(data){
		console.log(data);
		$.post( "/meta/getStudentObj",{email:data}, function( student ) {
			console.log(student);
			student = JSON.parse(student);
					var pass = true;
		if(validateField("#first_name", "name")) {
			student.profile.personal_information.first_name = $("#first_name").val();
			$("#first_name_error").hide();
		}
		 else {
			pass = false;					 
		}
		if($("#middle_name").val() != "") 
			student.profile.personal_information.middle_name = $("#middle_name").val();

		if(validateField("#last_name", "name")) {
			student.profile.personal_information.last_name = $("#last_name").val();
			$("#last_name_error").hide();
		}
		 else {
			pass = false;
		}
		
		var selected = $("#radioDiv input[type='radio']:checked");
		if (selected.length > 0) {
			student.profile.personal_information.gender = selected.val();
			//pass = true;
			$("#gender_error").hide();
		}
		
		if($("#month").val() && $("#day").val() && $("#year").val()) {
			
			var values = {};
			values["month"] = $("#month").val();
			values["day"] = $("#day").val();
			values["year"] = $("#year").val();
			console.log(values)
			if (validateDOB(values)) {
				student.profile.personal_information.dob = $("#day").val() + "/" + $("#month").val()+ "/" + $("#year").val();
				$("#dob_error").hide();
			//	pass = true;
			}
			else {
				pass = false;
				$("#dob_error").show();
				$("#dob_error").css('color','red')
				$("#dob_error").html("Invalid Date of Birth.");
			}
		}
		student.profile.geography.country_of_birth = $('#cob').val();
			if(validateField("#ciob","","City of Birth"))
				student.profile.geography.city_of_birth = $('#ciob').val();
			else {
				pass = false;
			}
			
			if(validateField("#citizenship","","Citizenship")) {
				student.profile.geography.citizenship = $('#citizenship').val();
				console.log("passerd")
			}
			else {
				pass = false;
			}
			if($("#1schl_name").val() != "")
					student.education.school.school_name = $("#1schl_name").val()
			if($("#1month").val() && $("#1day").val() && $("#1year").val()) {
			
			var values = {};
			values["month"] = $("#1month").val();
			values["day"] = $("#1day").val();
			values["year"] = $("#1year").val();
			console.log(values)
			if (validateDOB(values)) {
				student.education.school.date_of_graduation = $("#1day").val() + "/" + $("#1month").val()+ "/" + $("#1year").val();
				$("#dog_error").hide();
			//	pass = true;
			}
			else {
				pass = false;
				$("#dog_error").show();
				$("#dog_error").css('color','red')
				$("#dog_error").html("Invalid Date of Birth.");
			}
		}

		if($("#1clsrank").val() != "")
			student.education.grades.class_ranking = $("#1clsrank").val()
	if($("#1cgpa").val() != "")
		student.education.grades.cumulative_GPA = $("#1cgpa").val();
	else {
		pass = false;
	}
	if($("#1gradsize").val() != "")
		student.education.grades.grad_class_size = $("#1gradsize").val();
	else {
		pass = false;
	}
	
	if($("#1gpas").val() != "")
		student.education.grades.GPA_scale = $("#1gpas").val();
	else {
		pass = false;
	}			 

	if($("#t1").val() != "")
		student.tests.test.t_listening = $("#t1").val();
	if($("#t2").val() != "")
		student.tests.test.t_speaking = $("#t2").val();
	if($("#t3").val() != "")
		student.tests.test.t_reading = $("#t3").val();
	if($("#t4").val() != "")
		student.tests.test.t_writing = $("#t4").val();
	if($("#a1").val() != "")
		student.tests.test.a_english = $("#a1").val();
	if($("#a2").val() != "")
		student.tests.test.a_mathematics = $("#a2").val();
	if($("#a4").val() != "")
		student.tests.test.a_science_reasoning = $("#a4").val();
	if($("#a3").val() != "")
		student.tests.test.a_reading = $("#a3").val();
	if($("#s1").val() != "")
		student.tests.test.s_reading = $("#s1").val();
	if($("#s2").val() != "")
		student.tests.test.s_mathematics = $("#s2").val();
	if($("#s3").val() != "")
		student.tests.test.s_writing = $("#s3").val();

	if(validateField("#address1","","House Number"))
			student.profile.address.address1 = $("#address1").val();
		 else {
			pass = false;
		}

		//console.log(pass);
		if(validateField("#zipcode","","Zip/Pin code"))
			student.profile.address.zipcode = $("#zipcode").val();
		 else {
			pass = false;
		}
			if(validateField("#city","","City"))
			student.profile.address.city = $("#city").val();
		 else {
			pass = false;
		}
		if($("#state").val() && validateField("#state","","State"))
			student.profile.address.state = $("#state").val();
		
		if($("#country").val() && validateField("#country")) {
			student.profile.address.country = $("#country").val();
		} else {
			pass = false;
			$("#country_error").show();
			$("#country_error").css('color','red');
			$("#country_error").html("Please select Country.");
		}
		if(validateField("#address2","","Street"))
			student.profile.address.address2 = $("#address2").val();
		 else {
			pass = false;
		}

		var ssn = ""
	var pas = true;
	if($("#ssn1").val() != "")
		ssn = $("#ssn1").val() + "-"
	 else {
		pas = false;
	}
	if($("#ssn2").val() != "")
		ssn = ssn+$("#ssn2").val() + "-"
	 else {
		pas = false;
	}
	if($("#ssn3").val() != "")
		ssn = ssn+$("#ssn3").val()
	 else {
		pas = false;
	}
	if (pas && ssn.length == 11) {
		student.profile.personal_information.ssn_no = ssn
		$("#ssn_error").hide();
	}
	else if (ssn.length > 0){
		$("#ssn1").css('outline-color','red');
		$("#ssn1").focus()
		showMsg("#ssn_error","Invalid Social Security Number.")
	} else {
		$("#ssn_error").hide();
	}

	var selected = $("#disc input[type='radio']:checked");
	console.log(selected.val())
		if (selected.length > 0) {
			
			if(selected.val() == "Yes")
				student.profile.disciplinary_history.disciplinary_history = $("#discHis").val();
			else
				student.profile.disciplinary_history.disciplinary_history = "";
			//pass = true;
			$("#siscHis_error").hide();
		}

		 selected = $("#crimm input[type='radio']:checked");
		 console.log(selected.val())
		if (selected.length > 0) {
			
			if(selected.val() == "Yes")
				student.profile.criminal_history.criminal_history = $("#crimHis").val();
			else
				student.profile.criminal_history.criminal_history = "";
			//pass = true;
			$("#siscHis_error").hide();
		}

	
			student.family.household.which_parent_do_you_live_with = $("#whichpar").val();
			student.family.household.martial_status = $("#martial").val();
			student.family.household.do_you_have_children = $("#dyhc").val();
			console.log(student.family.household);
			student.family.parent1.type = "Father";
			student.family.parent1.living = $("#p1_living").val();
			if(validateField("#p1_first_name","name"))
				student.family.parent1.first_name = $("#p1_first_name").val();
			else {
				pass = false;
			}
			console.log(pass)
			if($("#p1_middle_name").val() != "")
				student.family.parent1.middle_name = $("#p1_middle_name").val();
			if(validateField("#p1_last_name","name"))
				student.family.parent1.last_name = $("#p1_last_name").val();
			else {
				pass = false;
			}
				console.log(pass)
			if(validateField("#p1_email","email",""))
				student.family.parent1.email = $('#p1_email').val();
			else {
				pass = false;
			}
			if(validateField("#p1_mob","mob",""))
				student.family.parent1.phone = $('#p1_mob').val();
			else {
				pass = false;
			}
			   
			if(validateField("#p1_ocpn","text","Occupation"))
				student.family.parent1.occupation = $('#p1_ocpn').val();
			else {
				pass = false;
			}
			if(validateField("#p1_emp_status","text","Employment Status"))
				student.family.parent1.employment_status = $('#p1_emp_status').val();
			else {
				pass = false;
			}
			if(validateField("#p1_noe","text","Name of Employer"))
				student.family.parent1.name_of_employer = $('#p1_noe').val();
			else {
				pass = false;
			}
			if(validateField("#p1_edu_level","text","Education Level"))
				student.family.parent1.education_level = $('#p1_edu_level').val();
			else {
				pass = false;
			}
			student.family.parent2.type = "Mother";
			student.family.parent2.living = $("#p2_living").val();
			if(validateField("#p2_first_name","name"))
				student.family.parent2.first_name = $("#p2_first_name").val();
			else {
				pass = false;
			}
			console.log(pass)
			if($("#p2_middle_name").val() != "")
				student.family.parent2.middle_name = $("#p2_middle_name").val();
			if(validateField("#p2_last_name","name"))
				student.family.parent2.last_name = $("#p2_last_name").val();
			else {
				pass = false;
			}
				console.log(pass)
			if(validateField("#p2_email","email",""))
				student.family.parent2.email = $('#p2_email').val();
			else {
				pass = false;
			}
			if(validateField("#p2_mob","mob",""))
				student.family.parent2.phone = $('#p2_mob').val();
			else {
				pass = false;
			}
			   
			if(validateField("#p2_ocpn","text","Occupation"))
				student.family.parent2.occupation = $('#p2_ocpn').val();
			else {
				pass = false;
			}
			if(validateField("#p2_emp_status","text","Employment Status"))
				student.family.parent2.employment_status = $('#p2_emp_status').val();
			else {
				pass = false;
			}
			if(validateField("#p2_noe","text","Name of Employer"))
				student.family.parent2.name_of_employer = $('#p2_noe').val();
			else {
				pass = false;
			}
			if(validateField("#p2_edu_level","text","Education Level"))
				student.family.parent2.education_level = $('#p2_edu_level').val();
			else {
				pass = false;
			}
		sendData(student);
	sendData(student);
		alert("submitted")
		});   
	});		
}