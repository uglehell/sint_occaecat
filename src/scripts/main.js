
// reload on resize

const windowSize = {
  width: innerWidth,
  height: innerHeight
}

window.addEventListener('resize', () => {
  if (innerWidth != windowSize.width || innerHeight < windowSize.height) location.reload()
})

// remove loading

const loading = document.querySelector('.loading')

document.addEventListener('DOMContentLoaded', () => {
  loading.style.opacity = '0'
  setTimeout(() => loading.remove(), 500)
})

// global

const viewPortDiagonal = Math.hypot(innerWidth, innerHeight)

let PCVersion = false

// navigation

const navigation = {
  button: document.querySelector('.nav-button'),
  container: document.querySelector('nav.nav'),
  isActive: false,
  links: document.querySelectorAll('.nav__link')
}

const navCallback = () => {
  navigation.isActive = !navigation.isActive

  if (navigation.isActive) {
    navigation.container.classList.remove('hidden')
    setTimeout(() => navigation.container.classList.add('nav--active'), 10)

    document.querySelector('.nav-button__active').classList.remove('nav-button__active--disable')
    document.querySelector('.nav-button__disable').classList.add('nav-button__disable--disable')
  } else {
    navigation.container.classList.remove('nav--active')
    document.querySelector('.nav-button__active').classList.add('nav-button__active--disable')
    document.querySelector('.nav-button__disable').classList.remove('nav-button__disable--disable')

    setTimeout(() => {
      !navigation.isActive && navigation.container.classList.add('hidden')
    }, 500)
  }
}
const navLinkCallback = () => {
  navigation.isActive = false

  if (navigation.isActive) {
    navigation.container.classList.remove('hidden')
    setTimeout(() => navigation.container.classList.add('nav--active'), 10)

    document.querySelector('.nav-button__active').classList.remove('nav-button__active--disable')
    document.querySelector('.nav-button__disable').classList.add('nav-button__disable--disable')
  } else {
    navigation.container.classList.remove('nav--active')
    document.querySelector('.nav-button__active').classList.add('nav-button__active--disable')
    document.querySelector('.nav-button__disable').classList.remove('nav-button__disable--disable')

    setTimeout(() => {
      !navigation.isActive && navigation.container.classList.add('hidden')
    }, 500)
  }
}

navigation.button.addEventListener('click', navCallback)

navigation.links.forEach(link => {
  link.addEventListener('click', navLinkCallback)

  for(let spanIndex = 0; spanIndex < link.childNodes.length; spanIndex++) {
    link.childNodes[spanIndex].style.transitionDelay = spanIndex * .06 + 's'
  }
})

// home

const home = {
  canvas: document.querySelector('.home__background'),
  particles: []
}

class HomeParticle {
  constructor(source, x, y, parallaxFactor, width, height) {
    this.image     = new Image()
    this.image.src = source

    this.x = x
    this.y = y

    this.deltaY = 0

    this.width  = width
    this.height = height

    this.parallaxFactor = parallaxFactor

    this.isSizeGiven = width && height

    this.image.onload = () => this.draw()
  }
  
  logic() {
    this.deltaY = pageYOffset * this.parallaxFactor
  }
  
  draw() {
    if (!this.isSizeGiven) {
      home.canvasCtx.drawImage(this.image, this.x, this.y + this.deltaY)
    }
    else {
      home.canvasCtx.drawImage(this.image, this.x, this.y + this.deltaY, this.width, this.height)
    }
  }
}

home.canvasCtx = home.canvas.getContext('2d')

home.canvas.width  = document.querySelector('.home').clientWidth
home.canvas.height = document.querySelector('.home').clientHeight

