from mailjet_rest import Client
from fastapi import FastAPI, HTTPException
import os
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

api_key = os.getenv("MAILJET_API_KEY")
api_secret = os.getenv("MAILJET_SECRET_KEY")

mailjet = Client(auth=(api_key, api_secret), version='v3.1')

app = FastAPI()

origins = [
  "http://localhost:5173",  # Vite dev server port
  "http://localhost:3000",  # Alternative port
	"http://localhost:5174",  # optional alternative
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],    
)

class EmailRequest(BaseModel):
  name: str
  email: EmailStr
  message: str

@app.post("/send-email")
def send_email(req: EmailRequest):
	data = {
			'Messages': [
					{
							"From": {
									"Email": "ryannchang1@gmail.com",
									"Name": "Ryan Chang"
							},
							"To": [
									{"Email": "ryannchang1@gmail.com", "Name": ""}
							],
							"Subject": f"{req.name} - Personal Website",
							"TextPart": f"From: {req.email}\n\n{req.message}",
							"HTMLPart": ""
					}
			]
	}

	result = mailjet.send.create(data=data)

	if result.status_code == 200:
			return {"status": "success", "detail": result.json()}
	else:
			raise HTTPException(status_code=result.status_code, detail=result.json())

	

     
	

     

	


