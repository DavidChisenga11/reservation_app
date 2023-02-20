<template>
    <div class="container">
        <div class="flex-footer">
            <div id="locations">
                <p><a href="#">Countries</a></p>
                <p><a href="#">Regions</a></p>
                <p><a href="#">Cities</a></p>
                <p><a href="#">Districts</a></p>
                <p><a href="#">Airports</a></p>
                <p><a href="#">Hotels</a></p>
            </div>
            <div id="reservation-categories">
                <p><a href="#">Homes</a></p>
                <p><a href="#">Apartments</a></p>
                <p><a href="#">Resorts</a></p>
                <p><a href="#">Villas</a></p>
                <p><a href="#">Hostels</a></p>
                <p><a href="#">Guest Houses</a></p>
            </div>
            <div id="reviews-sections">
                <p><a href="#">Unique Places to Stay</a></p>
                <p><a href="#">Reviews</a></p>
                <p>Unpacked:&nbsp;<a href="#">Travel Articles</a></p>
                <p><a href="#">Travel Communities</a></p>
                <p><a href="#">Seasonal and Holiday Deals</a></p>
            </div>
            <div id="rental-sections">
                <p><a href="#">Car Rental</a></p>
                <p><a href="#">Flight Finder</a></p>
                <p><a href="#">Resaurant Reservations</a></p>
                <p><a href="#">Travel Agents</a></p>
            </div>
            <div id="services-sections">
                <p><a href="#">Customer Service</a></p>
                <p><a href="#">Partner Help</a></p>
                <p><a href="#">Careers</a></p>
                <p><a href="#">Sustainability</a></p>
                <p><a href="#">Press Center</a></p>
                <p><a href="#">Safety Resource Center</a></p>
                <p><a href="#">Investor Relations</a></p>
                <p><a href="#">Terms & Conditions</a></p>
            </div>
        </div>
        
    </div>
    <footer>
            <p>&copy; 2019-2022 MagnetSprings, All rights reserved. Developed by David Chisenga</p>
        </footer>
</template>

<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .container{
        width: 85%;
        margin: 0 auto;
    }
    .flex-footer{
        display: flex;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
        justify-content: space-between;
        line-height: 30px;
    }
    .flex-footer p a{
        text-decoration: none;
        color: #0066b5;
    }
    .flex-footer p a:hover{
        text-decoration: underline;
    }
    footer{
        padding: 20px;
       background: grey;
       color: #ffffff;
       text-align: center;
    }
</style>