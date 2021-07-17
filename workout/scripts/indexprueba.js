import {
    ChestExercise
} from "./chestExercise.js";

async function getChestExercises() {
    let url = 'chest.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

let chestExercisesList = [];

if (localStorage.getItem('localChestExercises')) {
    chestExercisesList = JSON.parse(localStorage.getItem('localChestExercises'));
    console.log(chestExercisesList);
}
else{ 
async function loadOriginalList(chestExercisesList) {
    let chestExercises = await getChestExercises();
    chestExercises.forEach(chestExercise => { let newChestExercise = new ChestExercise(chestExercise.id, chestExercise.name, chestExercise.image, chestExercise.description, chestExercise.sets, chestExercise.reps, chestExercise.rest);
        chestExercisesList.push(newChestExercise);
        console.log(chestExercisesList);
    })
}
loadOriginalList(chestExercisesList);
}

renderChestExercises(chestExercisesList);

async function renderChestExercises(chestExercisesList) {
    let chestExercises = await getChestExercises();
    let html = '';
    let count = 0;
    chestExercisesList.forEach(chestExercise => {

        let htmlChestSegment = `<div class="exercise-routine" data-id="${chestExercisesList[count].Id}">
        <h2 class="displayPosition" data-id="${chestExercisesList[count].Id}">${count+1}) ${chestExercisesList[count].Name}</h2>
        <fieldset class="description">
        <div class="info">
        <div class="image-width">
        <img src="${chestExercisesList[count].Image}" data-id="${chestExercisesList[count].Id}" alt="Exercise Image" class="displayImage">
        </div>
        <div class="numbers">
        <h3 class="displaySets" data-id="${chestExercisesList[count].Id}"><b>Sets:</b> ${chestExercisesList[count].Sets}</h3>
        <h3 class="displayReps" data-id="${chestExercisesList[count].Id}"><b>Reps:</b> ${chestExercisesList[count].Reps}</h3>
        </div>
       </div>
       <h3 class="displayRest" data-id="${chestExercisesList[count].Id}"><b>Recovery Time:</b> ${chestExercisesList[count].Rest} seconds</h3>
       <p class="displayDescription" data-id="${chestExercisesList[count].Id}"><b>Instructions:</b> ${chestExercisesList[count].Description}</p>
       </fieldset><br>
       <div class="exercise-buttons">
       <button class="editChestExercise" data-id="${chestExercisesList[count].Id}">Edit Exercise</button>
       <button class="deleteChestExercise" data-id="${chestExercisesList[count].Id}">Delete Exercise</button>
       </div>
       <section class="editContainer" data-id="${chestExercisesList[count].Id}"></section>
       </div>`;

        html += htmlChestSegment;

        let container = document.querySelector('.container');
        container.innerHTML = html;

        if (chestExercisesList.length <= count) {
            let newChestExercise = new ChestExercise(chestExercisesList[count].Id, chestExercisesList[count].Name, chestExercisesList[count].Image, chestExercisesList[count].Description, chestExercisesList[count].Sets, chestExercisesList[count].Reps, cchestExercisesList[count].Rest);
            chestExercisesList.push(newChestExercise);
            console.log(chestExercisesList);
            localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
        }
        count++;
    });

    let deleteButtons = document.querySelectorAll('.deleteChestExercise');

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", (e) => {
            let selectedId = e.target.dataset.id;
            let selectedChestExercise = chestExercisesList[selectedId].Id;

            chestExercisesList.splice(selectedChestExercise, 1);

            console.log(chestExercisesList);
            localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));

            renderChestExercises(chestExercisesList);
        });
    });

    if (document.querySelector('.editChestExercise') != null) {
        let selectedButtons = document.querySelectorAll('.editChestExercise');
        selectedButtons.forEach((selectedButton) => {
            selectedButton.addEventListener("click", (e) => {
                let selectedId = selectedButton.dataset.id;
                let htmlEdit = `<input class="newName" data-id="${selectedId}" type="text" value="${chestExercisesList[selectedId].Name}">
          <button class="editName" data-id="${selectedId}">Change Name</button><br>
          <input class="newImage" data-id="${selectedId}" type="text" value="${chestExercisesList[selectedId].Image}">
          <button class="editImage" data-id="${selectedId}">Change Image</button><br>
          <input class="newDescription" data-id="${selectedId}" type="text" value="${chestExercisesList[selectedId].Description}">
          <button class="editDescription" data-id="${selectedId}">Change Instructions</button><br>
          <input class="newSets" data-id="${selectedId}" type="number" value="${chestExercisesList[selectedId].Sets}">
          <button class="editSets" data-id="${selectedId}">Change Number of Sets</button><br>
          <input class="newReps" data-id="${selectedId}" type="text" value="${chestExercisesList[selectedId].Reps}">
          <button class="editReps" data-id="${selectedId}">Change Reps</button><br>
          <input class="newRest" data-id="${selectedId}" type="text" value="${chestExercisesList[selectedId].Rest}">
          <button class="editRest" data-id="${selectedId}">Change Recovery Time</button><br>
          `;
                document.querySelector('section[data-id="' + selectedId + '"]').innerHTML = htmlEdit;
                let newName = document.querySelector('.newName[data-id="' + selectedId + '"]').value;
                document.querySelector('.editName[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newName = document.querySelector('.newName[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Name = newName;
                    document.querySelector('.displayPosition[data-id="' + selectedId + '"]').innerHTML = `${selectedId}) ${newName}`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });
                let newImage = document.querySelector('.newImage[data-id="' + selectedId + '"]').value;
                document.querySelector('.editImage[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newImage = document.querySelector('.newImage[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Image = newImage;
                    document.querySelector('.displayImage[data-id="' + selectedId + '"]').src = `${newImage}`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });
                let newDescription = document.querySelector('.newDescription[data-id="' + selectedId + '"]').value;
                document.querySelector('.editDescription[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newDescription = document.querySelector('.newDescription[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Description = newDescription;
                    document.querySelector('.displayDescription[data-id="' + selectedId + '"]').innerHTML = `<b>Instructions:</b> ${newDescription}`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });
                let newSets = document.querySelector('.newSets[data-id="' + selectedId + '"]').value;
                document.querySelector('.editSets[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newSets = document.querySelector('.newSets[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Sets = parseInt(newSets);
                    document.querySelector('.displaySets[data-id="' + selectedId + '"]').innerHTML = `<b>Sets:</b> ${newSets}`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });
                let newReps = document.querySelector('.newReps[data-id="' + selectedId + '"]').value;
                document.querySelector('.editReps[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newReps = document.querySelector('.newReps[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Reps = newReps;
                    document.querySelector('.displayReps[data-id="' + selectedId + '"]').innerHTML = `<b>Reps:</b> ${newReps}`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });
                let newRest = document.querySelector('.newRest[data-id="' + selectedId + '"]').value;
                document.querySelector('.editRest[data-id="' + selectedId + '"]').addEventListener("click", (e) => {
                    let selectedChestExercise = chestExercisesList.find(chestExercise => chestExercise.Id == parseInt(selectedId));
                    newRest = document.querySelector('.newRest[data-id="' + selectedId + '"]').value;
                    selectedChestExercise.Rest = parseInt(newRest);
                    document.querySelector('.displayRest[data-id="' + selectedId + '"]').innerHTML = `<b>Recovery Time:</b> ${newRest} seconds`;
                    window.localStorage.clear();
                    localStorage.setItem("localChestExercises", JSON.stringify(chestExercisesList));
                });

            });
        });
    }
}


document.querySelector('#reset').addEventListener("click", (e) => {

    chestExercisesList.splice(chestExercisesList);
    console.log(chestExercisesList);
    window.localStorage.clear();
    renderChestExercises(chestExercisesList);
});