<template>

  <div v-if="items.length > 0">
    <lingallery :width="width" :height="height" :items="items" />
  </div>

</template>
<script>

// import Lingallery from 'lingallery';
export default {
  props: ['slug'],
  data() {
    return {
      params: this.$route.params.slug,
      width: 400,
      height: 520,
      items: [],
      rooturl: process.env.SITEURL,
      //   itemstest: [{
      //     src: '../product/item1.png',
      //     thumbnail: '../product/item1.png',
      //   },
      //   {
      //     src: '../product/item2.png',
      //     thumbnail: '../product/item2.png'
      //   }
      // ]
    }
  },

  components: {
    // Lingallery
  },
  methods: {
    async getproduct() {
      let response = await this.$axios.$get(`products/` + this.params);

      this.product = response.data;
      for (var i = 0; i < this.product.productgallery.length; i++) {

        this.items.push({ src: this.rooturl + this.product.productgallery[i].imagepath, thumbnail: this.rooturl + this.product.productgallery[i].thumbnailimage });

      }
      //console.log(this.itemsvalue);

      //var stringify = JSON.stringify(this.itemvalue);
      //this.items=this

      // console.log(this.items)

    },

  },
  created() {
    this.getproduct();
  }
}
</script>
<style>
.control.left {
  position: absolute;
  /* top: calc(50% - 50px) ! important; */
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 20px rgba(0, 0, 0, .75);
}

.control.right {
  position: absolute;
  top: calc(50% - 50px);
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 20px rgba(0, 0, 0, .75);
}

figure {
  position: relative;
  margin: 0;
  padding: 0;
  max-width: 100%;
  text-align: center;
  cursor: pointer;
}

figure a.control.right {
  right: 5px;
}

figure a.control.left {
  left: 5px;
}

figure img {
  width: 400px;
  height: 500px;
  transition: opacity 0.25s ease;
}

.lingallery_thumbnails_content_elem {
  float: left;
}

.lingallery_thumbnails_content_elem {
  height: 90px;
  width: 90px;
  border: 1px solid black;
  margin-right: 5px;
  padding: 1px;
  /* padding-top: 2px; */
}

.lingallery_thumbnails_content_elem img {
  border: 2px solid #fff;
  cursor: pointer;
  width: 86px;
  height: 86px;
}
</style>
<!-- <style lang="scss" scoped>
.lingalleryContainer {
  /deep/ .lingallery {
    max-width: 100%;
    figure {
      position: relative;
      margin: 0;
      padding: 0;
      max-width: 100%;
      text-align: center;
      cursor: pointer;
      img {
        width: 360px;
        height: 500px;
        transition: opacity 0.25s ease;
        &.loading {
          opacity: 0.25;
          min-height: 200px;
          transition: opcacity 0.25s ease;
        }
      }

      a.control {
        position: absolute;
        top: 0;
        padding-left: 18px;
        padding-right: 18px;
        height: 100%;
        display: none;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.75);

        &:before {
          position: relative;
          top: calc(50% - 12px);
        }

        &.left {
          text-align: left;
          left: 0;
        }

        &.right {
          text-align: right;
          right: 0;
        }
      }

      &:hover {
        a.control {
          display: block;
        }
      }
    }

    .lingallery_caption {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 4px 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.75);
      font-size: 1em;
    }

    .lingallery_thumbnails {
      overflow-x: auto;
      width: 100%;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        height: 6px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #eaeaea;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #b4b4b4;
      }

      &::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(100, 100, 100, 0.4);
      }

      .lingallery_thumbnails_content {
        margin-top: 2px;
        width: auto;
        white-space: nowrap;

        .lingallery_thumbnails_content_elem {
          display: inline-block;
          scroll-snap-align: start;

          img {
            border: 2px solid #fff;
            cursor: pointer;
            width: 86px;
            height: 86px;
          }
        }
      }
    }

    .lingallery_spinner {
      position: absolute;
      left: 50%;
      top: calc(50% - 32px);

      >div {
        z-index: 9999;
        position: relative;
        left: -50%;
      }
    }
  }
}
</style> -->