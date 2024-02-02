var selectedOptions = 0; // Initialize the counter outside the function

function showMessage() {
    var citySelect = document.getElementById("citySelect");
    var messageDiv = document.getElementById("message");
    var messageDiv2 = document.getElementById("message2");

    var selectedCity = citySelect.value;

    // Increment the counter each time the function is called
    selectedOptions = selectedOptions + 1;

    if (selectedOptions === 7) {
        messageDiv2.textContent = "いつかまた";
    } else {
        messageDiv2.textContent = "";
        
        if (selectedCity === "yokohama") {
            messageDiv.textContent = "1週間で帰ってこい";
        } else if (selectedCity === "tokyo") {
            messageDiv.textContent = "彼氏と遊ぶな。1週間で帰ってこい。";
        } else if (selectedCity === "osaka") {
            messageDiv.textContent = "何がユニバじゃ。1週間で帰ってこい";
        } else if (selectedCity === "kyoto") {
            messageDiv.textContent = "浴衣暑いぞ。1週間で帰ってこい";
        } else if (selectedCity === "hokkaido") {
            messageDiv.textContent = "kitalive就任おめでとう。永住しろ。";
        } else if (selectedCity === "ishikawa") {
            messageDiv.textContent = "プチ旅行すんな。1週間で帰ってこい";
        } else if (selectedCity === "toyama") {
            messageDiv.textContent = "おはよう";
        } else {
            messageDiv.textContent = "";
        }
    }
}