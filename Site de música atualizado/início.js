var audios = [
    document.getElementById("audio-01"),
    document.getElementById("audio-02"),
    document.getElementById("audio-03")
];

for (var i = 0; i < audios.length; i++) {
    audios[i].addEventListener("play", function () {
        pauseOthersAudios(this);
    });
};

function pauseOthersAudios(currentAudio) {
    for (var i = 0; i < audios.length; i++) {
        if (audios[i] !== currentAudio) {
            audios[i].pause();
        }
    }
}