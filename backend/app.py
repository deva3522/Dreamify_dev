from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

HF_SPACE_URL = "https://dev3522-dreamify.hf.space/run/predict"

@app.route('/generate-image', methods=['POST'])
def generate_image():
    try:
        # Extract the prompt from the request
        data = request.json
        prompt = data.get('prompt')

        if not prompt:
            return jsonify({"error": "Prompt is required"}), 400

        # Send the prompt to the Hugging Face Space
        response = requests.post(HF_SPACE_URL, json={
            "data": [prompt]
        })

        if response.status_code == 200:
            result = response.json()
            image_url = result["data"][0]
            return jsonify({"image_url": image_url})
        else:
            return jsonify({"error": "Failed to generate image"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('PORT', 5000))
