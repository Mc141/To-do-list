const express = require('express');
const router = express.Router();
const toDoItem = require('../models/toDoItem');
const mongoose = require('mongoose');



router.get("/", async (req, res) => {
    try {
        const items = await toDoItem.find({}, 'title description');
        console.log("Successfuly retrieved items!");
        res.status(200).render('pages/to-do-list', { items });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error retrieving items.");
    }
});



router.get("/add", async (req, res) => {
    try {
        const item = new toDoItem({
            title: req.body.title,
            description: req.body.description
        });
        await item.save();
        console.log("Item added successfully!");
        res.status(200).redirect("/");
    } catch (error) {
       console.log("Error: ", error);
       res.status(500).send("Error adding item.");
    }
});



router.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const item = await toDoItem.findById(id);
        item.title = req.body.title;
        item.description = req.body.description;
        await item.save();
        res.status(200).redirect('/');
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).redirect('/');
    }
});




router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const item = await toDoItem.findById(id);
        item.title = req.body.title;
        item.description = req.body.description;
        await item.save();
        res.status(200).redirect('/');
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).redirect('/');
    }
});







module.exports = router;