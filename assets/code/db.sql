-- standard user table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- character table includes general character information and the smaller, individually
-- displayed character stat inputs on the character sheet
CREATE TABLE character  (
  character_id SERIAL PRIMARY KEY,
  character_user INT REFERENCES users(user_id), -- eventually make NOT NULL
  character_name VARCHAR(30) NOT NULL,
  class VARCHAR(30) NOT NULL,
  level INT NOT NULL DEFAULT 1,
  background VARCHAR(30) NOT NULL,
  race VARCHAR(30) NOT NULL,
  alignment VARCHAR(30) NOT NULL,
  experience_points INT NOT NULL DEFAULT 100,
  inspiriation INT NOT NULL DEFAULT 0,
  proficiency_bonus INT NOT NULL DEFAULT 2,
  perception INT NOT NULL DEFAULT 10, -- this eventually needs to default to 10 + wisdom
  strength INT NOT NULL DEFAULT 3,
  dexterity INT NOT NULL DEFAULT 3,
  constitution INT NOT NULL DEFAULT 3,
  intelligence INT NOT NULL DEFAULT 3,
  wisdom INT NOT NULL DEFAULT 3,
  charisma INT NOT NULL DEFAULT 3,
  saving_strength INT NOT NULL DEFAULT 0,
  saving_dexterity INT NOT NULL DEFAULT 0,
  saving_constitution INT NOT NULL DEFAULT 0,
  saving_intelligence INT NOT NULL DEFAULT 0,
  saving_wisdom INT NOT NULL DEFAULT 0,
  saving_charisma INT NOT NULL DEFAULT 0,
  skills_acrobatics INT NOT NULL DEFAULT 0,
  skills_animal_handling INT NOT NULL DEFAULT 0,
  skills_arcana INT NOT NULL DEFAULT 0,
  skills_athletics INT NOT NULL DEFAULT 0,
  skills_deception INT NOT NULL DEFAULT 0,
  skills_history INT NOT NULL DEFAULT 0,
  skills_insight INT NOT NULL DEFAULT 0,
  skills_intimidation INT NOT NULL DEFAULT 0,
  skills_investigataion INT NOT NULL DEFAULT 0,
  skills_medicine INT NOT NULL DEFAULT 0,
  skills_nature INT NOT NULL DEFAULT 0,
  skills_perception INT NOT NULL DEFAULT 0,
  skills_performance INT NOT NULL DEFAULT 0,
  skills_persuasion INT NOT NULL DEFAULT 0,
  skills_religion INT NOT NULL DEFAULT 0,
  skills_sleight_of_hand INT NOT NULL DEFAULT 0,
  skills_stealth INT NOT NULL DEFAULT 0,
  skills_survival INT NOT NULL DEFAULT 0,
  stats_armor_class INT NOT NULL DEFAULT 10, -- needs to be Unarmored: 10 + DEX (unless your class has a feature), or "Armored: Specified Armor Entry + DEX (unless it's heavy)"; qutoed from character sheet
  stats_initiative INT NOT NULL DEFAULT 0, -- Calculated 1d20 + DEX (unless class has a feature)
  stats_speed INT NOT NULL DEFAULT 30,
  stats_hit_point_max INT NOT NULL DEFAULT 10,
  stats_hit_point_current INT NOT NULL DEFAULT 10,
  stats_hit_point_temporary INT NOT NULL DEFAULT 0,
  stats_total_dice_left INT NOT NULL DEFAULT 1,
  stats_hit_dice VARCHAR(3), -- e.g.: a druid's hit dice is d8
  stats_death_save_successes INT NOT NULL DEFAULT 0,
  stats_death_save_failures INT NOT NULL DEFAULT 0,
  personality_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  ideals_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  bonds_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  flaws_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  att_spell_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  features_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  equipment_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here',
  other_box VARCHAR(250) NOT NULL DEFAULT 'Enter Here'
);