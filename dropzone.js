var dropzone = $(".dropzone");

dropzone.ondrop = function(e) {
  e.preventDefault();
  this.className = "col-md-10 dropzone";
  console.log(e.dataTransfer.files);
}

dropzone.ondragover = function() {
  this.className = 'col-md-10 dropzone dragover';
  console.log("Drag in");
  return false;
}

dropzone.ondragleave = function() {
  this.className = 'col-md-10 dropzone';
  console.log("Drag out");
  return false;
}

$('.dropzone').hover(function(){

  this.ondrop = function(e) {
    e.preventDefault();
    this.className = "col-md-9 dropzone";
    console.log(e.dataTransfer.files);
  }

  this.ondragover = function() {
    this.className = 'col-md-9 dropzone dragover';
    console.log("Drag in");
    return false;
  }


  this.ondragleave = function() {
    this.className = 'col-md-9 dropzone';
    console.log("Drag out");
    return false;
  }

})
