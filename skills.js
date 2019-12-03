var skills = {
	//Standard Skills
	"Acrobatics": {
		"name":"Acrobatics",
		"type": "Agility",
		"basedOn": "Dexterity",
		"baseCost":3,
		"perLevel":2,
		"everyman":false,
		"min": -3,
		"max": -1,
		
		"level":0,
		"total":0,
		"finalCost":3,
		"pings":[],
		"totalMods":[],
		"totalRMods":[],
		"skillEnhancers":[],
		"skillLevels":[],
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
	"Animal Handler":{
		"name":"Animal Handler",
		"type": "Interaction",
		"basedOn": "Presence",
		"baseCost":1,
		"perLevel":2,
		"perCategory":1,
		"everyman":false,
		"min": -3,
		"max": -1,
		"subcategories":false,
		
		"level":0,
		"total":0,
		"finalCost":3,
		"pings":[],
		"totalMods":[],
		"totalRMods":[],
		"skillEnhancers":[],
		
		"categories":[],
		"possibleCategories":[
			"Elephants",
		],
		"skillLevels":[],
		
		"show":function(){
			showCategorizedSkill(this.name)
		},
		"add":function(){
			addCategorizedSkill(this.name)
		},
		"remove":function(){
			
		},
		"update":function(){
			updateCategorizedSkill(this.name);
		},
		"description":function(){
			return descriptionCategorizedSkill(this.name);
		},
		"totalCost":function(){
			if(this.everyman && this.level== 0){
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
			sel.removeChild(opt); //Removes the choosen Option
			if(sel.childNodes.length == 1){
				//sel.style.visibility = "hidden"; //if empty don't display me
				//TODO bad workaround
				this.parentNode.parentNode.innerHTML ="";
			}
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
function removeStandardSkill(n){
}

function showCategorizedSkill(name){
	var skill = skills[name];
	var div = document.getElementById(skill.type+"Selected");
	div.innerHTML = "";
	var addButton = document.createElement("DIV");
	addButton.className = "Button";
	addButton.innerHTML = "Add";
	addButton.id = "addButton"+ skill.name;
	//This skill needs to be added from Scratch
	if(variables.skills[name] == undefined){
		div.appendChild(addButton);
		var emc = document.createElement("INPUT");
		var em = document.createElement("DIV");
		em.innerHTML = "Everyman";
		emc.type = "checkbox";
		emc.id = "emc" + skill.name;
		emc.checked = skill.everyman;
		div.insertBefore(em,addButton);
		em.appendChild(emc);
		addButton.addEventListener("click", function(){
				var name = this.id.substring(9);
				skills[name].add();
				var em = document.getElementById("emc" + name);
				variables["skills"][name].everyman = emc.checked;
				variables["skills"][name].update();
				var opt = document.getElementById("option"+ skills[name].type+ name);
				var sel = opt.parentNode;
				skills[sel.value].show();
			}
		);
	}
	//This skill can get new categories;
	else{
		var div2 = document.createElement("DIV");
		var span = document.createElement("SPAN");
		var span2 = document.createElement("SPAN");
		div2.innerHTML = " Add Categorie: ";
		div2.appendChild(span);
		div2.appendChild(span2);
		var input = document.createElement("INPUT");
		span.appendChild(input);
		span2.appendChild(addButton);
		div.appendChild(div2);
		addButton.addEventListener("click", function(){
				var name = this.id.substring(9);
				variables.skills[name].categories.push(input.value);
				console.log(variables.skills[name].categories);
				updateCategorizedSkill(name);
			}
		);
		//div.insertBefore(div2, addButton);
	}
}
function addCategorizedSkill(name){
	var skill = skills[name];
	variables["skills"][skill.name] = skill;
	if(skill.basedOn != "nothing"){
		variables["characteristics"][skill.basedOn]["pings"].push(["skills",skill.name]);//TODO
	}
	addSkillRow(name);
}
function updateCategorizedSkill(name){
	console.log(document.getElementById(name));
	console.log(variables.skills[name].description());
	console.log(variables.skills);
	document.getElementById(name).innerHTML = variables.skills[name].description();
}
function descriptionCategorizedSkill(name){
	console.log("HI");
	var skill = variables.skills[name];
	var string = skill.name;
	if(skill.categories.length > 0){
		string +=  " (";
		for(var i = 0; i < skill.categories.length; i++){
			string += skill.categories[i];
		}
		string += ")";
	}
	if(skill.level == -3){
		if(skill.everyman){
			return string + " (Removed Everyman)"
		}
		return string +" (Removed)";
	}
	if(skill.level == -2){
		if(skill.everyman){
			return string + " (Everyman)"
		}
		return string +" (Familiarity)";
	}
	if(skill.level == -1)return skill.name +" (Proficient)";
	return string.toString();
}
function removeCategorizedSkill(name){}