from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import os
import json
from datetime import datetime
import uuid

app = Flask(__name__)
CORS(app)

# Define the directory where requests will be saved
SAVE_DIR = 'participations'
PASSWORD = 't(j5NAnc*bVF73'

# Ensure the save directory exists
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

# Function to save requests to a file
def save_request(data):
    # Generate a unique filename using timestamp and UUID
    timestamp = datetime.utcnow().strftime('%Y%m%d%H%M%S%f')
    unique_id = uuid.uuid4()
    filename = f"{timestamp}_{unique_id}.json"
    filepath = os.path.join(SAVE_DIR, filename)
    
    # Save the request data to the file
    with open(filepath, 'w') as f:
        json.dump(data, f)
        
@app.route('/get_all', methods=['GET'])
def get_all():
    try:
        # Check for the password
        password = request.headers.get('password')
        print(repr(password))
        print(repr(PASSWORD))
        if password != PASSWORD:
            return Response('Unauthorized', status=401)
        
        # Read all files and collect their data
        data_list = []
        for filename in os.listdir(SAVE_DIR):
            filepath = os.path.join(SAVE_DIR, filename)
            with open(filepath, 'r') as f:
                data = json.load(f)
                data_list.append(data)
        
        return jsonify(data_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/save', methods=['POST'])
def save():
    try:
        data = request.form.to_dict()

        if not data:
            return jsonify({'error': 'No data received'}), 400
        
        save_request(data)
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
