function getFileBytes(aFile) {
  var b64Data = aFile.result.split(',');
  var contentType = 'image/jpeg';
  var byteCharacters = atob(b64Data[1]);
  var byteNumbers = Array.prototype.map.call(byteCharacters,
                                 charCodeFromCharacter);
  byteData = new Uint8Array(byteNumbers);

  return byteData;
}

function getImageDescriptionUpload() {

  var file = document.getElementById('img-upload').files[0];
  var fr = new FileReader();

  fr.onload = (function(aFile) {
    return function(e) {
      var bytes = getFileBytes(aFile);

      var xhr = new XMLHttpRequest();
      var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
      xhr.open("POST", url);

      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b');

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
          // extract highest caption text element
        var jsonResp = JSON.parse(xhr.response);
        var tags = jsonResp.description.tags;
        var description = jsonResp.description.captions[0].text;
        var confidence = jsonResp.description.captions[0].confidence;
          var caption = final_caption(tags, description, confidence);
          document.getElementById('imgDescrip').innerHTML = caption;
          renderUploadedImage(aFile.result);
        }
      }

      xhr.send(byteData);
    }
  })(fr);
  fr.readAsDataURL(file);
}

function charCodeFromCharacter(c) {
     return c.charCodeAt(0);
}

function renderUploadedImage(fileInfo) {
  document.getElementById('imgPreview').src = "";
  document.getElementById('imgPreview').src = fileInfo;
}
