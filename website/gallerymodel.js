console.log('start2');
//var jsonResp;
// var tags = jsonResp.description.tags;
// var description = jsonResp.description.captions[0].text;
// var confidence = jsonResp.description.captions[0].confidence;

$('#profPhotos .profPhotoLink > img').bind (
    "mouseenter mouseleave", myImageMouseOver
);

$('#profPhotos .profPhotoLink > img').bind (
    "mouseenter mouseleave", myImageMouseOut
);


function getImageDescription(imgLink) {
    //var imgLink = document.getElementById("img-url").value;
    var http = new XMLHttpRequest();
    var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
    http.open('POST', url, true);
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b')
  
    http.onreadystatechange = function() {
        console.log(imgLink);
        if(http.readyState == 4 && http.status == 200) {
            console.log("chitt");
            //document.body.innerHTML = http.response;
          // extract highest caption text element
          var jsonResp = JSON.parse(http.response);

          var tags = jsonResp.description.tags;
          var description = jsonResp.description.captions[0].text;
          var confidence = jsonResp.description.captions[0].confidence;
          var caption = final_caption(tags, description, confidence);
          console.log("caption", caption);
          document.getElementById('imgGalleryDescrip').innerHTML = caption;
          //document.body.innerHTML = caption;
        }
    }
  
    http.send("{\"url\":\"" + imgLink + "\"}" );
  }




function myImageMouseOver (zEvent) {
    //console.log("tryingagain");
    zEvent = zEvent || window.event;
    // console.log("before", zEvent.type);
    // console.log("before", zEvent);
    if (zEvent.type == 'mouseover') {
        // console.log("trying");
        console.log ('Entering src: ', zEvent.srcElement.currentSrc);
        caption = getImageDescription(zEvent.srcElement.currentSrc);
        document.getElementById('popup').style.display = 'block';
    }
    if (zEvent.type == 'mouseout') {
        console.log("Leaving src");
        
    }
    /* else {
        console.log("after", zEvent);
        console.log("after", zEvent.type);
        console.log ('Leaving src: ', this.src);
    } */
}




function myImageMouseOut (zEvent) {
    zEvent = zEvent || window.event;
    if (zEvent.type == 'mouseout') {
        console.log("Leaving src");
        document.getElementById('popup').style.display = 'none';
    }
}

// myImageHover
