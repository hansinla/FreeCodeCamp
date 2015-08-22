$(document).ready(function() {


    $('[data-toggle="tooltip"]').tooltip();

//Button click watcher and animation
    $("#newQuote").on('click', function() {
        $("#well").fadeOut(1000,function() {
            apiCall();
        });
        $("#well").fadeIn(1000);

    });

    function reloadTweet(quoteText) {
        console.log(quoteText);
        $("#tweet iframe").remove();
        var tweetBtn = $('<a></a>')
            .addClass("twitter-share-button")
            .attr("id", "tweet twitter-wjs")
            .attr("data-url", "none")
            .attr("data-count", "none")
            .attr("data-text", quoteText)
            .attr("data-via", "doylewaredsign")
            .attr("data-size", "large");
        $("#tweet").append(tweetBtn);
        twttr.widgets.load();
    }

    function apiCall() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            success: function (response) {
                parseQuote(response);
            }
        });
    };






// Place quotes and authors in HTML
    function parseQuote(response) {
        var quote = getQuote(response);
        var author = getAuthor(response);

        var wikiAuthor = author.replace(/-\s/, "");
        var wikiHref = 'https://en.wikipedia.org/wiki/' + wikiAuthor + '';
        var tweetQuote = quote + " -" + author;

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
        $("#wiki").attr({"href": wikiHref, "target": "_blank"});
        reloadTweet(tweetQuote);
    }


//Helper functions to get data from XML response
    function getQuote(text) {
        return text.quoteText;
    }

    function getAuthor(text) {
        var author = text.quoteAuthor;

        if(author === undefined) {
            return author = "- Anonymous";
        } else {
            return "- " + author;
        }
    }

});