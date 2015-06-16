
var student = {
					login_credentials: {
						
						username: "niranjan",
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
							adress1:"",
							adress2:"",
							adress3:"",
							city:"",
							state:"",
							zip_code:""
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
							type:"",
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
							type:"",
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
							test_name: "",
							highest_critical_reading_score:2,
							highest_math_score:3,
							highest_writing_score:4
						}
					}
				  }
var values = {};
function createInput(ele,type,clsname,id,required){
	var div = document.createElement("div");
	var field = document.createElement("input");
	field.type = type;
	field.className = clsname;
	field.id = id;
	field.required=required;
	field.onpaste = true;
	div.appendChild(field);
	document.getElementById(ele).appendChild(div);
}
function createLabel(ele,name,value,id,required){
	var wrapper = $("#"+ele);
	if (required)
		$(wrapper).append( '<br/><div class = "required"> <label for='+name+' id='+id+'>'+value+'</label></div>');
	else
		$(wrapper).append( '<div> <label for='+name+' id='+id+'>'+value+'</label></div>');
}
function createHiddenfield(ele,id) {
	var field = document.createElement("p");
	field.id = id;
	field.className = "error";
	field.hidden = true;
	document.getElementById(ele).appendChild(field);
}
function showMsg(id,msg) {
	$(id).show()
	$(id).html(msg);
}
$(document).ready(function() {
	if(getCurentFileName() == "Apply.html")
		loginCredential();
	else if (getCurentFileName() == "Apply2.html") {
		if(localStorage.user != undefined)  {
		RegInfo();
		$("#mob").intlTelInput();
		 $("#mob").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
		if (e.keyCode != 187 && e.keyCode != 16) {
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
    });
	} else {
		window.location.href = "Apply.html"
	}
	}
});
function insertBef(id) {
	 $(id).insertBefore($("#sex"));
}
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
			 createHiddenfield("register2","skype_error");
			 createInput("register2", "text", "defaultTextInput input", "skype",false);

	$(wrapper).append("</ul>");
		 $("#first_name").focusout(function(){
		 validateField("#first_name", "text")
 });
  $("#last_name").focusout(function(){
		 validateField("#last_name", "text")
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
		var stu = assignValuesJson(values);
		console.log(stu.login_credentials);
		console.log("passed")
			$.post( "/student/savedetails",student, function( data ) {
				console.log(data);
				if(data=="success") {
					alert(data);
				} else {
					alert(data);
				}
			});
	} else {
		//same page should be shown show the errors
		console.log("notPassed")
	}
	
	console.log(values);
 });

 $('form#loginForm').submit(function() {
	 console.log("submit");
	if ($("#email").val() != $("#re_email").val())
		showMsg("#re_email_error", "Email addresses must match.")
	if ($("#pass").val() != $("#re_pass").val())
		showMsg("#re_pass_error", "Passwords must match.")
	else {
		console.log("success");
		values["email"]  = $("#email").val();
		values["pass"] = $("#pass").val();
		assignValuesJson(values);
		console.log(localStorage.user);
		window.location.href = "Apply2.html"
	}
 });
function validateField(id,type) {
	var pass = false;
	var value = $(id).val();
	id = id+"_error";
	if(value=="")
		showMsg(id,"Please complete this required question.");
	else {
	switch (type) {
		case "email":
			
			if(value.indexOf("@") == -1)
				showMsg(id, "Email must include one @.")
			else if(value.indexOf("@.") != -1 || value.indexOf(".@") != -1 || value[value.length - 1] == ".")
				showMsg(id,"Email before and after @ cannot start or end with a dot.")
			else if(value[value.length - 1] == "@")
				showMsg(id, "invalid email id.")
			else {
				$(id).hide();
				pass = true;
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
				showMsg(id,"Please complete the required field")
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
	}
	}
	return pass;
}
function validateRegFields(values){
	var pass = true;
	var zip = values['zipcode'];
	var mm = values["month"]
	var dd = values["day"]
	var yy = values["year"]
	if (mm==null || dd==null || yy==null)  {
		showMsg("#dob_error", "Please complete the required field");
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
		if(zip.length > 10) {
			showMsg("#zipcode_error", "Enter valid zip code");
			pass  = false;
			return false;
		}
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
	if(getCurentFileName() == "Apply.html") {
		localStorage.user = values['email']
		localStorage.pass = values['pass'];
	}
	else if (getCurentFileName() == "Apply2.html") {
		student.login_credentials.username = localStorage.user;
		student.login_credentials.password = localStorage.pass;	
		student.profile.contact_details.email = localStorage.user;
		student.profile.personal_information.first_name = values['first_name'];
		student.profile.personal_information.last_name = values['last_name'];
		student.profile.personal_information.gender = values['gender'];
		student.profile.personal_information.dob = values['month']+"/"+ values['day'] + "/" + values['year'];
		student.profile.address.country = values['country'];
		student.profile.address.address1 = values['address1'];
		student.profile.address.address2 = values['address2'];
		student.profile.address.address3 = values['address3'];
		student.profile.address.city = values['city'];
		student.profile.address.state = values['state'];
		student.profile.address.zip_code = values['zipcode'];
		student.profile.contact_details.phone_no = value['mob'];
		student.profile.contact_details.skype_id = value['skype'];
		localStorage.clear();
	}

		localStorage.ques190 = student;
		
		return student;
}