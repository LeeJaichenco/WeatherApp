# Import necessary modules
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import os
from flask_cors import CORS


# Create a Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure the MongoDB connection
app.config['MONGO_URI'] = os.environ.get('MONGODB_URI')
mongo = PyMongo()


# Create a route to save a favorite city
@app.route('/add_city', methods=['POST'])
def add_city():
    try:
        city_data = request.json
        db = mongo.db.favorite_cities
        db.insert_one(city_data)
        return jsonify({"message": "City added successfully"}), 201
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500


@app.route('/remove_city', methods=['DELETE'])
def remove_city():
    try:
        city_name = request.json.get('name')  # Assuming the request body contains the city name
        db = mongo.db.favorite_cities
        result = db.delete_one({"name": city_name})
        if result.deleted_count > 0:
            return jsonify({"message": "City removed successfully"}), 200
        else:
            return jsonify({"message": "City not found in favorites"}), 404
    except Exception as e:
        print(e)  # Add this line to print the exception traceback
        return jsonify({"error": str(e)}), 500


# Create a route to retrieve favorite cities
@app.route('/favorite_cities', methods=['GET'])
def get_favorite_cities():
    try:
        db = mongo.db.favorite_cities
        cities = list(db.find({}, {"_id": 0}))  # Exclude the "_id" field from the response
        return jsonify(cities)
    except Exception as e:
        print(e)  # Add this line to print the exception traceback
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
