(function(ns) {

    var _chain = {};

    ns.addLine = function(line) {
        var arr = line.replace(/[^A-Za-z ]/g, "").split(" ");
        arr.forEach(function(word, i) {
            var key = i == 0 ? -1 : arr[i - 1];
            _chain[key] = _chain[key] || [];
            _chain[key].push(word);
            if (i == arr.length - 1) {
                _chain[word] = _chain[word] || [];
                _chain[word].push(-1);
            }
        });
    };

    var getNextWord = function(currentWord) {
        var index = Math.floor(Math.random() * _chain[currentWord].length);
        return _chain[currentWord][index];
    };

    ns.getLine = function() {
        var currentWord = getNextWord(-1);
        var line = "";

        while(currentWord != -1) {
            line += " " + currentWord;
            currentWord = getNextWord(currentWord);
        };
        line += ".";

        return line.trim();
    };

})(window.MARKOV = {});
