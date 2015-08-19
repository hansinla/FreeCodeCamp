// Included as external JS:
//<script src="https://ttv-api.s3.amazonaws.com/twitch.min.js"/>

// Init vars
var clientID = "?client_id=8j9fj3cd1icdxi32rzzzr3ahgbqam60&callback=?";
var url = "https://api.twitch.tv/kraken/";
var channels = [];

var usernames = ["freecodecamp", "hansinla", "MedryBW", "storbeck", "terakilobyte",
    "Habathcx", "RobotCaleb", "comster404", "brunofin", "thomasballinger",
    "noobs2ninjas", "beohoff"
];

var sortChannels = function(channelArray) {
    // sort the cahnnels in alphabetical order
    channelArray.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    return channelArray;
};

var displayTable = function(tableArray) {
    // function to display the channels as a table
    var table = "<div class = 'media'><div class='media-left'>";
    tableArray.forEach(function(chan) {
        if (chan.online === true) {
            // create a green well if channel is online
            table += "<a href='http://www.twitch.tv/" + chan.name +
                "'><div id='online' class='alert alert-success row' role='alert'>";
        } else {
            // create a red well if channel is offline
            table += "<a href='http://www.twitch.tv/" + chan.name +
                "'><div id='offline' class='alert alert-danger' role='alert'>";
        }
        table += "<img class='media-object thumb' src='" + chan.logo + "'><div class='media-body'>";
        table += "<div class='text-left'>" + chan.name + "</div></a></div></div></div></div>";
    });

    $(document).ready(function() {
        $("#tableDiv").html(table);
    });

};

usernames.forEach(function(name) {
    var username = "",
        online = false,
        logo = "";

    $.getJSON(url + 'streams/' + name + clientID).success(function(data) {
        var channelObj = {}; // create a new object for each channel
        channelObj.name = name;
        if (data.stream === null) {
            channelObj.online = false;
        } else {
            channelObj.online = true;
        }

        // Get picture
        $.getJSON(url + 'users/' + name + clientID).success(function(data) {
            if (data.logo == null) {    // if there's no picture, link to default avatar
                channelObj.logo = "images/avatar.gif";
            } else {
                channelObj.logo = data.logo;
            }
            console.log(channelObj.logo);
        });

        channels.push(channelObj);

        // Start building HTML table with ALL channels
        displayTable(sortChannels(channels));

    }); // End Callback function

}); // End forEach loop

$(document).ready(function() {

    $(document).on('change', 'input:radio[id^="inlineRadio1"]', function() {
        // ALL channels selected
        displayTable(channels);
    });

    $(document).on('change', 'input:radio[id^="inlineRadio2"]', function() {
        // ONLINE channels selected
        var onlineChannels = channels.filter(function(channel) {
            return channel.online;
        });
        displayTable(onlineChannels);
    });

    $(document).on('change', 'input:radio[id^="inlineRadio3"]', function() {
        // OFFLINE channels selected
        var offlineChannels = channels.filter(function(channel) {
            return !channel.online;
        });
        displayTable(offlineChannels);

    });

});
