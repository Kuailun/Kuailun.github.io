from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys
import os
import json
import codecs
import datetime
import collections


if not os.path.exists("Database"):
    os.mkdir("Database")
mData={}
mID={}


def save_data(data):
    fp = codecs.open("Database/mData.txt", "w", "utf-8")
    fp.write(json.dumps(data, ensure_ascii=False))
    fp.close()

def getID(code):
    if not code in mID:
        mID[code] = {"count": 0}
    return code+str(mID[code]["count"]+1).zfill(4)

def ID2Number(ID):
    temp=ID[1:]
    try:
        num=int(temp)
        return num
    except:
        return -1


class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)
    def do_POST(self):

        '''Decode the incoming post'''
        content_length=0
        ip=""
        for i in range(len(self.headers._headers)):
            if(self.headers._headers[i][0]=='Content-Length'):
                content_length=self.headers._headers[i][1]
                continue
            elif(self.headers._headers[i][0]=='Host'):
                ip=self.headers._headers[i][1]
                continue

        '''Handle the error'''
        if(content_length==''):
            return

        data=self.rfile.read(int(content_length))

        '''Handle the data'''
        s = str(data, 'utf-8')
        mD = json.loads(s)
        print(datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')+"  IP:{0}  Length:{1}  Id:{2}  Function:{3}".format(ip,content_length, mD["Id"], mD["QueryCode"]))

        status=0
        message=""

        '''Add data to temporal database or delete from it'''
        if(mD["QueryCode"]==1):
            """Local Search"""
        elif (mD["QueryCode"] == 2):
            """Send Post"""
            if (mD["Id"] in mData):
                message=str(mD["Id"])+"已存在于数据库中，录入失败"
            else:
                code=ID2Number(mD["Id"])
                char=mD["Id"][0]
                if(code==-1):
                    message=str(mD["Id"])+"代码有误，请检查"
                elif(mD["Id"]==getID(char)):
                    mID[char]["count"]+=1
                    mData[mD["Id"]] = mD
                    message = str(mD["Id"]) + "成功录入数据库"
                    save_data(mData)
                else:
                    message = str(mD["Id"]) + "代码有误，请获取下一个有效代码"




        elif (mD["QueryCode"] == 3):
            message="该功能已弃用"
            # if (mD["Id"] in mData):
            #     del mData[mD["Id"]]
        elif(mD["QueryCode"]==4):
            '''查询最新ID'''
            message=getID(mD["Id"])
        elif(mD['QueryCode']==5):
            status = 0
            save_data(mData)
            message="手动保存成功"


        '''Send the response to client'''
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header("Content-type",'text/html')
        SimpleHTTPRequestHandler.end_headers(self)
        self.wfile.write(bytes(message,"utf8"))



    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Credentials',"true")
        self.send_header('Access-Control-Expose-Headers', "FooBar")
        self.send_header("Content-type", 'text/html')
        SimpleHTTPRequestHandler.end_headers(self)
        message = "Received"
        self.wfile.write(bytes(message, "utf8"))


if __name__ == '__main__':
    # test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 80,bind="192.168.125.102")
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 80)