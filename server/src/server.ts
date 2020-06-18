import express from 'express'

const app = express()

app.get('/test', (req, res) => {

    res.json({msg: 'Hello woooorld'})
})

app.listen(3333)