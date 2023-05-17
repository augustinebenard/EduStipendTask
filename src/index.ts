import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import endpoint from "./route/route";


const app = express();

var cors = require('cors');

var allowedOrigins = [
    'http://localhost:4200'
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) {
            return callback(null, true);
        }
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },

    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    credentials: true,

}));

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// routes
app.use(endpoint);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });


