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
import sys
import cgi
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import webapp2
import jinja2
import os
from google.appengine.api import mail
from datetime import datetime, timedelta
import time
import random
import json
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

def ProgramAndMajors_key(logger_name = "pmKey"):
    return ndb.Key('pmKey',logger_name)

class ProgramAndMajors(ndb.Model):
        Type = ndb.StringProperty(indexed = True)
        Title = ndb.StringProperty(indexed = True)
class SaveProgMaj(webapp2.RequestHandler):
        def post(self):
               keycontent = self.request.get('logger_name',"pmKey")
               data = ProgramAndMajors(parent = ProgramAndMajors_key(keycontent))
               data.Type = self.request.get("type")
               data.Title = self.request.get("title")
               data.put()
               self.response.write("success")
class ProgMajHtml(webapp2.RequestHandler):
        def get(self):
            template = JINJA_ENVIRONMENT.get_template('Programs.html')
            self.response.write(template.render())
class GetProgMaj(webapp2.RequestHandler):
        def get(self):
            keycontent = self.request.get('logger_name',"pmKey")
            qry = ProgramAndMajors.query(ancestor = ProgramAndMajors_key(keycontent))
            data = qry.fetch()
            result = {}
            ProgramList = []
            MajorList = []
            for row in data:
                if (row.Type == "Programs"):
                    ProgramList.append(row.Title)
                else:
                    MajorList.append(row.Title)
            result["Programs"] = ProgramList
            result["Majors"] = MajorList
            json_data = json.dumps(result)
            self.response.headers.add_header('content-type', 'application/json', charset='utf-8')
            self.response.write(json_data)
            
            
def Student_key(logger_name = "studentKey"):
    return ndb.Key('studentKey',logger_name)

class Student(ndb.Model):
        FirstName = ndb.StringProperty(indexed = True)
        MiddleName = ndb.StringProperty(indexed = True)
        LastName = ndb.StringProperty(indexed = True)
        DateOfBirth = ndb.StringProperty(indexed = True)
        Email = ndb.StringProperty(indexed = True)
        MobileNo = ndb.StringProperty(indexed = True)
        AlternateMobileNo = ndb.StringProperty(indexed = True)
        SSCMarks = ndb.StringProperty(indexed = True)
        PU_CGPA = ndb.StringProperty(indexed = True)
        UnderGradGPA = ndb.StringProperty(indexed = True)
        GraduationGPA = ndb.StringProperty(indexed = True)
        EngineeringMajor = ndb.StringProperty(indexed = True)
        Address1 = ndb.StringProperty(indexed = True)
        Address2 = ndb.StringProperty(indexed = True)
        City = ndb.StringProperty(indexed = True)
        State = ndb.StringProperty(indexed = True)
        Country = ndb.StringProperty(indexed = True)
        ZipCode = ndb.StringProperty(indexed = True)
        Time = time=ndb.DateTimeProperty(auto_now=True)
        status = ndb.StringProperty(indexed = True)
        Id = ndb.StringProperty(indexed = True)
        Program = ndb.StringProperty(indexed = True)
        SkypeId = ndb.StringProperty(indexed = True)
