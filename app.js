// Function to copy text from a specific textarea
function copyText(targetId) {
  const textArea = document.getElementById(targetId);
  textArea.select();
  document.execCommand("copy");

  const feedback = document.getElementById("feedback");
  feedback.textContent = `Text copied from ${targetId.replace('text-input-', 'Section ')}!`;
}

// Add event listeners to buttons
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    copyText(targetId);
  });
});
