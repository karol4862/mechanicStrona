<template>
    <div class="top-menu">
        <router-link to="/">
            <img class="logo" src="@/assets/img/logo.jpg" alt="Logo" >
        </router-link>
        <ul>
            <li>
                <router-link to="/oferta">
                    Oferta
                </router-link>
            </li>
            <li>
                <router-link to="/kontakt">
                    Kontakt
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
};
</script>

<style lang="scss" scoped>
.logo{
    height: 100px;
}
.top-menu{
    display: flex;
    justify-content: space-between;
}
</style>
