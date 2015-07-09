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
import datetime
import csv

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

def Timeobserver_key(logger_name = "TimeobserverKey"):
    return ndb.Key("TimeobsKey",logger_name)

class Timeobserver(ndb.Model):
    email = ndb.StringProperty(indexed=True)
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
    zipcode = ndb.StringProperty(indexed=True)
    phone = ndb.StringProperty(indexed=True)
    skype = ndb.StringProperty(indexed=True)
    country_of_birth = ndb.StringProperty(indexed=True)
    city_of_birth = ndb.StringProperty(indexed=True)
    citizenship = ndb.StringProperty(indexed=True)
    school_name = ndb.StringProperty(indexed=True)
    date_of_graduation = ndb.StringProperty(indexed=True)
    class_ranking = ndb.StringProperty(indexed=True)
    grad_class_size = ndb.StringProperty(indexed=True)
    cumulative_GPA = ndb.StringProperty(indexed=True)
    GPA_scale = ndb.StringProperty(indexed=True)
    toefl_listening = ndb.StringProperty(indexed=True)
    toefl_speaking = ndb.StringProperty(indexed=True)
    toefl_writing = ndb.StringProperty(indexed=True)
    toefl_reading = ndb.StringProperty(indexed=True)
    act_engilsh = ndb.StringProperty(indexed=True)
    act_mathematics = ndb.StringProperty(indexed=True)
    act_science_reasoning = ndb.StringProperty(indexed=True)
    act_reading = ndb.StringProperty(indexed=True)
    sat_ctitical_reading = ndb.StringProperty(indexed=True)
    sat_Mathematics = ndb.StringProperty(indexed=True)
    sat_writing = ndb.StringProperty(indexed=True)
    timeStamp = ndb.StringProperty(indexed=True)

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
    pin = ndb.StringProperty(indexed=True)
    status=ndb.StringProperty(indexed=True)
    toefl_listening = ndb.StringProperty(indexed=True)
    toefl_speaking = ndb.StringProperty(indexed=True)
    toefl_writing = ndb.StringProperty(indexed=True)
    toefl_reading = ndb.StringProperty(indexed=True)
    act_engilsh = ndb.StringProperty(indexed=True)
    act_mathematics = ndb.StringProperty(indexed=True)
    act_science_reasoning = ndb.StringProperty(indexed=True)
    act_reading = ndb.StringProperty(indexed=True)
    sat_ctitical_reading = ndb.StringProperty(indexed=True)
    sat_Mathematics = ndb.StringProperty(indexed=True)
    sat_writing = ndb.StringProperty(indexed=True)
    
    

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
                row.criminal_history = student['profile']['criminal_history']['criminal_history']
                row.disciplinary_history = student['profile']['disciplinary_history']['disciplinary_history']
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
                
                row.grad_class_size = student['education']['grades']['grad_class_size']
                row.class_ranking = student['education']['grades']['class_ranking']
                row.cumulative_GPA = student['education']['grades']['cumulative_GPA']
                row.GPA_scale = student['education']['grades']['GPA_scale']
                row.tests_taken = student['tests']['test']['tests_taken']
                row.test_name = student['tests']['test']['test_name']
                row.highest_critical_reading_score = student['tests']['test']['highest_critical_reading_score']
                row.highest_math_score = student['tests']['test']['highest_math_score']
                row.highest_writing_score = student['tests']['test']['highest_writing_score']
                row.toefl_listening = student['tests']['test']['t_listening']
                row.toefl_speaking = student['tests']['test']['t_speaking']
                row.toefl_writing = student['tests']['test']['t_writing']
                row.toefl_reading = student['tests']['test']['t_reading']
                row.act_engilsh = student['tests']['test']['a_english']
                row.act_mathematics = student['tests']['test']['a_mathematics']
                row.act_science_reasoning = student['tests']['test']['a_science_reasoning']
                row.act_reading = student['tests']['test']['a_reading']
                row.sat_ctitical_reading = student['tests']['test']['s_reading']
                row.sat_Mathematics = student['tests']['test']['s_mathematics']
                row.sat_writing = student['tests']['test']['s_writing']
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
            test['t_listening'] = row.toefl_listening
            test['t_speaking'] = row.toefl_speaking
            test['t_reading'] = row.toefl_reading
            test['t_writing'] = row.toefl_writing
            test['a_english'] = row.act_engilsh
            test['a_mathematics'] = row.act_mathematics
            test['a_science_reasoning'] = row.act_science_reasoning
            test['a_reading'] = row.act_reading
            test['s_reading'] = row.sat_ctitical_reading
            test['s_mathematics'] = row.sat_Mathematics
            test['s_writing'] = row.sat_writing
            
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
        mob = self.request.get("mob")
        skype = self.request.get("skyp")
        req = "success"
        #req = requests.post("https://www.google.com/recaptcha/api/siteverify",{"secret":"6LdzsggTAAAAAMgP4xV_KDRLSLvbEragkVA2NBzJ","response":resp})
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        qry = qry.filter(Student.email == email)
        dataa = qry.fetch()
        pin = ""
        for i in range (0,4):
            pin = pin + str(random.randint(0,9))
        #get all current pins and check exist if exist create new one
        if len(dataa) > 0:
            for row in dataa:
                pin = row.pin
                if mob != "":
                    row.phone = mob
                if skype != "":
                    row.skype = skype
                row.put()
        else:
            data = Student(parent = Student_key(keycontent))
            data.pin = pin
            data.email = email
            if mob != "":
                row.phone = mob
            if skype != "":
                row.skype = skype
            data.put()
        message = mail.EmailMessage(sender="FJU <niranjanlucky@gmail.com>",
                                subject="Enter the PIN "+pin+" in FJU Application form")

        message.to = "<"+email+">"
        message.body = """ 
Hello """+email+ """,

Thank you for your interest in FJU.

Please enter the following PIN on the FJU.US application to validate your email.

"""+pin + """

Thank you,

FJU Admissions Team"""
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
        
