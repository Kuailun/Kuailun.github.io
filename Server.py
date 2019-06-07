from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)
    def do_POST(self):
        print("Got Post!")

        content_length=self.headers._headers[2][1]
        print(content_length)
        data=self.rfile.read(int(content_length))
        print(data)

        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header("Content-type",'text/html')
        SimpleHTTPRequestHandler.end_headers(self)
        message="Received"
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
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)