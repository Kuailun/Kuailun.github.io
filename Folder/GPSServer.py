from flask import Flask,jsonify,request
import os
import json
import codecs
import xlwt
from flask_apscheduler import APScheduler
import time
import random
import math
import xlrd


app = Flask(__name__)
if not os.path.exists("Database"):
    os.mkdir("Database")
if not os.path.exists("Backup"):
    os.mkdir("Backup")
mData={}
mID={}

xls=xlrd.open_workbook('commuting distance and time.xls')
sheet=xls.sheet_by_name('数据')

data=[]

for i in range(2,sheet.nrows):
    mdata=sheet.row_values(i)
    data.append(mdata)
    pass

def after_request(resp):
    resp.headers['Access-Control-Allow-Origin']='*'
    return resp
app.after_request(after_request)

def get_json_data(data):
    if (len(data) < 1):
        return
    js = ""
    for subdata in data:
        js = subdata
        break

    try:
        json.loads(js)
    except:
        print("Error happens")
        return;
    return json.loads(js)


@app.route('/getData',methods=['POST'])
def GetData():
    response={
        "Data":data,
    }
    return jsonify(response),200

@app.route('/saveData',methods=['POST'])
def SaveData():
    mJson = get_json_data(request.form)
    response={
        "Data":"Received",
    }
    myWorkbook = xlwt.Workbook()
    mySheet = myWorkbook.add_sheet('data')

    for i in range(len(mJson)):
        for j in range(len(mJson[i])):
            mySheet.write(i, j, mJson[i][j])
            pass
        pass

    myWorkbook.save('output.xls')

    return jsonify(response),200



if __name__=='__main__':
    scheduler=APScheduler()
    scheduler.init_app(app)
    scheduler.start()
    app.run(host="0.0.0.0",port=80)
