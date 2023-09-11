const express = require('express')
const mongoose = require('mongoose')
const product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routers

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/blog', (req, res) => {
    res.send('hello blog, My name is William')
})

app.post('/products', async(req, res) => {
    try {
        const products = await products.create(req.body)
        res.status(200).json(products);
    
    } catch (error) {
        console.log(error.massage)
        res.status(500).json({error: error.message})
    }
})


app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params
        const products = await products.findbyId(id)
        res.status(200).json(product);
    
    } catch (error) {
        console.log(error.massage)
        res.status(500).json({error: error.message})
    }
})

app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params
        const products = await products.findByIdAndUpdate(id, req.body)
        if(!products) 
        return res.status(404).json({message: 'Product not found whit this id ${id}'})

        const Update = await product.findByIdAndUpdate(id, req.body)
        res.status(200).json(products);
    
    } catch (error) {
        console.log(error.massage)
        res.status(500).json({error: error.message})
    }
})


app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params
        const products = await products.findByIdAndDelete(id)
        if(!products) 
        return res.status(404).json({message: 'Product not found whit this id ${id}'})

        res.status(200).json(products);        
    
    } catch (error) {
        console.log(error.massage)
        res.status(500).json({error: error.message})
    }
})


mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://widasaba1988:zFLZyFw0bcuMaAOw@apiclientes.akpgswc.mongodb.net/API_CLIENTES?retryWrites=true&w=majority').then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('app listening on port 3000!')
    });
}).catch((error) => {
    console.log('error connecting to MongoDB')
})