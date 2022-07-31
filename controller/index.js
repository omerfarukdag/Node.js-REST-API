const Database = require('../model');

const getAll = (req, res) => {
    Database.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
}

const getById = (req, res) => {
    Database.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(data);
        }
    });
}

const post = (req, res) => {
    new Database(req.body).save((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
}

const updateById = (req, res) => {
    Database.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Successfully updated' });
        }
    });
}

const deleteById = (req, res) => {
    Database.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Successfully deleted' });
        }
    });
}

module.exports = {
    getAll,
    getById,
    post,
    updateById,
    deleteById
}