from flask import Flask
from flask_cors import CORS
import urllib.parse
from flask_pymongo import PyMongo
app=Flask(__name__)
cors=CORS(app)
app.config['MONGO_URI']="mongodb+srv://naveen:eOQyBUx3Lq5dRCHw@cluster0.iboft.mongodb.net/nodevsflask?retryWrites=true&w=majority"
print("Connected to mongodb")
client=PyMongo(app)
