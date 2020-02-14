let dropdowns = document.querySelectorAll('.vertical-dropdown');

dropdowns.forEach(dropdown => {
    let anchor = dropdown.querySelector('.anchor');
    let hidden = dropdown.querySelector('.hiding');

    if (dropdown.classList.contains("click")) {
        anchor.addEventListener('click', () => {
            
            if (hidden.classList.contains("show")) {
                hidden.classList.remove("show");
            } else {
                hidden.classList.add("show");
            }
        })
    } else if (dropdown.classList.contains("hover")) {
        anchor.addEventListener('mouseover', () => {
            hidden.classList.add("show");
        });

        dropdown.addEventListener('mouseleave', () => {
            hidden.classList.remove("show");
        });
    }
    
});

let sliders = document.querySelectorAll('.img-slider');

sliders.forEach(slider => {
    let back = slider.querySelector('.back');
    let forward = slider.querySelector('.forward');
    let imgwrapper = slider.querySelector('.imgwrapper');
    let controls = slider.querySelector('.controls');

    
    let currentImage = 0;
    let maxImages = imgwrapper.childElementCount;

    for (let i = 0; i < maxImages; i++) {
        let circle = document.createElement('span');
        circle.classList.add("nav-circle");

        circle.dataset.image = i;
        circle.addEventListener('click', (e) => {
            setImage(e.target.dataset.image);
            resetCountdown();
        })
        controls.appendChild(circle);
    }

    function setImage(number) {
        currentImage = number;
        positionImage();
    }

    function nextImage() {
       currentImage = ++currentImage % maxImages;
       positionImage();        
    }

    function prevImage() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = maxImages - 1;
        }
        positionImage();
    }

    function resetCountdown() {
        window.clearInterval(countdown);
        countdown = window.setInterval(nextImage, 3000);
    }

    function positionImage() {
        imgwrapper.style = `left: -${400*currentImage}px`;
        colorCircle(); 
    }

    function colorCircle() {
        let circles = controls.childNodes;

        circles.forEach(circle => {
            circle.classList.remove('selected');
        })

        controls.childNodes[currentImage].classList.add('selected');
    }

    forward.addEventListener('click', nextImage);
    back.addEventListener('click', prevImage);
    //Better way to do this?
    forward.addEventListener('click', resetCountdown);
    back.addEventListener('click', resetCountdown);
    let countdown = window.setInterval(nextImage, 3000);
})
