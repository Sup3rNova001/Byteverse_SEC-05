# Green Choice 

### [PresentationLink](https://drive.google.com/file/d/1quoOOJ3zLQJc_RHI6C67-DyVl2oJyL0-/view?usp=share_link "Presentation Link")
### [Video Pitch](https://drive.google.com/file/d/1_mIzd4z1wuUxU4Hy3yN7VEWCWZ_7Dcsy/view?usp=sharing)


## Setup Instruction:
#### `How to run locally?`

```bash
# Clone the repository
git clone https://github.com/Sup3rNova001/Byteverse_SEC-05.git
cd Byteverse_SEC-05
npm install
cd frontend
npm install

# Create a .env file from instructions given below in root project directory

# To load the sample data into database
npm run data:import
# To run server you must have .env file in root project directory
# see below .env file structure and replace with your values
npm run dev
# project starts

# Destroy/Delete data from database
npm run data:destroy 

```

#### `.env File Structure`

```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri 
#For example: "mongodb://127.0.0.1:27017/GreenChoice"
JWT_SECRET = 'xxxxx'
PAYPAL_CLIENT_ID = your paypal client id 

```


## Dependencies:
1. React, Redux   -for Frontend Application
2. Nodejs and Express  -for Backend Server
3. MongoDB   -as Database
4. FP-Growth algorithm   -to generate association rule between products bought together
5. Other Dependencies - mongoose, dotenv, axios, morgan etc


