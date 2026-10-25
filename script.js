
const userProfile = {
    name: "Nurzhigit",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Coding", "Gym", "Music"]
};


const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;


const hobbiesCount = userProfile.hobbies.length;


console.log("User Profile:", userProfile);
console.log("Name:", userProfile.name);
console.log("Current age:", age);
console.log("Number of hobbies:", hobbiesCount);


const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const birthYear = Number(document.getElementById("birthYear").value);

    userProfile.name = username;
    userProfile.birthYear = birthYear;

    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;

    console.log("Updated User Profile:", userProfile);
    console.log("Current age:", age);

    document.getElementById("ageOutput").textContent =
        "Current age: " + age;

    document.getElementById("hobbiesOutput").textContent =
        "Number of hobbies: " + userProfile.hobbies.length;
});

const hobbiesList = document.getElementById("hobbiesList");
const addItemButton = document.getElementById("addItem");
const removeItemButton = document.getElementById("removeItem");

addItemButton.addEventListener("click", function() {
    const hobby = prompt("Enter a new hobby:");

    if (hobby !== null && hobby.trim() !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = hobby;
        hobbiesList.appendChild(newItem);
    }
});

removeItemButton.addEventListener("click", function() {
    if (hobbiesList.lastElementChild !== null) {
        hobbiesList.lastElementChild.remove();
    }
});

