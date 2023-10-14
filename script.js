const socket = new WebSocket("ws://51.250.121.92:8080");

const fileInput = document.querySelector("input[type=file]");
fileInput.addEventListener("change", (e) => {
    const fd = new FormData();

  e.target.files.forEach((file) => {
    fd.append(e.target.name, file, file.name);  
  });
  
  socket.send(fd);
});

