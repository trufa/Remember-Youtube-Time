/*globals console*/
var PREFIX,
    getVideoId,
    video_id,
    ampersandPosition,
    ytplayer,
    setVideoTime,
    getVideoTime,
    setLocalStorage,
    update;

PREFIX = "REMEMBER_YOUTUBE_TIME_";

getVideoId = function () {
    'use strict';
    var v_id = window.location.search.split('v=')[1];
    ampersandPosition = v_id.indexOf('&');
    if (ampersandPosition !== -1) {
        v_id = video_id.substring(0, ampersandPosition);
    }
    return v_id;
};

ytplayer = document.getElementById("movie_player");
video_id = getVideoId();


setVideoTime = function (time) {
    'use strict';
    ytplayer.seekTo(time);
};

getVideoTime = function () {
    'use strict';
    return ytplayer.getCurrentTime();
};

setLocalStorage = function (time) {
    'use strict';
    localStorage.setItem(PREFIX + video_id, time.toString());
};

update = function () {
    'use strict';
    setLocalStorage(getVideoTime());
};


setInterval(update, 1000);