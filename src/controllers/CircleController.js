const {Circle} = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      const search = req.query.search
      if (search) {
        circle = await Circle.findAll({
          where: {
            [Op.or]: [
              'title','genre'
            ].map(key => ({
              [key]: {
                [Op.like]: [`%${search}%`]
              }
            }))
          }
        })
      } else {
        circle = await Circle.findAll({
          limit: 17
        })
      }
      res.send(circle)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const circle = await Circle.findByPk(req.params.circleId)
      res.send(circle)
    } catch (err) {
      res.status(500).send({
        error: 'サークル情報を取得することが出来ませんでした。'
      })
    }
  },
  async post (req, res) {
    try {
      const circle = await Circle.create(req.body)
      res.send(circle)
    } catch (err) {
      res.status(500).send({
        error: 'サークル情報を取得することが出来ませんでした。'
      })
    }
  },
  async put (req, res) {
    try {
      await Circle.update(req.body, {
        where: {
          id: req.params.circleId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}