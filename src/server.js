const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const router = require('./routers/routes')

app.use(router)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname, + '/public'));
app.use(express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({extended: false}))





app.listen(7000, console.log(7000, 'Nima qilamiz'))
