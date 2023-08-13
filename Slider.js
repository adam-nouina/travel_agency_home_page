export default function sliderJs() {
    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.left');
    const nextButton = document.querySelector('.right');
    let isDown = false;
    let startX;
    let scrollLeft;
    console.log(sliderWrapper)
    console.log('ok')
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjust sensitivity of dragging
        slider.scrollLeft = scrollLeft - walk;
    });

    prevButton.addEventListener('click', () => {
        sliderWrapper.scrollLeft -= sliderWrapper.offsetWidth;
    });

    nextButton.addEventListener('click', () => {
        sliderWrapper.scrollLeft += sliderWrapper.offsetWidth;
    });

}