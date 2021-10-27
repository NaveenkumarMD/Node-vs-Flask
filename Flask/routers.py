from index import *
from flask import json, request,jsonify
db=client.db.tests

@app.route("/post/<int:count>",methods=["POST"])
def add(count):
    print(count)
    docs=[]
    stringarray=[]
    alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/', '-', '[', ']']
    def getrandom():
        import random
        return random.choice(alphabets)
    for i in range(count):
        string=""
        for j in range(count):
            string+=getrandom()
        stringarray.append(string)
    objectarray=[]
    for i in range(count):
        secondobject={}
        for j in range(count):
            string=""
            for k in range(count):
                string+=getrandom()
            secondobject[str(i)]=string
        objectarray.append(secondobject)
    arrarray=[]
    for i in range(count):
        secondobject=[]
        for j in range(count):
            string=""
            for k in range(count):
                string+=getrandom()
            secondobject.append(string)
        arrarray.append(secondobject)
    for i in range(count):
        data={
            "str":stringarray[i],
            "obj":objectarray[i],
            "arr":arrarray[i]
        }
        docs.append(data)

    db.insert_many(docs)
    return jsonify({
        "res":"success"
    })
@app.route('/getall',methods=['GET'])
def getall():
    data=db.find()
    arr=[]
    for i in data:
        arr.append(i)
    return json.dumps(arr,default=str)
@app.route('/delete',methods=['DELETE'])
def delete():
    db.delete_many({})
    return jsonify({
        "res":"success"
    })