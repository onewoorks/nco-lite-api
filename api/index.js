let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');

  const createError = require('http-errors');
 
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
 

const refTeams = require('./routes/refteams.routes')
const aircraft = require('./routes/aircraft.routes')
const dailyReportSubmission = require('./routes/dailyReportSubmission.routes')
const reportSubmissionRoute = require('./routes/reportSubmission.routes')
const refRoutes = require('./routes/references.routes')
const autoCreateRoute = require('./routes/autocreate.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
 
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
 
 
// API root
// app.use('/api', bookRoute)
app.use('/api/ref-teams', refTeams);
app.use('/api/aircraft', aircraft)
app.use('/api/daily-report-submission', dailyReportSubmission)
app.use('/api/report/submission', reportSubmissionRoute)
app.use('/api/refs', refRoutes)
app.use('/api/autocreate', autoCreateRoute)

// PORT
const port = process.env.PORT || 8000;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});