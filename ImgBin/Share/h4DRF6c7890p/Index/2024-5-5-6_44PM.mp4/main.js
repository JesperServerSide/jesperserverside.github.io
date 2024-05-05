// main.js

const heading = document.getElementById('h1');
const paragraph = document.getElementById('para');
const AcceptButton = document.getElementById('btn');
const DeclineButton = document.getElementById('btn2');

function activate() {
    console.log('Fired!');
    document.body.removeChild(heading);
    document.body.removeChild(paragraph);
    document.body.removeChild(AcceptButton);
    document.body.removeChild(DeclineButton);

    // Create a video variable.
    
    const roll = document.createElement('video');
    roll.setAttribute('src','roll.mp4');
    roll.setAttribute('type','video/mp4');
    roll.height = window.innerHeight;
    roll.width = window.innerWidth;

    document.body.appendChild(roll);

    // FullScreen

    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;

    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    openFullscreen();
    roll.play();
}

AcceptButton.onclick = activate;
DeclineButton.onclick = activate;

function GetRickrolled() {
    return 'Get Rickrolled.';
}

window.onbeforeunload = GetRickrolled;