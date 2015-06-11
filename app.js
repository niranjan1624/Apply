
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
function createInput(ele,type,clsname,id){
	var div = document.createElement("div");
	var field = document.createElement("input");
	field.type = type;
	field.className = clsname;
	field.id = id;
	div.appendChild(field);
	document.getElementById(ele).appendChild(div);
}
function createLabel(ele,id,value){
	/* var div = document.createElement("div");
	var label = document.createElement("label");
	label.for=id;
	label.name = value
	div.appendChild(label);
	document.getElementById(ele).appendChild(div); */
	var wrapper = $("."+ele);
	$(wrapper).append( '<br/><div> <label for='+id+'>'+value+'</label><br/>');
}
$(document).ready(function() {
    var max_fields      = 2; //maximum input boxes allowed
    var wrapper         = $(".AccReg-form"); //Fields wrapper
    
    var x = 1; //initlal text box count
		$(wrapper).append("<ul>")
        while(x < max_fields){ //max input box allowed
            x++; //text box increment
			 createLabel("AccReg-form", "email", "Email Address");
			 createInput("Register0", "email", "defaultTextInput input", "email");
			 createLabel("AccReg-form", "re_email", "Re-type Email Address");
			 createInput("Register0", "email", "defaultTextInput input", "email");
			 
		}
    $(wrapper).append("</ul>")
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
 $('form#studentForm').submit(function() {
	 console.log("submit");
	 $("form#studentForm :input").each(function(){
		var input = $(this);
		var str = input.val();
		var id = input.attr("id");
		console.log(id +"  "+str);
	 });
 });
console.log(student.login_credentials.username)