<template >
    <div class="header">
        <div class="headerContainer">
            <div class="headerList">
            <div class="headerListItem active">
               <font-awesome-icon icon="fa-solid fa-bed" /> <span>Stays</span>
            </div>
            <div class="headerListItem">
             <font-awesome-icon icon="fa-solid fa-plane" />   <span>Flights</span>
            </div>
            <div class="headerListItem">
              <font-awesome-icon icon="fa-solid fa-car" />  <span>Car Rentals</span>
            </div>
            <div class="headerListItem">
               <font-awesome-icon icon="fa-solid fa-city" /> <span>Attractions</span>
            </div>
            <div class="headerListItem">
             <font-awesome-icon icon="fa-solid fa-taxi" />   <span>Airport Taxis</span>
            </div>
        </div>
      <h1 class="headerTitle">A life time of discount? it's Genius.</h1>
        <p class="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free MagnetSprings account</p>
        <button class="headerBtn">Sign in | Regsiter</button>
        <div class="headerSearch">
            <div class="headerSearchItem">
                <input type="text" placeholder="Where are you going?" class="headerSearchInput">
            </div>
            <div class="headerSearchItem flex-display">
              <font-awesome-icon icon="fa-solid fa-calendar-days" />  <span class="headerSearchText">
                <app-date-picker></app-date-picker>
              </span>
            </div>
            <div class="headerSearchItem">
               <font-awesome-icon icon="fa-solid fa-person" /> <span class="headerSearchText">{{adults}} Adult . {{children}} Children . {{room}} Room</span>
            </div>
            <div class="options">
                <div class="optionItems">
                    <span class="optionText">Adult</span>
                        <div class="optionCounter">
                        <button  @click="decrement('adults')" class="optionCounterBtn" :disabled="isAdultDecrementDisabled">-</button>
                        <span class="optionCounterNumber qty-one" >{{adults}}</span>
                        <button @click="increment('adults')"  class="optionCounterBtn">+</button>
                    </div>
                    
                </div>
                <div class="optionItems">
                    <span class="optionText">Children</span>
                        <div  class="optionCounter">
                        <button @click="decrement('children')" :disabled="isChildrenDecrementDisabled" class="optionCounterBtn" >-</button>
                        <span class="optionCounterNumber qty-two" >{{children}}</span>
                        <button @click="increment('children')" class="optionCounterBtn" >+</button>
                    </div>
                  
                </div>
                <div class="optionItems">
                    <span class="optionText">Room</span>
                        <div class="optionCounter">
                        <button class="optionCounterBtn" @click="decrement('room')" :disabled="isRoomDecmentDisabledYet">-</button>
                        <span class="optionCounterNumber qty-three" >{{room}}</span>
                        <button class="optionCounterBtn" @click="increment('room')">+</button>
                    </div>

                </div>
               
            </div>
            <div class="headerSearchItem">
                <button class="headerBtn">Search</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex';
export default {

    computed:{
        ...mapState(['adults', 'children', 'room']),
        ...mapGetters(['isDecrementDisabled', 'isChildDecrementDisabled', 'isRoomDecrementDisabled']),
        isAdultDecrementDisabled(){
            return this.isDecrementDisabled('adults');
        },
        isChildrenDecrementDisabled(){
            return this.isChildDecrementDisabled('children');
        },
        isRoomDecmentDisabledYet(){
            return this.isRoomDecrementDisabled('room');
        },
    },
    methods:{
        ...mapMutations(['increment', 'decrement']),
    }
    
   
}
</script>

<style lang="css" scoped>
 
    .header{
        background-color: #003580;
        color: white;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .headerContainer{
        width: 100%;
        max-width: 1024px;
        margin: 20px 0px 70px 0px;
    }
    .headerList{
        display: flex;
        gap: 40px;
        margin-bottom: 50px;
    }
    .headerListItem{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .headerListItem.active{
        border: 1px solid white;
        padding: 10px;
        border-radius: 20px;
        
    }
    .headerTitle{
        color: #ffffff;
        font-size: 3rem;
        font-family: 'Coustard', serif;
    }
    .headerDesc{
        margin: 20px 0px;
        font-size: 18px;
        font-family: 'Gloria Hallelujah', cursive;
    }
    .headerBtn{
        background-color: #0071c2;
        color: white;
        border: none;
        font-weight: 500;
        padding: 10px;
        cursor: pointer;
    }
    .headerSearch{
        height: 30px;
        background-color: white;
        border: 3px solid #febb02;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 5px 0px;
        border-radius: 5px;
        position: absolute;
        bottom: -25px;
        width: 100%;
        max-width: 1024px;
    }

    button[disabled]{
  /* opacity: 1; */
  /* background: red; */
  cursor: not-allowed;
}
    .headerSearchInput{
        outline: none;
        border: none;
    }
    .headerSearchItem{
        color: grey;
    }
    .flex-display{
        display: flex;
        gap: 5px;
    }

    .options{
        position: absolute;
        top: 50px;
        right: 8rem;
        /* background: #0071c2; */
        background-color: white;
        color: grey;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
    }
    .optionItems{
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }
    .optionCounter{
        display: flex;
        align-items: center;
        gap: 10px;
        font: size 12px;
        color: #000;
    }
    .optionCounterBtn{
        width: 30px;
        height: 30px;
        border: 1px solid #0071c2;
        color: #0071c2;
        background-color: #ffffff;
        cursor: pointer;
    }
    .optionCounterBtn[disabled]{
        border: 1px solid grey;
        color: grey;
        background-color: #ffffff;
        opacity: 0.5;
    }
</style>