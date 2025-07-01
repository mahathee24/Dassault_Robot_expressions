# Dassault_systemes

🤖 Dassault Robot Expressions
This project lets you control a robot face expression remotely using two web interfaces — one for control and the other for display — over the same local network (Wi-Fi). Built using Node.js, Express, and Socket.IO.

🔧 Installation Instructions

1. Clone the Repository
 
        git clone https://github.com/mahathee24/Dassault_Robot_expressions.git
        cd Dassault_Robot_expressions

3. Install Required Packages

   Make sure Node.js is installed.
   npm install express socket.io

3. Start the Server

   node server.js
   If everything works correctly, you’ll see:

  
       Server running at http://localhost:3000

📱💻 Accessing the Interfaces

   Make sure both your phone and laptop are on the same Wi-Fi.

   On Laptop:
     
    Controller: http://localhost:3000/controller.html

    Display: http://localhost:3000/display.html

  On Mobile Phone:
    
    Replace 192.168.1.6 with your local IP (use ipconfig to check)

    Controller: http://192.168.1.6:3000/controller.html

    Display: http://192.168.1.6:3000/display.html

⚠️ Make sure your firewall allows access to port 3000

📂 Folder Structure
       
     Dassault_Robot_expressions/
     │
     ├── public/
     │   ├── controller.html
     │   ├── display.html
     │
     ├── server.js
     ├── package.json
     └── README.md

✅ Features

  Real-time expression updates via WebSocket

  Responsive layout that works on both laptop and mobile

  Expressions: 😊 Happy, 😢 Sad, 😠 Angry, 😮 Surprised, 😐 Neutral

