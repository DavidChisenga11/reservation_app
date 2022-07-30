<template>
    <div class="navbar">
        <div class="navContainer">
            <span class="logo">MagnetSprings</span>
            <div class="navItems">
                <button class="navButton">Register</button>
                <button class="navButton">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    .navbar{
        height: 50px;
        background-color: #003580;
        display: flex;
        justify-content: center;
    }
    .navContainer{
        width: 100%;
        max-width: 1024px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        color: white;
        font-weight: 500;
        font-family: 'Mochiy Pop One', sans-serif;
    }
    .navButton{
        margin-left: 10px;
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        color: #003580;
    }
</style>