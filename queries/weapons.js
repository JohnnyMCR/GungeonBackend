const db = require('../db/dbConfig');

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
    } catch (error) {
        return error;
    }
};

const getASnack = async (id) => {
    try {
        const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
        return oneSnack;
    } catch (error) {
        return error;
    }
};

const createSnack = async (snackToAdd) => {
    try {
        const newSnack = await db.one("INSERT INTO snacks (name, type, sugar, protein, fiber, sodium, calories, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [snackToAdd.name, snackToAdd.type, snackToAdd.sugar, snackToAdd.protein, snackToAdd.fiber, snackToAdd.sodium, snackToAdd.calories, snackToAdd.img]);
        return newSnack;
    } catch (error) {
        return error;
    }
};

const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one('DELETE FROM snacks WHERE id=$1 RETURNING *', id)
        return deletedSnack;
    } catch (error) {
        return error;
    };
};

const updateSnack = async (id, snack) => {
    try {
        const updatedSnack = await db.one('UPDATE snacks SET name=$1, type=$2, sugar=$3, protein=$4, fiber=$5, sodium=$6, calories=$7, img=$8 WHERE id=$9 RETURNING *', [snack.name, snack.type, snack.sugar, snack.protein, snack.fiber, snack.sodium, snack.calories, snack.img, id])
        return updatedSnack
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllWeapons,
    getAWeapon,
    createWeapon,
    deleteWeapon,
    updateWeapon
}