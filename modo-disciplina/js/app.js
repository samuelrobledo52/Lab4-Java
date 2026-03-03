let globalXP = 0;
let missions = [];

const xpDisplay = document.getElementById("xp");
const rankDisplay = document.getElementById("rank");
const missionList = document.getElementById("missionList");
const form = document.getElementById("missionForm");

function getXP(difficulty) {
    if (difficulty === "Fácil") return 10;
    if (difficulty === "Normal") return 25;
    return 50;
}

function getRank(xp) {
    if (xp < 50) return "Aprendiz";
    if (xp < 150) return "Constante";
    return "Imparable";
}

function updateStats() {
    xpDisplay.textContent = globalXP;
    rankDisplay.textContent = getRank(globalXP);
}

function renderMissions() {
    missionList.innerHTML = "";

    missions.forEach((mission, index) => {
        const li = document.createElement("li");

        if (mission.status === "SUCCESSFUL") {
            li.classList.add("success");
        }

        li.innerHTML = `
            <strong>${mission.name}</strong> - ${mission.description}
            <br>
            Dificultad: ${mission.difficulty} | XP: ${mission.xp}
            <br>
            Estado: ${mission.status}
            <br>
            <button onclick="completeMission(${index})">
                ${mission.status === "SUCCESSFUL" ? "Completada" : "Completar"}
            </button>
        `;

        missionList.appendChild(li);
    });
}

function createMission(name, description, difficulty) {
    const mission = {
        name: name,
        description: description,
        difficulty: difficulty,
        xp: getXP(difficulty),
        status: "PENDING"
    };

    console.log(mission);

    missions.push(mission);
    renderMissions();
}

function completeMission(index) {
    const mission = missions[index];

    if (mission.status === "PENDING") {
        mission.status = "SUCCESSFUL";
        globalXP += mission.xp;
        updateStats();
        renderMissions();
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const difficulty = document.getElementById("difficulty").value;

    if (name && description) {
        createMission(name, description, difficulty);
        form.reset();
    }
});

updateStats();
