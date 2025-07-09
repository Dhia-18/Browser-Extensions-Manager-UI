const data = await(await fetch('./data.json')).json();

const switchThemeButton = document.getElementById("switch-theme-btn");
const buttonsContainer = document.querySelector(".buttons-container");
const extensionsContainer = document.getElementById("extensions-container");

/* Adding the logic to switch theme button */
switchThemeButton.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("darkmode");
});

/* Adding the logic to remove button */
extensionsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove-btn")){
        const extensionName = e.target.dataset.name;
        const extensionIndex = data.findIndex(extension => extension.name === extensionName);
        data.splice(extensionIndex, 1);
        renderExtensions();
    }
})

/* Adding the logic to enable/disable extension button */
extensionsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("switch")){
        const extensionName = e.target.dataset.name;
        const extensionIndex = data.findIndex(extension => extension.name === extensionName);
        data[extensionIndex].isActive = !data[extensionIndex].isActive;

        renderExtensions();
    }
});

/* Rendering extensions */
function renderExtensions(){
    extensionsContainer.innerHTML = "";
    data.forEach(extension => {
        const {logo, name, description, isActive} = extension;
        const extensionHtml = `
                        <div class="extension">
                            <div class="description">
                                <img src=${logo} alt="DevLens extension Logo">
                                <div>
                                    <h2>${name}</h2>
                                    <p>${description}</p>
                                </div>
                            </div>
                            <div class="extension-buttons">
                                <button class="remove-btn" data-name='${name}'>Remove</button>
                                <label class="switch" data-name=${name}>
                                    <input type="checkbox" ${isActive? 'checked' : ''}>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                            `;
        extensionsContainer.innerHTML += extensionHtml;
    });
}

buttonsContainer.addEventListener("click", (e)=>{
    buttonsContainer.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

    e.target.classList.add("active");
    
    const filter = e.target.textContent.toLowerCase();
    const extensions = document.querySelectorAll(".extension");

    extensions.forEach(extension => {
        const checkbox = extension.querySelector("input[type='checkbox']");
        const isChecked = checkbox.checked;

        if(filter === "all"){
            extension.style.display = "";
        } else if(filter === "active"){
            extension.style.display = isChecked ? "" : "none";
        } else if(filter === "inactive"){
            extension.style.display = !isChecked ? "" : "none";
        }
    });
});

renderExtensions();