class Apply(webapp2.RequestHandler):
        def post(self):
               keycontent = self.request.get('logger_name',"studentKey")
               data = Student(parent = Student_key(keycontent))
               FirstName = self.request.get("fname")
               MiddleName = self.request.get("mname")
               LastName = self.request.get("lname")
               data.FirstName=FirstName
               data.MiddleName=MiddleName
               data.LastName=LastName
               data.DateOfBirth = self.request.get("dob")
               email = self.request.get("email")
               data.Email = email
               data.MobileNo = self.request.get("mob")
               data.AlternateMobileNo = self.request.get("amob")
               data.SSCMarks = self.request.get("ssc")
               data.PU_CGPA = self.request.get("pu")
               data.UnderGradGPA = self.request.get("ec")
               data.GraduationGPA = self.request.get("gg")
               data.EngineeringMajor = self.request.get("em")
               data.Address1 = self.request.get("address1")
               data.Address2 = self.request.get("address2")
               data.City = self.request.get("city")
               data.State = self.request.get("state")
               data.Country = self.request.get("country")
               ZipCode = self.request.get("zipcode")
               data.ZipCode = ZipCode
               data.Time  = datetime.now()
               Id = str(ZipCode)+str(int(round(time.time()*1000))) + str(random.randint(1000,9999))
               data.Id = Id
               data.Program = self.request.get("programs")
               data.SkypeId = self.request.get("skype")
               data.status = "notVerified"
               qry = Student.query(ancestor = Student_key(keycontent))
               qry = qry.filter(Student.Email == email)
               qry = qry.filter(Student.status == "Verified")
               dataa = qry.fetch()
               count = 0
               name = name = FirstName+" "+MiddleName+" "+LastName
               for row in dataa:
                   count = count + 1
                   name = row.FirstName+" "+row.MiddleName+" "+row.LastName
               if(count == 0):
                   data.put()
                   message = mail.EmailMessage(sender="Tara Labs Application Confirm <niranjanlucky@gmail.com>",
                            subject="Confirm your application")
                   message.to = "Niranjan <"+ email +">"
                   message.body = """Dear """+name+""",

Thank you for applying FJU,

Please click on the link below to complete your application submission process

https://niranjan-app.appspot.com/meta/confirm?id=""" + Id +"""

Sincierly FJU team"""
                   
                   
                   message.send()
                   self.response.write("success")
               else:
                   self.response.write("A student with name " + name + " and email address "+email+" already applied with the emailid which you entered.Please give valid email id")
class Confirm(webapp2.RequestHandler):
        def get(self):
               Id = self.request.get("id")
               keycontent = self.request.get('logger_name',"studentKey")
               qryy = Student.query(ancestor = Student_key(keycontent))
               qry = qryy.filter(Student.Id == Id)
               qry = qry.filter(Student.status == "notVerified")
               data = qry.fetch()
               name = ""
               count = 0
               for row in data:
                   query = qryy.filter(Student.Email == row.Email)
                   query = query.filter(Student.status == "Verified")
                   dataa = query.fetch()
                   name = row.FirstName+" "+ row.MiddleName+" "+ row.LastName
                   for row1 in dataa:
                       count = count + 1
                   if (count == 0):
                       row.status = "Verified"
                       row.put()
                   else:
                       self.response.write("Dear "+ name + ", Your email address has already been verified")
               if(name == ""):
                   self.response.write("You already confirmed")
               else:
                   if (count == 0):
                       self.response.write("Dear "+name+", <br/><br/>Your email address has been verified.<br/><br/> Your application is now submitted.<br/><br/>Thank you for your interest in FJU.")
                   
class GetStudent(webapp2.RequestHandler):
    def get(self):
        keycontent = self.request.get('logger_name',"studentKey")
        qry = Student.query(ancestor = Student_key(keycontent))
        data = qry.fetch()
        global HTML
        HTML = """\
                <html>
                  <body border=\"1\" style=\"width:100%\">
                  <div><table><tr><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</th><th>Email</th></tr>
                """
        for row in data:
            HTML = HTML+"<tr><td><input type=""checkbox"" value="""+row.Email+""">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""+row.FirstName+"""</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""+row.Email+"""</td></tr>"""
        self.response.write(HTML)
class SendEmail(webapp2.RequestHandler):
        def post(self):
            asub = self.request.get("sub")
            amail = self.request.get("mail")
            aname = self.request.get("name")
            amsg = self.request.get("msg")
            message = mail.EmailMessage(sender="Tara Labs <niranjanlucky@gmail.com>",
                            subject=asub)
            message.to = aname + " <"+amail+">"
            message.body = amsg
            message.send()
            self.response.write(asub + "  "+ amail+ "  "+ aname+ "  " + amsg)
class CheckVerify(webapp2.RequestHandler):
        def get(self):
            keycontent = self.request.get('logger_name',"studentKey")
            qry = Student.query(ancestor = Student_key(keycontent))
            qry = qry.filter(Student.status == "notVerified")
            qry = qry.filter(Student.Time <= datetime.now() - timedelta(hours=1))
            data = qry.fetch()
            for row in data:
                row.key.delete()
                self.response.write(row)
            self.response.write("noRow")
            
class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('sample.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/meta/apply',Apply),
    ('/meta/student',GetStudent),
    ('/meta/mail',SendEmail),
    ('/meta/confirm',Confirm),
    ('/crons/check',CheckVerify),
    ('/meta/savepm',ProgMajHtml),
    ('/meta/saveprogmaj',SaveProgMaj),
    ('/meta/getprogmaj',GetProgMaj),
], debug=True)
