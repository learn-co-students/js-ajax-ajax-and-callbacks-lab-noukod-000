$(document).ready(function (){

    $.get('index.html', function(response) {
        // Here we are getting the element on the page with the id of sentences and
        // inserting the response
        $('#index').html(response);
    });

    $.get('this_doesnt_exist.html', function(data) {
        // This will not be called because the .html file request doesn't exist
        doSomethingGood();
    }).fail(function(error) {
        // This is called when an error occurs
        console.log('Something went wrong: ' + error.statusText);
    });
});

