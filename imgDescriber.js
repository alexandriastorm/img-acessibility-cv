function getImageDescription() {

  var imgLink = document.getElementById("img-url").value;

  var http = new XMLHttpRequest();
  var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/json');
  http.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b')

  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        // extract highest caption text element
        var jsonResp = JSON.parse(http.response);
        var caption = jsonResp.description.captions[0].text;
        document.body.innerHTML = caption;
      }
  }

  http.send("{\"url\":\"" + imgLink + "\"}" );
}
