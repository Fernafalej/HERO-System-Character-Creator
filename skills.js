var skills = {
	//Standard Skills
	"Acrobatics": {
		"name":"Acrobatics",
		"type": "Agility",
		"basedOn": "Dexterity",
		"baseCost":3,
		"perLevel":2,		
		"everyman" : false,
		
		"level":0,
		"total":0,
		"finalCost":3,
		"pings":[],
		"totalMods":[],
		"totalRMods":[],
		"skillEnhancers":[],
		//"":[],
		"show":function(){
			showStandardSkill(this.name)
		},
		"add":function(){
			addStandardSkill(this.name)
		},
		"remove":function(){
			
			/*
			//TODO if everyman get 1 CP
			removeSPTRow("skills",this.name);
			if(this.basedOn != "nothing"){
				variables["characteristics"][this.basedOn]["pings"].pop(["skills",this.name]);//TODO
			}
			delete variables["skills"][this.name]
			//TODO update CP
			*/
		},
		"update":function(){
			updateStandardSkill(this.name);
		},
		"description":function(){
			return descriptionStandardSkill(this.name);
		},
		"totalCost":function(){
			if(this.everyman && this.level==0){
				return 0;
			}
			return this.finalCost;
		}		
	},
	"Acrobatics2":{
		"name":"Acrobatics2",
		"type": "Agility",
		"basedOn": "Dexterity",
		"baseCost":3,
		"perLevel":2,
		"level":0,
		"finalCost":3,
		"everyman" : false,
		
		"pings":[],
		"show":function(){
			var div = document.getElementById(this.type+"Selected");
			div.innerHTML = "";
			var addButton = document.createElement("DIV");
			addButton.className = "Button";
			addButton.innerHTML = "Add";
			addButton.id = "addButton"+ this.name;
			var emc = document.createElement("INPUT");
			var em = document.createElement("DIV");
			em.innerHTML = "Everyman";
			emc.type = "checkbox";
			emc.id = "emc" + this.name;
			emc.checked = this.everyman;
			div.appendChild(em);
			em.appendChild(emc);
			addButton.addEventListener("click", function(){
					var name = this.id.substring(9);
					skills[name].add();
					var em = document.getElementById("emc" + name);
					var v = variables["skills"][name]
					v.everyman = em.checked;
					v.update();
					var opt = document.getElementById("option"+ skills[name].type+ name);
					var sel = opt.parentNode;
					sel.removeChild(opt);
					if(skills[sel.value] != undefined){
						skills[sel.value].show();
					}
					else{
						document.getElementById(v.type+"Selected").innerHTML = "";
					}
				}
			);
			div.appendChild(addButton);
		},
		"add":function(){
			variables["skills"][this.name] = this;
			if(this.basedOn != "nothing"){
				variables["characteristics"][this.basedOn]["pings"].push(["skills",this.name]);//TODO
			}
			addSkillRow(this.name);
		},
		"remove":function(){
			//TODO if everyman get 1 CP
			removeSPTRow("skills",this.name);
			if(this.basedOn != "nothing"){
				variables["characteristics"][this.basedOn]["pings"].pop(["skills",this.name]);//TODO
			}
			delete variables["skills"][this.name];
			//TODO update CP
		},
		"update":function(){
			var id = this.name;
			document.getElementById(id).innerHTML = this.description();
			this.finalCost = this.baseCost+this.level*this.perLevel;
			var roll = "";
			if(this.basedOn != "nothing"){
				var x = variables["characteristics"][this.basedOn];
				if(this.total != undefined){
					roll= ((Math.round((9+x.total/5)+this.level).toString()) +"-");
				}
				roll= ((Math.round((9+x.value/5)+this.level).toString()) +"-");
			}
			if(this.level == -1){
				this.finalCost = 2;
				roll = "10-"
			}
			if(this.level == -2){
				this.finalCost = 1;
				if(this.everyman)this.finalCost = 0;
				roll = "8-"
			}
			if(this.level == -3){
				this.finalCost = 0;
				if(this.everyman)this.finalCost = -1;
				roll = "nA"
			}
			document.getElementById(id+"cost").innerHTML = this.finalCost;
			document.getElementById(id+"roll").innerHTML = roll;
			ping(this["pings"]);
		},
		"description":function(){
			if(this.level == -3)return this.name +" (Removed)";
			if(this.level == -2)return this.name +" (Familiarity)";
			if(this.level == -1)return this.name +" (Proficient)";
			return this.name;
		},
		"totalCost":function(){
			if(this.everyman && this.level==0){
				return 0;
			}
			return this.finalCost;
		}
	}
}

