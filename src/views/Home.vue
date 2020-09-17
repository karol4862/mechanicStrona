<template>
    <div class="homepage">
        <div
            v-for="(element, index) in menuList"
            :key="index" class="menu-element"
            :style="`background-image: url(${element.imgUrl})`"
        >
            <router-link :to="element.url">
                <h2>{{element.name}}</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: 'Diagnostyka komputerowa',
          url: '/diagnostyka',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/diagnostyka.png'),
        },
        {
          name: 'Filtry DPF',
          url: '/filtry',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/filtry.png'),
        },
        {
          name: 'AIRBAG',
          url: '/airbag',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/airbag.jpg'),
        },
        {
          name: 'Mechanika',
          url: '/mechanika',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/engine.jpg'),
        },
        {
          name: 'Automatyczne skrzynie biegów',
          url: '/skrzyniabiegow',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/skrzynia-biegow.jpg'),
        },
        {
          name: 'Immobilaizery',
          url: '/immobilaizery',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/immobilaiser.jpg'),
        },
        {
          name: 'Pełna oferta',
          url: '/oferta',
          // eslint-disable-next-line global-require
          imgUrl: require('@/assets/img/Mechanic.jpg'),
        },
      ],
    };
  },
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.homepage{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .menu-element{
        flex-basis: 30%;
        height: 20vw;
        background-size: cover;
        background-position: center;
        position: relative;
        margin-bottom: 15px;
        h2{
            margin: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            display: flex;
            justify-content: center;
            align-items:center;
            background-color: rgba(36, 36, 36, 0.5);
            color: white;
            transition: .4s;
            opacity: 1;
            &:hover{
                opacity: 0;
            }
        }
    }
}
</style>
