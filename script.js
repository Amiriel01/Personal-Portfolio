function createProjectCards(image, name, description, gitPage, title1, gitRepo, title2) {
    //get project container to attach cards to//
    let projectsContainer = document.querySelector(".projects-container");

    //create project card attach it to container//
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectsContainer.appendChild(projectCard);

    //add project image to project card//
    let projectImage = document.createElement("img");
    projectImage.classList.add("image");
    projectImage.setAttribute("src", image);
    projectCard.appendChild(projectImage);

    //attach GitHub icon to link project repo and append to card//
    let projectName = document.createElement("h2");
    projectName.classList.add("name");
    projectName.innerText = name;
    projectCard.appendChild(projectName);

    //attach description and append to card//
    let projectDescription = document.createElement("p");
    projectDescription.classList.add("description");
    projectDescription.innerText = description
    projectCard.appendChild(projectDescription);

    //create a flex container for icons and attach it to the projectCard//
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    projectCard.appendChild(iconContainer);

    //attach gitPage and append it to the card//
    let projectGitPage = document.createElement("a");
    projectGitPage.classList.add("material-symbols-outlined");
    //  projectGitPage.innerText = "Play the Battleship Game!"
    projectGitPage.innerHTML = "open_in_new"
    projectGitPage.setAttribute("href", gitPage);
    projectGitPage.setAttribute("title", title1);
    projectGitPage.setAttribute("target", "_blank");
    projectGitPage.setAttribute("rel", "no referrer noopener");
    iconContainer.appendChild(projectGitPage);

    //attach projectGitRepo and append it to the card//
    let projectGitRepo = document.createElement("a");
    projectGitRepo.classList.add("devicon-github-original");
    // projectGitRepo.innerHTML = "devicon-github-original";
    projectGitRepo.setAttribute("href", gitRepo);
    projectGitRepo.setAttribute("title", title2);
    projectGitRepo.setAttribute("target", "_blank");
    projectGitRepo.setAttribute("rel", "no referrer noopener");
    iconContainer.appendChild(projectGitRepo);

    return projectCard
}