function showStandardSkill(name){
	var skill = skills[name];
	var div = document.getElementById(skill.type+"Selected");
	div.innerHTML = "";
	var addButton = document.createElement("DIV");
	addButton.className = "Button";
	addButton.innerHTML = "Add";
	addButton.id = "addButton"+ skill.name;
	var emc = document.createElement("INPUT");
	var em = document.createElement("DIV");
	em.innerHTML = "Everyman";
	emc.type = "checkbox";
	emc.id = "emc" + skill.name;
	emc.checked = skill.everyman;
	div.appendChild(em);
	em.appendChild(emc);
	addButton.addEventListener("click", function(){
			var name = this.id.substring(9);
			skills[name].add();
			var em = document.getElementById("emc" + name);
			variables["skills"][name].everyman = em.checked;
			variables["skills"][name].update();
			var opt = document.getElementById("option"+ skills[name].type+ name);
			var sel = opt.parentNode;
			sel.removeChild(opt);
			if(skills[sel.value] != undefined){
				skills[sel.value].show();
			}
			else{
				sel.innerHTML = "";
			}
		}
	);
	div.appendChild(addButton);
}
function addStandardSkill(name){
	//TODO check for skill levels
	//TODO check for skill enhancers
	var skill = skills[name];
	variables["skills"][skill.name] = skill;
	if(skill.basedOn != "nothing"){
		variables["characteristics"][skill.basedOn]["pings"].push(["skills",skill.name]);//TODO
	}
	addSkillRow(name);
}
function updateStandardSkill(name){
	var skill = variables.skills[name];
	//TODO skill enhancers
	var id = name;
	var total = skill.level;
	var obj = variables;
	
	for(var i = 0; i < skill.totalMods.length;i++){
		for(var j = 0; j < skill.totalMods[i].length; j++){
			obj = obj[skill.totalMods[i][j]];
		}
		total += obj;
		obj = variables;
	}
	
	document.getElementById(id).innerHTML = skill.description();
	skill.finalCost = skill.baseCost+skill.level*skill.perLevel;
	for(var i in skill.skillEnhancers){
		skill.finalCost -= skill.skillEnhancers[i];
	}
	if(skill.finalCost <= 0){
		skill.finalCost = 1;
	}
	var roll = "11-";
	
	var troll = 0;
	if(skill.basedOn != "nothing"){
		var x = variables["characteristics"][skill.basedOn];
		console.log(x.totalV);
		
		obj = variables;
		for(var i = 0; i < skill.totalRMods.length;i++){
			for(var j = 0; j < skill.totalRMods[i].length; j++){
				obj = obj[skill.totalRMods[i][j]];
			}
			total += obj;
			obj = variables;
		}
		
		troll+= Math.round(9+x.totalV/5)+total;
		troll = troll.toString() +"-";
		roll= ((Math.round((9+x.value/5)+skill.level).toString()) +"-");
	}
	if(skill.level == -1){
		skill.finalCost = 2;
		roll = "10-";
		troll = roll;
	}
	if(skill.level == -2){
		skill.finalCost = 1;
		if(skill.everyman)skill.finalCost = 0;
		roll = "8-";
		troll = roll;
	}
	if(skill.level == -3){
		skill.finalCost = 0;
		if(skill.everyman)skill.finalCost = -1;
		roll = "nA"
		troll = roll;
	}
	document.getElementById(id+"cost").innerHTML = skill.finalCost;
	document.getElementById(id+"total").innerHTML = total;
	document.getElementById(id+"roll").innerHTML = roll;
	document.getElementById(id+"tRoll").innerHTML = troll;
	ping(skill["pings"]);
}
function descriptionStandardSkill(n){
	var skill = variables.skills[n];
	if(skill.level == -3){
		if(skill.everyman){
			return skill.name + " (Removed Everyman)"
		}
		return skill.name +" (Removed)";
	}
	if(skill.level == -2){
		if(skill.everyman){
			return skill.name + " (Everyman)"
		}
		return skill.name +" (Familiarity)";
	}
	if(skill.level == -1)return skill.name +" (Proficient)";
	return skill.name.toString();
}