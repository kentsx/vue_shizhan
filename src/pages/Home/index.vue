<template>
    <div>
      <!-- 三级联动  已注册为全局组件，不需要引用-->
      <TypeNav/>
      <ListContainer/>
      <TodayRecommand/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
      <Brand/>

    </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer';
import TodayRecommand from '@/pages/Home/TodayRecommand';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
export default {
  components:{
    ListContainer,
    TodayRecommand,
    Rank,
    Like,
    Floor,
    Brand
  }
    
}
</script>
<style lang="">
    
</style>