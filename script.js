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

<<<<<<< HEAD
        if (elementTop < windowHeight && elementBottom > 0) {
=======
    if (scrollPosition > 50) {
        homepage.classList.add("blurred");
    } else {
        homepage.classList.remove("blurred");
    }

    texts.forEach((text, index) => {
        const elementTop = text.offsetTop;


        if (scrollPosition + windowHeight > elementTop - 200) { 
>>>>>>> 2cce423dc8bd840b7d0093c9f615001e4cb55d7f
            text.classList.add("visible");
        } else {
            text.classList.remove("visible"); 
        }
    });
<<<<<<< HEAD

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
=======
});
>>>>>>> 2cce423dc8bd840b7d0093c9f615001e4cb55d7f
