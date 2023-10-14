const fileName = document.querySelector(".fileName");

const fileInput = document.querySelector("input[type=file]");
fileInput.addEventListener("change", (e) => {
    const fd = new FormData();

  // add all selected files
  e.target.files.forEach((file) => {
    fd.append(e.target.name, file, file.name);  
  });
  
  // create the request
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        // we done!
    }
  };
  
  // path to server would be where you'd normally post the form to
  xhr.open('POST', '/path/to/server', true);
  xhr.send(fd);
});

