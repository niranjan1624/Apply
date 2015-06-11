
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
$(document).ready(function() {
    var max_fields      = 2; //maximum input boxes allowed
    var wrapper         = $(".AccReg-form"); //Fields wrapper
    
    var x = 1; //initlal text box count
		$(wrapper).append("<ul>")
        while(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append( '<li class="required"><div class="control  email required jqFRV" id="container_ques_187" data-cao-options="{ &quot;cid&quot;: &quot;ques_187&quot;, &quot;qt&quot;: &quot;3&quot;, &quot;qid&quot; : &quot;187&quot;, &quot;aid&quot; : &quot;0&quot;, &quot;tq&quot; : &quot;False&quot;, &quot;rgid&quot; : &quot;0&quot;, &quot;vgid&quot; : &quot;0&quot;, &quot;cv&quot; : &quot;False&quot;, &quot;agitemid&quot; : &quot;&quot;, &quot;agid&quot; : &quot;&quot;}"><input id="value_ques_187" name="value_ques_187" class="jqHiddenValue" data-defval=""><label class="label" for="email_ques_187" id="title_ques_187" title="Email Address">Email Address</label><div id="validation_ques_187" class="error" style="display: block;">Please complete this required question.</div><input class="defaultTextInput input" type="email" maxlength="254" autocomplete="off" id="email_ques_187" value="" required=""></div><span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span></li>'); //add input box
		}
    $(wrapper).append("</ul>")
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
console.log(student.login_credentials.username)