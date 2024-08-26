const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/getAllTopics', topicController.getAllTopics);
router.get('/getTopicById/:id', topicController.getTopicById);
router.get('/getRandomTwelveTopics', topicController.getRandomTwelveTopics);
router.post('/createTopic', topicController.createTopic);
router.put('/updateTopic/:id', topicController.updateTopic);
router.delete('/deleteTopic/:id', topicController.deleteTopic);

module.exports = router;
