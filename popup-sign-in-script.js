const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.transform = 'scale(1.3)';
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#f5c2e0';
    button.style.color = 'black';
    button.style.transform = 'scale(1)';
});

button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'login' }, function (response) {
        if (response === 'success') window.location.replace("./popup-sign-out.html");
    });
});