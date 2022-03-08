const sendSheet = () => {
  const characterSheet = {
    characterName: document.getElementById('character-name').value,
    characterClass: document.getElementById('character-class').value,
    experiencePoints: document.getElementById('experience-points').value
  }

  axios.post('http://localhost:8765/character', characterSheet)
}

