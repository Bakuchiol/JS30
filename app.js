const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active')
    // console.log(e.pageX);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
    // console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active')
    
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active')

});

slider.addEventListener('mousemove', (e) => {
    console.log(isDown);
    console.log('WORKS');
    // stops the function from running
    if(!isDown) return
    // console.log(startX);
    e.preventDefault() // stop selecting of text inside/weird clicks
    // where cursor is when move left/right
    const x = e.pageX - slider.offsetLeft;
    // console.log({x, startX});
    const walk = (x -startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});