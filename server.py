from flask import Flask, render_template,

app = Flask(__name__)

@app.route('/')
def page():
    return render_template('index.html')

@app.errorhandler(500)
def internal_server_error(e):
    return 'Sorry! Something went wrong...try again!', 500
