const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const logger = require('./middleware/logger')
// const router = require('./routes/api/members')
const app = express();

// Hanldebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'mail'
}));
app.set('view engine', 'handlebars')

// Init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API route
app.use('/api/members/', require('./routes/api/members'))
// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));