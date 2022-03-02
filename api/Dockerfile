FROM python:3.8-slim-buster

WORKDIR /app

ENV FLASK_APP=app.py 

ENV FLASK_ENV=development

COPY ./requirements.txt .
RUN pip3 install -r requirements.txt 

COPY . .

CMD [ "python", "app.py" ]