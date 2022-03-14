function isEmpty() {
    var input = document.getElementById("input-container").classList;
    var errorMessage = document.getElementById("error-message");
    var iconError = document.getElementById("icon");
    if (document.getElementById("input").value.length == 0) {
        input.add('error');
        errorMessage.style.visibility = 'visible';
        iconError.style.visibility = 'visible';
    } else {
        input.remove('error');
        errorMessage.style.visibility = 'hidden';
        iconError.style.visibility = 'hidden';
    }
}