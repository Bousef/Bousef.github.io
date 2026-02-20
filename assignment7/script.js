function showFilter() {
    const filterContent = document.getElementById('filterContent');
    const newContent = document.getElementById('newContent');
    
    newContent.classList.remove('show');
    
    filterContent.classList.toggle('show');
}

function showAddNew() {
    const newContent = document.getElementById('newContent');
    const filterContent = document.getElementById('filterContent');
    
    filterContent.classList.remove('show');
    
    newContent.classList.toggle('show');
}

function filterArticles() {
    const opinionChecked = document.getElementById('opinionCheckbox').checked;
    const recipeChecked = document.getElementById('recipeCheckbox').checked;
    const updateChecked = document.getElementById('updateCheckbox').checked;
    
    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        let shouldShow = false;
        
        if (article.classList.contains('opinion') && opinionChecked) {
            shouldShow = true;
        } else if (article.classList.contains('recipe') && recipeChecked) {
            shouldShow = true;
        } else if (article.classList.contains('update') && updateChecked) {
            shouldShow = true;
        }
        
        if (shouldShow) {
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    });
}

function addNewArticle() {
    const titleInput = document.getElementById('inputHeader');
    const textInput = document.getElementById('inputArticle');
    const typeInputs = document.getElementsByName('articleType');
    
    let selectedType = '';
    for (let input of typeInputs) {
        if (input.checked) {
            if (input.id === 'opinionRadio') {
                selectedType = 'opinion';
            } else if (input.id === 'recipeRadio') {
                selectedType = 'recipe';
            } else if (input.id === 'lifeRadio') {
                selectedType = 'update';
            }
            break;
        }
    }
    
    if (!titleInput.value.trim() || !textInput.value.trim() || !selectedType) {
        alert('Please fill in all fields and select a type.');
        return;
    }
    
    const articleList = document.getElementById('articleList');
    const newArticle = document.createElement('article');
    
    const articleCount = articleList.children.length;
    const newId = 'a' + (articleCount + 1);
    
    newArticle.id = newId;
    newArticle.className = selectedType;
    
    let markerText = '';
    if (selectedType === 'opinion') {
        markerText = 'Opinion';
    } else if (selectedType === 'recipe') {
        markerText = 'Recipe';
    } else if (selectedType === 'update') {
        markerText = 'Update';
    }
    
    newArticle.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${titleInput.value}</h2>
        <p>${textInput.value}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;
    
    articleList.appendChild(newArticle);
    
    titleInput.value = '';
    textInput.value = '';
    for (let input of typeInputs) {
        input.checked = false;
    }
    
    document.getElementById('newContent').classList.remove('show');
    
    filterArticles();
}
