/*
    video
 */

$(document).ready(function () {
    $('.advantages__content-video section figure').css({
        overflow: 'hidden',
        background: '#000',
        cursor: 'pointer',
        position: 'relative'
    });

    $('.video-media').css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none'
    });

    $('.video-play').css({
        background: 'url(img/video-play.png) no-repeat center/cover',
        width: 80,
        height: 80,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99,
        pointerEvents: 'none'
    });

    $('.js-show-video').on('click', function () {
        var id = $(this).data('video'),
            parent = $(this).parent()[0],
            iframe = '<iframe class="video-media" src="https://www.youtube.com/embed/' + id + '?autoplay=1&amp;loop=1&amp;&amp;playlist=Video_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $(parent).empty();
        $(parent).append(iframe);
        $('.video-media').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
        });
    });
});