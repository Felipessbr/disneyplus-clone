const sliderItems = document.querySelectorAll('[data-banner="item"]')
function init(){
    sliderItems.forEach(function(slide, index){
        const link =  slide.querySelector('.banner-slide__link')
            link.addEventListener('click', function(event){
                event.preventDefault()
            });
        slide.addEventListener('mousedown', function(){
            console.log('apertou o botao do mause')
        });

        slide.addEventListener('mouseup', function(){
            console.log('Soltou o batao do mause')
        });
        slide.addEventListener('mousemove', function(){
            console.log('moveu o mause emcima do elemento')
        });
    });
}
export default{
    init
}