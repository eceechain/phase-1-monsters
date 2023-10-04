//Dom creating elements.
    const monsterContainer = document.querySelector('#monster-container');
    const createMonsterForm = document.querySelector('#create-monster-form');
    const createMonsterBtn = document.querySelector('#create-monster-btn');
    const backButton = document.querySelector('#back');
    const forwardButton = document.querySelector('#forward');
    let page = 1;
  
    // Function to fetch monsters from the API
    function fetchMonsters(page) {
      fetch(`http://localhost:7000/monsters?page=${page}&limit=50`)
        .then(response => response.json())
        .then(monsters => {
          monsters.forEach(monster => {
            const monsterCard = document.createElement('div');
            monsterCard.className = 'monster-card';
            monsterCard.innerHTML = `<h3>${monster.name}</h3><p>Age: ${monster.age}</p><p>Description: ${monster.description}</p>`;
            monsterContainer.appendChild(monsterCard);
          });
        });
    }
  
    // Function to handle form submission
    createMonsterForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const description = document.getElementById('description').value;
  
      // Send data to the API and handle the response
  
      // Clear the form fields after submission
      createMonsterForm.reset();
    });
  
    // Event listeners for navigation buttons
    backButton.addEventListener('click', () => {
      if (page > 1) {
        page--;
        monsterContainer.innerHTML = ''; // Clear existing monsters
        fetchMonsters(page);
      }
    });
  
    forwardButton.addEventListener('click', () => {
      page++;
      monsterContainer.innerHTML = ''; // Clear existing monsters
      fetchMonsters(page);
    });
  
    // Initial fetch of monsters when the page loads
    fetchMonsters(page);

  