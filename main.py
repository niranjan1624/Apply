#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
from google.appengine.ext import ndb
import json
from datetime import datetime
import os
import json
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
class MainHandler(webapp2.RequestHandler):
    def get(self, page):
        if page == '/':
            page = 'Apply.html'
	template = JINJA_ENVIRONMENT.get_template(page)
	self.response.write(template.render())

def Student_key(logger_name = "studentKey"):
    return ndb.Key("contentKey",logger_name)

class Student(ndb.Model):
    username = ndb.StringProperty(indexed=True)
    password = ndb.StringProperty(indexed=True)
    first_name = ndb.StringProperty(indexed=True)
    last_name = ndb.StringProperty(indexed=True)
    middle_name=ndb.StringProperty(indexed=True)
    gender = ndb.StringProperty(indexed=True)
    dob = ndb.StringProperty(indexed=True)
    ssn_no = ndb.StringProperty(indexed=True)
    country = ndb.StringProperty(indexed=True)
    state = ndb.StringProperty(indexed=True)
    city = ndb.StringProperty(indexed=True)
    address1 = ndb.StringProperty(indexed=True)
    address2 = ndb.StringProperty(indexed=True)
    address3 = ndb.StringProperty(indexed=True)
    zipcode = ndb.StringProperty(indexed=True)
    email = ndb.StringProperty(indexed=True)
    phone = ndb.StringProperty(indexed=True)
    skype = ndb.StringProperty(indexed=True)
    country_of_birth = ndb.StringProperty(indexed=True)
    city_of_birth = ndb.StringProperty(indexed=True)
    citizenship = ndb.StringProperty(indexed=True)
    disciplinary_history = ndb.StringProperty(indexed=True)
    criminal_history = ndb.StringProperty(indexed=True)
    which_parent_do_you_live_with = ndb.StringProperty(indexed=True)
    martial_status = ndb.StringProperty(indexed=True)
    have_children = ndb.StringProperty(indexed=True)
    parent1_type = ndb.StringProperty(indexed=True)
    parent1_living = ndb.StringProperty(indexed=True)
    parent1_first_name = ndb.StringProperty(indexed=True)
    parent1_last_name = ndb.StringProperty(indexed=True)
    parent1_middle_name = ndb.StringProperty(indexed=True)
    parent1_email = ndb.StringProperty(indexed=True)
    parent1_phone = ndb.StringProperty(indexed=True)
    parent1_address = ndb.StringProperty(indexed=True)
    parent1_occupation = ndb.StringProperty(indexed=True)
    parent1_employment_status = ndb.StringProperty(indexed=True)
    parent1_name_of_employer = ndb.StringProperty(indexed=True) 
    parent1_education_level = ndb.StringProperty(indexed=True)
    parent2_type = ndb.StringProperty(indexed=True)
    parent2_living = ndb.StringProperty(indexed=True)
    parent2_first_name = ndb.StringProperty(indexed=True)
    parent2_last_name = ndb.StringProperty(indexed=True)
    parent2_middle_name = ndb.StringProperty(indexed=True)
    parent2_email = ndb.StringProperty(indexed=True)
    parent2_phone = ndb.StringProperty(indexed=True)
    parent2_address = ndb.StringProperty(indexed=True)
    parent2_occupation = ndb.StringProperty(indexed=True)
    parent2_employment_status = ndb.StringProperty(indexed=True)
    parent2_name_of_employer = ndb.StringProperty(indexed=True)
    parent2_education_level = ndb.StringProperty(indexed=True)
    no_of_schools = ndb.StringProperty(indexed=True)
    school_name = ndb.StringProperty(indexed=True)
    date_of_graduation = ndb.StringProperty(indexed=True)
    counsellor_first_name  = ndb.StringProperty(indexed=True)
    counsellor_middle_name = ndb.StringProperty(indexed=True)
    counsellor_last_name = ndb.StringProperty(indexed=True)
    counsellor_phone = ndb.StringProperty(indexed=True)
    counsellor_email = ndb.StringProperty(indexed=True)
    education_interruption = ndb.StringProperty(indexed=True)
    no_of_collage_or_university_level_courses_taken = ndb.StringProperty(indexed=True)
    class_ranking = ndb.StringProperty(indexed=True)
    grad_class_size = ndb.StringProperty(indexed=True)
    cumulative_GPA = ndb.StringProperty(indexed=True)
    GPA_scale = ndb.StringProperty(indexed=True)
    tests_taken = ndb.StringProperty(indexed=True)
    test_name = ndb.StringProperty(indexed=True)
    highest_critical_reading_score = ndb.StringProperty(indexed=True)
    highest_math_score = ndb.StringProperty(indexed=True)
    highest_writing_score = ndb.StringProperty(indexed=True)

