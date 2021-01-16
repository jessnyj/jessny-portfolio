// Project Page
function displayProject() {
    $("#display-project").append(`
<div class="row expanded collapse">
    <div class="column">
        <div class="large-article-header">
            <div class="large-article-header-content">    
            </div>
        </div>
        <h1>What's for Dinner?</h1>
        <a class="button button-rounded-hover">Deployed Site</a>
    </div>
</div>
`)}



// Event Listeners

// ProjectButton
$("#projectButton").on("click", function(event){
    event.preventDefault();
    displayProject();
});


// About Button





