

<template>
    <DatePicker v-model="date" mode="dateTime" :columns="2" is-range>
        
        <template v-slot="{inputValue, inputEvents}">       
            <div class="group">
                <!-- <label class="button groupItem" for="start">Check In</label> -->
                
                <input type="text" id="start" v-model="inputValue.start" class="form-control" placeholder="12/31/2022 00:00 AM" v-on="inputEvents.start" >
                <label class="button groupItem" for="range">To         </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="start" :value="inputValue.end" placeholder="12/31/2022 00:00 AM" readonly class="input secondInput">
            </div>
        </template>
    </DatePicker>
    
</template>

<script setup>
    import { ref, reactive } from 'vue'
    import { DatePicker } from 'v-calendar';
    import 'v-calendar/dist/style.css'
   
    const date = ref(new Date())
    date.value.setDate(Number(date.value.getDate()) + 35)
    const range = reactive({
        start: new Date(),
        end: date.value
    })
</script>

<style scoped>
   input[type='text']{
   /* text-align: center;*/
    border: none;
    outline: none;
   }
   .secondInput placeholder{
    text-align: center;
   }
 /*  placeholder{
    text-align: center;
   }*/
</style>