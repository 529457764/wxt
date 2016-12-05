<template>
	<div>
		<p class="back-top">
			<router-link class="iconfont icon-left" to="/"></router-link>作业列表
		</p>
		<ul class="hk-list">
			<li class="hk-item" v-for="(item, index) in hkList" :class="{active: item.isClicked}" @click="touchHkItem({'id':item.id, 'index':index}, $event)">
				<div class="hk-left">
					<div class="iconfont icon-school"></div>
				</div>
				<div class="hk-right">
					<p class="title">题目：{{item.title}}</p>
					<p class="info">时间：{{item.startTime}}--{{item.endTime}}</p>
					<p class="info">发布人：{{item.publisher}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	// @import "/static/libs/iconfont/iconfont.css";
	@import "../../assets/scss/test.scss";
</style>
<script type="text/javascript" src="./test.js"></script>
