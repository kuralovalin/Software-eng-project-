import requests

URL = "http://localhost:5000/user/"

REGISTER_URL = URL + "register/"
LOGIN_URL = URL + "login/"
PROFILE_URL = URL +"profile/"

#Testing Register Endpoint
## TEST CASES FOR REGISTER POST ##
validData = {"name":"Test User", "email":"test@gtu.edu.tr", "password":"abc123"}
invalidData = []
## Invalid Datad Will Return 400 Status Code and Error Message ##
#Name must be at least 2 char
invalidData.append({"name":"T", "email":"test@gtu.edu.tr", "password":"abc123"})
#Name must be max 250 char
invalidData.append({"name":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "email":"test@gtu.edu.tr", "password":"abc123"})
#Email must be at least 2 char
invalidData.append({"name":"Test User", "email":"t", "password":"abc123"})
#Email must be max 2 char
invalidData.append({"name":"Test User", "email":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA@gtu.edu.tr", "password":"abc123"})
#Email must contain @ and be email format 
invalidData.append({"name":"Test User", "email":"test", "password":"abc123"})
#Password must be at least 6 characters
invalidData.append({"name":"Test User", "email":"test", "password":"a"})
#Password must be max 20 characters
invalidData.append({"name":"Test User", "email":"test", "password":"aaaaaaaaaaaaaaaaaaaaaaa"})

#Email should not duplicate
invalidData.append({"name":"T", "email":"test2@gtu.edu.tr", "password":"aaaaaaaaaaaaaaaaaaaaaaa"})
result = requests.post(REGISTER_URL, validData)
print("---------------------------------------------------------------------")
print("Valid data status code : " + str(result.status_code))
print("Result With Valid Data : " + result.text)
print("---------------------------------------------------------------------")
#Register Results 
for i in invalidData:
	result = requests.post(REGISTER_URL, i)
	print("---------------------------------------------------------------------")
	print("Data : "+ str(i))
	print("Register URL : "+REGISTER_URL + " Result Status is : " + str(result.status_code) + " : " + result.text)
	print("---------------------------------------------------------------------")
#Invalid HTTP Method For Register Url
result = requests.get(REGISTER_URL)
print("Result of GET Request for /register endpoint : "+str(result))


## Testing Login EndPoint
print("########################################################################")
validData = {"email":"test@gtu.edu.tr", "password":"memovercity"}

invalidLoginData = []
## Invalid Datad Will Return 400 Status Code and Error Message ##

#Email must be at least 2 char
invalidLoginData.append({ "email":"t", "password":"memovercity"})
#Email must be max 2 char
invalidLoginData.append({"email":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA@gtu.edu.tr", "password":"memovercity"})
#Email must contain @ and be email format 
invalidLoginData.append({"email":"test@gtu.edu.tr", "password":"memovercity"})
#Password must be at least 6 characters
invalidLoginData.append({"email":"test@gtu.edu.tr", "password":"a"})
#Password must be max 20 characters
invalidLoginData.append({"email":"test@gtu.edu.tr", "password":"aaaaaaaaaaaaaaaaaaaaaaa"})
#Wrong password
invalidLoginData.append({"email":"test@gtu.edu.tr", "password":"abc123"})

result = requests.post(LOGIN_URL, validData)
print("---------------------------------------------------------------------")
print("Valid data status code : " + str(result.status_code))
print("Result With Valid Data : " + result.text)
print("---------------------------------------------------------------------")
#Register Results 
for i in invalidLoginData:
	result = requests.post(LOGIN_URL, i)
	print("---------------------------------------------------------------------")
	print("Data : "+ str(i))
	print("Register URL : "+LOGIN_URL + " Result Status is : " + str(result.status_code) + " : " + result.text)
	print("---------------------------------------------------------------------")
#Invalid HTTP Method For Register Url
result = requests.get(LOGIN_URL)
print("Result of GET Request for /register endpoint : "+str(result))



## Testing Empty Profile EndPoint
print("########################################################################")
result = requests.get(PROFILE_URL,headers={"http-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdCBVc2VyIiwiaWQiOiIxIiwiZW1haWwiOiJ0ZXN0QGd0dS5lZHUudHIiLCJpYXQiOjE2MDYzMjc3NTB9.eM_ytE2zJaTzlKvFSMqxEfLX5cEgEL0IXlZd7DbX8VM"})
print("Valid Result for empty profile page : "+ result.text)
result = requests.get(PROFILE_URL)
print("Invalid Data for /profile endpoint " + result.text);





















