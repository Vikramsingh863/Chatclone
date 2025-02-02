import express from 'express'

import mongoose from 'mongoose'
import route from './routes/Routes.js'
import cors from "cors"
import dotenv from 'dotenv'
const app = express()
dotenv.config();
const PORT = 5500||process.env.PORT
const MONGOID = process.env.MONGOID
const MONGOPASS = process.env.MONGOPASS
const allowedOrigins = [
  'https://chatclone-one.vercel.app',
  'https://chatclone-one.vercel.app/',
  'https://chatclone-one.vercel.app/:1'
];
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is in the allowedOrigins array
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  credentials: true, // Allow credentials (cookies, etc.)
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
// app.options('*', cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', route)
const URL = process.env.URL
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then((res)=>{
    app.listen(PORT,()=>console.log("server is running at port no", PORT) )
})
.catch((error)=>console.log("Error while connecting", error))





// import express from 'express'
// import mongoose from 'mongoose'
// import route from './routes/Routes.js'
// import cors from "cors"
// import dotenv from 'dotenv'
// const app = express()
// dotenv.config();
// const PORT = 5500||process.env.PORT
// const MongoDB = process.env.MONGODB
// app.use(cors('http://localhost:3000/'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
// app.use('/', route)

// mongoose.connect(`mongodb+srv://vikramsinghmertiya863:Mertiya0564@cluster0.13njzdi.mongodb.net/Chatapp?retryWrites=true&w=majority&appName=Cluster0`,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then((res)=>{
//     app.listen(PORT,()=>console.log("server is running at port no", PORT) )
// })
// .catch((error)=>console.log("Error while connecting", error))