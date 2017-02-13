function yindao(){
	var mySwiper = new Swiper('.swiper-container',{
        direction:"horizontal"
  });
}

function swiperCtrl(){
	var mySwiper = new Swiper('.swiper-container',{
		onSlideChangeStart:function(swiper){
          // 获取当前下标
          //console.log(swiper.activeIndex);
          var ind=swiper.activeIndex;
          $(".list li").eq(ind).addClass("green").siblings().removeClass("green");
        }
    });
}
function homeCtrl($state){
	$state.go("list.home")
}
function hotportCtrl($state,$scope,$http,$timeout){//
	$state.go("list.home.hotport");
	$http({
        url: "./data1.json"
    })
        .success(function (data) {
            //console.log(data);
            $scope.scene = data.scene;
            $scope.life = data.life;
            $scope.Beauty = data.Beauty;
            //console.log($scope.life)
        });
	//iscroll
	$timeout(function(){
		new IScroll('.cont')
	},50)
}
angular.module("myapp")
	.controller("yindao",yindao)
	.controller("homeCtrl",homeCtrl)
	.controller("swiperCtrl",swiperCtrl)
	.controller("hotportCtrl",hotportCtrl);

	
