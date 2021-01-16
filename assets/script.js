// Project Page
function displayProject() {
    $("#display-project").append(`
<div class="row expanded collapse">
    <div class="column">
        <div class="large-article-header">
            <div class="large-article-header-content">    
            </div>
        </div>
        <h1 id="titleProjectOne">What's for Dinner?</h1>
        <p id="project1About">This application allows a user to decide what they would like to eat for dinner. 
        With a random recipe generator, a recipe search bar, or a form to search
        for the top ten rated restaurants in their city, they can make a dinner decision 
        quicker than ever. </p>
        <a class="button button-rounded-hover" target="_blank" href="https://vubao2303.github.io/Project-1/">Deployed Site</a>
        <a class="githubP1" target="_blank" href="https://github.com/vubao2303/Project-1">Github Repository</a>
    </div>
</div>
<br>
<div>
<img src="" alt="Girl in a jacket" style="width:500px;height:600px;">
</div>


`)}



// Event Listeners

// ProjectButton
$("#projectButton").on("click", function(event){
    event.preventDefault();
    displayProject();
});


// About Button





