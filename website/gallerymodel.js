console.log('start2');
//var jsonResp;
// var tags = jsonResp.description.tags;
// var description = jsonResp.description.captions[0].text;
// var confidence = jsonResp.description.captions[0].confidence;

$('#profPhotos .profPhotoLink > img').bind (
    "mouseenter mouseleave", myImageHover
);

var Image = require("parse-image");
function getBase64Version(url){
    Parse.Cloud.httpRequest({
        url: url,
        success: function(response) {
          // The file contents are in response.buffer.
          var image = new Image();
          return image.setData(response.buffer, {
            success: function() {
              console.log(image.data().toString("base64"));
            },
            error: function(error) {
              // The image data was invalid.
            }
          })
        },
        error: function(error) {
          // The networking request failed.
        }
      });
}


function myImageHover (zEvent) {
    //console.log("tryingagain");
    zEvent = zEvent || window.event;
    console.log("before", zEvent.type);
    console.log("before", zEvent);
    if (zEvent.type == 'mouseover') {
        console.log("trying");
        console.log ('Entering src: ', zEvent.srcElement.currentSrc);

        var bytes = getBase64Version(zEvent.srcElement.currentSrc);
        console.log(bytes);
        var imgLink = zEvent.srcElement.currentSrc;
        console.log(imgLink);
        var http = new XMLHttpRequest();
        var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/json');
        http.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b')

        http.onreadystatechange = function() {
            if(http.status == 200) {
                console.log("hit");
                document.body.innerHTML = http.response;
                var jsonResp = JSON.parse(http.response);
                console.log(answer);
                var answer = jsonResp.description.captions[0].text;
                console.log("sfasdf", answer);
            }
        }
        http.send(bytes);

        document.getElementById('galleryDescrip').innerHTML = this.src;
    }
    else {
        console.log("after", zEvent);
        console.log("after", zEvent.type);
        console.log ('Leaving src: ', this.src);
    }
}

// myImageHover