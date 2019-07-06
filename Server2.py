from flask import Flask,jsonify,request
import os

app = Flask(__name__)
if not os.path.exists("Database"):
    os.mkdir("Database")
mData={}
mID={}

# def getID(code):
#     if not code in mID:
#         mID[code] = {"count": 0}
#     return code+str(mID[code]["count"]+1).zfill(4)
def after_request(resp):
    resp.headers['Access-Control-Allow-Origin']='*'
    return resp
app.after_request(after_request)

@app.route('/public/id',methods=['POST'])
def Public_ID():
    response={
        "Message":"C0001",
    }
    return jsonify(response),200


@app.route('/public/submit',methods=['POST'])
def Public_Submit():
    response={
        "Message":"已收录",
    }
    return jsonify(response),200

@app.route('/public/total',methods=['POST'])
def Public_Total():
    response = {
        "Message": "352",
    }
    return jsonify(response), 200

@app.route('/private/delete',methods=['POST'])
def Private_Delete():
    response = {
        "Message": "已删除",
    }
    return jsonify(response), 200

if __name__=='__main__':
    app.run(host="0.0.0.0",port=80)