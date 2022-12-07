const express = require("express")
const colors = require("colors")
const path = require("path")
const dotenv = require("dotenv")
const {readdirSync} = require("fs")
const connectDB = require("./database/db.js")


const app = express()

dotenv.config()
const PORT = 5000 || process.env.PORT
const dirname = path.resolve()
app.use(express.json())
// connectDB()

readdirSync("./routes").map((r)=>app.use("/api", require(`./routes/${r}`)))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '/../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(dirname, "..", 'frontend', 'build', 'index.html')))

} else app.get('/', (req, res) => {res.send('API is running....')})


app.listen(PORT, console.log(`Server is listening in ${process.env.NODE_ENV} environment on port ${PORT}!!`.rainbow))



