// Project Page
function displayProject() {
    $("#display-project").append(`
    <div>
    <img src="./assets/project1.png" alt="Work Day Scheduler style="width:500px;height:600px;">
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
        <img src="./assets/work-day.png" alt="Work Day Scheduler style="width:500px;height:600px;">
    </div>
    <h1 id="titleWork">Work Day Scheduler</h1>
    <p id="workAbout">This calendar application allows a user to view what
    the current day is, has color coded time blocks to display whether it is 
    past, present, or future, and allows a user to enter and save events. </p>
    <a class="deployedHw" target="_blank" href="https://jessnyj.github.io/work-day-scheduler/">Deployed Site</a>
    <a class="githubHw" target="_blank" href="https://github.com/jessnyj/work-day-scheduler">Github Repository</a>

`)}



// Event Listeners

// ProjectButton
$("#projectButton").on("click", function(event){
    event.preventDefault();
    displayProject();
});


// About Button