const initHomeBg = () => {
  home.canvasCtx.globalAlpha = .4

  if (innerHeight < 380) {
    if (innerWidth < 700) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .14, home.canvas.height * .19, .2))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .14 + 20, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6, home.canvas.height * .12, .4, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63, home.canvas.height * .5, .6))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110, home.canvas.height * .5 + 80, .4))
    } else {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .14, home.canvas.height * .19, .2))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .14 + 20, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .4, home.canvas.height * .45, .2))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6, home.canvas.height * .12, .4, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63, home.canvas.height * .5, .6))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110, home.canvas.height * .5 + 80, .4))
    }
  } else if (innerHeight < 600) {
    if (innerWidth < 460) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .2 - 40, home.canvas.height * .14, .1, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .2 + 20 - 40, home.canvas.height * .14 + 100, .6, 60, 60))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .2 - 40, home.canvas.height * .72, .3, 80, 80))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .7 - 40, home.canvas.height * .27, .4, 120, 120))
      home.particles.push(new HomeParticle('images/bg-particles/10.svg', home.canvas.width * .3, home.canvas.height * .5, .5, 90, 90))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .59 - 40, home.canvas.height * .63, .2))
    } else if (innerWidth < 700) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17 - 40, home.canvas.height * .19, .2, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20 - 40, home.canvas.height * .19 + 110, .6, 60, 60))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .46 - 40, home.canvas.height * .47, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6 - 40, home.canvas.height * .12, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63 - 40, home.canvas.height * .66, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .67 + 85 - 40, home.canvas.height * .12 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110 - 40, home.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17, home.canvas.height * .19, .2))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .46, home.canvas.height * .47, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6, home.canvas.height * .12, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63, home.canvas.height * .66, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .67 + 85, home.canvas.height * .12 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110, home.canvas.height * .66 + 80, .4))
    }  else {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .25 - 30, home.canvas.height * .35, .2, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 30, home.canvas.height * .22, .3))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 30, home.canvas.height * .22 + 130, .5))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .25 + 20 - 30, home.canvas.height * .35 + 100, .6, 60, 60))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .085 - 30, home.canvas.height * .1, .1))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 30, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 30, home.canvas.height * .15, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .54 - 30, home.canvas.height * .62, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 30, home.canvas.height * .15 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .54 - 110 - 30, home.canvas.height * .62 + 80, .4))
    }
  } else if (innerHeight < 750) {
    if (innerWidth < 460) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .2 - 40, home.canvas.height * .14, .1, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .2 + 20 - 40, home.canvas.height * .14 + 100, .6, 60, 60))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .2 - 40, home.canvas.height * .72, .3, 80, 80))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .7 - 40, home.canvas.height * .27, .4, 120, 120))
      home.particles.push(new HomeParticle('images/bg-particles/10.svg', home.canvas.width * .3, home.canvas.height * .5, .5, 90, 90))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .59 - 40, home.canvas.height * .63, .2))
    } else if (innerWidth < 700) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17 - 30, home.canvas.height * .19, .2, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20 - 30, home.canvas.height * .19 + 100, .6, 80, 80))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 30, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .46 - 30, home.canvas.height * .47, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6 - 30, home.canvas.height * .12, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63 - 30, home.canvas.height * .66, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .67 + 85 - 30, home.canvas.height * .12 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110 - 30, home.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 40, home.canvas.height * .35, .2))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 40, home.canvas.height * .22, .3))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 40, home.canvas.height * .22 + 130, .5))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 40, home.canvas.height * .35 + 157, .6))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .085 - 40, home.canvas.height * .1, .1))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .66 - 40, home.canvas.height * .39, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 40, home.canvas.height * .15, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .54 - 40, home.canvas.height * .62, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 40, home.canvas.height * .15 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .54 - 110 - 40, home.canvas.height * .62 + 80, .4))
    } else {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 30, home.canvas.height * .35, .2))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 30, home.canvas.height * .22, .3))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 30, home.canvas.height * .22 + 130, .5))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 30, home.canvas.height * .35 + 157, .6))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .085 - 30, home.canvas.height * .1, .1))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 30, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .61 - 30, home.canvas.height * .36, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 30, home.canvas.height * .15, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .54 - 30, home.canvas.height * .62, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 30, home.canvas.height * .15 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .54 - 110 - 30, home.canvas.height * .62 + 80, .4))
    }
  } else if (innerHeight < 900) {
    if (innerWidth < 460) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17 - 40, home.canvas.height * .19, .1))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20 - 40, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .7 - 40, home.canvas.height * .27, .4))
      home.particles.push(new HomeParticle('images/bg-particles/10.svg', home.canvas.width * .23, home.canvas.height * .5, .5))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .59 - 40, home.canvas.height * .63, .2))
    } else if (innerWidth < 615) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17 - 40, home.canvas.height * .19, .2))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20 - 40, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .46 - 40, home.canvas.height * .47, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6 - 40, home.canvas.height * .12, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63 - 40, home.canvas.height * .66, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .67 + 85 - 40, home.canvas.height * .12 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110 - 40, home.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 700) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .17, home.canvas.height * .19, .2))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .17 + 20, home.canvas.height * .19 + 140, .6))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .46, home.canvas.height * .47, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .6, home.canvas.height * .12, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .63, home.canvas.height * .66, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .67 + 85, home.canvas.height * .12 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .63 - 110, home.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 40, home.canvas.height * .4, .2))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 40, home.canvas.height * .22, .3))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 40, home.canvas.height * .22 + 130, .5))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 40, home.canvas.height * .4 + 157, .6))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .12 - 40, home.canvas.height * .1, .1))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .66 - 40, home.canvas.height * .5, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 40, home.canvas.height * .15, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .6 - 40, home.canvas.height * .73, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 40, home.canvas.height * .15 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .6 - 110 - 40, home.canvas.height * .73 + 80, .4))
    } else if (innerWidth < 1200) {
        home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 30, home.canvas.height * .35, .2))
        home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 30, home.canvas.height * .22, .3))
        home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 30, home.canvas.height * .22 + 130, .5))
        home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 30, home.canvas.height * .35 + 157, .6))
        home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .085 - 30, home.canvas.height * .1, .1))
        home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 30, home.canvas.height * .72, .2))
        home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .61 - 30, home.canvas.height * .36, .3))
        home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 30, home.canvas.height * .15, .4))
        home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .54 - 30, home.canvas.height * .62, .6))
        home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 30, home.canvas.height * .15 + 140, .1))
        home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .54 - 110 - 30, home.canvas.height * .62 + 80, .4))
    } else {
        home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .16, home.canvas.height * .3, .2))
        home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .34, home.canvas.height * .12, .3))
        home.particles.push(new HomeParticle('images/bg-particles/3.svg', home.canvas.width * .31, home.canvas.height * .6, .4))
        home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .34 + 74, home.canvas.height * .12 + 130, .5))
        home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .16 + 20, home.canvas.height * .3 + 157, .6))
        home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .085, home.canvas.height * .1, .1))
        home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14, home.canvas.height * .72, .2))
        home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .61, home.canvas.height * .36, .3))
        home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .76, home.canvas.height * .15, .4))
        home.particles.push(new HomeParticle('images/bg-particles/10.svg', home.canvas.width * .52, home.canvas.height * .2, .5))
        home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .65, home.canvas.height * .59, .6))
        home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85, home.canvas.height * .15 + 140, .1))
        home.particles.push(new HomeParticle('images/bg-particles/13.svg', home.canvas.width * .46, home.canvas.height * .56, .2))
        home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .65 - 110, home.canvas.height * .59 + 80, .4))
    }
  } else {  
    if (innerWidth < 700) {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 40, home.canvas.height * .4, .2))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 40, home.canvas.height * .22, .3))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 40, home.canvas.height * .22 + 130, .5))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 40, home.canvas.height * .4 + 157, .6))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .12 - 40, home.canvas.height * .1, .1))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .66 - 40, home.canvas.height * .5, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 40, home.canvas.height * .15, .4))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .6 - 40, home.canvas.height * .73, .6))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 40, home.canvas.height * .15 + 140, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .6 - 110 - 40, home.canvas.height * .73 + 80, .4))
    } else {
      home.particles.push(new HomeParticle('images/bg-particles/1.svg', home.canvas.width * .19 - 40, home.canvas.height * .4, .2, 200, 200))
      home.particles.push(new HomeParticle('images/bg-particles/2.svg', home.canvas.width * .42 - 40, home.canvas.height * .22, .3, 200, 200))
      home.particles.push(new HomeParticle('images/bg-particles/4.svg', home.canvas.width * .42 + 74 - 40, home.canvas.height * .22 + 190, .5, 100, 100))
      home.particles.push(new HomeParticle('images/bg-particles/5.svg', home.canvas.width * .19 + 20 - 40, home.canvas.height * .4 + 170, .6, 150, 150))
      home.particles.push(new HomeParticle('images/bg-particles/6.svg', home.canvas.width * .12 - 40, home.canvas.height * .1, .1, 200, 200))
      home.particles.push(new HomeParticle('images/bg-particles/7.svg', home.canvas.width * .14 - 40, home.canvas.height * .72, .2, 150, 150))
      home.particles.push(new HomeParticle('images/bg-particles/8.svg', home.canvas.width * .66 - 40, home.canvas.height * .5, .3))
      home.particles.push(new HomeParticle('images/bg-particles/9.svg', home.canvas.width * .73 - 40, home.canvas.height * .15, .4, 190, 190))
      home.particles.push(new HomeParticle('images/bg-particles/11.svg', home.canvas.width * .6 - 40, home.canvas.height * .67, .6, 300, 300))
      home.particles.push(new HomeParticle('images/bg-particles/12.svg', home.canvas.width * .76 + 85 - 40, home.canvas.height * .15 + 190, .1))
      home.particles.push(new HomeParticle('images/bg-particles/14.svg', home.canvas.width * .6 - 110 - 40, home.canvas.height * .73 + 80, .4, 150, 150))
    }
  }
}

