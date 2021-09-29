<template>
    
    <div class="slideshow-container">

        <div v-for="(locSpecial, index) in locSpecials" :key="index">

            <div class="my-slides fade">

                <img :src="locSpecial" />

            </div>

        </div>
        
        <!-- Next Button -->
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>

        <!-- Previous Button -->
        <a class="next" @click="plusSlides(1)">&#10095;</a>

    </div>
    
</template>

<script>

    export default {

        mounted() {

            // Sets the initial slide to be shown
            this.showSlides(this.slideIndex);

            this.loaded = true

        },

        props: ["locSpecials"],

        data() {

            return {

                slideIndex: 0,
                interval: setInterval(() => this.showSlides(this.slideIndex += 1), 6000),
                loaded: false

            };
            
        },

        computed: {

            // The filtered list based off of selected tag
            filteredList() {

                // Array to hold the array if image urls
                const arr = this.locSpecials;

                // If the data has been fetched
                if(arr) {

                    return arr
                    
                }
                
                // Else wait till the data is fetched
                else {}

            }

        },

        methods: {

            // The controls for the "Next" and "Previous" buttons
            plusSlides(n) { 
                
                this.showSlides(this.slideIndex += n);
                clearInterval(this.interval);

            },

            // Thumbnail image controls
            currentSlide(n) {

                this.showSlides(this.slideIndex = n);

            },

            // Triggers the carousel slide when the "Next" or "Previous" buttons are clicked
            showSlides(n) {

                // Retrieves all elements with the class of "mySlides"
                const slides = document.getElementsByClassName("my-slides");

                // If user clicks Next
                if (n > slides.length) {this.slideIndex = 1}

                // If user clicks Previous
                if (n < 1) {this.slideIndex = slides.length}

                // for loops to set all other indexed slides that are not the current index to hidden
                for (let i = 0; i < slides.length; i++) {

                    slides[i].style.display = "none";

                }

                // Sets the current indexed slide to display
                slides[this.slideIndex-1].style.display = "block";
                
            },
            
        },

    }

</script>

<style scoped>

    * {box-sizing:border-box}

    /* Slideshow container */
    .slideshow-container {
        max-height: 30rem;
        width: 100%;
        position: relative;
    }

    /* Hide the images by default */
    .my-slides {
        height: auto;
        width: 100%;
        display: none;
    }

    .my-slides img {
        height: auto;
        width: 100%;
    }

    /* Next & previous buttons */
        .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
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

    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

</style>