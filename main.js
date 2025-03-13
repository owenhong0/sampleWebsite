document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('navigateButton');
    const navButton2 = document.getElementById('navigateButton2');
    
    if (navButton) {
        navButton.addEventListener('click', () => {
            window.location.href = "secondPage.html"; 
        });
    }

    if (navButton2) {
        navButton2.addEventListener('click', () => {
            window.location.href = "index.html"; 
        });
    }
});
