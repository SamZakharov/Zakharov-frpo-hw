function redirectToUrl(protocol) {
    const urlInput = document.getElementById('urlInput').value;
    let formattedUrl = urlInput.trim();


    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = protocol + '://' + formattedUrl;
    }


    window.location.href = formattedUrl;
}