class saveStudent(webapp2.RequestHandler):
    def post(self):
        #read json file and assign those values to student
        student = json.loads(self.request.body)
        email = student['profile']['contact_details']['email']
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        data = qry.fetch()
        if len(data) > 0 :
            for row in data:
                row.username = student['login_credentials']['username']
                row.password = student['login_credentials']['password']
                row.first_name = student['profile']['personal_information']['first_name']
                row.last_name = student['profile']['personal_information']['last_name']
                row.middle_name = student['profile']['personal_information']['middle_name']
                row.gender = student['profile']['personal_information']['gender']
                row.dob = student['profile']['personal_information']['dob']
                row.ssn_no = student['profile']['personal_information']['ssn_no']
                row.country = student['profile']['address']['country']
                row.state = student['profile']['address']['state']
                row.city = student['profile']['address']['city']
                row.address1 = student['profile']['address']['address1']
                row.address2 = student['profile']['address']['address2']
                row.address3 = student['profile']['address']['address3']
                row.zipcode = student['profile']['address']['zipcode']
                row.email = student['profile']['contact_details']['email']
                row.phone = student['profile']['contact_details']['phone_no']
                row.skype = student['profile']['contact_details']['skype_id']
                row.country_of_birth = student['profile']['geography']['country_of_birth']
                row.city_of_birth = student['profile']['geography']['city_of_birth']
                row.citizenship = student['profile']['geography']['citizenship']
                row.disciplinary_history = student['profile']['disciplinary_history']['disciplinary_history']
                row.criminal_history = student['profile']['criminal_history']['criminal_history']
                row.which_parent_do_you_live_with = student['family']['household']['which_parent_do_you_live_with']
                row.martial_status = student['family']['household']['martial_status']
                row.have_children = student['family']['household']['do_you_have_children']
                row.parent1_type = student['family']['parent1']['type']
                row.parent1_living = student['family']['parent1']['living']
                row.parent1_first_name = student['family']['parent1']['first_name']
                row.parent1_last_name = student['family']['parent1']['last_name']
                row.parent1_middle_name = student['family']['parent1']['middle_name']
                row.parent1_email = student['family']['parent1']['email']
                row.parent1_phone = student['family']['parent1']['phone']
                row.parent1_address = student['family']['parent1']['address']
                row.parent1_occupation = student['family']['parent1']['occupation']
                row.parent1_employment_status = student['family']['parent1']['employment_status']
                row.parent1_name_of_employer =  student['family']['parent1']['name_of_employer']
                row.parent1_education_level = student['family']['parent1']['education_level']
                row.parent2_type = student['family']['parent2']['type']
                row.parent2_living = student['family']['parent2']['living']
                row.parent2_first_name = student['family']['parent2']['first_name']
                row.parent2_last_name = student['family']['parent2']['last_name']
                row.parent2_middle_name = student['family']['parent2']['middle_name']
                row.parent2_email = student['family']['parent2']['email']
                row.parent2_phone = student['family']['parent2']['phone']
                row.parent2_address = student['family']['parent2']['address']
                row.parent2_occupation = student['family']['parent2']['occupation']
                row.parent2_employment_status = student['family']['parent2']['employment_status']
                row.parent2_name_of_employer = student['family']['parent2']['name_of_employer']
                row.parent2_education_level = student['family']['parent2']['education_level']
                row.no_of_schools = student['education']['school']['no_of_schools']
                row.school_name = student['education']['school']['school_name']
                row.date_of_graduation = student['education']['school']['date_of_graduation']
                row.counsellor_first_name  = student['education']['school']['counsellor_first_name']
                row.counsellor_middle_name = student['education']['school']['counsellor_middle_name']
                row.counsellor_last_name = student['education']['school']['counsellor_last_name']
                row.counsellor_phone = student['education']['school']['counsellor_phone']
                row.counsellor_email = student['education']['school']['counsellor_email']
                row.education_interruption = student['education']['education_interruption']['education_interruption']
                row.no_of_collage_or_university_level_courses_taken = student['education']['collage_university']['no_of_collage_or_university_level_courses_taken']
                row.class_ranking = student['education']['grades']['class_ranking']
                row.grad_class_size = student['education']['grades']['grad_class_size'] 
                row.cumulative_GPA = student['education']['grades']['cumulative_GPA']
                row.GPA_scale = student['education']['grades']['GPA_scale']
                row.tests_taken = student['tests']['test']['tests_taken']
                row.test_name = student['tests']['test']['test_name']
                row.highest_critical_reading_score = student['tests']['test']['highest_critical_reading_score']
                row.highest_math_score = student['tests']['test']['highest_math_score']
                row.highest_writing_score = student['tests']['test']['highest_writing_score']
                row.put()
                self.response.write("success1")
        else:
            keycontent = self.request.get('logger_name',"studentKey")
            dataa = Student(parent = Student_key(keycontent))
            dataa.username = student['login_credentials']['username']
            dataa.password = student['login_credentials']['password']
            dataa.first_name = student['profile']['personal_information']['first_name']
            dataa.last_name = student['profile']['personal_information']['middle_name']
            dataa.middle_name = student['profile']['personal_information']['last_name']
            dataa.gender = student['profile']['personal_information']['gender']
            dataa.dob = student['profile']['personal_information']['dob']
            dataa.ssn_no = student['profile']['personal_information']['ssn_no']
            dataa.country = student['profile']['address']['country']
            dataa.state = student['profile']['address']['address1']
            dataa.city = student['profile']['address']['address2']
            dataa.address1 = student['profile']['address']['address3']
            dataa.address2 = student['profile']['address']['city']
            dataa.address3 = student['profile']['address']['state']
            dataa.zipcode = student['profile']['address']['zipcode']
            dataa.email = student['profile']['contact_details']['email']
            dataa.phone = student['profile']['contact_details']['phone_no']
            dataa.skype = student['profile']['contact_details']['skype_id']
            dataa.put()
            self.response.write("success2")            
            
class updateStudent(webapp2.RequestHandler):
    def post(self):
        #first get student and update details
        self.response.write('success')
class getStudent(webapp2.RequestHandler):
    def post(self):
        #get student
        student_json = ""
        self.response.write(student_json)
        
app = webapp2.WSGIApplication([
    (r'/(.+\.html)', MainHandler),
    (r'/student/savedetails',saveStudent),
    (r'/meta/updateStudentdetails', updateStudent),
    (r'/meta/getStudentObj', getStudent),
           ], debug=True)
