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
  character_user INT NOT NULL REFERENCES users(user_id)
);

-- attribute table includes the big 6 attributes
CREATE TABLE attribute (
  attribute_id SERIAL PRIMARY KEY,
  attribute_character INT NOT NULL REFERENCES character(character_id),
  strength INT NOT NULL DEFAULT 3,
  dexterity INT NOT NULL DEFAULT 3,
  constitution INT NOT NULL DEFAULT 3,
  intelligence INT NOT NULL DEFAULT 3,
  wisdom INT NOT NULL DEFAULT 3,
  charisma INT NOT NULL DEFAULT 3
);

-- saving throws table includes saving throws form data
CREATE TABLE saving_throws (
  saving_id SERIAL PRIMARY KEY,
  saving_character INT NOT NULL REFERENCES character(character_id),
  saving_strength INT NOT NULL DEFAULT 0,
  saving_dexterity INT NOT NULL DEFAULT 0,
  saving_constitution INT NOT NULL DEFAULT 0,
  saving_intelligence INT NOT NULL DEFAULT 0,
  saving_wisdom INT NOT NULL DEFAULT 0,
  saving_charisma INT NOT NULL DEFAULT 0
);

-- skills includes the proficiency score character sheet data
CREATE TABLE skills (
  skills_id SERIAL PRIMARY KEY,
  skills_character INT NOT NULL REFERENCES character(character_id),
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
  skills_survival INT NOT NULL DEFAULT 0
);

-- stats table inclucdes the not otherwise classified section of inputs located at the
-- near-top, center of the character sheet (when using the decided upon sheet for this project)
CREATE TABLE stats (
  stats_id SERIAL PRIMARY KEY,
  stats_character INT NOT NULL REFERENCES character(character_id),
  stats_armor_class INT NOT NULL DEFAULT 10, -- needs to be Unarmored: 10 + DEX (unless your class has a feature), or "Armored: Specified Armor Entry + DEX (unless it's heavy)"; qutoed from character sheet
  stats_initiative INT NOT NULL DEFAULT 0, -- Calculated 1d20 + DEX (unless class has a feature)
  stats_speed INT NOT NULL DEFAULT 30,
  stats_hit_point_max INT NOT NULL DEFAULT 10,
  stats_hit_point_current INT NOT NULL DEFAULT 10,
  stats_hit_point_temporary INT NOT NULL DEFAULT 0,
  stats_total_dice_left INT NOT NULL DEFAULT 1,
  stats_hit_dice VARCHAR(3), -- e.g.: a druid's hit dice is d8
  stats_death_save_successes INT NOT NULL DEFAULT 0,
  stats_death_save_failures INT NOT NULL DEFAULT 0
);

CREATE TABLE personality_traits (
  personality_id SERIAL PRIMARY KEY,
  personality_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE ideals (
  ideals_id SERIAL PRIMARY KEY,
  ideals_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE bonds (
  bonds_id SERIAL PRIMARY KEY,
  bonds_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE flaws (
  flaws_id SERIAL PRIMARY KEY,
  flaws_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE attacks_spellcasting (
  att_spell_id SERIAL PRIMARY KEY,
  att_spell_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE features_traits (
  features_id SERIAL PRIMARY KEY,
  features_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE equipment (
  equipment_id SERIAL PRIMARY KEY,
  equipment_character INT NOT NULL REFERENCES character(character_id)
);

CREATE TABLE other (
  other_id SERIAL PRIMARY KEY,
  other_character INT NOT NULL REFERENCES character(character_id)
);