const reDrawHomeBg = () => {
  home.canvasCtx.clearRect(0, 0, innerWidth, innerHeight)

  home.particles.forEach(particle => {
    particle.logic()
    particle.draw()
  })
}

initHomeBg()

// risquis elements

const risquis = {
  title: document.querySelector('.risquis__title'),
  content: document.querySelector('.risquis__content'),
  decor: {
    first: document.querySelector('.risquis__decor-1'),
    second: document.querySelector('.risquis__decor-2')
  },
  illustration: {
    container: document.querySelector('.risquis__illustration'),
    first: document.querySelector('.risquis__illustration-item-1'),
    second: document.querySelector('.risquis__illustration-item-2'),
    third: document.querySelector('.risquis__illustration-item-3')
  }
}

if (innerWidth < innerHeight) {
  risquis.decor.first.style.width = risquis.decor.first.style.height = viewPortDiagonal * .1 + 'px'
  risquis.illustration.container.style.width = risquis.illustration.container.style.height = viewPortDiagonal * .28 + 'px'
} else {
  risquis.decor.first.style.width = risquis.decor.first.style.height = viewPortDiagonal * .06 + 'px'
  risquis.decor.second.style.width = risquis.decor.second.style.height = viewPortDiagonal * .07 + 'px'
  risquis.illustration.container.style.width = risquis.illustration.container.style.height = viewPortDiagonal * .28 + 'px'
}

