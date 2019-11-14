let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'],
    body = document.querySelector('body'),
    btnSlide = document.querySelector('#createSlide'),
    containerSlick = document.createElement('div');

containerSlick.className = "slick-container";
containerSlick.style.width = 600 + 'px';
containerSlick.style.marginLeft = 350 + 'px';
containerSlick.style.marginTop = 150 + 'px';
body.appendChild(containerSlick);

images.forEach(function(item) {
   let elem = document.createElement('img'),
       contant = document.createElement('div');
    contant.className = 'content';
    containerSlick.appendChild(contant);
    elem.setAttribute('src', '/images/' + item);
    contant.appendChild(elem);
});

$(document).on('ready', function() {
    $(".slick-container").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });



