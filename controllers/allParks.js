const router = require('express').Router();
const allParks = require('../db').import('../models/allparks');

router.get('/allparks', (req,res)=>{
    allParks.findAll()
    .then(allparks => res.status(200).json(allparks))
    .catch(err=> res.status(500).json({
        error:err
    }))
})

router.post('/allparks',(req,res)=>{
    const allParksRequest={
        Name: req.body.Name,
        Location: req.body.Location,
        Hours: req.body.Hours,
        Comments: req.body.Comments
    }
    console.log(req);
    
    allParks.create(allParksRequest)
    .then(allparks => res.status(200).json(allparks))
    .catch(err=>res.json({
        error:err
    }))
})
router.delete('/allparks/:id',(req,res)=>{
    allParks.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(allparks=>res.status(200).json(allparks))
    .catch(err => res.json({
        error:err
    }))
})

module.exports = router;