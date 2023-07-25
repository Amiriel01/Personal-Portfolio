function createProjectCards(image, name, gitRepo, gitPage, description) {
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

    //attach projectGitRepo and append it to the card//
    let projectGitRepo = document.createElement("i");
    projectGitRepo.classList.add("devicon-github-original");
    // projectGitRepo.innerHTML = "devicon-github-original";
    projectGitRepo.setAttribute("href", gitRepo);
    projectCard.appendChild(projectGitRepo);

    //attach gitPage and append it to the card//
    let projectGitPage = document.querySelector("span");
    projectGitPage.classList.add("material-symbols-outlined");
    // projectGitPage.innerHTML = open_in_new
    projectGitPage.setAttribute("href", gitPage);
    projectCard.appendChild(projectGitPage);

    //attach description and append to card//
    let projectDescription = document.createElement("p");
    projectDescription.classList.add("description");
    projectDescription.innerText = description
    projectCard.appendChild(projectDescription);

    return projectCard
}


function populateProjectCard() {
    //put the data in the cards//
   createProjectCards("images/battleship.png", "Battleship", "https://github.com/Amiriel01/Battleship", "https://amiriel01.github.io/Battleship", "Users can play a game of Battleship with a friend or against the computer. Players place ships themselves or randomize them. The first player to sink all five of the enemy ships wins the game!")

}

populateProjectCard();
