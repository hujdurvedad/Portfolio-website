let navButton = document.getElementById("fixed-nav-button");

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;

    if (verticalScrollPx > 600 || verticalScrollPx < 3000) {
        navButton.style.opacity = '1';
    } else {
        navButton.style.opacity = '0';
    }
});

const changingKeywords = document.querySelectorAll('span.changing-keyword');
const keywordsToggle = setKeywordsToggle(changingKeywords);

function setKeywordsToggle(keywords) {
    let index = 0;
    return setInterval(() => {
        keywords[index].classList.remove('shown');
        if (++index >= keywords.length)
            index = 0;
        keywords[index].classList.add('shown');
    }, 2500);
}