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
import random
from google.appengine.api import mail
from google.appengine.ext.webapp.mail_handlers import BounceNotification
from google.appengine.ext.webapp.mail_handlers import BounceNotificationHandler
import logging
import requests
from webapp2_extras import sessions
import webbrowser

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
    school_name = ndb.StringProperty(repeated=True)
    date_of_graduation = ndb.StringProperty(repeated=True)
    counsellor_first_name  = ndb.StringProperty(repeated=True)
    counsellor_middle_name = ndb.StringProperty(repeated=True)
    counsellor_last_name = ndb.StringProperty(repeated=True)
    counsellor_phone = ndb.StringProperty(repeated=True)
    counsellor_email = ndb.StringProperty(repeated=True)
    education_interruption = ndb.StringProperty(indexed=True)
    no_of_collage_or_university_level_courses_taken = ndb.StringProperty(indexed=True)
    class_ranking = ndb.StringProperty(indexed=True)
    grad_class_size = ndb.StringProperty(indexed=True)
    cumulative_GPA = ndb.StringProperty(indexed=True)
    GPA_scale = ndb.StringProperty(indexed=True)
    tests_taken = ndb.StringProperty(indexed=True)
    test_name = ndb.StringProperty(repeated=True)
    highest_critical_reading_score = ndb.StringProperty(repeated=True)
    highest_math_score = ndb.StringProperty(repeated=True)
    highest_writing_score = ndb.StringProperty(repeated=True)
    pin = ndb.StringProperty(indexed=True)
    status=ndb.StringProperty(indexed=True)

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
            
class getStudent(webapp2.RequestHandler):
    def post(self):
        #get student
        email =self.request.get("email")
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        data = qry.fetch()
        student = {}
        login = {}
        profile = {}
        pi = {}
        adr = {}
        con = {}
        geo = {}
        dh = {}
        ch = {}
        family = {}
        household = {}
        parent1 = {}
        parent2 = {}
        education = {}
        school = {}
        ei = {}
        cu = {}
        grd = {}
        testing = {}
        test = {}
        for row in data:
            login['username'] = row.username  
            login['password'] = row.password
            student['login_credentials'] = login
            
            pi['first_name'] = row.first_name  
            pi['last_name'] = row.last_name  
            pi['middle_name'] = row.middle_name
            pi['gender'] = row.gender  
            pi['dob'] = row.dob  
            pi['ssn_no'] = row.ssn_no
            profile['personal_information'] = pi
            
            adr['country'] = row.country  
            adr['state'] = row.state  
            adr['city'] = row.city  
            adr['address1'] = row.address1  
            adr['address2'] = row.address2  
            adr['address3'] = row.address3  
            adr['zipcode'] = row.zipcode
            profile['address'] = adr
            
            con['email'] = row.email  
            con['phone_no'] = row.phone  
            con['skype_id'] = row.skype
            profile['contact_details'] = con
            
            geo['country_of_birth'] = row.country_of_birth  
            geo['city_of_birth'] = row.city_of_birth  
            geo['citizenship'] = row.citizenship
            profile['geography'] = geo
            
            dh['disciplinary_history'] = row.disciplinary_history
            profile['disciplinary_history'] = dh
            
            ch['criminal_history'] = row.criminal_history
            profile['criminal_history'] = ch
            student['profile'] = profile
            
            household['which_parent_do_you_live_with'] = row.which_parent_do_you_live_with  
            household['martial_status'] = row.martial_status  
            household['do_you_have_children'] = row.have_children
            family['household'] = household
            
            parent1['type'] = row.parent1_type  
            parent1['living'] = row.parent1_living  
            parent1['first_name'] = row.parent1_first_name  
            parent1['last_name'] = row.parent1_last_name  
            parent1['middle_name'] = row.parent1_middle_name  
            parent1['email'] = row.parent1_email  
            parent1['phone'] = row.parent1_phone  
            parent1['address'] = row.parent1_address  
            parent1['occupation'] = row.parent1_occupation  
            parent1['employment_status'] = row.parent1_employment_status  
            parent1['name_of_employer'] = row.parent1_name_of_employer   
            parent1['education_level'] = row.parent1_education_level
            family['parent1'] = parent1
            
            parent2['type'] = row.parent2_type  
            parent2['living'] = row.parent2_living  
            parent2['first_name'] = row.parent2_first_name  
            parent2['last_name'] = row.parent2_last_name  
            parent2['middle_name'] = row.parent2_middle_name  
            parent2['email'] = row.parent2_email  
            parent2['phone'] = row.parent2_phone  
            parent2['address'] = row.parent2_address  
            parent2['occupation'] = row.parent2_occupation  
            parent2['employment_status'] = row.parent2_employment_status  
            parent2['name_of_employer'] = row.parent2_name_of_employer  
            parent2['education_level'] = row.parent2_education_level
            family['parent2'] = parent2
            student['family'] = family
            
            school['no_of_schools'] = row.no_of_schools  
            school['school_name'] = row.school_name  
            school['date_of_graduation'] = row.date_of_graduation  
            school['counsellor_first_name'] = row.counsellor_first_name   
            school['counsellor_middle_name'] = row.counsellor_middle_name  
            school['counsellor_last_name'] = row.counsellor_last_name  
            school['counsellor_phone'] = row.counsellor_phone  
            school['counsellor_email'] = row.counsellor_email
            education['school'] = school
            
            ei['education_interruption'] = row.education_interruption
            education['education_interruption'] = ei
            
            cu['no_of_collage_or_university_level_courses_taken'] = row.no_of_collage_or_university_level_courses_taken
            education['collage_university'] = cu
            
            grd['class_ranking'] = row.class_ranking  
            grd['grad_class_size'] = row.grad_class_size  
            grd['cumulative_GPA'] = row.cumulative_GPA  
            grd['GPA_scale'] = row.GPA_scale
            education['grades'] = grd
            student['education'] = education
            
            test['tests_taken'] = row.tests_taken  
            test['test_name'] = row.test_name  
            test['highest_critical_reading_score'] = row.highest_critical_reading_score  
            test['highest_math_score'] = row.highest_math_score  
            test['highest_writing_score'] = row.highest_writing_score
            testing['test'] = test
            student['tests'] = testing
                                
        student_json = json.dumps(student)
        self.response.write(student_json)
