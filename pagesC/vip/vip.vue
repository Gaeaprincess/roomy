<!-- <template>
  <view class="top">
    <time-line
      ref="timeline"
      location="center"
      title="我的时间轴"
      :arr="arr"
    ></time-line>
  </view>
</template>

<script>
import timeLine from "@/components/xuan-timeLine/xuan-timeLine.vue"
import { getchicken } from "../../api/myself.js"
export default {
  data() {
    return {
      arr: [],
    }
  },

  components: {
    timeLine,
  },
  props: {},

  onShow: function (options) {
    getchicken().then((res) => {
      console.log(res)
      this.arr = res.data
      console.log(this.arr)
    })
  },

  methods: {},
}
</script>
<style>
page {
  background-color: #f9f9f9;
}
</style>
 -->
 
 <template>
   <timeline>
     <timelineItem v-for="(item,index) in arr"
                   :key="index"
                   :leftTime='item'>
       <view class="tripItem">
         <view class="title">打卡完成</view>
         <br>
         <view class="tips">越努力，越幸运！！！</view>
       </view>
     </timelineItem>
   </timeline>
 </template>
 
 <script>
 import timeline from '@/components/chenbin-timeline/timeLine.vue'
 import timelineItem from '@/components/chenbin-timeline/timelineItem.vue'
 import timeLine from "@/components/xuan-timeLine/xuan-timeLine.vue"
 import { getchicken } from "../../api/myself.js"
 export default {
   data () {
     return {
       arr: [],
     }
   },
 
   components: {
     timeLine,
     timeline,
     timelineItem
   },
   props: {},
 
   onShow: function (options) {
     getchicken().then((res) => {
       console.log(res)
       this.arr = res.data
       console.log(this.arr)
     })
   },
 
   methods: {},
 }
 </script>
 <style>
 page {
   background-color: #f9f9f9;
 }
 .tripItem {
   height: 150rpx;
   padding: 20rpx 30rpx;
   box-sizing: border-box;
   background: rgba(255, 255, 255, 1);
   box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
   border-radius: 10px;
   margin-bottom: 30rpx;
 }
 .title {
   font-weight: 500;
   color: rgba(50, 205, 50, 1);
 }
 </style>
 