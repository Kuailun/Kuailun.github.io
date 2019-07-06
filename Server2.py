from flask import Flask,jsonify,request
import os
import json
import codecs
import xlwt
from flask_apscheduler import APScheduler
import time

class Config(object):
    JOBS=[
        {
            'id':'Backup-Daily',
            'func':'__main__:Backup_Daily',
            'args':(),
            'trigger':'interval',
            'seconds':3600,
        }
    ]
    pass
def Backup_Daily():

    t=int(time.strftime("%H",time.localtime()))
    if(t<8 or t>20):
        return

    workbook=xlwt.Workbook(encoding='utf-8')
    worksheet=workbook.add_sheet('数据')

    worksheet.write(0, 0, "ID号")
    worksheet.write(0, 1, "起点")
    worksheet.write(0, 2, "终点")
    worksheet.write(0, 3, "出发时间")
    worksheet.write(0, 5, "自驾车距离")
    worksheet.write(0, 6, "自驾车时间")
    worksheet.write(0, 7, "出租车距离")
    worksheet.write(0, 8, "出租车时间")
    worksheet.write(0, 9, "出租车费用")
    worksheet.write(0, 11, "公共-公交车距离")
    worksheet.write(0, 12, "公共-公交车时间")
    worksheet.write(0, 13, "公共-地铁距离")
    worksheet.write(0, 14, "公共-地铁时间")
    worksheet.write(0, 15, "公共-步行距离")
    worksheet.write(0, 16, "公共-步行时间")
    worksheet.write(0, 17, "公共-总距离")
    worksheet.write(0, 18, "公共-总时间")
    worksheet.write(0, 19, "公共-总费用")
    worksheet.write(0, 21, "骑行距离")
    worksheet.write(0, 22, "骑行时间")
    worksheet.write(0, 24, "步行距离")
    worksheet.write(0, 25, "步行时间")

    index=0
    for item in mData:
        index=index+1
        worksheet.write(index, 0, mData[item]['Id'])
        worksheet.write(index, 1, mData[item]['Start'])
        worksheet.write(index, 2, mData[item]['End'])
        worksheet.write(index, 3, mData[item]['StartTime'])
        worksheet.write(index, 5, mData[item]['Driving']['Self']['Distance'])
        worksheet.write(index, 6, mData[item]['Driving']['Self']['Time'])
        worksheet.write(index, 7, mData[item]['Driving']['Taxi']['Distance'])
        worksheet.write(index, 8, mData[item]['Driving']['Taxi']['Time'])
        worksheet.write(index, 9, mData[item]['Driving']['Taxi']['Cost'])
        worksheet.write(index, 11, mData[item]['Transfer']['Bus']['Dist'])
        worksheet.write(index, 12, mData[item]['Transfer']['Bus']['Time'])
        worksheet.write(index, 13, mData[item]['Transfer']['Subway']['Dist'])
        worksheet.write(index, 14, mData[item]['Transfer']['Subway']['Time'])
        worksheet.write(index, 15, mData[item]['Transfer']['Walk']['Dist'])
        worksheet.write(index, 16, mData[item]['Transfer']['Walk']['Time'])
        worksheet.write(index, 17, mData[item]['Transfer']['Distance'])
        worksheet.write(index, 18, mData[item]['Transfer']['Time'])
        worksheet.write(index, 19, mData[item]['Transfer']['Cost'])
        worksheet.write(index, 21, mData[item]['Ride']['Ride']['Dist'])
        worksheet.write(index, 22, mData[item]['Ride']['Ride']['Time'])
        worksheet.write(index, 24, mData[item]['Ride']['Walk']['Dist'])
        worksheet.write(index, 25, mData[item]['Ride']['Walk']['Time'])


    workbook.save("Backup/"+time.strftime("%Y_%m_%d_%H_%M_%S",time.localtime())+".xls")

app = Flask(__name__)
app.config.from_object(Config())
if not os.path.exists("Database"):
    os.mkdir("Database")
