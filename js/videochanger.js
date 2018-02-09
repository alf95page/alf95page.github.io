var videocontainer = document.getElementById('videoclip');
var videosource = document.getElementById('mp4video');
var videoButtons = document.getElementsByClassName("videolink");

for (var i = 0; i < videoButtons.length; i++) {
  videoButtons[i].addEventListener("click", changeVideo, false);

}

function changeVideo() {
  var newLink = this.dataset.videolink;
  console.log("Changing video to source: " + newLink);
  videocontainer.pause();
  videosource.setAttribute('src', newLink);
  videocontainer.load();
  videocontainer.play();
}