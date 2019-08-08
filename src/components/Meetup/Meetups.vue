<template>

  <div class='meetups'>
    <a-carousel class='carouselContainer' arrows>
      <div slot="prevArrow"
           class="custom-slick-arrow"
           style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow"
           class="custom-slick-arrow"
           style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class='carouselItem'
           v-for="meetup in meetups"
           :key="meetup.title"
           v-bind:style="{ 'background-image': 'url(' + meetup.imageUrl + ')' }">
        <div class='carouselText'>
          <h3>{{meetup.title}}</h3>
          <div class='carouselRow'>
            <div class='carouselStat'>
              <a-icon class='carouselIcon' type="user" /> {{meetup.attendees}}
            </div>
            <div class='carouselStat'>
              <a-icon class='carouselIcon' type="calendar" /> {{meetup.time}}
            </div>
          </div>
        </div>
      </div>
    </a-carousel>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        meetups: [
          {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
            id: 'afajfjadfaadfa323',
            title: 'Meetup in New York',
            time: '5 Days, 1 Hour',
            attendees: 41,
          },
          {
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
            id: 'aadsfhbkhlk1241',
            title: 'Meetup in Paris',
            time: '1 Day, 14 Hour',
            attendees: 133,
          }
        ]
      }
    }
  }

</script>

<style scoped>

  .meetups {
    padding-top: 140px;
    height: 100vh;
    width: 100%;
    display: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .carouselContainer {
    height: 240px;
    width: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.21);
    overflow: hidden;
    border-radius: 4px;
  }

  .carouselItem {
    height: 240px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .carouselIcon{
    margin: 0 5px 0 0 ;
  }
  .carouselText {
    z-index: 5;
    color: #006aff;
    background-color: #f4f9ff;
    width: auto;
    margin: 20px 0 0 0;
    padding: 6px 20px;
  }

  h3{
    font-size: 26px;
    color: #006aff;
    margin: 0;
  }

  .carouselRow{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carouselStat{
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    opacity: .8;
  }

  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31,45,61,.0);
    opacity: 0.8;
    z-index: 10;
  }

  .ant-carousel >>> .custom-slick-arrow:hover{
    z-index: 10;
    opacity: 1;
    color: white;
  }
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

</style>