class saveTimeDetails(webapp2.RequestHandler):
    def post(self):
        keycontent = self.request.get('logger_name',"TimeobserverKey")
        email = self.request.get("email")
        qry = Timeobserver.query(ancestor = Timeobserver_key(keycontent))
        qry = qry.filter(Timeobserver.email == email)
        data = qry.fetch()
        if len(data) > 0 :
            for row in data:
                row.email = self.request.get("email")
                row.first_name = self.request.get("first_name")
                row.last_name = self.request.get("last_name")
                row.middle_name=self.request.get("middle_name")
                row.gender = self.request.get("gender")
                row.dob = self.request.get("month")+self.request.get("year")+self.request.get("day")
                row.ssn_no = self.request.get("ssn1")+self.request.get("ssn2")+self.request.get("ssn3")
                row.country = self.request.get("country")
                row.state = self.request.get("state")
                row.city = self.request.get("city")
                row.address1 = self.request.get("address1")
                row.address2 = self.request.get("address2")
                row.zipcode = self.request.get("zipcode")
                row.phone = self.request.get("mob")
                row.skype = self.request.get("skype")
                row.country_of_birth = self.request.get("cob")
                row.city_of_birth = self.request.get("ciob")
                row.citizenship = self.request.get("citizenship")
                row.school_name = self.request.get("1schl_name")
                row.date_of_graduation = self.request.get("1month")+self.request.get("1year")+self.request.get("1day")
                row.class_ranking = self.request.get("1cls_rank")
                row.grad_class_size = self.request.get("1gradsize")
                row.cumulative_GPA = self.request.get("1cgpa")
                row.GPA_scale = self.request.get("1gpas")
                row.toefl_listening = self.request.get("t1")
                row.toefl_speaking = self.request.get("t2")
                row.toefl_writing = self.request.get("t3")
                row.toefl_reading = self.request.get("t4")
                row.act_engilsh = self.request.get("a1")
                row.act_mathematics = self.request.get("a2")
                row.act_science_reasoning = self.request.get("a4")
                row.act_reading = self.request.get("a3")
                row.sat_ctitical_reading = self.request.get("s1")
                row.sat_Mathematics = self.request.get("s2")
                row.sat_writing = self.request.get("s3")
                row.timeStamp = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y %H:%M:%S')
                row.put()
                self.response.write(row)
        else:                
            data = Timeobserver(parent = Timeobserver_key(keycontent))
            data.email = self.request.get("email")
            data.first_name = self.request.get("first_name")
            data.last_name = self.request.get("last_name")
            data.middle_name=self.request.get("middle_name")
            data.gender = self.request.get("gender")
            data.dob = self.request.get("month")+self.request.get("year")+self.request.get("day")
            data.ssn_no = self.request.get("ssn1")+self.request.get("ssn2")+self.request.get("ssn3")
            data.country = self.request.get("country")
            data.state = self.request.get("state")
            data.city = self.request.get("city")
            data.address1 = self.request.get("address1")
            data.address2 = self.request.get("address2")
            data.zipcode = self.request.get("zipcode")
            data.phone = self.request.get("mob")
            data.skype = self.request.get("skype")
            data.country_of_birth = self.request.get("cob")
            data.city_of_birth = self.request.get("ciob")
            data.citizenship = self.request.get("citizenship")
            data.school_name = self.request.get("1schl_name")
            data.date_of_graduation = self.request.get("1month")+self.request.get("1year")+self.request.get("1day")
            data.class_ranking = self.request.get("1cls_rank")
            data.grad_class_size = self.request.get("1gradsize")
            data.cumulative_GPA = self.request.get("1cgpa")
            data.GPA_scale = self.request.get("1gpas")
            data.toefl_listening = self.request.get("t1")
            data.toefl_speaking = self.request.get("t2")
            data.toefl_writing = self.request.get("t3")
            data.toefl_reading = self.request.get("t4")
            data.act_engilsh = self.request.get("a1")
            data.act_mathematics = self.request.get("a2")
            data.act_science_reasoning = self.request.get("a4")
            data.act_reading = self.request.get("a3")
            data.sat_ctitical_reading = self.request.get("s1")
            data.sat_Mathematics = self.request.get("s2")
            data.sat_writing = self.request.get("s3")
            data.timeStamp = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y %H:%M:%S')
            data.put()
            self.response.write(data)
