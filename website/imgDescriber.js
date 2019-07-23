function getImageDescription() {

  var imgFile = document.getElementById('uploadImage').value;
  var form = new FormData();
  form.append("image", imgFile);

  var http = new XMLHttpRequest();
  var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-Type', 'multipart/form-data');
  http.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b');

  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        // extract highest caption text element
        var jsonResp = JSON.parse(http.response);
        var caption = jsonResp.description.captions[0].text;
        document.getElementById('response').innerHTML += caption;
      }
  }

  // http.send("{\"url\":\"" + imgLink + "\"}" );
  http.send(form);
  // renderUploadedImage(imgLink);
}

// DISPLYAING IMG FROM LINK
// function renderUploadedImage(imgLink) {
//   var src = imgLink;
//   showImage(src, 276,270, "Google Logo");
// }
//
// function showImage(src, width, height, alt) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     img.alt = alt;
//     document.getElementById('response').appendChild(img);
// }

// function uploadImageFile() {
//   var imgElem = document.querySelector('img');
//   var file = document.querySelector('input[type=file]').files[0]; //sames as here
//   var reader  = new FileReader();
//
//   reader.onloadend = function () {
//       imgElem.src = reader.result;
//       imgLink = reader.result;
//   }
//
//   if (file) {
//     reader.readAsDataURL(file); //reads the data as a URL
//     imgLink = document.getElementById()
//   } else {
//       imgElem.src = "";
//   }
// }

function handleFileSelect(selector) {
  var files = document.getElementById(selector).files;

  for (var i = 0, f; f = files[i]; i++) {

        // Ensure the file is an image file.
        if (!f.type.match('image.*')) {
            alert("Selected file must be an image file.");
            document.getElementById("uploadImage").value = null;
            continue;
        }

        // Image must be <= 1 MB and should be about 1500px.
        if (f.size > 1000000) {
            alert("Image must be less than 1 MB.");
            document.getElementById("uploadImage").value = null;
            continue;
        }

        var reader = new FileReader();

        // Capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                var fileOutput = document.getElementById('thumbnail');

                if (fileOutput.childElementCount > 0) {
                    fileOutput.removeChild(fileOutput.lastChild);  // Remove the current pic, if it exists
                }

                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                    '" title="', escape(theFile.name), '"/>'].join('');
                fileOutput.insertBefore(span, null);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}
