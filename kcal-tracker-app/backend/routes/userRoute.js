const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/userModel');

const jwt = require('jsonwebtoken');

require('dotenv').config();

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    }
    );
};

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/signin', async (req, res) => {
    const userSignIn = await User.findOne({
        username: req.body.username,
    });
    if(userSignIn == null){
        return res.status(400).send('Invalid username or password')
    }
    try{
        if (await bcrypt.compare(req.body.password, userSignIn.password)) {
            res.send({
                _id: userSignIn.id,
                username: userSignIn.username,
                email: userSignIn.email,
                isAdmin: userSignIn.isAdmin,
                token: getToken(userSignIn),
              });
        } else {
            res.status(401).send({ message: 'Invalid Password.' });
        }
    }catch{
        res.status(500).send();
    }
})

router.post('/add', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User ({ username: req.body.username, email: req.body.email, password: hashedPassword });

    newUser.save()
        .then(res.send({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser),
        }))
        .catch(err => res.status(400).json('Error: ' + err));




    /*
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const newUser = new User({username, email, password});
    
        newUser.save()
            .then(res.send({
                _id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: getToken(newUser),
            }))
            .catch(err => res.status(400).json('Error: ' + err));*/
});
/*
router.delete('/delete/:id',(req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=> res.json("User deleted"))
        .catch(err => res.status(400).json('Error: ' + err))
})
*/
router.get('/logged_in', async (req, res) => {
    User.findById(req.params.id)
        .then(()=> res.json("User logged in"))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.post('/addadmin', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newAdmin = new User({
        username: 'danbogdan',
        email: 'bogdancernea98@yahoo.com',
        password: hashedPassword,
        isAdmin: true
    });

    newAdmin.save()
        .then(() => res.json('Admin created'))
        .catch(err => res.status(400).json('Error: ' + err));

})
module.exports = router;