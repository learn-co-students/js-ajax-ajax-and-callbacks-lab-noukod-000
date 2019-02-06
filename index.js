$(document).ready(function (){
});

function searchRepositories(){
    const searchTerms = $('#searchTerms').val()
    const uri = `https://api.github.com/search/repositories?q=${searchTerms}&sort=stars&order=desc`

    $.get(uri).done(function(response){
        console.log(response)
      
    const renderResults = (data) => data.items.map( result => {
        return `<div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>`
    })
        $("#results").html(renderResults(response))
    }).fail(function(error){
        displayError()
    });
}

function showCommits(el){
    $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
        const renderCommits = (data) => {
            let result = data.map((commit)=>`<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`).join('')
            return `<ul>${result}</ul>`
            }
        $('#details').html(renderCommits(data))
      }).fail(error => {
        displayError()
    })
}

function displayError(){
    $("#errors").html("I'm sorry, there's been an error. Please try again.")
}