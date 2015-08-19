      var app = angular.module('TwitchApi', []);
app.controller('MainCtrl', function ($scope, $http) {
    $scope.allUsers = [];
    $scope.onlineUsers = [];
    $scope.offlineUsers = [];
    var streamers = [
        'freecodecamp',
        'GeoffStorbeck',
        'terakilobyte',
        'habathcx',
        'notmichaelmcdonald',
        'RobotCaleb',
        'medrybw',
        'comster404',
        'brunofin',
        'thomasballinger',
        'joe_at_underflow',
        'noobs2ninjas',
        'mdwasp',
        'beohoff',
        'xenocomagain'
    ];
    var cb = '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?';
    var url = 'https://api.twitch.tv/kraken/';
    streamers.forEach(function (stream) {
        var obj = {};
        $.getJSON(url + 'streams/' + stream + cb).success(function (data) {
            var streaming = data.stream === null ? false : true;
            if (streaming) {
                obj.status = 'green fa fa-check';
                var streamTitle = data.stream.channel.status;
                if (streamTitle.length > 36) {
                    streamTitle = streamTitle.substring(0, 33);
                    streamTitle += '...';
                }
                obj.streamTitle = streamTitle;
            } else {
                obj.status = 'red fa fa-exclamation';
                data.streamTitle = '';
            }
            obj.username = stream;
            $.getJSON(url + 'users/' + stream + cb).success(function (data) {
                obj.name = data.display_name;
                obj.logo = data.logo;
                $scope.allUsers.push(obj);
                if (streaming) {
                    $scope.onlineUsers.push(obj);
                } else {
                    $scope.offlineUsers.push(obj);
                }
                $scope.profile = $scope.allUsers;
                $scope.$apply();
            });
        });
    });
    $('#mainMenu li').on('click', function () {
        if ($(this).data('display') === 'allUsers') {
            $scope.profile = $scope.allUsers;
        } else if ($(this).data('display') === 'onlineUsers') {
            $scope.profile = $scope.onlineUsers;
        } else {
            $scope.profile = $scope.offlineUsers;
        }
        $scope.$apply();
        $('#mainMenu li').removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });
});
app.directive('errSrc', function () {
    return {
        link: function (scope, element, attrs) {
            scope.$watch(function () {
                return attrs['ngSrc'];
            }, function (value) {
                if (!value) {
                    element.attr('src', attrs.errSrc);
                }
            });
            element.bind('error', function () {
                element.attr('src', attrs.errSrc);
            });
        }
    };
});
      //@ sourceURL=pen.js