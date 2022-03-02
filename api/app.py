from flask import Flask, url_for
import json
from flask_cors import CORS
from flask_mysqldb import MySQL
import yaml

app=Flask(__name__)
CORS(app)

db=yaml.load(open('db.yaml'))
app.config['MYSQL_HOST']=db['mysql_host']
app.config['MYSQL_USER']=db['mysql_user']
app.config['MYSQL_PASSWORD']=db['mysql_password']
app.config['MYSQL_DB']=db['mysql_db']
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

mysql=MySQL(app)

@app.route('/',methods=['GET'])
def index():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT image_id,image_path,category_id FROM image_info""")
    user=cur.fetchall()
    for i in user:
        url=url_for('static',filename=i['image_path'])
        i['image_path']=url
    image_names = json.dumps(user)
    cur.close()
    return image_names

@app.route('/<string:query>',methods=['GET'])
def images(query):
    cur = mysql.connection.cursor()
    cur.execute("""SELECT image_info.image_id,image_info.image_path, image_info.category_id, category_info.category FROM image_info INNER JOIN category_info ON image_info.category_id = category_info.category_id WHERE category_info.category = %s """,[query,])
    user=cur.fetchall()
    for i in user:
        url=url_for('static',filename=i['image_path'])
        i['image_path']=url
    image_names = json.dumps(user)
    cur.close()
    return image_names

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')