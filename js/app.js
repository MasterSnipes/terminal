var app = new Vue({
	el:'#app',
	data:{
		newname:'',
		names:['Joe','Bill','Barry','Hank']
	},
	methods: {
		addname: function(){
			this.names.push(this.newname);
			this.newname = '';
		}
	}
});
