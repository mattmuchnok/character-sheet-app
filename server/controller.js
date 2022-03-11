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
      INSERT INTO character (character_user, character_name, class, level, background, race, alignment, experience_points, inspiriation, proficiency_bonus, perception, strength, dexterity, constitution, intelligence, wisdom, charisma, saving_strength, saving_dexterity, saving_constitution, saving_intelligence, saving_wisdom, saving_charisma, skills_acrobatics, skills_animal_handling, skills_arcana, skills_athletics, skills_deception, skills_history, skills_insight, skills_intimidation, skills_investigataion, skills_medicine, skills_nature, skills_perception, skills_performance, skills_persuasion, skills_religion, skills_sleight_of_hand, skills_stealth, skills_survival, stats_armor_class, stats_initiative, stats_speed, stats_hit_point_max, stats_hit_point_current, stats_hit_point_temporary, stats_total_dice_left, stats_hit_dice, stats_death_save_successes, stats_death_save_failures, personality_box, ideals_box, bonds_box, flaws_box, att_spell_box, features_box, equipment_box, other_box)
      VALUES (1,
       '${req.body.characterName}',
       '${req.body.characterClass}', 
       ${req.body.level}, 
       '${req.body.characterBackground}', 
       '${req.body.race}', 
       '${req.body.alignment}', 
       ${req.body.experiencePoints},
       ${req.body.inspiration},
       ${req.body.proficiencyBonus},
       ${req.body.perception},
       ${req.body.strength},
       ${req.body.dexterity},
       ${req.body.constitution},
       ${req.body.intelligence},
       ${req.body.wisdom},
       ${req.body.charisma},
       ${req.body.savingStrength},
       ${req.body.savingDexterity},
       ${req.body.savingConstitution},
       ${req.body.savingIntelligence},
       ${req.body.savingWisdom},
       ${req.body.savingCharisma},
       ${req.body.skillAcrobatics},
       ${req.body.skillAnimalHandling},
       ${req.body.skillArcana},
       ${req.body.skillAthletics},
       ${req.body.skillDeception},
       ${req.body.skillHistory},
       ${req.body.skillInsight},
       ${req.body.skillIntimidation},
       ${req.body.skillInvestigation},
       ${req.body.skillMedicine},
       ${req.body.skillNature},
       ${req.body.skillPerception},
       ${req.body.skillPerformance},
       ${req.body.skillPersuasion},
       ${req.body.skillReligion},
       ${req.body.skillSleightOfHand},
       ${req.body.skillStealth},
       ${req.body.skillSurvival},
       ${req.body.armorClass},
       ${req.body.initiative},
       ${req.body.speed},
       ${req.body.hitPointMax},
       ${req.body.hitPointCurrent},
       ${req.body.hitPointTemporary},
       ${req.body.totalDiceLeft},
       '${req.body.hitDice}',
       ${req.body.deathSaveSuccesses},
       ${req.body.deathSaveFailures},
       '${req.body.personalityBox}',
       '${req.body.idealsBox}',
       '${req.body.bondsBox}',
       '${req.body.flawsBox}',
       '${req.body.attSpellBox}',
       '${req.body.featuresBox}',
       '${req.body.equipmentBox}',
       '${req.body.otherBox}'
      );
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