class getTimeDetails(webapp2.RequestHandler):
    def get(self):
        keycontent = self.request.get('logger_name',"TimeobserverKey")
        qry = Timeobserver.query(ancestor = Timeobserver_key(keycontent))
        data = qry.fetch()
        self.response.headers['Content-Type'] = 'application/csv'
        self.response.headers['Content-Disposition'] = 'attachment; filename=TimeObserver.csv'
        fieldnames = ["First name", "Middle Name", "Last Name","Gender","DOB","Phone",
                      "Country of Birth","City of Birth","Citizenship","School Name","Date of Graduation",
                      "Class Rank","Grad Size","Cumulative GPA","GPA Scale","TOEFL Listening",
                      "TOEFL Speaking","TOEFL Reading","TOEFL Writing","SAT Critial Reading",
                      "SAT Analytical Reasoning","SAT Writing","ACT English","ACT Analytical Reasoning",
                      "ACT Reading","ACT Reasoning","Address Line 1","Address Line 2","City","State","Country",
                      "Zip/Pin Code","SSN","Skype"]
        writer = csv.writer(self.response.out)
        writer.writerow(fieldnames)
        writer.writerow("")
        for row in data:
            writer.writerow([row.first_name,row.middle_name,row.last_name,row.gender,
                             row.dob,row.phone,row.country_of_birth,row.city_of_birth,
                             row.citizenship,row.school_name,row.date_of_graduation,
                             row.class_ranking,row.grad_class_size,row.cumulative_GPA,
                             row.GPA_scale,row.toefl_listening,row.toefl_speaking,row.toefl_reading,
                             row.toefl_writing,row.sat_ctitical_reading,row.sat_Mathematics,
                             row.sat_writing,row.act_engilsh,row.act_mathematics,
                             row.act_reading,row.act_science_reasoning,row.address1,
                             row.address2,row.city,row.state,row.country,row.zipcode,row.ssn_no,row.skype])
        #self.response.write(writer)
config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'akljsdlfjFGCSSDFIS8lds1624',
    'session_max_age': None
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
    (r'/meta/savetimedetails', saveTimeDetails),
    (r'/meta/timeobserver', getTimeDetails),
     BounceLogger.mapping(),
    (r'/_ah/bounce', BounceLogger),
           ], debug=True, config=config)
