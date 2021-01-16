// Project Page
function displayProject() {
    $("#display-project").append(`
    <div>
        <img src="./assets/project1.png" alt="Work Day Scheduler style="width:500px;height:300px;">
    </div>
    <section>
        <h1 id="titleProjectOne">What's for Dinner?</h1>
        <p id="project1About">This application allows a user to decide what they would like to eat for dinner. 
        With a random recipe generator, a recipe search bar, or a form to search
        for the top ten rated restaurants in their city, they can make a dinner decision 
        quicker than ever.</p>
        <a href="https://vubao2303.github.io/Project-1/" class="button social github">
            <i class="fa fa-github" aria-hidden="true"></i> Github 
        </a> 
        <a href="https://github.com/vubao2303/Project-1" class="button social link">
            <i class="fa fa-link" aria-hidden="true"></i> Deployed Link 
        </a>
      
    </section>
<br>
    <div>
        <img src="./assets/work-day.png" alt="Work Day Scheduler style="width:500px;height:300px;">
    </div>
    <section>
        <h1 id="titleWork">Work Day Scheduler</h1>
        <p id="workAbout">This calendar application allows a user to view what
        the current day is, has color coded time blocks to display whether it is 
        past, present, or future, and allows a user to enter and save events. </p>
      <a class="deployedHw" target="_blank" href="https://jessnyj.github.io/work-day-scheduler/">Deployed Site</a>
        <a class="githubHw" target="_blank" href="https://github.com/jessnyj/work-day-scheduler">Github Repository</a>
    </section>
`)}

function displayAboutMe() {
    $("#display-about").append(`
     
<div class="about-the-author">
<h3 class="author-title">About Me</h3>
<div class="row">
    <div class="small-12 medium-4 columns">
        <div class="author-image">
            <img src="./assets/jessny-grad.png" alt="Jessny">
        </div>
        <div class="author-social">
            <a href="https://github.com/jessnyj">
                <span class="fa-stack fa-lg github">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/jessny-joseph-361515201/">
                <span class="fa-stack fa-lg linkedin">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="small-12 medium-8 columns">
        <h4 class="separator-left">Jessny Joseph</h4>
        <p id="email">jessnyjoseph@gmail.com</p>
        <p id="number">702-683-0580</p>
        <p id="textabout">Hi, im Jessny! I am a full stack web developer certified
            from UC Berkeley Extension. My interest in technology began in undergrad
            where I studied Biochemistry and Business. As my passion for both subjects
            grew, I became eager to combine both interests and was introduced into the field
            of technology. I believe that coding will allow me to achieve my goal of being an
            entrepreneur in the field of science, and I am eager to be apart of this new field. Please
            feel free to contact me with any questions.</p>
    </div>
</div>
</div>
    
 `)}

 function displayFirstPage(){
    $("#display-first-page")
 }

// Event Listeners

// ProjectButton
$("#projectButton").on("click", function(event){
    event.preventDefault();
    $("#display-about").empty();
    $("#display-first-page").empty();
    displayProject();

});


// About Button
$("#aboutButton").on("click", function(event) {
    event.preventDefault();
    $("#display-first-page").empty();
    $("#display-project").empty();
    displayAboutMe();
});

// Home Button
$("#homeButton").on("click", function(event) {
    event.preventDefault();
    $("#display-project").empty();
    $("#display-about").empty();
    displayFirstPage();
});
        