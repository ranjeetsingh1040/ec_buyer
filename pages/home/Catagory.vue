<template>
    <div class="mt-16">
        <!-- <div v-if="sliderproduct.length>=1"> -->
        <VueSlickCarousel v-bind="settings">
            <!-- Mobile Phones -->
            <nuxt-link
                :to="{
                    name: 'categories-slug', params: {
                        slug: 'mobiles-phone', parentname: 'Mobiles,Computers & Tablets',
                    },
                }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/mobile.png"  class="rounded-full" alt="Mobile"/>
                    <p>Mobile</p>
                </div>
            </nuxt-link>

            <!-- men Clothes -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'mens-shoes',
                    parentname: 'Mens Clothing',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/men_shoes.jpg" class="rounded-full" alt="Mens Shoes" />
                    <p>Mens Shoes</p>
                </div>
            </nuxt-link>

            <!-- Women Clothes -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'womens-clothing',
                    parentname: 'Womens Clothing',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/womens-clothing.jpg" class="rounded-full" alt="Women Clothes" />
                    <p>Women Clothes</p>
                </div>
            </nuxt-link>

            <!-- men shoes -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'mens-clothing',
                    parentname: 'Mens Clothing',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/man-clothing.jpeg" class="rounded-full" alt="Mens Clothes" />
                    <p>Mens Clothes</p>
                </div>
            </nuxt-link>

            <!-- Books -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'books',
                    parentname: 'Books',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/books.jpeg" class="rounded-full" alt="Books" />
                    <p>Books</p>
                </div>
            </nuxt-link>


            <!-- tv-appliances-electronics -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'tv-appliances-electronics',
                    parentname: 'TV,Appliances & Electronics',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/Electronics.webp" class="rounded-full" alt="Electronics" />
                    <p>Electronics</p>
                </div>
            </nuxt-link>


            <!-- Computers -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'computers',
                    parentname: 'Computers',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/computers.png" class="rounded-full" alt="Computers" />
                    <p>Computers</p>
                </div>
            </nuxt-link>


            <!-- televisions -->
            <nuxt-link :to="{
                name: 'categories-slug',
                params: {
                    slug: 'televisions',
                    parentname: 'Televisions',
                },
            }">
                <div class="catagoryimg w-auto">
                    <img src="~/static/assets/images//category_img/Televisions.png" class="rounded-full" alt="Televisions" />
                    <p>Televisions</p>
                </div>
            </nuxt-link>

        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    data() {
        return {
            rooturl: process.env.SITEURL,
            settings: {
                "dots": false,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 7,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    components: { VueSlickCarousel },
};
</script>

<style scoped>
.sliderbottom .dot {
    width: 66px;
    height: 66px;
    background: #f02640;
    border-radius: 50%;
    display: flex;
    text-align: center;
    justify-content: center;
}

.sliderbottom .keepexplore p {
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #f02640;
}

.sliderbottom img {
    cursor: pointer;
}

.sliderbottom .more {
    color: #000;
}

.sliderbottom .annMoreButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.category {
    background-color: #e2ebf4;
    padding: 67px 0;
    text-align: center;
}

.catagoryimg {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-left: 60px; */
}
.slick-slide {
    /* padding:10px; */
    /* background-color:red; */
    /* text-align:center; */
    /* margin-right:15px; */
    /* margin-top:500px; */
}
</style>
