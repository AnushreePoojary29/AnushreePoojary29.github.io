document.getElementById("clickBtn").addEventListener("click", function() {
    let msg = document.getElementById("message");
    msg.innerText = "🎉 Hello! You just clicked the magic button!";
    msg.style.color = "#4CAF50";
    msg.style.fontWeight = "bold";
});
