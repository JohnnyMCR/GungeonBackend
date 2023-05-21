const express = require("express");
const weapons = express.Router();
const { getAllWeapons, getAWeapon, createWeapon, deleteWeapon, updateWeapon } = require("../queries/weapons.js");

//Index Route
weapons.get("/", async (req, res) => {
    const allWeapons = await getAllWeapons()
    if (allWeapons) {
        return res.status(202).json(allWeapons);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//Show Route
weapons.get('/:id', async (req, res) => {
    const { id } = req.params;
    const weapon = await getAWeapon(id)
    if (weapon) {
        return res.status(202).json(weapon);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

//Create Route
weapons.post("/", async (req, res) => {
    const newWeapon = req.body;
    try {
        const addedWeapon = await createWeapon(newWeapon)
        res.status(200).json(addedWeapon)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//Delete Route
weapons.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWeapon = await deleteWeapon(id)
        res.status(200).json(deletedWeapon)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//Update Route
weapons.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedWeapon = await updateWeapon(id, body)
        res.status(200).json(updatedWeapon)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

module.exports = weapons;