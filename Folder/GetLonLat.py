import xlrd
import requests
import json
import random
import xlwt

xls=xlrd.open_workbook('commuting distance and time.xls')
sheet=xls.sheet_by_name('数据')

data=[]

for i in range(2,sheet.nrows):
    mdata=sheet.row_values(i)
    data.append(mdata)
    pass

url='https://restapi.amap.com/v3/geocode/geo?'
payloadData={
    'address':'',
    'city':'郑州市',
    'output':'JSON',
    'key':'5d4c13b42404f36355b92fefd12ed027'
}

lines=3340

Abnormal=[]

for i in range(lines):
    t=random.randint(1,100)/1000
    print(str(i)+' : '+ str(t))
    payloadData['address']=data[i][1]
    r=requests.get(url,params=payloadData)
    content=json.loads(r.text)['geocodes']
    if(len(content)==0):
        content1='0,0'
        Abnormal.append([i,data[i][1]])
    else:
        content1=content[0]['location']

    payloadData['address'] = data[i][2]
    r = requests.get(url, params=payloadData)
    content = json.loads(r.text)['geocodes']
    if (len(content) == 0):
        content2 = '0,0'
        Abnormal.append([i, data[i][1]])
    else:
        content2 = content[0]['location']

    lon, lat = content1.split(',')
    data[i].append(float(lon))
    data[i].append(float(lat))

    lon, lat = content2.split(',')
    data[i].append(float(lon))
    data[i].append(float(lat))
    pass

myWorkbook=xlwt.Workbook()
mySheet=myWorkbook.add_sheet('data')

for i in range(lines):
    for j in range(len(data[i])):
        mySheet.write(i,j,data[i][j])
        pass
    pass

myWorkbook.save('output.xls')

print(Abnormal)