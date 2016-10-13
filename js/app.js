var helpMessage = "Here is a list of the current commands:<br>1. Almost all native HTML tags <br>2. help - shows this message <br>3. cls/clear - clears the terminal log<br>4. src/source - provides a link to the source code for this terminal";
var introMessage = 'Welcome to MasterSnipes\'s terminal <br>---------------------------------------------<br>Run <span style="color:rgb(129,169,232)">help</span> for a list of commands<br>You can run <span style="color:rgb(116,175,110)">native HTML</span> in this terminal. <span style="color:#e5e6e8">e.g. &lt;img src="img/test.png"&gt;</span> would give you the test.png image rendered out in the terminal so this tool can be useful for testing small bits of HTML without having to make a whole new project.';
var app = new Vue({
	el:'.app',
	data:{
		curinput: '',
		log: [
			
		]
	},
	methods: {
		enterCommand: function (){
			console.log(this.log);
			if(this.curinput.length > 0) this.log.push({message:">> " + this.curinput, class:'normal'});
			if(this.curinput === 'help') this.log.push({message: helpMessage, class:'outputMessage'});
			else if(this.curinput === 'cls' || this.curinput === 'clear') this.log.length = 0;
			else if(this.curinput==='') console.log('nothing in curinput');
			else if(this.curinput==='src' || this.curinput==='source') {this.log.push({message:'<a href="https://github.com/mastersnipes/terminal/" class="btn" target="_blank">Link to source code</a>',class:'normal'})}
			else if(this.curinput.length > 0){
				console.log(this.curinput.toString());
				this.log.push({message: 'Sorry, <span style="color:rgb(129,169,132); font-weight: 900">' + this.curinput + '</span> was not recognized as a command. If this is a native HTML element, ignore this message. If not, then you have entered a command incorrectly.', class:'err'})
			}
			this.curinput='';

		}
	},
	created: function(){
		console.log('Terminal by Jinay Jain');
		this.log.push({message: introMessage, class:'intro'});
	}
});
