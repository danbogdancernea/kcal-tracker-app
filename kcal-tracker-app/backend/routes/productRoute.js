const router = require('express').Router();
let Product = require('../models/productModel');

router.get('/',(req,res)=>{
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/addproduct',(req,res)=>{
    const name = req.body.name;
    const weight = req.body.weight;
    const kcal = Number(req.body.kcal);
    const protein = Number(req.body.protein);
    const fats = Number(req.body.fats);
    const carbs = Number(req.body.carbs);

    const newProduct = new Product({
        name, weight, kcal, protein, fats, carbs
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.get('/:id',(req,res)=>{
    Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
        .then(()=> res.json("Product deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id',(req,res)=>{
    Product.findById(req.params.id)
        .then(product =>{
            product.name = req.body.name;
            product.weight = Number(req.body.weight);
            product.kcal = Number(req.body.kcal);
            product.protein = Number(req.body.protein);
            product.fats = Number(req.body.fats);
            product.carbs = Number(req.body.carbs);

            product.save()
                .then(() => res.json('Product updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
});

module.exports = router;