window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('#chat-icon');
    scroll.classList.toggle("active", window.scrollY > 50)
})