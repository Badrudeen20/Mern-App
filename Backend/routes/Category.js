const express = require('express')
const route = express.Router()

const bollywoodController = require('../controllers/bollywood/Bollywood')
const hollywoodController = require('../controllers/hollywood/Hollywood')
const animationController = require('../controllers/animation/Animation')




const horrorController = require('../controllers/genre/Horror')
const actionController = require('../controllers/genre/Action')
const fictionController = require('../controllers/genre/Fiction')


const teluguController = require('../controllers/Telugu')
const webseriesController = require('../controllers/Webseries')
const punjabiController = require('../controllers/Punjabi')
const southController = require('../controllers/South')
const dualaudioController = require('../controllers/DualAudio')
const pakistaniController = require('../controllers/Pakistani')
const movie300Controller = require('../controllers/Movie300')
//const movie300Controller = require('../controllers/Movie300')




route.get('/bollywood',bollywoodController.bollywood) 
route.get('/telugu',teluguController.telugu) 
route.get('/webseries',webseriesController.webseries) 
route.get('/hollywood',hollywoodController.hollywood) 
route.get('/animation',animationController.animation) 



route.get('/horror',horrorController.genre) 
route.get('/action',actionController.genre) 
route.get('/fiction',fictionController.genre) 


 
route.get('/punjabi',punjabiController.punjabi) 
route.get('/south',southController.south) 
route.get('/dualaudio',dualaudioController.dualaudio) 
route.get('/pakistani',pakistaniController.pakistani)
route.get('/movie300',movie300Controller.movie300)
module.exports = route