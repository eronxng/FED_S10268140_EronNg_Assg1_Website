document.addEventListener("scroll", () => {
    const homepage = document.querySelector(".homepage");
    const texts = document.querySelectorAll(".large-text");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > 50) {
        homepage.classList.add("blurred");
    } else {
        homepage.classList.remove("blurred");
    }

    texts.forEach((text, index) => {
        const elementTop = text.offsetTop;


        if (scrollPosition + windowHeight > elementTop - 200) { 
            text.classList.add("visible");
        }
    });
});
