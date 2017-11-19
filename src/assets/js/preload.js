const { ipcRenderer } = require('electron');

document.addEventListener("click", function () {
	ipcRenderer.sendToHost("clicked");
})