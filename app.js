const express =require('express')
const hbs = require('hbs'); //HTML - Dinamicos
const bodyParser = require('body-parser')//Body - Post
const port = process.env.PORT || 3000;  //Puerto de ejecucion 

const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/view/partials',()=>{})

//use - Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.post('/dashboard', (req,res)=>{
    res.render('dashboard')
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('*', (req,res)=>{
    //res.send('Aqui va el 404 por GET')
    res.render('404', {
        nombre:"Jose Luis",
        edad: "27"
    })
})

app.listen(port,()=>{
    console.log('Servidor en express corriendo en el puerto: ', port)
})