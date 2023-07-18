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



    // create new programme and post back to db
    router.post('/', (req,res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    })



    // delete a programme by id
    router.delete('/:id', (req, res) => {
        const id  = req.params.id;
        collection
        .deleteOne({ _id: ObjectID(id) })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    })


    // update a programme
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne(
            { _id: ObjectID(id) },
            { $set: updatedData },
        )
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });


    return router;

};

module.exports = createRouter;