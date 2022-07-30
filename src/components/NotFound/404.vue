<template>
    <div class="notFound">
        <span><h1>404</h1></span>
        <h3>Page not found</h3>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .notFound{
        color: red;
        text-align: center;
        display: flex;
        height: 80vh;
        width: 100%;
        /* max-width: 1024px; */
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .notFound h1{
        font-size: 15rem;
        margin-bottom: -40px;
    }
</style>