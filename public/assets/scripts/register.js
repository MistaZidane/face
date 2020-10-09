'use strict';
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;
// canvas.width = 45;
// canvas.heigh = 45;
let width = 350;
let height = width/(4/3);
const button = document.querySelector('button');
button.onclick = function() {

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
canvas.getContext('2d').drawImage(video, 0, 0, width, height);
  console.log(`picture taken`);
 // console.log(canvas.toDataURL("image/jpeg"))
 register(canvas.toDataURL("image/jpeg"));
};

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}
function register(face) {
  let button = document.querySelector("button");
  let name = document.querySelector('#name').value;
  // loader.style.display = "block";
  // login_label.style.display = "none";
  button.disabled = true;
  // console.log(face);
  const blobUrl = b64toBlob(face);
  var bodyFormData = new FormData();
  bodyFormData.append("image", blobUrl);
  axios({
    method: "post",
    url: `http://localhost:5000/api/register`,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      "username": `"${name}"`
    },
  })
    .then(function ({data, headers }) {
      // console.log(response);
      //handle success
      console.log(data, headers);
      let callback = headers.registercallback;
      let status = btoa(data.status);
      let message = btoa(data.message);
   window.location.replace(`https://${callback}?status=${status}&message=${message}&username=${name}`);
      console.log(`https://${callback}`);
    })
    .catch(function ({ data }) {
      //handle error
      console.log(data);
    });
}
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