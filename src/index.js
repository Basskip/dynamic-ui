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