class existStudent(webapp2.RequestHandler):
    def post(self):
        email =self.request.get("email")
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        data = qry.fetch()
        if(len(data) > 0):
            self.response.write("exist")
        else:
            self.response.write("doesn't exist")
global stat 
class sendPin(webapp2.RequestHandler):
    def post(self):
        email = self.request.get("email")
        resp = self.request.get("res")
        req = "success"
        #req = requests.post("https://www.google.com/recaptcha/api/siteverify",{"secret":"6LdzsggTAAAAAMgP4xV_KDRLSLvbEragkVA2NBzJ","response":resp})
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        dataa = qry.fetch()
        pin = ""
        for i in range (0,4):
            pin = pin + str(random.randint(0,9))
        if len(dataa) > 0:
            for row in dataa:
                row.pin = pin
                row.put()
        else:
            data = Student(parent = Student_key(keycontent))
            data.pin = pin
            data.email = email
            data.put()
        message = mail.EmailMessage(sender="TaraLabs <niranjanlucky@gmail.com>",
                                subject="Pin Generated")

        message.to = "<"+email+">"
        message.body = """
Please enter the below pin in application form
                
"""+pin + """

Thank you"""
        message.send()
        self.response.write(req)
class BaseHandler(webapp2.RequestHandler):              
    def dispatch(self):                                 
        self.session_store = sessions.get_store(request=self.request)
        try:  
            webapp2.RequestHandler.dispatch(self)       
        finally:        
            self.session_store.save_sessions(self.response)
    @webapp2.cached_property
    def session(self):
        return self.session_store.get_session()

class validatePin(webapp2.RequestHandler):
    def post(self):
        pin = self.request.get("pin")
        email = self.request.get("email")
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        data = qry.fetch()
        for row in data:
            if row.pin == pin:
                row.status = "Verified"
                row.put()
                self.response.write(row.email)
            else:
                self.response.write("failed")
class Login(BaseHandler):
    def post(self):
        self.session['user'] = self.request.get("email")
        self.response.write(self.session.get('user')+" ||| "+self.request.get("email"))
class Logout(BaseHandler):
    def get(self):
        self.session.pop('user')
        self.response.write(self.session.get('user'))
class BounceLogger(BounceNotificationHandler):
    def receive(self, bounce_notification):
        self.response.write("bounced")
        stat = "failed"
        logging.info('Received bounce from')
class existSesn(BaseHandler):
    def post(self):
        self.response.write(self.session.get('user'))
config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'akljsdlfjFGCSSDFIS8lds',
}
app = webapp2.WSGIApplication([
    (r'/(.+\.html)', MainHandler),
    (r'/student/savedetails',saveStudent),
    (r'/student/existstudent',existStudent),
    (r'/meta/getStudentObj', getStudent),
    (r'/meta/sendpin', sendPin),
    (r'/meta/validatepin', validatePin),
    (r'/meta/sessionexist', existSesn),
    (r'/meta/login', Login),
    (r'/meta/logout', Logout),
     BounceLogger.mapping(),
    (r'/_ah/bounce', BounceLogger),
           ], debug=True, config=config)
