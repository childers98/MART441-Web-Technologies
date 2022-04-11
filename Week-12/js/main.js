//audio changes
$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });
});


function updateAudio()
{
    $("#song").attr("src", "Smooth-Santana.mp3");//change audio
}

function updateVideo()
{
    $("#film").attr("src", "Cat.mp4"); //change film - download film 
}
