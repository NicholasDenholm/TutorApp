from flask import Flask, request, jsonify
from flask import render_template
#from flask_cors import CORS  # Add this import

# Initialize the Flask application
app = Flask(__name__)
#CORS(app)  # Add this line to enable CORS

@app.route("/")
def home():
    # Needs to be in the templates
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)  # Run the Flask app in debug mode