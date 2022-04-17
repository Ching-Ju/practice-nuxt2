<template>
  <div id="hero" class="grid py-4 px-4 lg:px-8 relative">
    <div class="mx-4 md:mx-8 mt-0 md:mt-4">
      <h1 class="text-6xl font-bold text-gray-900 line-height-2">
        <span class="font-light block">Eu sem integer</span>eget magna fermentum
      </h1>
      <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">
        Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...
      </p>
      <Button label="Get Started" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3" />
    </div>
    <img src="layout/images/screen-1.png" class="bottom-0" alt="hero screen" style="right:10%;">
  </div>
</template>

<style scoped>
#hero{
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
    height:700px;
    overflow:hidden;
}

@media screen and (min-width: 768px) {
    #hero{
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px){
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px){
    #hero {
        height: 600px;
    }

    #hero > img {
        position:static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style>
