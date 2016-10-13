var helpMessage = "This is the help message \n with a new line here";
var app = new Vue({
	el:'.app',
	data:{
		curinput: '',
		log: [
			{ message: 'Welcome to MasterSnipes\'s terminal emulator', class: 'intro'},
			{ message: '---------------------------------------------', class:'intro'},
			{ message: 'Run <span style="color:rgb(129,169,232)">help</span> for a list of commands', class: 'intro'},
			{ message: 'You can run <span style="color:rgb(116,175,110)">native HTML</span> in this terminal. <span style="color:#e5e6e8">e.g. &lt;img src="img/test.png"&gt;</span> would give you the test.png image rendered out in the terminal so this tool can be useful for testing small bits of HTML without having to make a whole new project.', class:'intro'}
		]
	},
	methods: {
		enterCommand: function (){
			console.log(this.log);
			this.log.push({message: this.curinput, class:'normal'});
			this.curinput='';
		}
	},
	created: function(){
		console.log('Terminal by Jinay Jain');

	}
});
