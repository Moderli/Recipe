const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData'); // Import the model

const app = express();
app.use(express.json());
app.use(cors());

// Replace these placeholders with your actual MongoDB Atlas connection details
const uri = "Connection_String";
const username = "UserName";
const password = "Password"; //if you use any special letters like "@#%^&*&*!@#" you have to go to mongoDb compass and paste the connection string and you have to connect and then you have to copy the connection string from the compass

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error(err));

app.post('/register', (req, res) => {D
  const { email, password } = req.body;

  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        return res.json('Already registered');
      }

      const newFormData = new FormDataModel({ email, password });
      newFormData.save()
        .then(savedData => res.json(savedData)) // Send saved data back
        .catch(err => res.json({ error: err.message })); // Handle errors
    })
    .catch(err => res.json({ error: err.message })); // Handle errors
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  FormDataModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.json('No records found!');
      }

      if (user.password === password) {
        return res.json('Success');
      }

      res.json('Wrong password');
    })
    .catch(err => res.json({ error: err.message })); // Handle errors
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
