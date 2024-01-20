import paho.mqtt.client as mqtt
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
live_data = {}  # Store live data received from MQTT

# MQTT configuration
mqtt_broker = "10.1.70.4"
mqtt_port = 1883
mqtt_topic = "Wallduern/Hackathon/TC150T/DeviceProperties/Vibration_processed"

def on_connect(client, userdata, flags, rc):
    print("Connected to MQTT broker with code " + str(rc))
    client.subscribe(mqtt_topic)

def on_message(client, userdata, message):
    data = message.payload.decode()
    print("Received MQTT message: " + data)
    # Process and store data as needed
    live_data["mqtt_data"] = data

@app.route('/api/sensor_data', methods=['GET'])
def get_live_data():
    return jsonify(live_data)

if __name__ == "__main__":
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(mqtt_broker, mqtt_port, 60)

    # Start MQTT client in a separate thread
    client.loop_start()

    # Start Flask API server
    app.run(host='0.0.0.0', port=5002)