// gallery

const gallery = {
  title: document.querySelector('.gallery__title'),
  section: document.querySelector('.gallery'),
  prevButton: document.querySelector('.gallery .swiper-button-prev'),
  nextButton: document.querySelector('.gallery .swiper-button-next')
}

if (innerWidth < innerHeight) {
  gallery.swiper = new Swiper('.gallery__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
} else {
  gallery.swiper = new Swiper('.gallery__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })
}

gallery.swiper.on('slideChange', () => {
  if (gallery.swiper.realIndex == 1 || gallery.swiper.realIndex == 3) {
    gallery.section.classList.add('gallery--dark-slide')
  } else {
    gallery.section.classList.remove('gallery--dark-slide')
  }

  if (gallery.swiper.realIndex == 0) {
    gallery.prevButton.classList.add('swiper-button--disabled')
  } else {
    gallery.prevButton.classList.remove('swiper-button--disabled')
  }

  if (gallery.swiper.realIndex == 4) {
    gallery.nextButton.classList.add('swiper-button--disabled')
  } else {
    gallery.nextButton.classList.remove('swiper-button--disabled')
  }
})

// empty canvas

const empty = {
  canvas: document.querySelector('.empty__canvas'),
  particles: []
}

empty.canvasCtx = empty.canvas.getContext('2d')

empty.canvas.width  = document.querySelector('.empty').clientWidth
empty.canvas.height = document.querySelector('.empty').clientHeight

class EmptySectionParticle {
  constructor(source, x, y, parallaxFactor, width, height) {
    this.image     = new Image()
    this.image.src = source

    this.x = x
    this.y = y

    this.deltaY = 0

    this.width  = width
    this.height = height

    this.parallaxFactor = parallaxFactor

    this.isSizeGiven = width && height

    this.image.onload = () => this.draw()
  }
  
  logic() {
    this.deltaY = (pageYOffset - innerHeight * 3) * this.parallaxFactor
  }
  
  draw() {
    if (!this.isSizeGiven) {
      empty.canvasCtx.drawImage(this.image, this.x, this.y + this.deltaY)
    }
    else {
      empty.canvasCtx.drawImage(this.image, this.x, this.y + this.deltaY, this.width, this.height)
    }
  }
}

const reDrawEmpty = () => {
  empty.canvasCtx.clearRect(0, 0, innerWidth, innerHeight)

  for (let particleIndex = empty.particles.length - 1; particleIndex >= 0; particleIndex--) {
    empty.particles[particleIndex].logic()
    empty.particles[particleIndex].draw()
  }
  // empty.particles.forEach(particle => {
  //   particle.logic()
  //   particle.draw()
  // })
}

const initEmptyCanvas = () => {
  empty.canvasCtx.globalAlpha = .8

  if (innerHeight < 380) {
    if (innerWidth < 700) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .14, empty.canvas.height * .19, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .14 + 20, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6, empty.canvas.height * .12, .4, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63, empty.canvas.height * .5, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110, empty.canvas.height * .5 + 80, .4))
    } else {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .14, empty.canvas.height * .19, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .14 + 20, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .4, empty.canvas.height * .45, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6, empty.canvas.height * .12, .4, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63, empty.canvas.height * .5, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110, empty.canvas.height * .5 + 80, .4))
    }
  } else if (innerHeight < 600) {
    if (innerWidth < 460) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .2 - 40, empty.canvas.height * .14, .1, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .2 + 20 - 40, empty.canvas.height * .14 + 100, .6, 60, 60))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .2 - 40, empty.canvas.height * .72, .3, 80, 80))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .7 - 40, empty.canvas.height * .27, .4, 120, 120))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/10.svg', empty.canvas.width * .3, empty.canvas.height * .5, .5, 90, 90))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .59 - 40, empty.canvas.height * .63, .2))
    } else if (innerWidth < 700) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17 - 40, empty.canvas.height * .19, .2, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20 - 40, empty.canvas.height * .19 + 110, .6, 60, 60))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .46 - 40, empty.canvas.height * .47, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6 - 40, empty.canvas.height * .12, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63 - 40, empty.canvas.height * .66, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .67 + 85 - 40, empty.canvas.height * .12 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110 - 40, empty.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17, empty.canvas.height * .19, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .46, empty.canvas.height * .47, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6, empty.canvas.height * .12, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63, empty.canvas.height * .66, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .67 + 85, empty.canvas.height * .12 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110, empty.canvas.height * .66 + 80, .4))
    }  else {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .25 - 30, empty.canvas.height * .35, .2, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 30, empty.canvas.height * .22, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 30, empty.canvas.height * .22 + 130, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .25 + 20 - 30, empty.canvas.height * .35 + 100, .6, 60, 60))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .085 - 30, empty.canvas.height * .1, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 30, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 30, empty.canvas.height * .15, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .54 - 30, empty.canvas.height * .62, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 30, empty.canvas.height * .15 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .54 - 110 - 30, empty.canvas.height * .62 + 80, .4))
    }
  } else if (innerHeight < 750) {
    if (innerWidth < 460) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .2 - 40, empty.canvas.height * .14, .1, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .2 + 20 - 40, empty.canvas.height * .14 + 100, .6, 60, 60))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .2 - 40, empty.canvas.height * .72, .3, 80, 80))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .7 - 40, empty.canvas.height * .27, .4, 120, 120))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/10.svg', empty.canvas.width * .3, empty.canvas.height * .5, .5, 90, 90))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .59 - 40, empty.canvas.height * .63, .2))
    } else if (innerWidth < 700) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17 - 30, empty.canvas.height * .19, .2, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20 - 30, empty.canvas.height * .19 + 100, .6, 80, 80))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 30, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .46 - 30, empty.canvas.height * .47, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6 - 30, empty.canvas.height * .12, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63 - 30, empty.canvas.height * .66, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .67 + 85 - 30, empty.canvas.height * .12 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110 - 30, empty.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 40, empty.canvas.height * .35, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 40, empty.canvas.height * .22, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 40, empty.canvas.height * .22 + 130, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 40, empty.canvas.height * .35 + 157, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .085 - 40, empty.canvas.height * .1, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .66 - 40, empty.canvas.height * .39, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 40, empty.canvas.height * .15, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .54 - 40, empty.canvas.height * .62, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 40, empty.canvas.height * .15 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .54 - 110 - 40, empty.canvas.height * .62 + 80, .4))
    } else {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 30, empty.canvas.height * .35, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 30, empty.canvas.height * .22, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 30, empty.canvas.height * .22 + 130, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 30, empty.canvas.height * .35 + 157, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .085 - 30, empty.canvas.height * .1, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 30, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .61 - 30, empty.canvas.height * .36, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 30, empty.canvas.height * .15, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .54 - 30, empty.canvas.height * .62, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 30, empty.canvas.height * .15 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .54 - 110 - 30, empty.canvas.height * .62 + 80, .4))
    }
  } else if (innerHeight < 900) {
    if (innerWidth < 460) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17 - 40, empty.canvas.height * .19, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20 - 40, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .7 - 40, empty.canvas.height * .27, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/10.svg', empty.canvas.width * .23, empty.canvas.height * .5, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .59 - 40, empty.canvas.height * .63, .2))
    } else if (innerWidth < 615) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17 - 40, empty.canvas.height * .19, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20 - 40, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .46 - 40, empty.canvas.height * .47, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6 - 40, empty.canvas.height * .12, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63 - 40, empty.canvas.height * .66, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .67 + 85 - 40, empty.canvas.height * .12 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110 - 40, empty.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 700) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .17, empty.canvas.height * .19, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .17 + 20, empty.canvas.height * .19 + 140, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .46, empty.canvas.height * .47, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .6, empty.canvas.height * .12, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .63, empty.canvas.height * .66, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .67 + 85, empty.canvas.height * .12 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .63 - 110, empty.canvas.height * .66 + 80, .4))
    } else if (innerWidth < 1000) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 40, empty.canvas.height * .4, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 40, empty.canvas.height * .22, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 40, empty.canvas.height * .22 + 130, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 40, empty.canvas.height * .4 + 157, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .12 - 40, empty.canvas.height * .1, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .66 - 40, empty.canvas.height * .5, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 40, empty.canvas.height * .15, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .6 - 40, empty.canvas.height * .73, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 40, empty.canvas.height * .15 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .6 - 110 - 40, empty.canvas.height * .73 + 80, .4))
    } else if (innerWidth < 1200) {
        empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 30, empty.canvas.height * .35, .2))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 30, empty.canvas.height * .22, .3))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 30, empty.canvas.height * .22 + 130, .5))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 30, empty.canvas.height * .35 + 157, .6))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .085 - 30, empty.canvas.height * .1, .1))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 30, empty.canvas.height * .72, .2))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .61 - 30, empty.canvas.height * .36, .3))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 30, empty.canvas.height * .15, .4))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .54 - 30, empty.canvas.height * .62, .6))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 30, empty.canvas.height * .15 + 140, .1))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .54 - 110 - 30, empty.canvas.height * .62 + 80, .4))
    } else {
        empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .16, empty.canvas.height * .3, .2))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .34, empty.canvas.height * .12, .3))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/3.svg', empty.canvas.width * .31, empty.canvas.height * .6, .4))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .34 + 74, empty.canvas.height * .12 + 130, .5))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .16 + 20, empty.canvas.height * .3 + 157, .6))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .085, empty.canvas.height * .1, .1))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14, empty.canvas.height * .72, .2))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .61, empty.canvas.height * .36, .3))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .76, empty.canvas.height * .15, .4))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/10.svg', empty.canvas.width * .52, empty.canvas.height * .2, .5))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .65, empty.canvas.height * .59, .6))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85, empty.canvas.height * .15 + 140, .1))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/13.svg', empty.canvas.width * .46, empty.canvas.height * .56, .2))
        empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .65 - 110, empty.canvas.height * .59 + 80, .4))
    }
  } else {  
    if (innerWidth < 700) {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 40, empty.canvas.height * .4, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 40, empty.canvas.height * .22, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 40, empty.canvas.height * .22 + 130, .5))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 40, empty.canvas.height * .4 + 157, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .12 - 40, empty.canvas.height * .1, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .66 - 40, empty.canvas.height * .5, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 40, empty.canvas.height * .15, .4))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .6 - 40, empty.canvas.height * .73, .6))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 40, empty.canvas.height * .15 + 140, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .6 - 110 - 40, empty.canvas.height * .73 + 80, .4))
    } else {
      empty.particles.push(new EmptySectionParticle('images/bg-particles/1.svg', empty.canvas.width * .19 - 40, empty.canvas.height * .4, .2, 200, 200))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/2.svg', empty.canvas.width * .42 - 40, empty.canvas.height * .22, .3, 200, 200))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/4.svg', empty.canvas.width * .42 + 74 - 40, empty.canvas.height * .22 + 190, .5, 100, 100))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/5.svg', empty.canvas.width * .19 + 20 - 40, empty.canvas.height * .4 + 170, .6, 150, 150))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/6.svg', empty.canvas.width * .12 - 40, empty.canvas.height * .1, .1, 200, 200))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/7.svg', empty.canvas.width * .14 - 40, empty.canvas.height * .72, .2, 150, 150))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/8.svg', empty.canvas.width * .66 - 40, empty.canvas.height * .5, .3))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/9.svg', empty.canvas.width * .73 - 40, empty.canvas.height * .15, .4, 190, 190))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/11.svg', empty.canvas.width * .6 - 40, empty.canvas.height * .67, .6, 300, 300))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/12.svg', empty.canvas.width * .76 + 85 - 40, empty.canvas.height * .15 + 190, .1))
      empty.particles.push(new EmptySectionParticle('images/bg-particles/14.svg', empty.canvas.width * .6 - 110 - 40, empty.canvas.height * .73 + 80, .4, 150, 150))
    }
  }
}

