<template>
    
    <div class="carousel-container">

        <!-- Vue Transitions -->
        <transition-group
            class='carousel'
            tag="div"
        >

            <!-- Carousel Slides -->
            <div
                v-for="slide in formattedSlides" 
                class='slide'
                :class="[slidesDirection ? 'next-transition' : 'prev-transition']"
                :key="slide.id"
            >

                <div style="width: 100%; max-height: 600px">

                    <!-- Desktop -->
                    <a 
                        v-if="slide.imageLink"
                        :href="slide.imageLink"
                    >

                        <img 
                            :src="slide.imageUrl"
                            :alt="slide.imageAlt" 
                            class="my-slide-desktop"
                            style="width: 100%; max-height: 600px"
                        >

                    </a>

                    <!-- If no Link is Provided for Desktop -->
                    <img 
                        v-else
                        :src="slide.imageUrl"
                        :alt="slide.imageAlt" 
                        class="my-slide-desktop"
                        style="width: 100%; max-height: 600px"
                    >

                    <!-- Mobile -->
                    <a 
                        v-if="slide.imageLinkMobile"
                        :href="slide.imageLinkMobile"
                    >

                        <img 
                            :src="slide.imageUrlMobile"
                            :alt="slide.imageAltMobile" 
                            class="my-slide-mobile"
                            style="width: 100%; max-height: 600px"
                        >

                    </a>

                    <!-- If no Link is Provided for Mobile -->
                    <img 
                        v-else
                        :src="slide.imageUrlMobile"
                        :alt="slide.imageAltMobile" 
                        class="my-slide-mobile"
                        style="width: 100%; max-height: 600px"
                    >

                </div>

            </div>

        </transition-group>

        <!-- Carousel Arrows -->
        <div class="carousel-arrows">
            
            <!-- PreviousNext Button -->
            <a class="prev" @click="previous">&#10094;</a>

            <!-- Next Button -->
            <a class="next" @click="next">&#10095;</a>

        </div>

    </div>
    
</template>

<script>

    export default {

        created() {

            // Formats the retrieved list
            this.formatSlideList();

        },

        mounted() {

            // Sets the interval between slides
            setInterval(() => this.next(), 6000);

        },

        props: ["locSpecials"],

        data() {

            return {

                slidesDirection: true,
                formattedSlides: []
                
            };
            
        },

        methods: {

            // Displays next slide in carousel
            next() {

                // Sets css class for proper slide transition
                this.slidesDirection = true;

                const first = this.formattedSlides.shift();
                this.formattedSlides = this.formattedSlides.concat(first);

            },

            // Displays previous slide in carousel
            previous() {

                // Sets css class for proper slide transition
                this.slidesDirection = false;

                const last = this.formattedSlides.pop();
                this.formattedSlides = [last].concat(this.formattedSlides);

            },

            // Used for making copies of existing array objects
            deepCopy(obj) {

                return JSON.parse(JSON.stringify(obj));

            },

            // Formats the slides into the correct order
            formatSlideList() {

                // Array of slides
                const arr = this.locSpecials;

                // If the length of the array of slides is even, add a "dummy" slide so that the length is odd and format the new array
                if(arr.length % 2 == 0) {

                    // Create a deep copy of the second index to use as a "dummy" slide
                    const secondIndex = this.deepCopy(arr[1]);
                    // Change the id of secondIndex to a thousand so that the id is unique
                    secondIndex.id = 1000;

                    // Push "dummy" slide into array
                    arr.push(secondIndex);

                    // Find the middle of the array
                    const arrCenter = Math.floor(arr.length / 2);

                    // Find the first half of the array
                    const arrFirstHalf = arr.slice(0, arrCenter + 1);
                    // Find the second half of the array
                    const arrSecondHalf = arr.slice(arrCenter + 1, arr.length);

                    // Concat the first half of the array to the end of the second half so the original first index is now in the center
                    const arr2 = arrSecondHalf.concat(arrFirstHalf);

                    // Return the formatted slides to be used in the carousel
                    this.formattedSlides = arr2;

                }

                // Else format the array as intended
                else {

                    // Find the middle of the array
                    const arrCenter = Math.floor(arr.length / 2);

                    // Find the first half of the array
                    const arrFirstHalf = arr.slice(0, arrCenter + 1);
                    // Find the second half of the array
                    const arrSecondHalf = arr.slice(arrCenter + 1, arr.length);

                    // Concat the first half of the array to the end of the second half so the original first index is now in the center
                    const arr2 = arrSecondHalf.concat(arrFirstHalf);

                    // Return the formatted slides to be used in the carousel
                    this.formattedSlides = arr2;

                }

            }
            
        },

    }

</script>

<style scoped>

    .carousel-container {
        position: relative;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
    }

    .carousel {
        display: flex;
        justify-content: center;
    }

    .slide {
        flex: 0 0 100%;
        width: 100%;
        max-height: 600px;
        transition: transform 0.5s ease-in-out;
    }

    .prev-transition:first-of-type {
        opacity: 0;
    }

    .next-transition:last-of-type {
        opacity: 0;
    }

    .carousel-arrows {
        width: 100%;
        height: 100%;
    }

    /* Next & previous buttons */
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover { background-color: rgba(0,0,0,0.8); }

    /* Media Queries for Images */
     @media only screen and (max-width: 1024px) {

        .my-slide-desktop { display: none; }
        .my-slide-mobile { display: block; }

    }

    @media only screen and (min-width: 1024px) {

        .my-slide-desktop { display: block; }
        .my-slide-mobile { display: none; }

    }

</style>