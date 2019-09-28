// $(document).ready(function (){
//   function searchRepositories(){
//   alert("test");
//   }
// });


  // function searchRepositories(){
  //   const url = `https://api.github.com/search/repositories?q=tetris`;
  //   $.get(url,function(response){
  //     const repos = JSON.parse(response);
  //     const repoList = `<ul>${repos.map(r=>'<li>'+r.total_count+'</li>').join('')}</ul>`;
  //     $("#results").html(repoList);
  //   });
  // }
  function searchRepositories(){
    const url = `https://api.github.com/search/repositories?q=tetris45`;
    $.getJSON(url).done(function(data){
    //const repoList = `<ul>${data.map(r=>'<li>'+r.total_count+'</li>').join('')}</ul>`;
    //$('#results').html(repoList)
    $('#results').html("<p>have to work on adding jsxhr results on the DOM</p>");
    }).fail(function(error){
      $('#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>");
    })
  }