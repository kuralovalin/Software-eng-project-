from flask import Flask, make_response
from json import dumps

app = Flask(__name__)
@app.route('/')
def index():
	return "Welcome to Memovercity !"

@app.route('/getArray')
def getArray():
	array = ["Alina", "Kuralova" , "Student", "Computer", "Software", 
			 "Project", "Memovercity", "Programming", "Web", "Coding", "Engineering"]

	return make_response(dumps(array))

@app.route('/endPontName') 
def metodName():
	arrayStr = ["str1", "str2", "str3", "str4", "str5", "str6", "str7", "str8", "str9", "str10"] 

	return make_response(dumps(arrayStr))

if __name__ == '__main__':
    app.run()