const Subscribers = require('../models/subscriberModel');

exports.addsubscriber = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const newsubscriber = new Subscribers({ name, email });
    await newsubscriber.save();
    res.status(201).json({ message: 'Subscriber added', subscriber: newsubscriber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message || error });
  }
};

exports.getAllsubscriber = async (req, res) => {
  try {
    const subscriber = await Subscribers.find();
    res.status(200).json(subscriber);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