if not os.path.exists("Backup"):
    os.mkdir("Backup")
mData={}
mID={}

def getID(code):
    if not code in mID:
        mID[code] = {"count": 0}
    return code+str(mID[code]["count"]+1).zfill(4)

def ID2Number(ID):
    temp=ID[2:]
    try:
        num=int(temp)
        return num
    except:
        return -1
    pass

def save_post(data):
    id=data['Id']
    fp = codecs.open("Database/"+id+".txt", "w", "utf-8")
    fp.write(json.dumps(data, ensure_ascii=False))
    fp.close()
    pass

def delete_post(data):
    if os.path.exists("Database/"+data+".txt"):
        os.remove("Database/"+data+".txt")
    return

def load_json():
    if os.path.exists("Database"):
        names=os.listdir("Database")
        for name in names:
            f=open("Database/"+name,'r',encoding='utf-8')
            content=f.read()
            f.close()

            code = ID2Number(name[0:6])
            char = name[0:2]
            if (code == -1):
                message = str(name[0:6]) + "代码有误，请检查"
            elif (name[0:6] == getID(char)):
                mID[char]["count"] += 1
                mData[name[0:6]] = json.loads(content)
            else:
                message = str(name[0:6]) + "代码有误，请获取下一个有效代码"

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

@app.route('/public/id',methods=['POST'])
def Public_ID():
    mJson=get_json_data(request.form)
    response={
        "Message":getID(mJson['Id']),
        "Function":0,
    }
    return jsonify(response),200


@app.route('/public/submit',methods=['POST'])
def Public_Submit():
    mJson=get_json_data(request.form)
    message=""
    if (mJson["QueryCode"] == 1):
        """Local Search"""
    elif (mJson["QueryCode"] == 2):
        """Send Post"""
        if (mJson["Id"] in mData):
            message = str(mJson["Id"]) + "已存在于数据库中，录入失败"
        else:
            code = ID2Number(mJson["Id"])
            char = mJson["Id"][0:2]
            if (code == -1):
                message = str(mJson["Id"]) + "代码有误，请检查"
            elif (mJson["Id"] == getID(char)):
                mID[char]["count"] += 1
                mData[mJson["Id"]] = mJson
                message = str(mJson["Id"]) + "成功录入数据库"
                save_post(mJson)
            else:
                message = str(mJson["Id"]) + "代码有误，请获取下一个有效代码"

    response={
        "Message":message,
    }
    return jsonify(response),200

@app.route('/public/total',methods=['POST'])
def Public_Total():
    response = {
        "Message": len(mData),
    }
    return jsonify(response), 200

@app.route('/private/delete',methods=['POST'])
def Private_Delete():
    mJson=request.get_json()
    if (mJson["Id"] in mData):
        mData.pop(mJson["Id"])
        delete_post(mJson["Id"])
        message = str(mJson["Id"]) + "存在于数据库中，已删除"
        pass
    else:
        message=str(mJson["Id"]) + "不在数据库中"
    response = {
        "Message": message,
    }
    return jsonify(response), 200

@app.route('/private/add',methods=['POST'])
def Private_Add():
    mJson=request.get_json()
    if (mJson["Id"] in mData):
        message = str(mJson["Id"]) + "已存在于数据库中，录入失败"
    else:
        mData[mJson["Id"]] = mJson
        message = str(mJson["Id"]) + "成功录入数据库"
        save_post(mJson)
        # save_data(mData)
    response = {
        "Message": message,
    }
    return jsonify(response),200

@app.route('/private/load',methods=['POST'])
def Private_Load():
    mJson=request.get_json()
    load_json()
    response = {
        "Message": "完成",
    }
    return jsonify(response),200


@app.route('/private/all',methods=['POST'])
def Private_All():
    mJson = request.get_json()
    response={
        "Message":mData,
    }
    return jsonify(response),200

if __name__=='__main__':
    scheduler=APScheduler()
    scheduler.init_app(app)
    scheduler.start()
    app.run(host="0.0.0.0",port=80)
