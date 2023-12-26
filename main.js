/*fetch('orgs.json')
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
*/
//PART ONE OLD CODE
/*
  fetch('orgs.json')
  .then(response => response.json())
  .then(data => {
    const organizations = data; // Assuming the parsed data is an array
    organizations.forEach(organization => {
      console.log(organization.name);
      console.log(organization.description);
      // ...
    });
  })
  .catch(error => {
    // ...
  });
*/

/*
const orgList = document.getElementById('orgList');

orgs.forEach(orgs => {
    const orgItem = document.createElement('li');
    orgItem.innerHTML = `
      <h3>${orgs.name}</h3>
      <p>${orgs.description}</p>
    `;
    orgList.appendChild(orgItem);
});
*/
//PART TWO OLD CODE
/*const orgsList = document.getElementById('orgList');

organizations.forEach(organization => {
    const orgItem = document.createElement('li');
    orgItem.innerHTML = `
      <h3>${organization.name}</h3>
      <p>${organization.description}</p>
      <a href="${organization.website}">Visit Website</a>
    `;
    orgList.appendChild(orgItem);
  });
*/

fetch('orgs.json')
  .then(response => response.json())
  .then(data => {
    const orgData = data;

    const orgList = document.getElementById('orgList');

    organizations.forEach(organization => {
      const orgItem = document.createElement('li');
      orgItem.innerHTML = `
        <h3>${organization.name}</h3>
        <p>${organization.description}</p>
        <a href="${organization.website}">Visit Website</a>
      `;
      orgList.appendChild(orgItem);
    });
  })
  .catch(error => {
    // Handle errors
  });
