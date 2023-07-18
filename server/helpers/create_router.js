const express = require('express');
const { ObjectID } = require('mongodb'); // import statement needed to be updated for version 3+ of mongo

const createRouter = function (collection) {

    const router = express.Router();

    // show all programmes
    router.get('/', (req, res) => {
    collection
        .find()  // retrieves all documents from the MongoDB collection
        .toArray() // converts result into an array of documenst
        .then((docs) => res.json(docs)) //it responds to the client with a JSON representation of the documents
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });



    // show one programme by its id
    router.get('/:id', (req, res) => {
        const id  = req.params.id;
        collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    return router;

};

module.exports = createRouter;