# ExpressoGram 🙌

- Expressogram is a compact personal texting application designed for private communication between two users. 
- Created as a part of my learning journey with web sockets, this project serves as a practical application of real-time communication technologies.
- It features a straightforward user authentication system with login, registration, and logout functionalities.
-  Utilizing socket technology, Expressogram enables real-time, online messaging, ensuring a seamless and instantaneous chatting experience for its users. This app is perfect for those seeking a simple yet effective platform for private conversations

## Tech Stack 🧑‍💻
- Frontend: React.js and Tailwind CSS
- Backend : Node.js, Express , Socket.io
- DataBase : MongoDB
- Other Tools: Web Sockets, React Router Dom, Mongoose and  socket.io-client

## Features
##  User Authentication:

 - Login: Users can securely log into their accounts using their credentials.
 - Register: New users can create an account by providing necessary information such as username, email, and password.
 - Logout: Users can log out of their accounts securely, ensuring   their session is terminated.


## Contact Management
- Select Contact for Messaging: Users can select any contact from their list to initiate a conversation.

## Real-Time Messaging:
- Online Users: If both users are online, messages are sent and received in real-time, ensuring instant communication.
- Sockets for Real-Time Communication: The website uses WebSockets to facilitate real-time messaging, providing a seamless chatting experience.

## Message Storage and Retrieval:
- Database Storage: All messages are stored in a database to ensure they are not lost. This includes both sent and received messages.
- Offline Message Delivery: Users who are offline will receive messages once they log back in, as messages are retrieved from the database.
- Consistent Data: This approach ensures that all messages are preserved and can be accessed later, maintaining the continuity of conversations.
## Offline and Online Messaging Synchronization

Offline Users: When a user is offline, any messages sent to them are saved in the database and will be delivered the next time they log in.
Real-Time Updates: Online users receive messages instantly through WebSockets, and these messages are also stored in the database for consistency.



 

## Demo 😍😍
https://drive.google.com/file/d/1w75JnD4P0EQEwExVZJQe6DY7jmm-zu-Z/view?usp=sharing



















