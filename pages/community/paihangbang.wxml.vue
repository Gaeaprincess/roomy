<block v-if="rankType ==='paihangbang'"> 
    <view class="title">月学时排行榜</view>
    <view v-for="(item, index) in paihangbang1" :key="index" class="qian">
        <view class="diyim">
            <image class="diyi" src="/static/resources/diyi.png"></image>
            <image class="yhtouxiang0" :src="item.touxiang"></image>
        </view>
        <view class="mingci0">{{index+1}}</view>
        <view class="yhname0">{{item.name}}</view>
        <view class="shichang0">{{item.time}}</view>
    </view>

    <view v-for="(item, index) in paihangbang2" :key="index" class="zhong">
        <image class="yhtouxiang0" :src="item.touxiang"></image>
        <view class="mingci0">{{index+2}}</view>
        <view class="yhname0">{{item.name}}</view>
        <view class="shichang0">{{item.time}}</view>
    </view>
    
    <view v-for="(item, index) in paihangbang3" :key="index" class="hou">
        <view class="mingci">{{index+4}}</view>
        <image class="yhtouxiang" :src="item.touxiang"></image>
        <view class="yhname">{{item.name}}</view>
        <view class="shichang">{{item.time}}</view>                
    </view>
</block>
	<script>
		
		export default {
			props: []
		}
    </script>
									