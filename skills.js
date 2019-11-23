var skills = {
	"acrobatics": {
		"name":"Acrobatics",
		"type": "Agility",
		"basedOn": "Dexterity",
		"baseCost":3,
		"perLevel":2,
		"level":0,
		"totalCost":3,
		"add":function(){
			spt.skills[this.name] = this;
			addSPTRow("skills",this.name);
		},
		"remove":function(){
			//TODO if everyman get 1 CP
			removeSPTRow("skills",this.name);
			spt.skills[this.name] = null;
			//TODO update CP
		},
		"update":function(){
			/*try
				updateNormalRollSkill(this);
			*/
			var id = "skills" +this.name;
			document.getElementById(id).innerHTML = this.description();
			this.totalCost = this.baseCost+this.level*this.perLevel;
			var roll = "";
			if(this.basedOn != "nothing"){
				console.log(this.basedOn);
				console.log(nameOfObject);
				var x = nameOfObject[this.basedOn];
				console.log(x);
				if(x.total != undefined){
					roll= ((Math.round((9+x.total/5)+this.level).toString()) +"-");
				}
				roll= ((Math.round((9+x.value/5)+this.level).toString()) +"-");
			}
			if(this.level == -1){
				this.totalCost = 2;
				roll = "10-"
			}
			if(this.level == -2){
				if(this.everyman)this.totalCost = 0;
				this.totalCost = 1;
				roll = "8-"
			}
			document.getElementById(id+"cost").innerHTML = this.totalCost;
			document.getElementById(id+"roll").innerHTML = roll;
			updateSPTCost();
		},
		"description":function(){
			if(this.level == -2)return this.name +" (Familiarity)";
			if(this.level == -1)return this.name +" (Proficient)";
			return this.name;
		}
	},
	/*"acting": {
		"name": "acting",
		"type": "Interaction",
		"baseCost":3,
		"perLevel":2
	},
	"analyze": {
		"name": "analyze",
		"type": "Intellect",
		"baseCost":3,
		"perLevel":2
	},
	"animalHandler": {
		"name": "Animal Handler",
		"type": "Agility",
		"baseCost":2,
		"perLevel":2 //TODO
	},
	"autofire skills": {
		"name": "Acrobatics",
		"type": "Agility",
		"baseCost":3,
		"perLevel":2
	}//TODO
	"breakfall": {
		"name": "Breakfall",
		"type": "Agility",
		"baseCost":3,
		"perLevel":2
	},
	"bribery": {
		"name": "Bribery",
		"type": "Interaction",
		"baseCost":3,
		"perLevel":2
	},
	"bugging": {
		"name": "Bugging",
		"type": "Intellect",
		"baseCost":3,
		"perLevel":2
	},
	"bureaucratics": {
		"name": "Bureaucratics",
		"type": "Interaction",
		"baseCost":3,
		"perLevel":2
	},
	"charm": {
		"name": "Charm",
		"type": "Agility",
		"baseCost":3,
		"perLevel":2
	},*/
	
}