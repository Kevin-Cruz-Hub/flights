const express = require('express');
const jsxEngine = require('jsx-view-engine')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

const connectDB = require('./utils/connectDB')
const Flight = require('./models/flight')


const app = express();
const port = 3000;
// *=====================================================================
// App config
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
// *=====================================================================
// Middleware
app.use((req, res, next) => {
    console.log(`${req.url}\n${req.method}`)
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
// *=====================================================================
// Routes
// **Root
app.get('/', (req, res) => {
    res.send("Working")
})

// List of flights
app.get('/flights', async (req, res) => {
    try {
        const flightsFromDB = await Flight.find({}).sort({ departs: "asc" })
        res.render('List', { flights: flightsFromDB })
    } catch (e) {
        console.log(e)
    }
})

// Form to add a new flight
app.get('/flights/new', (req, res) => {
    res.render('New')
})

// redirect and add the users flight
app.post('/flights', async (req, res) => {
    try {
        const addFlight = await Flight.create(req.body)
        console.log(addFlight)
    } catch (e) {
        console.log(e)
    }
    res.redirect('/flights')
})

// Show
app.get('/flights/:id', async (req, res) => {
    const { id } = req.params
    try {
        const flight = await Flight.findById(id)
        res.render('Show', { flight: flight })
    } catch (e) {
        console.log(e)
    }
})

// Add Destinations
app.put('/api/flights/addflight/:id', async (req, res) => {
    const { id } = req.params
    try{
        const destination = await Flight.findById(id)
        console.log(destination)
        destination.destination.push(req.body)
        const updatedDestination = await Flight.findByIdAndUpdate(id, destination, {new: true})
        res.redirect(`/flights/${id}`)
    }catch(e){
        console.log(e)
    }
})
// *=====================================================================
// Connect to DB
connectDB()
// *=====================================================================
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})