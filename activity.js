$(document).ready(function () {
    $("td").hover(function () {
        if ($(this).html() != "Not Available" && $(this).html() != "Hiking" && $(this).html() != "Kayak" && $(this).html() != "Skydiving" && $(this).html() != "Biking" && $(this).html() != "Camping") {
            $(this).css("cursor", "pointer");
        }
    },
        function () {
            $(this).css("cursor", "default");
        });
    $("td").click(function (e) {
        var content = $(this).text();
        if (content != "Not Available" && content != "Hiking" && content != "Kayak" && content != "Skydiving" && content != "Biking" && content != "Camping") {
            var cliffNum = $(this).index();
            var cliffs = ["West Cliff", "North Cliff", "East Cliff", "South Cliff"];
            
            $(this).toggleClass("highlight");

            if ($(this).hasClass("highlight")) {
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>"+content+ ' at ' +cliffs[cliffNum-1]+"</p>");
            } else {
                $('#result p:contains('+content+')').remove();

                if($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});