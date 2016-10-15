var helpMessage = "Here is a list of the current commands:<br>1. Almost all native HTML tags <br>2. help - shows this message <br>3. cls/clear - clears the terminal log<br>4. src/source - provides a link to the source code for this terminal<br>5. intro - shows the intro message again<br>6. proj/projects - displays current projects made by me";
var introMessage = 'Welcome to MasterSnipes\'s terminal <hr> Run <span style="color:rgb(129,169,232)">help</span> for a list of commands<br>You can run <span style="color:rgb(116,175,110)">native HTML</span> in this terminal. <span style="color:#e5e6e8">e.g. &lt;img src="img/test.png"&gt;</span> would give you the test.png image rendered out in the terminal so this tool can be useful for testing small bits of HTML without having to make a whole new project.';
var projects = [
{name: 'mastersnipes.github.io', url:'https://www.github.com/MasterSnipes/mastersnipes.github.io/', desc: 'My personal website hosted on GitHub'},
{name: 'Shower Thoughts Generator', url:'https://www.github.com/MasterSnipes/showerthoughts', desc:'A random shower thought generator that retrieves showerthoughts from Reddit /r/showerthoughts'},
{name: 'Terminal', url:'https://www.github.com/MasterSnipes/terminal', desc:'This terminal.'}
] // template {name: '', url:'', desc:''}
var app = new Vue({
	el:'.app',
	data:{
		curinput: '', //input entered into the box
		log: [] //empty log array
	},
	methods: {
		enterCommand: function (){
			console.log(this.log);

			if(this.curinput.length > 0) this.log.push({message:">> " + this.curinput, class:'normal'});
			if(this.curinput === 'help') this.log.push({message: helpMessage, class:'outputMessage'});
			else if(this.curinput === 'cls' || this.curinput === 'clear') this.log.length = 0;
			else if(this.curinput==='') console.log('nothing in curinput');
			else if(this.curinput==='src' || this.curinput==='source') {this.log.push({message:'<a href="https://github.com/mastersnipes/terminal/" class="btn" target="_blank">Link to source code</a>',class:'normal'})}
			else if(this.curinput==='intro') this.log.push({message:introMessage,class:'intro'});
			else if(this.curinput==='projects' || this.curinput==='proj') {
				this.log.push({message: 'Here is a list of my current projects (click on project title for a link to the project\'s page):', class:'normal'})	
				for(i = 0; i < projects.length; i++){
					this.log.push({message: '<a target = "_blank" style="text-decoration: underline; font-weight: bolder;" href="' + projects[i].url + '"><p>' + projects[i].name + '</a>  - ' + projects[i].desc + '</p>', class: 'normal'})
				}
			}
			else if(this.curinput.length > 0 && this.curinput.indexOf("<") === -1 && this.curinput.indexOf(">") === -1){
				console.log(this.curinput.toString());
				this.log.push({message: 'Sorry, but <span style="color:rgb(129,169,132); font-weight: 900">' + this.curinput + '</span> was not recognized as a command. If this is a native HTML element, ignore this message. If not, then you have entered a command incorrectly.', class:'err'})
			}

			this.curinput=''; //reset input box

		}
	},
	created: function(){
		console.log('Terminal by Jinay Jain');
		this.log.push({message: introMessage, class:'intro'}); //inital intro message
	}
});
