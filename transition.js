document.addEventListener("DOMContentLoaded", () => {
    const transitionElement = document.querySelector(".page-transition");
    const links = document.querySelectorAll("a");
    const content = document.querySelector(".content"); 

    window.onload = () => {
        setTimeout(() => {
            transitionElement.classList.add("hidden");
            content.classList.add("visible");
        }, 500); 
    };

    links.forEach(link => {
        link.addEventListener("click", event => {
            if (link.target === "_blank") {
                return; 
            }

            event.preventDefault();
            const targetUrl = link.href;
            content.classList.remove("visible");
            transitionElement.classList.remove("hidden");
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); 
        });
    });
});
