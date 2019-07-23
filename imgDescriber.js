function getImageDescription() {

  var imgLink = document.getElementById("img-url").value;

  var http = new XMLHttpRequest();
  var url = 'https://westus2.api.cognitive.microsoft.com/vision/v1.0/describe';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/json');
  http.setRequestHeader('Ocp-Apim-Subscription-Key', '9f0aad6adcaa4f6f8a2f1c4237a7421b')

  http.onreadystatechange = function() {
      console.log(imgLink);
      if(http.readyState == 4 && http.status == 200) {
          document.body.innerHTML = http.response;
      }
  }

  http.send("{\"url\":\"" + imgLink + "\"}" );
 
 
  function add_google_logo() {
    var src = imgLink;
    show_image(src, 276,270, "Google Logo");
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
add_google_logo()
}

