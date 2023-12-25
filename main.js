fetch('orgs.json')
  .then(response => response.json())
  .then(data => {
    const orgs = data; // Assuming the parsed data is an array
    orgs.forEach(orgs => {
      console.log(orgs.name);
      console.log(orgs.description);
    // Process the JSON data here
    })
  })
  .catch(error => {
    // Handle any errors during fetching or parsing
  });

const orgList = document.getElementById('orgList');

orgs.forEach(orgs => {
    const orgItem = document.createElement('li');
    orgItem.innerHTML = `
      <h3>${orgs.name}</h3>
      <p>${orgs.description}</p>
    `;
    orgList.appendChild(orgItem);
});