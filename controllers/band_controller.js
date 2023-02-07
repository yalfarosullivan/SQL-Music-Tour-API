const band = require('express').Router()
const db = require('../models')
const { Band } = db
const { Op } = require('sequelize')

// GET ALL BANDS
band.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [[ 'available_start_time', 'ASC' ]],
            where: {
                name: { [Op.like]: `%${req.query.name || ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// GET ONE BAND BY ID
band.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// CREATE NEW BAND
band.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Band created successfully',
            data: newBand
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// UPDATE A BAND BY ID
band.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: { band_id: req.params.id }
        })
        res.status(200).json({
            message: `Band ${req.params.id} updated successfully`
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// DELETE A BAND BY ID
band.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: { band_id: req.params.id }
        })
        res.status(200).json({
            message: `Band ${req.params.id} deleted successfully`
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = band