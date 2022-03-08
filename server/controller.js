const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
  createCharacter: (req, res) => {
    sequelize.query(`
      INSERT INTO character (character_name, class, experience_points)
      VALUES ('${req.body.characterName}', '${req.body.characterClass}', ${req.body.experiencePoints});
    `)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  },

  retrieveCharacter: (req, res) => {
    sequelize.query(`
      SELECT * FROM character WHERE character_id = ${req.params.id};
    `)
    .then(dbRes => {
      const results = dbRes[0]
      const character = results[0]
      res.status(200).send(character)
    })
    .catch(err => console.log(err))
  }
}