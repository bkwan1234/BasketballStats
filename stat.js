// Player data
const playersData = [
    { id: 1, name: 'Destin Logan', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 2, name: 'Paxton Warden', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 3, name: 'Ryan Renfro', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 4, name: 'Jaylin Gibson', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 5, name: 'Cale Cosme', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 6, name: 'Anthony Sydnor', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 7, name: 'Anthony Sayles', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 8, name: 'Amir Whitlock', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 9, name: 'Marieon Anderson', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 10, name: 'Carson Brownfield', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 11, name: 'Jabe Haith', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 12, name: 'Rob Stroud', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 13, name: 'Cem Kirciman', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 14, name: 'Devon Vanderheydt', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 15, name: 'Amir Gates', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 16, name: 'Austin Kulig', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 17, name: 'Mac Hagemaster', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
    { id: 18, name: 'Bartosz Kaputska', paintTouches: 0, offensiveRebounds: 0, defensiveRebounds: 0, turnovers: 0 },
  ];
  
  // Generate UI
  const container = document.getElementById('players-container');
  
  // Function to create player cards
  function createPlayerCard(player) {
    const playerCard = document.createElement('div');
    playerCard.className = 'player';
  
    playerCard.innerHTML = `
      <h2>${player.name}</h2>
      <div class="stat">Paint Touches: <span id="paintTouches-${player.id}">${player.paintTouches}</span></div>
      <button onclick="incrementStat(${player.id}, 'paintTouches')">+ Paint Touch</button>
  
      <div class="stat">Offensive Rebounds: <span id="offensiveRebounds-${player.id}">${player.offensiveRebounds}</span></div>
      <button onclick="incrementStat(${player.id}, 'offensiveRebounds')">+ Offensive Rebound</button>
  
      <div class="stat">Defensive Rebounds: <span id="defensiveRebounds-${player.id}">${player.defensiveRebounds}</span></div>
      <button onclick="incrementStat(${player.id}, 'defensiveRebounds')">+ Defensive Rebound</button>
  
      <div class="stat">Turnovers: <span id="turnovers-${player.id}">${player.turnovers}</span></div>
      <button onclick="incrementStat(${player.id}, 'turnovers')">+ Turnover</button>

    `;
  
    container.appendChild(playerCard);
  }
  
  // Create cards for each player
  playersData.forEach(createPlayerCard);
  
  // Increment stats
  function incrementStat(playerId, statName) {
    const player = playersData.find(p => p.id === playerId);
    if (player) {
      player[statName]++;
      document.getElementById(`${statName}-${player.id}`).textContent = player[statName];
    }
  }
  
