//  /**   
// // * Description of the file: The jss file for the sdk face auth interface login and register pages. Add link pointers with {@link linkname}   
// // * @author Mambo Joy Cho  
// // * @date Date created  23/09/2020 
// // * Contributors : contributor name,
// // * @Reference: Code snippet from github.com/webrtc/samples/blog/gh-pages/src/content/getusermedia/canvas/index.html
// // **/

'use strict';
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;
// canvas.width = 45;
// canvas.heigh = 45;

const button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  console.log(`picture taken`);
};

const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);