initEmptyCanvas()

// nostrud

const nostrud = {
  title: document.querySelector('.nostrud__title'),
  content: document.querySelector('.nostrud__content'),
  decor: {
    first: document.querySelector('.nostrud__decor-1'),
    second: document.querySelector('.nostrud__decor-2')
  },
  illustration: {
    container: document.querySelector('.nostrud__illustration'),
    first: document.querySelector('.nostrud__illustration-item-1'),
    second: document.querySelector('.nostrud__illustration-item-2'),
    third: document.querySelector('.nostrud__illustration-item-3')
  }
}

if (innerWidth < innerHeight) {
  nostrud.decor.first.style.width = nostrud.decor.first.style.height = viewPortDiagonal * .1 + 'px'
  nostrud.illustration.container.style.width = nostrud.illustration.container.style.height = viewPortDiagonal * .28 + 'px'
} else {
  nostrud.decor.first.style.width = nostrud.decor.first.style.height = viewPortDiagonal * .075 + 'px'
  if (nostrud.decor.first.clientWidth == 90) {
    nostrud.decor.second.style.width = nostrud.decor.second.style.height = 73 + 'px'
  } else {
    nostrud.decor.second.style.width = nostrud.decor.second.style.height = viewPortDiagonal * .06 + 'px'
  }
  nostrud.illustration.container.style.width = nostrud.illustration.container.style.height = viewPortDiagonal * .28 + 'px'
}

