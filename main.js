var count = 0
 var audio = new Audio('audio.mp3');
function sound(){
    count = count + 1
    if(count > 1){
        count = 0
    }
    if(count == 1){
        // audio.currentTime = 0
        audio.play();
    }
    if(count == 0){
        audio.pause();
    }
}

function new_image(){
}
