<template>
  <!-- <div class="section"> -->
  <div id="carouselExampleControls" class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="~/static/assets/images/slide-2.jpg" class="carousel-img" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img src="~/static/assets/images/Slider-01.png" class="carousel-img" alt="Second slide" />
      </div>
      <!-- <div class="carousel-item">
        <img src="~/static/assets/images/Slider-02.png" class="carousel-img" alt="Third slide" />
      </div> -->
    </div>

    <a id="carouselPrev" class="carousel-control-prev" href="#carouselExampleControls" role="button">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a id="carouselNext" class="carousel-control-next" href="#carouselExampleControls" role="button">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- </div> -->
</template>
<script scoped>
export default {
  mounted() {
    const carousel = document.getElementById('carouselExampleControls')
    const items = carousel.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let isActive = true;

    function setCurrentItem(index) {
      currentItem = (index + items.length) % items.length;
    }

    function hideItem(direction) {
      isActive = false;
      items[currentItem].classList.add(direction);
      items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
      });
    }

    function showItem(direction) {
      items[currentItem].classList.add('next', direction);
      items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isActive = true;
      });
    }

    document.getElementById('carouselPrev').addEventListener('click', function (e) {
      e.preventDefault()
      if (isActive) {
        hideItem('to-right');
        setCurrentItem(currentItem - 1);
        showItem('from-left');
      }
    });

    document.getElementById('carouselNext').addEventListener('click', function (e) {
      e.preventDefault()
      if (isActive) {
        hideItem('to-left');
        setCurrentItem(currentItem + 1);
        showItem('from-right');
      }
    });
  },
}

</script>
<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

img {
  display: block;
  vertical-align: middle;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
 
}

.carousel-inner>.carousel-item {
  position: relative;
  display: none;
  animation: 0.6s ease-in-out;
  /* height: 70vh; */
  /* Set your height */
}

.carousel-item>.carousel-img {
  width: 100%;
  /* min-height: 30vh;
  max-height: 50vh; */
  /* height: 600px; */
  /* height: auto; */
}

.carousel-item.carousel-video {
  display: block;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  /* uncomment the following line if you want to prevent mouse (or touch) clicks */
  /* pointer-events: none; */
}

.carousel-inner>.active,
.carousel-inner>.next {
  display: block;
}

.carousel-inner>.next {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel-inner>.to-left {
  animation-name: left;
}

.carousel-inner>.from-right {
  animation-name: right;
}

.carousel-inner>.to-right {
  animation-name: right;
  animation-direction: reverse;
}

.carousel-inner>.from-left {
  animation-name: left;
  animation-direction: reverse;
}

.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  cursor: pointer;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {

  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}

.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50% / 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

@keyframes left {
  from {
    left: 0;
  }

  to {
    left: -100%;
  }
}

@keyframes right {
  from {
    left: 100%;
  }

  to {
    left: 0;
  }
}

/* .carousel-control-prev-icon,
.carousel-control-next-icon:hover {
  background-color: #f02640;
} */
</style>



<!-- 
~/static/assets/images/slide-2.jpg
~/static/assets/images/slide-3.jpg
~/static/assets/images/slide-2kids.webp
-->