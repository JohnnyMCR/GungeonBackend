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
        const newWeapon = await db.one("INSERT INTO weapons (name, notes, quote, quality, type, dps, class, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [weaponToAdd.name, weaponToAdd.notes, weaponToAdd.quote, weaponToAdd.quality, weaponToAdd.type, weaponToAdd.dps, weaponToAdd.class, weaponToAdd.img]);
        return newWeapon;
    } catch (error) {
        return error;
    }
};

const deleteWeapon = async (id) => {
    try {
        const deletedWeapon = await db.one('DELETE FROM weapons WHERE id=$1 RETURNING *', id)
        return deletedWeapon;
    } catch (error) {
        return error;
    };
};

const updateWeapon = async (id, weapon) => {
    try {
        const updatedWeapon = await db.one('UPDATE weapons SET name=$1, notes=$2, quote=$3, quality=$4, type=$5, dps=$6, class=$7, img=$8 WHERE id=$9 RETURNING *', [weapon.name, weapon.notes, weapon.quote, weapon.quality, weapon.type, weapon.dps, weapon.class, weapon.img, id])
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