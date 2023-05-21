const db = require('../db/dbConfig');

const getAllWeapons = async () => {
    try {
        const allWeapons = await db.any("SELECT * FROM weapons");
        return allWeapons;
    } catch (error) {
        return error;
    }
};

const getAWeapon = async (id) => {
    try {
        const oneWeapon = await db.one("SELECT * FROM weapons WHERE id=$1", id);
        return oneWeapon;
    } catch (error) {
        return error;
    }
};

const createWeapon = async (weaponToAdd) => {
    try {
        const newWeapon = await db.one("INSERT INTO weapon (name, notes, quote, quality, type, DPS, class, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [weaponToAdd.name, weaponToAdd.type, weaponToAdd.sugar, weaponToAdd.protein, weaponToAdd.fiber, weaponToAdd.sodium, weaponToAdd.calories, weaponToAdd.img]);
        return newWeapon;
    } catch (error) {
        return error;
    }
};

const deleteWeapon = async (id) => {
    try {
        const deletedWeapon = await db.one('DELETE FROM weapon WHERE id=$1 RETURNING *', id)
        return deletedWeapon;
    } catch (error) {
        return error;
    };
};

const updateWeapon = async (id, weapon) => {
    try {
        const updatedWeapon = await db.one('UPDATE weapons SET name=$1, notes=$2, quote=$3, quality=$4, type=$5, DPS=$6, class=$7, img=$8 WHERE id=$9 RETURNING *', [weapon.name, weapon.type, weapon.sugar, weapon.protein, weapon.fiber, weapon.sodium, weapon.calories, weapon.img, id])
        return updatedWeapon
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