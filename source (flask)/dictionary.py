from flask import Flask, make_response
from json import dumps
import requests
import random

app = Flask(__name__)


@app.route('/')
def index():
    return "Welcome to Memovercity !"


@app.route('/getArray')
def getArray():
    array = ["Memovercity", "Project", "Students", "Computer", "Software",
             "Project", "Brain", "Programming", "Web", "Coding", "Engineering"]

    return make_response(dumps(array))


@app.route('/endPontName')
def metodName():
    arrayStr = ["str1", "str2", "str3", "str4", "str5",
                "str6", "str7", "str8", "str9", "str10"]

    return make_response(dumps(arrayStr))

# Does not support turkish letters, works fine


@app.route('/fromTrDictionary')
def fromTrDic():
    wordSite = "https://gist.githubusercontent.com/emrekgn/b4049851c88e328c065a/raw/db67136bf7431be047a2faaef95eff5bd5df2f03/isimler"
    response = requests.get(wordSite)
    WORDS = response.content.splitlines()
    randNum = 10
    i = 0
    selected = []
    while i < randNum:
        selected.append(random.choice(WORDS))
        i += 1

    return make_response(dumps(selected))

# Words from English dictionary, works fine


@app.route('/fromEngDictionary')
def fromEngDic():
    word_site = "https://www.mit.edu/~ecprice/wordlist.10000"
    response = requests.get(word_site)
    WORDS = response.content.splitlines()
    randNum = 10
    i = 0
    selected = []
    while i < randNum:
        selected.append(random.choice(WORDS))
        i += 1

    return make_response(dumps(selected))


if __name__ == '__main__':
    app.run(debug=True)
