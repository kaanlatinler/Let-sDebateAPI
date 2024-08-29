const express = require('express');
const router = express.Router();
const topicController = require('../../controllers/crud/topicController');
const authenticateToken = require('../../middleware/authMiddleware'); 

router.get('/getAllTopics', authenticateToken, topicController.getAllTopics);
router.get('/getTopicById/:id', authenticateToken, topicController.getTopicById);
router.get('/getRandomTwelveTopics', authenticateToken, topicController.getRandomTwelveTopics);
router.post('/createTopic', authenticateToken, topicController.createTopic);
router.put('/updateTopic/:id', authenticateToken, topicController.updateTopic);
router.delete('/deleteTopic/:id', authenticateToken, topicController.deleteTopic);

module.exports = router;