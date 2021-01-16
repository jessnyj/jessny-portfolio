// Project Page
function displayProject() {
    $("#display-project").append(`
<div class="row expanded collapse">
    <div class="column">
        <div class="large-article-header">
            <div class="large-article-header-content">    
            </div>
        </div>
    </div>
</div>
`)}

// function displayResume () {(`
//     <a target="_blank">
//     img src="./assets/Resume.pdf"
//     </a>
// `)}


// Event Listeners

// ProjectButton
$("#projectButton").on("click", function(event){
    event.preventDefault();
    displayProject();
});


// Resume Button
// $("#resumeButton").on("click", function(event){
//     event.preventDefault();
//     displayResume();
// })


// About Button





