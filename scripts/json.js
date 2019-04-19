$(function() {


    $.get("http://jsonplaceholder.typicode.com/users")
        .done(function(data) {
            console.log(data);
            data.forEach(function(value) {
                $("#users table").append("<tr><td>"+"<a onclick='filterPostsByUserId("+value.id+")' href='#'>" + value.id + "</a>" + "</td><td>" + value.username + "</td><td>" + value.email + "</td></tr>")
            })
        })
        .fail(function(err) {
            console.log(err);
        });

});


function filterPostsByUserId(data) {
    $.get("http://jsonplaceholder.typicode.com/posts", {"postId": data})
        .done(function(data) {
            console.log(data);
            data.forEach(function(value) {
                $("#posts ul").append("<li>"+ "<p>" + "<span style='font-weight: bold;'>Title:</span> " + value.title +"</p>" +"<p>" + "<span>Body: </span>" + value.body + "</p>" + "</li>")
            })
        })
        .fail(function(err) {
            console.log(err);
        });

    console.log(data);
}