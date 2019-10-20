$(document).ready(function () {
    console.log("loaded");
    setInterval(function () { $('#obstacles').append($('<div class="obstacles"></div>').animate({ "right": "100%" }, 2000, 'linear', function () { $(this).remove(); })); }, 2000);

    $(document).keypress(function (e) {
        if (e.which === 32) {
            $('#trex')
                .animate({ "bottom": "150px" }, 300)
                .animate({ "bottom": "-20px" }, 300)
        }
    });
    setInterval(function () {
        var playerpos = $('#trex').position();
        $('#obstacles').children(".obstacles").each(
            function () {
                var o = $(this).position();
                var px = playerpos.left + 50;
                var py = playerpos.top + 60;
                if (o.left < px && o.left + 50 > px && o.top < py && o.top + 100 > py) {
                    alert("GAME OVER!");
                }
                
            }
        )
    }
    )
});