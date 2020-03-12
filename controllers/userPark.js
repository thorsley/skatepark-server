const router = require('express').Router();
const userParks= require('../db').import('../models/userparks');

router.get('/parks', (req, res)=>{
    userParks.findAll()
    .then(parks => res.status(200).json(parks))
    .catch(err => res.status(500).json({
        error:err
    }))
})


router.post('/parks', (req,res)=>{
    const userParksRequest = {
        nameOfPark: req.body.nameOfPark,
        locationOfPark:req.body.locationOfPark,
        hoursOfPark:req.body.hoursOfPark,
        ratingOfPark:req.body.ratingOfPark,
        commentsOfPark: req.body.commentsOfPark
    }
    console.log(req);

    userParks.create(userParksRequest)
        .then(parks => res.status(200).json(parks))
        .catch(err => res.json({
            error:err
        }))
})

router.get('/parks/:name', (req,res) =>{
    userParks.findOne({
        where:{
            nameOfPark: req.params.name
        }
    })
    .then(parks => res.status(200).json(parks)
    .catch(err => res.status(500).json({
        error:err
    })))
    
    console.log(req.params);

})

router.put('/parks/:id', (req,res)=>{
    userParks.update(req.body,{
        where: {
            id: req.params.id
        }
    })
    .then(parks => res.status(200).json(parks))
    .catch(err => res.json(err))
})
router.delete('/parks/:id', (req,res)=>{
    userParks.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(parks => res.status(200).json(parks))
    .catch(err=> res.json({
        error: err
    }))
})



module.exports = router;