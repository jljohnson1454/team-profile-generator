// Multiple functions for exporting

// const generateTeam = (team) => {
//     console.log(team)
//     return`
//     <div class="col-4 mt-4">Blah ${team[0].name}Blah Blah</div>`;
// };

const htmlManager = (manager) => {
    return `<div class="card text-white bg-primary mb-3 m-3" style="max-width: 18rem;">
  <div class="card-header">${manager.role}  <i class="fas fa-user-tie"></i></div>
  
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: <a class="text-white" href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
  </div>`
}

const htmlEngineer = (engineer) => {
    return `<div class="card text-white bg-info mb-3 m-3" style="max-width: 18rem;">
  <div class="card-header">${engineer.role}  <i class="fas fa-users-cog"></i></div>
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="card-text">Git: <a href="https://github.com/${engineer.git}">${engineer.git}</a></p>
  </div>
  </div>`
}

const htmlIntern = (intern) => {
    return `<div class="card text-white bg-warning mb-3 m-3" style="max-width: 18rem;">
  <div class="card-header">${intern.role}  <i class="fas fa-user-graduate"></i></div>
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="card-text">School: ${intern.school}</p>
  </div>
  </div>`
}


module.exports = (team) => {

    teamArray = [];


    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        (console.log(employee))
        const role = employee.role;
        console.log(role)

        if (role === 'Manager') {
            const managerCard = htmlManager(employee);
            console.log(role);

            teamArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = htmlEngineer(employee);
            console.log(employee);

            teamArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = htmlIntern(employee);

            teamArray.push(internCard);

        }
    }

    const employeeCards = teamArray.join('')


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
    </head>
    <header>
        <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4 text-center bg-danger">Team Profile Generator</h1>
        </div>
    </header>

    <body>
    <container>
    <div class="row justify-content-center">
    ${employeeCards}
    </div>
    </container>
    
    </body>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/261fe7c387.js" crossorigin="anonymous"></script>
    </html>`
}


