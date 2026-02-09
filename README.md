📝 Notes API (MongoDB + Express)

A simple and powerful RESTful Notes API built using Node.js, Express.js, and MongoDB.
This API allows users to create, read, update, and delete notes, following clean backend architecture and REST principles.

🚀 Features

✅ Create a new note
📄 Fetch all notes
🔍 Fetch a note by ID
✏️ Update an existing note
🗑️ Delete a note
🕒 Automatic timestamps (createdAt, updatedAt)
📦 MongoDB persistence using Mongoose

🛠️ Tech Stack

Backend: Node.js

Framework: Express.js

Database: MongoDB

ODM: Mongoose

API Style: REST

Data Format: JSON

📂 Project Structure
Notes-API/
│
├── models/
│   └── Note.js          # Mongoose schema
│
├── routes/
│   └── notes.js         # API routes
│
├── controllers/
│   └── notesController.js
│
├── config/
│   └── db.js            # MongoDB connection
│
├── index.js             # Entry point
│
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/notes-api.git
cd notes-api

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string

4️⃣ Start the Server
npm start


or (with nodemon):

npm run dev


📍 Server will run at:

http://localhost:3000

📌 API Endpoints
➕ Create a Note

POST /api/notes

{
  "title": "My First Note",
  "content": "This is my note content"
}

📄 Get All Notes

GET /api/notes

🔍 Get Note by ID

GET /api/notes/:id

✏️ Update a Note

PUT /api/notes/:id

{
  "title": "Updated Title",
  "content": "Updated content"
}

🗑️ Delete a Note

DELETE /api/notes/:id

🧠 Data Model (Note Schema)
{
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
}

❌ Error Handling

Invalid ID → 400 Bad Request

Note not found → 404 Not Found

Server error → 500 Internal Server Error

All responses are returned in JSON format.

🔒 Future Enhancements

✨ User Authentication (JWT)
📁 Note categories / tags
🔎 Search & filtering
📄 Pagination
🧪 Unit & integration tests

🎓 Learning Outcomes

This project helps in understanding:

REST API design

Express routing & middleware

MongoDB CRUD operations

Mongoose schemas & models

Backend project structuring

🤝 Contributing

Contributions are welcome!
Feel free to fork, create a branch, and submit a pull request 🚀

📜 License

This project is licensed under the MIT License.

⭐ Support

If you like this project, don’t forget to star ⭐ the repository
Happy coding! 💻🔥