function populateProjectCard() {
    //put the data in the cards//
    createProjectCards("images/jewelry.png", "Jewelry Website", "This React website was built for a fictional jewelry store. It features several information pages, an appointment schedule form, a shopping page, and checkout summary", "https://amiriel01-jewelry-website.netlify.app/", "Click the link to visit the jewelry website.", "https://github.com/Amiriel01/Jewelry-Website", "Click the link to visit the Jewelry Website GitHub repository.")

    createProjectCards("images/matching.png", "Memory Check Game", "This React game features four pages for players to view, the loading, game mode selection, game play, and winner screens. Players can choose easy, medium, and hard modes to select the amounts of card each play through.", "https://hogwarts-memory-check.netlify.app/", "Click the link to play the Memory Check Game!", "https://github.com/Amiriel01/Memory-Check-Game", "Click the link to visit the Memory Check Game GitHub repository.")

    createProjectCards("images/cvapp.png", "CV Application Creator", "Users can use this React app to creat their CV when applying for jobs. The CV information that is entered in the form will update to the CV creation page on submitting each section", "https://amiriel01-cv-app.netlify.app/", "Click the link to create your own CV.", "https://github.com/Amiriel01/cv-application", "Click the link to visit the CV Application Creator GitHub repository.")

    createProjectCards("images/battleship.png", "Battleship", "Users can play a game of Battleship with a friend or against the computer. Players place ships themselves or randomize them. The first player to sink all five of the enemy ships wins the game!", "https://amiriel01.github.io/Battleship", "Click the link to play Battleship!", "https://github.com/Amiriel01/Battleship", "Click the link to visit the Battleship GitHub repository.")

    createProjectCards("images/knights-travails.png", "Knights Travails", "Use the Knights Travails tool to increase your chess knowledge. Move the knight anywhere on the board to see the shortest path between locations.", "https://amiriel01.github.io/Knights-Travails", "Click the link to explore Knigts Travails!", "https://github.com/Amiriel01/Knights-Travails", "Click the link to visit the Knights Travails GitHub repository.")

    createProjectCards("images/weather-app.png", "Weather App", "Use the Weather App to search for the current weather conditions and a five day forcast for the chosen search location.", "https://amiriel01.github.io/Weather-App", "Click the link to use the Weather App!", "https://github.com/Amiriel01/Weather-App", "Click the link to visit the Weather App GitHub repository.")

    createProjectCards("images/to-do-list.png", "To-Do List", "Users create a local storage To-Do List to store all of their tasks. The To-Dos can be edited and deleted as needed.", "https://amiriel01.github.io/To-Do-List", "Click the link to use the To-Do List!", "https://github.com/Amiriel01/To-Do-List", "Click the link to visit the To-Do List GitHub repository.")

    createProjectCards("images/restaurant-page.png", "Restaurant Page", "Come visit the Macaron Maven webpage. The webpage features a home, a menu page, a contact page, and a sign-up page for users to sign up for the newsletter.", "https://amiriel01.github.io/Restaurant-Page", "Click the link to visit the Macaron Maven webpage!", "https://github.com/Amiriel01/Restaurant-Page", "Click the link to visit the Restaurant GitHub repository.")

    createProjectCards("images/tic-tac-toe.png", "Tic-Tac-Toe", "The Tic-Tac-Toe game requires two players to start the game. Players will take turns placing the X (Player 1) and the O (Player 2) till a winner or a tie is called.", "https://amiriel01.github.io/Tic-Tac-Toe", "Click the link to play the Tic-Tac-Toe game!", "https://github.com/Amiriel01/Tic-Tac-Toe", "Click the link to visit the Tic-Tac-Toe GitHub repository.")

    createProjectCards("images/library.png", "Reading Log Library", "The Reading Log Library is a place for users to store their read and to-be read books. Users can enter information about each book also.", "https://amiriel01.github.io/Library", "Click the link to use the Reading Log Library!", "https://github.com/Amiriel01/Library", "Click the link to visit the Reading Log Library GitHub repository.")

    createProjectCards("images/calculator.png", "Simple Calculator", "This simple calculator will do two operand operations. Users can add, subtract, multiply, or divide two whole or decimal numbers.", "https://amiriel01.github.io/Calculator-Project", "Click the link to use the Simple Calculator!", "https://github.com/Amiriel01/Calculator-Project", "Click the link to visit the Simple Calculator GitHub repository.")

    createProjectCards("images/etch-a-sketch.png", "Etch-A-Sketch", "This Etch-A-Sketch features two color  settings and an eraser mode. Users can choose their grid size and can turn off and on drawing by clicking the board.", "https://amiriel01.github.io/Etch-a-Sketch", "Click the link to draw on the Etch-A-Sketch!", "https://github.com/Amiriel01/Etch-a-Sketch", "Click the link to visit the Etch-A-Sketch GitHub repository.")

    createProjectCards("images/rock-paper-scissors.png", "Rock-Paper-Scissors", "This Rock-Paper-Scissors game is played against the computer. The user plays until a winner or tie is called. The score is kept on the score board.", "https://amiriel01.github.io/Rock-Paper-Scissors", "Click the link to play the Rock-Paper-Scissors game!", "https://github.com/Amiriel01/Rock-Paper-Scissors", "Click the link to visit the Rock-Paper-Scissors GitHub repository.")

    createProjectCards("images/landing-page.png", "Miniature Schnauzer Webpage Template", "The webpage template is the homepage of a fictional Miniature Schnauzer website. This page is a design template for a possible future website.", "https://amiriel01.github.io/landing-page", "Click the link to view the Miniature Schnauzer Landing Page Template!", "https://github.com/Amiriel01/landing-page", "Click the link to visit the Maniature Schnauzer Webpage Template GitHub repository.")
}

populateProjectCard();
