from flask import Flask
from sync_queue import *

from collections import defaultdict
import threading
import paho.mqtt.client as mqtt
import sys
import copy

# Define MQTT broker information
broker_address = "10.1.70.4"  # Change this to your MQTT broker's address
port = 1883  # Default MQTT port

all_events = defaultdict(list)

# Callback function when the client connects to the broker
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT broker")
        # Subscribe to the topics you want to access here
        client.subscribe('#')
    else:
        print("Connection failed with error code " + str(rc))

# Callback function when a message is received
def on_message(client, userdata, msg):
    all_events[msg.topic].append(msg.payload.decode())
    #print(f"Received message on topic '{msg.topic}': {msg.payload.decode()}")

# Create an MQTT client
client = mqtt.Client()

# Set callback functions
client.on_connect = on_connect
client.on_message = on_message

# Connect to the MQTT broker
client.connect(broker_address, port)

# Define the function to disconnect the MQTT client
# def disconnect_client():
#     client.disconnect()
#     for key in all_events:
#         print(f"Received message on topic '{key}': {all_events[key][0]}")

#     print("MQTT client disconnected.")

# Create a timer thread that will call disconnect_client() after 30 seconds
# timer_thread = threading.Timer(30, disconnect_client)
# timer_thread.start()

# Keep the client running to receive messages
# client.loop_forever()

app = Flask(__name__)

@app.get("/new-state")
def getNewState():
    data = copy.deepcopy(all_events)
    for k, v in data.items():
        if len(v) > 100:
            data[k] = v[:-100]
    all_events.clear()
    return data
    
@app.route("/llm")
def getLlm():
    return "Hello World!"

if __name__ == "server":
    client.loop_start()
    print("test")
    app.run(debug = True, host = "localhost", port = 5555)