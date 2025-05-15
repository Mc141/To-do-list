const express = require('express');
const router = express.Router();
const toDoItem = require('../models/toDoItem');
const mongoose = require('mongoose');




router.get("/to-do-list", async (req, res) => {
    try {
        const items = await toDoItem.find({}, 'title description');
        console.log("Successfuly retrieved items!");
        res.status(200).render('pages/to-do-list', { items });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error retrieving items");
    }
});





// router.post("/to-do-list", async (req, res) => {
//   try {
//     const item = new toDoItem({
//       title: "Hello Title",
//       description: "Hello Description"
//     });

//     await item.save();
//     console.log("Item added");

//     res.render('pages/to-do-list');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving item');
//   }
// });








module.exports = router;