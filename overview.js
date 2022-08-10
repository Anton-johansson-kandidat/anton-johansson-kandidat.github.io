
function showHideInfo(elemId) {
    var textInfo = document.getElementById(elemId)
    var dropDownBtn = document.getElementById(elemId + '+')

    var displayStyle = dropDownBtn.innerHTML == '-' ? 'none' : 'block';
    var newBtn = dropDownBtn.innerHTML == '+' ? '-' : '+';
    textInfo.style.display = displayStyle;
    dropDownBtn.innerHTML = newBtn
}
