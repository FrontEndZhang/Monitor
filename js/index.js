	window.onload=function(){
	var vm = new Vue({
			el : '.myvue',
			data : {
//				color : [
//					{'mui-badge-success': true,'mui-badge-warning':false,'mui-badge-danger': false},
//					{'mui-badge-success': false,'mui-badge-warning':true,'mui-badge-danger': false},
//					{'mui-badge-success': false,'mui-badge-warning':false,'mui-badge-danger': true}
//					
//				],
				tem : [{'mui-badge-success': true}],
				hum : [{'mui-badge-warning': true}],
				lux : [{'mui-badge-danger': true}],
				objs : [
					{number : '1号大棚', status : ['良好','较好','严重']},
				],
			},
			methods : {
				add : function(){
					var length = this.objs.length+1;
					var sta = {number : length+'号大棚', status : ['较好','严重','良好']};			
					for (var i =0;i<3; i++) {
						if(i==0){
							if(sta.status[i]=='良好'){
								this.tem.push({'mui-badge-success': true});
							}else if(sta.status[i]=='较好'){
								this.tem.push({'mui-badge-warning': true})
							}else {
								this.tem.push({'mui-badge-danger': true})
							}
						}
						if(i==1){
							if(sta.status[i]=='良好'){
								this.hum.push({'mui-badge-success': true});
							}else if(sta.status[i]=='较好'){
								this.hum.push({'mui-badge-warning': true})
							}else {
								this.hum.push({'mui-badge-danger': true})
							}
						}
						if(i==2){
							if(sta.status[i]=='良好'){
								this.lux.push({'mui-badge-success': true});
							}else if(sta.status[i]=='较好'){
								this.lux.push({'mui-badge-warning': true})
							}else {
								this.lux.push({'mui-badge-danger': true})
							}
						}
						
					}
					
					this.objs.push(
						sta
					)
				},
				template : function(){
					mui.openWindow({
					    id:'charts/temperature.html',
					    url:'charts/temperature.html'
		  			});
				},
				humidity : function(){
						mui.openWindow({
					    id:'charts/humidity.html',
					    url:'charts/humidity.html'
		  			});
				},
				cao : function(){
						mui.openWindow({
					    id:'charts/co2.html',
					    url:'charts/co2.html'
		  			});
				},
				del : function(event){
					mui.confirm('是否确认删除','注意',['取消','确认'],function (e) {
						if(e.index==0){
							mui.toast('你取消了删除')
						}else{
							var e = event.target.parentNode.parentNode.parentNode;
							console.log(e.innerHTML);
							e.parentNode.removeChild(e);   
						}
					},'div')
				}
			}
		})
}