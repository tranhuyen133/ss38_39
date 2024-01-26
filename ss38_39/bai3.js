document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const fadingImage = document.getElementById('fadingImage');

 
    setTimeout(() => {
        fadingImage.style.opacity = '1';
        overlay.style.opacity = '0';
    }, 1000); 
  
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 2000); 

   
    let percentage = 0;
    const increasePercentage = () => {
        if (percentage <= 100) {
            overlay.style.background = `rgba(0, 0, 0, ${percentage / 100})`;
            percentage++;
            setTimeout(increasePercentage, 20); 
        }
    };

    increasePercentage();
});
