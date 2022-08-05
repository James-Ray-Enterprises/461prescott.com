<script setup>
import Menu from './components/Menu.vue'
import ZillowLink from './components/ZillowLink.vue'
import { HomeIcon, PhotographIcon } from '@heroicons/vue/outline'

const Gallery = [
  "01_front_1344_1008.webp",
  "02_front_1536_1152.webp",
  "03_front_1536_1152.webp",
  "16_living_1536_1152.webp",
  "09_living_1536_1152.webp",
  "22_living_1536_1152.webp",
  "24_living_1536_1152.webp",
  "19_living_1536_1152.webp",
  "23_bedroom_1536_1152.webp",
  "21_bedroom_1536_1152.webp",
  "18_bedroom_1536_1152.webp",
  "11_bathroom_1536_1152.webp",
  "17_kitchen_1536_1152.webp",
  "15_kitchen_1536_1152.webp",
  "14_kitchen_1536_1152.webp",
  "13_kitchen_1536_1152.webp",
  "12_kitchen_1536_1152.webp",
  "20_dining_1536_1152.webp",
  "07_carport_1536_1152.webp",
  "08_carport_1536_1152.webp",
  "05_backyard_1536_1152.webp",
  "04_backyard_1536_1152.webp",
  "10_attic_1536_1152.webp",
  "06_attic_1536_1152.webp",
]
</script>

