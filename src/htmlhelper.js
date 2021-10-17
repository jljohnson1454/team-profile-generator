// Multiple functions for exporting

const generateTeam = (team) => {
    console.log(team)
    return`
    <div class="col-4 mt-4">Blah ${team[0].name}Blah Blah</div>`;
};

const htmlManager = (manager) => {
    return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${manager.role}  <i class="fas fa-user-tie"></i></div>
  
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
  </div>`
}

const htmlEngineer = (employeeType) => {
    return `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">${employeeType.role}  <i class="fas fa-users-cog"></i></div>
  <div class="card-body">
    <h5 class="card-title">${employeeType.name}</h5>
    <p class="card-text">ID: ${employeeType.id}</p>
    <p class="card-text">Email: ${employeeType.email}</p>
    <p class="card-text">Git: ${employeeType.git}</p>
  </div>
  </div>`
}

const htmlIntern = (employeeType) => {
    return `<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">${employeeType.role}  <i class="fas fa-user-graduate"></i></div>
  <div class="card-body">
    <h5 class="card-title">${employeeType.name}</h5>
    <p class="card-text">ID: ${employeeType.id}</p>
    <p class="card-text">Email: ${employeeType.email}</p>
    <p class="card-text">School: ${employeeType.school}</p>
  </div>
  </div>`
}



module.exports = team => {
    
    for(let i = 0; i < team.length; i++) {
        const employeeType = team[i];
        (console.log(employeeType))
        const Erole = employeeType.role;
        console.log(Erole)

        if(Erole === 'Manager') {
            htmlManager(employeeType);
            console.log(Erole);
        }
        if(Erole === 'Engineer') {
            htmlEngineer(employeeType);
            console.log(employeeType);
        }
        
        if(Erole === 'Intern') {
            htmlIntern(employeeType);
            
        }


    
    
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
    

    </div>
    </container>
    
    </body>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/261fe7c387.js" crossorigin="anonymous"></script>
    </html>`

    }
};


