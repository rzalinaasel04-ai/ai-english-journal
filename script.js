function analyzeText() {
    const text = document.getElementById("entry").value.trim();
    if (text === "") {
        alert("Please write something first.");
        return;
    }

    // Показываем текст
    document.getElementById("result").innerHTML = "<h3>Your text:</h3><p>" + text + "</p>";

    // Считаем слова
    const words = text.split(/\s+/).length;
    document.getElementById("wordCount").innerHTML = "<p>Word count: " + words + "</p>";
}
