from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/')
def page():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
        name = request.form['name']
        email = request.form['email']
        msg = request.form['message']

        user = "email"
        password = "password"
        message = str(name) + '\n\n' + str(email) + '\n\n' + str(msg)
        server = smtplib.SMTP("smtp.gmail.com:587")
        server.starttls()
        server.login(user, password)
        server.sendmail(user, user, message)
        server.quit()

        return render_template('thankyou.html')
