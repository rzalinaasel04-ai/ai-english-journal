function analyzeText() {
    const text = document.getElementById("entry").value.trim();
    if (!text) {
        alert("Please write something first.");
        return;
    }

    // Пока без AI: показываем исправления заглушкой
    const corrections = [
        "Grammar check: ✅", 
        "Suggested improvements: Try using more advanced vocabulary, e.g., 'happy' → 'elated', 'walk' → 'stroll'."
    ];

    // Формируем вывод
    let output = "<h3>Your text:</h3><p>" + text + "</p>";
    output += "<h3>Suggestions:</h3><ul>";
    corrections.forEach(item => {
        output += "<li>" + item + "</li>";
    });
    output += "</ul>";

    document.getElementById("result").innerHTML = output;
}
