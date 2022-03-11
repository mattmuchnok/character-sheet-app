const sendSheet = () => {
  const characterSheet = {
    characterName: document.getElementById('character-name').value,
    characterClass: document.getElementById('character-class').value,
    experiencePoints: document.getElementById('experience-points').value
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