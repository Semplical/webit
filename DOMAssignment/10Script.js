let filterMenu = null;

let opinionFilter = null;
let recipeFilter = null;
let updateFilter = null;

let opinions = null;
let recipes = null;
let updates = null;

let form = null;


let newTitle = null;
let newText = null;

let opinionArticle = null;
let recipeArticle = null;
let updateArticle = null;

let newType = "";
let newCategory = "";


function showFilter() {
    filterMenu = document.getElementById("filterContent");
    if (filterMenu.style.display == "none" || filterMenu.style.display == "") {
        filterMenu.style.display = "block";
    } 
    else {
        filterMenu.style.display = "none";
    }
}

function filterArticles() {

    opinionFilter = document.getElementById("opinionCheckbox").checked;
    recipeFilter = document.getElementById("recipeCheckbox").checked;
    updateFilter = document.getElementById("updateCheckbox").checked;

    opinions = document.querySelectorAll("article.opinion");
    recipes = document.querySelectorAll("article.recipe");
    updates = document.querySelectorAll("article.update");

    opinions.forEach(article => {
        if (opinionFilter) {
            article.style.display = "block";
        } 
        else {
            article.style.display = "none";
        }   
    });

    recipes.forEach(article => {  
        if (recipeFilter) {
            article.style.display = "block";
        } 
        else {
            article.style.display = "none";
        }  
    });

    updates.forEach(article => {
         if (updateFilter) {
            article.style.display = "block";
        } 
        else {
            article.style.display = "none";
        }  
    });
}

function showAddNew() {
    form = document.getElementById("newContent");
    

    if (form.style.display == "none" || form.style.display == "") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}

function addNewArticle() {

    newTitle = document.getElementById("inputHeader").value;
    newText = document.getElementById("inputArticle").value;

    opinionArticle = document.getElementById("opinionRadio");
    recipeArticle = document.getElementById("recipeRadio");
    updateArticle = document.getElementById("lifeRadio");

    newType = "";
    newCategory = "";

    if (opinionArticle.checked) {
        newType = "opinion";
        newCategory = "Opinion";
    }
    else if (recipeArticle.checked) {
        newType = "recipe";
        newCategory = "Recipe";
    }
    else if (updateArticle.checked) {
        newType = "update";
        newCategory = "Update";
    }
    else {
        alert("All required fields are not filled out");
        return;
    }

    if (newTitle == "" || newText == "") {
        alert("All required fields are not filled out");
        return;
    }

    let newArticle = document.createElement("article");
    newArticle.classList.add(newType);

    let category = document.createElement("span");
    category.classList.add("marker");
    category.textContent = newCategory;

    let h2 = document.createElement("h2");
    h2.textContent = newTitle;

    let text = document.createElement("p");
    text.textContent = newText;

    newArticle.appendChild(category);
    newArticle.appendChild(h2);
    newArticle.appendChild(text);

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionArticle.checked = false;
    recipeArticle.checked = false;
    updateArticle.checked = false;
}