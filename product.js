$(document).ready(function(){
    for (var i = 0; i < 4; i++) 
    {
    $(".page-btn span")[i].click(function () {
            $(".page-btn span")[i].addClass('btn-clicked');
        }
    )
    }
});