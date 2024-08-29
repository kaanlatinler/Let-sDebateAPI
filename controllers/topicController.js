const Topics = require('../models/Topics');

exports.getAllTopics = async (req, res, next) => {
    try {
        const topics = await Topics.findAll();
        res.status(200).json({topics, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false});
    }
};

exports.getTopicById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found', success: false });
        }
        res.status(200).json({topic, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.createTopic = async (req, res, next) => {
    try {
        const { TopicTitle, TopicDesc } = req.body;
        const topic = await Topics.create({ TopicTitle, TopicDesc });
        res.status(201).json({topic, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.updateTopic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { TopicTitle, TopicDesc } = req.body;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found', success: false });
        }
        topic.TopicTitle = TopicTitle;
        topic.TopicDesc = TopicDesc;
        await topic.save();
        res.status(200).json({topic, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.deleteTopic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found', success: false });
        }
        await topic.destroy();
        res.status(204).json({success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

// ----------------- Custom Functions -----------------

exports.getRandomTwelveTopics = async (req, res, next) => {
    try {
        const topics = await Topics.findAll();
        const randomTopics = topics.sort(() => 0.5 - Math.random()).slice(0, 12);
        res.status(200).json({randomTopics, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};