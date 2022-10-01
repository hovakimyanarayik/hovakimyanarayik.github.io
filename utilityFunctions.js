export function activatePage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        if(p.innerText != page) {
            p.classList.remove('active')
        } else {
            p.classList.add('active')
        }
    })
}


export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}