// contact

const contact = {
  title: document.querySelector('.contact__title'),
  links: document.querySelector('.contact__links'),
  message: document.querySelector('.contact__message'),
  decor: {
    first: document.querySelector('.content__contact__decor-1'),
    second: document.querySelector('.content__contact__decor-2')
  }
}

// scroll effects

window.addEventListener('scroll', () => {

  // canvas redraw
  if (pageYOffset < innerHeight) {
    reDrawHomeBg()
  }
  if (pageYOffset > innerHeight * 2 && pageYOffset < innerHeight * 4) {
    reDrawEmpty()
  }
  
  // titles fade effects
  if (pageYOffset > innerHeight * .5 && pageYOffset < innerHeight * 1.5) {
    risquis.title.classList.remove('section__title--hidden')
  } else {
    risquis.title.classList.add('section__title--hidden')
  } if (pageYOffset > innerHeight * 1.5 && pageYOffset < innerHeight * 2.5) {
    gallery.title.classList.remove('section__title--hidden')
  } else {
    gallery.title.classList.add('section__title--hidden')
  } if (pageYOffset > innerHeight * 3.5 && pageYOffset < innerHeight * 4.5) {
    nostrud.title.classList.remove('section__title--hidden')
  } else {
    nostrud.title.classList.add('section__title--hidden')
  } if (pageYOffset > innerHeight * 4.5) {
    contact.title.classList.remove('section__title--hidden')
  } else {
    contact.title.classList.add('section__title--hidden')
  }

  // illustrations parallax
  if (pageYOffset < innerHeight * 2) {
    risquis.illustration.third.style.transform  = `translate(-50%, -50%) translateY(${(pageYOffset - innerHeight) * .3}px)`
    risquis.illustration.second.style.transform = `translate(-50%, -50%) translateY(${(pageYOffset - innerHeight) * .15}px)`
    
    if (PCVersion) {
      risquis.decor.first.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight) * .2}px)`
      risquis.decor.second.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight) * .5}px)`
    } else {
      risquis.decor.first.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight) * .15}px)`
    }
  }
  if (pageYOffset > innerHeight * 3) {
    nostrud.illustration.third.style.transform  = `translate(-50%, -50%) translateY(${(pageYOffset - innerHeight * 4) * .3}px)`
    nostrud.illustration.second.style.transform = `translate(-50%, -50%) translateY(${(pageYOffset - innerHeight * 4) * .15}px)`

    if (PCVersion) {
      nostrud.decor.first.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight * 4) * .5}px)`
      nostrud.decor.second.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight * 4) * .2}px)`
    } else {
      nostrud.decor.first.style.transform  = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight * 4) * .2}px)`
    }
  }

  // contact parallax on mobile version
  if (!PCVersion) {
    if (pageYOffset > innerHeight * 4) {
      contact.links.style.transform = `translate(-50%, -50%) translateY(${-(pageYOffset - innerHeight * 5) * .5}px)`
    }
  }
})

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

// title changing

const pageTitle = {
  title: 'Sint Occaecat',
  titleIndex: 13,
  isToReduce: false
}

let titleTimeout = setTimeout(function titleCallback() {
  if (pageTitle.titleIndex >= pageTitle.title.length || pageTitle.titleIndex <= 1) pageTitle.isToReduce = !pageTitle.isToReduce

  if (pageTitle.isToReduce) pageTitle.titleIndex--
  else pageTitle.titleIndex++
  
  document.title = pageTitle.title.slice(0, pageTitle.titleIndex)

  titleTimeout = setTimeout(titleCallback, 1000)
}, 1000)

PCVersion = true

// contact parallax

// document.addEventListener('mousemove', event => {
//   if (pageYOffset > innerHeight * 4) {
//     contact.links.style.transform = `translate(-50%, -50%) translate3d(${
//       (event.clientX - innerHeight / 2) * .02
//     }px, ${
//       (event.clientY - innerHeight / 2) * .02
//     }px, 0)`
//     contact.message.style.transform = `translate(-10%, -50%) translate3d(${
//       -(event.clientX - innerHeight / 2) * .01
//     }px, ${
//       -(event.clientY - innerHeight / 2) * .01
//     }px, 0)`
//   }
// })

}