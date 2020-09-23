/*
    Video
 */

(function() {
    let videoStyle = {
        overflow: "hidden",
        background: "#111",
        cursor: "pointer"
    };
    let videoMediaStyle = {
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
        border: "none"
    };
    let btnPlayStyle = {
        background:
            "no-repeat url(https://s.ytimg.com/yts/imgbin/player-cougar-vflfnBV4R.png) -58px 0",
        "background-size": "auto",
        width: "68px",
        height: "48px",
        position: "absolute",
        "z-index": "99",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        "pointer-events": "none"
    };
    $("figure.clip").css(videoStyle);
    $(".video-media").css(videoMediaStyle);
    $(".video-play").css(btnPlayStyle);

    $(".js-show-video").click(function() {
        let id = $(this).data("video");
        let parent = $(this).parent()[0];
        let iframe =
            '<iframe class="video-media" src="https://www.youtube.com/embed/' +
            id +
            '?autoplay=1&amp;loop=1&amp;&amp;playlist=Video_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $(parent).empty();
        $(parent).append(iframe);
        $(".video-media").css(videoMediaStyle);
    });
})();