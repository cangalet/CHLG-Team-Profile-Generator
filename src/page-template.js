// create employee card

const generateCards = (teamData) => {
    return `
    `
}

module.exports = (data) => {
    return `
<!DOCTYPE html> 
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css" />
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" href="./src/style.css">
</head>

<body>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
            <!-- Title -->
            
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <span class="mdl-layout-title">My Team</span>
            <div class="mdl-layout-spacer"></div>
            </div>
        </header>
        <main class="mdl-layout__content">
            <div class="page-content">
                <div class="mdl-grid">
                <!-- Team Cards -->
                    ${generateCards(data)}
                    <div class="card-square mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text"><i class="material-icons mdl-list__item-avatar icon-avatar">person</i>
                                <span>Chris Angalet</span></h2>
                            <h2 class="mdl-card__subtitle-text"><i class="fas fa-mug-hot icon-item "></i> Manager</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <ul class='mdl-list'>
                                <li class="mdl-list__item"><span class="mdl-list__item-primary-content">ID: </span></li>
                                <li class="mdl-list__item">Email: </li>
                                <li class="mdl-list__item">Office Number: </li>
                              </ul>
                        </div>
                    </div>
                </div>     
            </div>
        </main>
        </div>
</body>
</html>
    `;
};
