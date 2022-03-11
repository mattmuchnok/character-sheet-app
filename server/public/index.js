const sendSheet = () => {
  const characterSheet = {
    characterName: document.getElementById('character-name').value,
    characterClass: document.getElementById('character-class').value,
    level: document.getElementById('level').value,
    characterBackground: document.getElementById('character-background').value,
    race: document.getElementById('race').value,
    alignment: document.getElementById('alignment').value,
    experiencePoints: document.getElementById('experience-points').value,
    inspiration: document.getElementById('inspiration').value,
    proficiencyBonus: document.getElementById('proficiency-bonus').value,
    perception: document.getElementById('perception').value,
    strength: document.getElementById('strength').value,
    dexterity: document.getElementById('dexterity').value,
    constitution: document.getElementById('constitution').value,
    intelligence: document.getElementById('intelligence').value,
    wisdom: document.getElementById('wisdom').value,
    charisma: document.getElementById('charisma').value,
    savingStrength: document.getElementById('saving-strength').value,
    savingDexterity: document.getElementById('saving-dexterity').value,
    savingConstitution: document.getElementById('saving-constitution').value,
    savingIntelligence: document.getElementById('saving-intelligence').value,
    savingWisdom: document.getElementById('saving-wisdom').value,
    savingCharisma: document.getElementById('saving-charisma').value,
    skillAcrobatics: document.getElementById('skill-acrobatics').value,
    skillAnimalHandling: document.getElementById('skill-animal-handling').value,
    skillArcana: document.getElementById('skill-arcana').value,
    skillAthletics: document.getElementById('skill-athletics').value,
    skillDeception: document.getElementById('skill-deception').value,
    skillHistory: document.getElementById('skill-history').value,
    skillInsight: document.getElementById('skill-insight').value,
    skillIntimidation: document.getElementById('skill-intimidation').value,
    skillInvestigation: document.getElementById('skill-investigation').value,
    skillMedicine: document.getElementById('skill-medicine').value,
    skillNature: document.getElementById('skill-nature').value,
    skillPerception: document.getElementById('skill-perception').value,
    skillPerformance: document.getElementById('skill-performance').value,
    skillPersuasion: document.getElementById('skill-persuasion').value,
    skillReligion: document.getElementById('skill-religion').value,
    skillSleightOfHand: document.getElementById('skill-sleight-of-hand').value,
    skillStealth: document.getElementById('skill-stealth').value,
    skillSurvival: document.getElementById('skill-survival').value,
    armorClass: document.getElementById('armor-class').value,
    initiative: document.getElementById('initiative').value,
    speed: document.getElementById('speed').value,
    hitPointMax: document.getElementById('hit-point-max').value,
    hitPointCurrent: document.getElementById('hit-point-current').value,
    hitPointTemporary: document.getElementById('hit-point-temporary').value,
    totalDiceLeft: document.getElementById('total-dice-left').value,
    hitDice: document.getElementById('hit-dice').value,
    deathSaveSuccesses: document.getElementById('death-save-successes').value,
    deathSaveFailures: document.getElementById('death-save-failures').value,
    personalityBox: document.getElementById('personality-box').value,
    idealsBox: document.getElementById('ideals-box').value,
    bondsBox: document.getElementById('bonds-box').value,
    flawsBox: document.getElementById('flaws-box').value,
    attSpellBox: document.getElementById('att-spell-box').value,
    featuresBox: document.getElementById('features-box').value,
    equipmentBox: document.getElementById('equipment-box').value,
    otherBox: document.getElementById('other-box').value
  }

  axios.post('/character', characterSheet)
}

const getSheet = () => {
  axios.get(`/character/${document.getElementById('lookup').value}`)
    .then(res => {
      console.log(res)
      const character = res.data

      document.getElementById('character-name').value = character.character_name
      document.getElementById('character-class').value = character.class
      document.getElementById('experience-points').value = character.experience_points
    })
}


// login:
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "matt" && password == "matt"){
// alert ("Login successfull!");
window.location = "sheet.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}