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
    iconContainer.appendChild(projectGitPage);

    //attach projectGitRepo and append it to the card//
    let projectGitRepo = document.createElement("a");
    projectGitRepo.classList.add("devicon-github-original");
    // projectGitRepo.innerHTML = "devicon-github-original";
    projectGitRepo.setAttribute("href", gitRepo);
    projectGitRepo.setAttribute("title", title2);
    iconContainer.appendChild(projectGitRepo);

    return projectCard
}


function populateProjectCard() {
    //put the data in the cards//
    createProjectCards("images/battleship.png", "Battleship", "Users can play a game of Battleship with a friend or against the computer. Players place ships themselves or randomize them. The first player to sink all five of the enemy ships wins the game!", "https://amiriel01.github.io/Battleship", "Click the link to play Battleship!", "https://github.com/Amiriel01/Battleship", "Click the link to visit the Battleship GitHub repository.")

    createProjectCards("images/battleship.png", "Battleship", "Users can play a game of Battleship with a friend or against the computer. Players place ships themselves or randomize them. The first player to sink all five of the enemy ships wins the game!", "https://amiriel01.github.io/Battleship", "Click the link to play Battleship!", "https://github.com/Amiriel01/Battleship", "Click the link to visit the Battleship GitHub repository.")
}

populateProjectCard();
