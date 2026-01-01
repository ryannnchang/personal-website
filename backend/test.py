import requests

# Replace with your API URL
url = "http://127.0.0.1:8000/send-email"  # or port 8001 if you changed it

payload = {
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Hello from Python!"
}

response = requests.post(url, json=payload)

if response.status_code == 200:
    print("Email sent successfully!")
    print(response.json())
else:
    print("Failed to send email")
    print(response.status_code, response.text)
