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
    dob = ndb.DateTimeProperty(indexed=True)
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
    dity_of_birth = ndb.StringProperty(indexed=True)
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
    test_name = ndb.StringProperty(indexed=True)
    highest_critical_reading_score = ndb.StringProperty(indexed=True)
    highest_math_score = ndb.StringProperty(indexed=True)
    highest_writing_score = ndb.StringProperty(indexed=True)

class saveStudent(webapp2.RequestHandler):
    def post(self):
        #read json file and assign those values to student
        self.response.write("username:  " + student.login_credentials.username)
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