<template>
  <div class="z-50 sticky top-0 w-full h-0">
    <Menu />
  </div>
  <section
    class="relative inline-flex lg:flex flex-col bg-amber-50 max-w-screen-2xl mx-auto justify-end overflow-hidden z-30 lg:-mb-36 xl:-mb-44">
    <img
      class="relative top-10 lg:absolute lg:top-8 lg:inset-0 sm:object-[75%] md:object-[25%] lg:object-[95%] object-cover w-full h-auto opacity-95 sm:opacity-75 lg:opacity-50 md:opacity-100"
      src="/img/02_front_1536_1152.webp" alt="" />

    <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-amber-50 sm:via-transparent sm:to-transparent pb-20">
    </div>

    <div
      class="z-40 inline-flex -ml-0 pl-8 lg:pl-2 flex-col justify-end pb-40 max-w-screen-2xl bg-amber-50 sm:bg-transparent sm:bg-gradient-to-r sm:from-amber-50 sm:via-amber-50 sm:to-transparent lg:from-transparent px-2 -mt-10 pt-5 sm:-mt-20 lg:h-full lg:min-h-[800px] max-h-[1024px] mx-auto sm:pt-3 lg:ml-12 md:mt-12 md:pt-7 lg:mt-28 lg:items-center lg:flex xl:mt-60 2xl:mt-16 xl:-mb-6">
      <div class="inline-block text-center sm:text-left xl:pl-4">
        <h1 class="flex flex-col -ml-2 md:ml-0">
          <span class="text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-rose-300 to-rose-900 text-5xl font-extrabold sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl">You've just found the</span>
          <strong
            class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-700 font-extrabold lg:block sm:block text-5xl sm:text-6xl lg:text-5xl xl:text-6xl w-full">
            Perfect Bungalow.
          </strong>
        </h1>

        <p class="max-w-2xl mt-2 text-base sm:leading-normal sm:text-2xl lg:text-xl lg:max-w-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-rose-300 via-rose-700 to-rose-900 mb-8">Located in wonderful, historic Garfield Heights, this sweet jewel box is a perfect starter home with just the right size lot, fully enclosed with a sprinkler system and lush landscaping 🌴
        </p>

        <div class="flex flex-wrap gap-4 mt-4 text-center">
          <a class="block w-full px-12 py-3 text-xl lg:text-2xl font-semibold text-rose-50 rounded shadow bg-rose-700 sm:w-auto active:bg-rose-500 hover:bg-rose-500 transition-all ease-in-out duration-200 focus:outline-none focus:ring"
            href="https://www.zillow.com/homedetails/461-Prescott-St-Pasadena-CA-91104/20865656_zpid/?" target="_blank">
            <home-icon class="h-6 w-auto inline-flex pr-1 relative -mt-1.5" />
            Request a Tour 
          </a>
          <a class="block w-full px-12 py-3 text-xl lg:text-2xl font-semibold bg-rose-50 rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
            href="#imageGallery" data-fancybox>
            <photograph-icon class="h-6 w-auto inline-flex pr-1 relative -mt-1.5" />
            View the Photo Gallery
          </a>
        </div>
      </div>
      <hr class="border-rose-200 mt-14  border-b-2 border-t-4 mx-32" />
    </div>
  </section>
  <section class="relative z-40 w-full -mt-40 lg:-mt-20">
    <div class="px-4 py-16 mx-auto max-w-[1800px] sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <a href="#imageGallery" data-fancybox>
              <img class="absolute inset-0 object-cover w-full h-full max-h-[800px]" src="/img/01_front_1344_1008.webp"
                alt="">
            </a>
          </div>
        </div>

        <div class="relative flex items-center max-h-[980px] bg-rose-50 -mb-24 lg:mb-0">
          <span class="hidden xl:inset-y-0 xl:absolute xl:w-16 xl:bg-rose-50 xl:block xl:-left-16"></span>

          <div class="p-8 sm:p-16 md:p-4 xl:p-24 2xl:p-8 md:pb-10">
            <span class="text-8xl hidden lg:inline-flex">🏡 </span>
            <div class="inline-flex flex-wrap xl:flex-wrap-reverse space-x-2 xl:space-x-3 items-center justify-center mb-3 space-y-3">
              <span class="sr-only">
                <!-- dummy item -->
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Historic Garfield Heights
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Rear Sprinklers
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Private Carport Area
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Decorative Fireplace
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Sweet Jewel Box
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Fully Enclosed
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-rose-100 text-rose-800 uppercase">
                Hardwood Floors
              </span>
            </div>
            <h2 class="mt-1 text-lg px-5 font-bold sm:text-xl md:text-3xl md:px-4 lg:px-0 lg:text-2xl xl:text-2xl xl:px-6 2xl:px-4 text-transparent bg-clip-text bg-gradient-to-br from-rose-300 via-rose-500 to-rose-900">
              Experience a perfect 1-bedroom bungalow with fantastic, original casement windows, a decorative fireplace
              and hardwood floors!
            </h2>
            <p class="mt-2 mb-5 text-base md:text-xl lg:text-xl font-semibold 2xl:text-xl px-0 lg:px-2 2xl:px-14 text-gray-600">
              The private carport area is currently used as a perfect covered patio. This sweet home also has a finished attic, offering storage options. Loaded with architectural integrity, it has a newer roof & new gutters. It's waiting for a new owner to love it as much as the current owner did. ❤️
            </p>
            <zillow-link />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer section -->
  <footer class="relative lg:-mt-96 xl:-mt-72 2xl:-mt-96 z-40">
    <div class="pt-32 sm:pt-14">
      <div class="bg-rose-900 px-10 2xl:px-0 2xl:-mb-16">
        
        <div class="max-w-screen-2xl mx-auto pr-4 sm:pr-6 lg:pr-8 xl:pl-10">
          
          <div class="relative pt-12 pb-28 xl:ml-5 2xl:ml-10">
            <div class="text-rose-50 text-left max-w-sm">
              <h3 class="text-3xl font-bold tracking-wide uppercase text-rose-300 pb-1">Open Houses:</h3>
              <ul class="text-2xl mb-4">
                <li class="flex flex-col mb-2">
                  <span class="font-semibold">Saturday, Aug 6<sup>th</sup></span>
                  <span>2:00 PM - 4:00 PM</span>
                </li>
                <li class="flex flex-col mb-2">
                  <span class="font-semibold">Sunday, Aug 7<sup>th</sup></span>
                  <span>2:00 PM - 4:00 PM</span>
                </li>
              </ul>
              <hr class="border-rose-300 border-b-2 border-t-4">
              <h3 class="text-xl font-bold tracking-wide uppercase text-rose-300 mt-4 mb-1">Listing Provided by:</h3>
              <ul class="text-xl">
                <li>
                  <span class="font-bold text-3xl">Linda Seyffert</span>
                </li>
                <li>
                  DRE <span class="font-bold">#01248439</span>
                </li>
                <li>
                  DRE: <a class="text-rose-100 hover:text-rose-200 decoration-rose-300 underline-offset-2 underline font-bold" href="tel:6267125194">626-712-5194</a>
                </li>
                <li>
                  DPP: <a class="text-rose-100 hover:text-rose-200 decoration-rose-300 underline-offset-2 underline font-bold" href="tel:6266830777">626-683-0777</a>
                </li>
                <li>
                  Source: <span class="font-bold">CRMLS</span>
                </li>
                <li>
                  MLS#: <span class="font-bold">P1-10753</span>
                </li>
                <li>
                  Originating MLS: <span class="font-bold">California Regional MLS (Ventura & Pasadena-Foothills AORs)</span>
                </li>
              </ul>
            </div>
            <ul class="select-none text-sm lg:text-md whitespace-nowrap overflow-hidden mt-16 lg:mt-8 -mb-24 text-rose-300 font-black text-left lg:-mb-8">
              <li>
                Website &copy; 2022 &nbsp;|&nbsp; <a href="https://james.engineer" target="_blank">James A. Ray</a>
              </li>
            </ul>
            <a href="#imageGallery" data-fancybox class="hidden lg:flex absolute -top-32 xl:-top-28 2xl:-top-24 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0 md:-transform-x-6 md:translate-x-6 lg:-transform-x-2 lg:-translate-x-12 2xl:-transform-x-52 2xl:-translate-x-52">
              <div class=" flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/14_kitchen_1536_1152.webp" alt="" />
                  </div>

                  <div class="mt-6 flex-shrink-0 sm:mt-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/19_living_1536_1152.webp" alt="" />
                  </div>
                </div>
                <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/21_bedroom_1536_1152.webp" alt="" />
                  </div>

                  <div class="mt-6 flex-shrink-0 sm:mt-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/16_living_1536_1152.webp" alt="" />
                  </div>
                </div>
                <div class="hidden 2xl:flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/03_front_1536_1152.webp" alt="" />
                  </div>

                  <div class="mt-6 flex-shrink-0 sm:mt-0">
                    <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="/img/17_kitchen_1536_1152.webp" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="hidden" id="imageGallery">
    <ul v-if="Gallery" class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <li v-for="(item, index) in Gallery" :key="index">
        <a class="px-0 overflow-clip" data-fancybox="image-gallery" :href="'/img/' + item">
          <img class="h-auto w-full rounded-lg object-cover max-h-[800px]" :src="'/img/' + item"
            alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="css">
#imageGallery {
  @apply bg-rose-800 rounded-lg;
}
</style>
