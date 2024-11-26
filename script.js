document.addEventListener("scroll", () => {
    const homepage = document.querySelector(".homepage");
    const scrollPointer = document.querySelector(".scroll-pointer");
    const texts = document.querySelectorAll(".large-text");
    const textBg = document.querySelector(".text-bg");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    texts.forEach((text) => {
        const elementTop = text.getBoundingClientRect().top;
        const elementBottom = text.getBoundingClientRect().bottom;

        if (elementTop < windowHeight && elementBottom > 0) {
            text.classList.add("visible");
        } else {
            text.classList.remove("visible"); 
        }
    });

    if (scrollPosition > 50) {
        scrollPointer.style.opacity = "0";
        scrollPointer.style.pointerEvents = "none";

        textBg.style.opacity = "0";
        textBg.style.pointerEvents = "none";

        title.style.opacity = "0";
        subtitle.style.opacity = "0";
    } else {
        scrollPointer.style.opacity = "1";
        scrollPointer.style.pointerEvents = "auto";

        textBg.style.opacity = "1";
        textBg.style.pointerEvents = "auto";

        title.style.opacity = "1";
        subtitle.style.opacity = "1";
    }

});