const Topics = require('../models/Topics');

exports.getAllTopics = async (req, res, next) => {
    try {
        const topics = await Topics.findAll();
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTopicById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTopic = async (req, res, next) => {
    try {
        const { TopicTitle, TopicDesc } = req.body;
        const topic = await Topics.create({ TopicTitle, TopicDesc });
        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTopic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { TopicTitle, TopicDesc } = req.body;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        topic.TopicTitle = TopicTitle;
        topic.TopicDesc = TopicDesc;
        await topic.save();
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTopic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const topic = await Topics.findByPk(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        await topic.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getRandomTenTopics = async (req, res, next) => {
    try {
        const topics = await Topics.findAll();
        const randomTopics = topics.sort(() => 0.5 - Math.random()).slice(0, 10);
        res.status(200).json(randomTopics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};