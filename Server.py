from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys
import os
import json

if not os.path.exists("Database"):
    os.mkdir("Database")
mData={}

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)
    def do_POST(self):

        '''Decode the incoming post'''
        content_length=self.headers._headers[2][1]
        data=self.rfile.read(int(content_length))

        '''Send the response to client'''
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header("Content-type",'text/html')
        SimpleHTTPRequestHandler.end_headers(self)
        message="Received"
        self.wfile.write(bytes(message,"utf8"))

        '''Handle the data'''
        s=str(data,'utf-8')
        mD=json.loads(s)
        print("Got Post: Length:{0},Id:{1},Function:{2}".format(content_length,mD["Id"],mD["QueryCode"]))

        if(mD["Id"]=="Save" or mD["Id"]=="save"):
            fp=open("Database/mData.txt","w")
            fp.write(json.dumps(mData))
            fp.close()
            return

        '''Add data to temporal database or delete from it'''
        if(mD["QueryCode"]==2):
            mData[mD["Id"]]=mD
        elif(mD["QueryCode"]==3):
            if (mD["Id"] in mData):
                del mData[mD["Id"]]

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
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)