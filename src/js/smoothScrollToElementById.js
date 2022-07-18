function smoothScrollToElementById(elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: "smooth"
    });
}