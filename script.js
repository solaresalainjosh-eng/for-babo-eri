document.getElementById("openMessage").addEventListener("click", function() {
    const messageBox = document.getElementById("messageBox");
    if (messageBox.classList.contains("hidden")) {
        messageBox.classList.remove("hidden");
    } else {
        messageBox.classList.add("hidden");
    }
});
