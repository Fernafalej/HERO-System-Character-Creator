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
			addRollSkill(this.name)
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
	"Acting": {
		"name":"Acting",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Analyze": {
		"name":"Analyze",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
		"usesSubcategories":false,
		
		"level":0,
		"total":0,
		"finalCost":1,
		"pings":[],
		"totalMods":[],
		"totalRMods":[],
		"skillEnhancers":[],
		
		"categories":[],
		"possibleCategories":[
			"Aquatic Animals",
			"Birds",
			"Bovines",
			"Camels",
			"Canines",
			"Dragons",
			"Elephants",
			"Felines",
			"Insects & Arthropods",
			"Raptors",
			"Reptiles & Amphibians",
			"Ursine",
		],
		"skillLevels":[],
		
		"show":function(){
			showCategorizedSkill(this.name)
		},
		"add":function(){
			addRollSkill(this.name)
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
	},
	//Autofire Skills
	"Breakfall": {
		"name":"Breakfall",
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
			addRollSkill(this.name)
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
	"Bribery": {
		"name":"Bribery",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Bugging": {
		"name":"Bugging",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Bureaucratics": {
		"name":"Bureaucratics",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Charm": {
		"name":"Charm",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Climbing": {
		"name":"Climbing",
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
			addRollSkill(this.name)
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
	"Combat Driving": {
		"name":"Combat Driving",
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
			addRollSkill(this.name)
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
	"Combat Piloting": {
		"name":"Combat Piloting",
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
			addRollSkill(this.name)
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
	//Combat Skill Levels
	"Computer Programming": {
		"name":"Computer Programming",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Concealment": {
		"name":"Concealment",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Contortionist": {
		"name":"Contortionist",
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
			addRollSkill(this.name)
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
	"Conversation": {
		"name":"Conversation",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	//Cramming
	"Criminology": {
		"name":"Criminology",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Cryptography": {
		"name":"Cryptography",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Deduction": {
		"name":"Deduction",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	},"Acrobatics": {
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
			addRollSkill(this.name)
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
	},"Acrobatics": {
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
			addRollSkill(this.name)
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
	//Defense Maneuver
	"Demolitions": {
		"name":"Demolitions",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Disguise": {
		"name":"Disguise",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Electronics": {
		"name":"Electronics",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Fast Draw": {
		"name":"Fast Draw",
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
			addRollSkill(this.name)
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
	"Forensic Medicine": {
		"name":"Forensic Medicine",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	//Forgery TODO
	//Gambling TODO
	"High Society": {
		"name":"High Society",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Interrogation": {
		"name":"Interrogation",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Inventor": {
		"name":"Inventor",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	//Knowledge Skill
	//Language
	"Lipreading": {
		"name":"Lipreading",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Lockpicking": {
		"name":"Lockpicking",
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
			addRollSkill(this.name)
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
	//Martial Arts
	"Mechanics": {
		"name":"Mechanics",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Mimikry": {
		"name":"Mimikry",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	//Navigation
	"Oratory": {
		"name":"Oratory",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Paramedics": {
		"name":"Paramedics",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	// Penalty Skill Levels
	"Persuasion": {
		"name":"Persuasion",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	//Power
	//Professional Skill
	//Rapid Attack
	"Riding": {
		"name":"Riding",
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
			addRollSkill(this.name)
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
	//Science Skill
	"Security Systems": {
		"name":"Security Systems",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Shadowing": {
		"name":"Shadowing",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	//Skill Levels
	"Sleight Of Hand": {
		"name": "Sleight Of Hand",
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
			addRollSkill(this.name)
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
	},/*"Acrobatics": {
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
			addRollSkill(this.name)
		},
		"remove":function(){
			
			
			//TODO if everyman get 1 CP
			removeSPTRow("skills",this.name);
			if(this.basedOn != "nothing"){
				variables["characteristics"][this.basedOn]["pings"].pop(["skills",this.name]);//TODO
			}
			delete variables["skills"][this.name]
			//TODO update CP
			
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
	},*/
	"Stealth": {
		"name":"Stealth",
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
			addRollSkill(this.name)
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
	"Streetwise": {
		"name":"Streetwise",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	"Survival": {
		"name":"Survival",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Systems Operation": {
		"name":"Systems Operation",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Tactics": {
		"name":"Tactics",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Teamwork": {
		"name":"Teamwork",
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
			addRollSkill(this.name)
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
	"Tracking": {
		"name":"Trackin",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Trading": {
		"name":"Trading",
		"type": "Interaction",
		"basedOn": "Presence",
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
			addRollSkill(this.name)
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
	//Transport Familiarity
	//Two-Weapon Fighting
	"Ventriloquism": {
		"name":"Ventriloquism",
		"type": "Intellect",
		"basedOn": "Intelligence",
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
			addRollSkill(this.name)
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
	"Weapon Familiarity":{
		
		//TODO no roll
		"name":"Weapon Familiarity",
		"type": "Combat",
		"basedOn": "Presence",
		"baseCost":1,
		"perLevel":2,
		"perCategory":2,
		"perSubcategory":1,
		"everyman":false,
		"min": -3,
		"max": -1,
		"usesSubcategories":true,
		
		"level":0,
		"total":0,
		"finalCost":2,
		"pings":[],
		"totalMods":[],
		"totalRMods":[],
		"skillEnhancers":[],
		
		"categories":[],
		"possibleCategories":[
			"Common Meele Weapons",
			"Common Martial Arts Melee Weapons",
			"Common Missile Weapons",
			"Siege Engines",
			"Small Arms",
			
		],
		"subcategories":[],
		"possibleSubcategories":{
			"Common Meele Weapons":[
				"Unarmed Combat",
				"Axes & Maces & Hammers & Picks",
				"Blades",
				"Clubs",
				"Fist-Loads",
				"Polearms & Spears",
				"Two-Handed Weapons",
			],
			"Uncommon Melee Weapons":[
				"Flails",
				"Garrote",
				"Lances",
				"Nets",
				"Staffs",
				"Whips"
			],
			"Common Martial Arts Melee Weapons":[
				"Chain & Rope Weapons",
				"Ninja Weapons",
				"Rings",
				"Staffs",
				"War Fan"
			],
			"Common Missile Weapons":[
				"Thrown Rocks",
				"Bows",
				"Crossbows",
				"Javelins & Thrown Spears",
				"Thrown Knives & Axes & Darts"
			],
			"Uncommon Missile Weapons":[
				"Blowguns",
				"Boomerangs",
				"Slings"
			],
			"Siege Engines":[
			"Ballista",
				"Catapult",
				"Siege Tower",
				"Trebuchet"
			],
			"Small Arms":[
				"Assault Rifles/LMGs",
				"Handguns",
				"Rifles",
				"Shotguns",
				"Submachine Guns",
				"Thrown Grenades"
			],
			"Uncommon Modern Weapons":[
				"Flamethrowers",
				"Grenade Launchers",
				"General Purpose/Heavy Machine Guns",
				"Shoulder-Fired Weapons",
			],
		},
		"skillLevels":[],
		"freeSubcategories":["Clubs","Fist-Loads"],
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
	},
	//Weaponsmith
}

function showStandardSkill(name){
	var skill = skills[name];
	var div = document.getElementById(skill.type+"Selected");
	div.innerHTML = "";
	var addButton = document.createElement("DIV");
	addButton.className = "addButton";
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
		var opt = document.getElementById("option"+ skills[name].type + name);
		if(opt == null){
			return;
		}
		skills[name].add();
		var em = document.getElementById("emc" + name);
		variables["skills"][name].everyman = em.checked;
		if(variables["skills"][name].everyman){
			variables["skills"][name].level = -2;
		}
		variables["skills"][name].update();
		var sel = opt.parentNode;
		sel.removeChild(opt); //Removes the choosen Option
		document.getElementById("selectskillsDelete").appendChild(opt);
		opt.id = "selectDelete"+name;
		if(sel.childNodes.length == 1){
			
			//sel.style.visibility = "hidden"; //if empty don't display me
			//TODO bad workaround
			this.parentNode.innerHTML ="";
		}
		if(skills[sel.value] != undefined){
			skills[sel.value].show();
		}
		else{
			sel.innerHTML = "";
		}
	});
	div.appendChild(addButton);
}
function addRollSkill(name){
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
	document.getElementById("input"+id).value = skill.level;
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
	//console.log(skill.type);
	div.innerHTML = "";
	var addButton = document.createElement("DIV");
	addButton.className = "addButton";
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
				var opt2 = document.createElement("OPTION");
				document.getElementById("selectskillsDelete").appendChild(opt2);
				opt2.id = "selectDelete"+name;
				opt2.innerHTML = name;
			}
		);
	}
	//This skill exists and can get new categories;
	else{
		var table = document.createElement("DIV");
		table.style.display="table";
		div.appendChild(table);
		var row1 = document.createElement("DIV");
		table.appendChild(row1);
		row1.style.display="table-row";
		var div2 = document.createElement("DIV");
		var span = document.createElement("DIV");
		var span2 = document.createElement("DIV");
		div2.style.display ="table-cell";
		span.style.display ="table-cell";
		span2.style.display ="table-cell";
		div2.innerHTML = " Add Categorie: ";
		row1.appendChild(div2);
		row1.appendChild(span);
		row1.appendChild(span2);
		var input = document.createElement("INPUT");
		span.appendChild(input);
		span2.appendChild(addButton);
		var row2 = document.createElement("DIV");
		var div3 = document.createElement("DIV");
		var span3 = document.createElement("DIV");
		var span4 = document.createElement("DIV");
		table.appendChild(row2);
		row2.appendChild(div3);
		div3.innerHTML = " Add Categorie: ";
		row2.appendChild(span3);
		row2.appendChild(span4);
		row2.style.display = "table-row";
		div3.style.display = "table-cell";
		span3.style.display = "table-cell";
		span4.style.display = "table-cell";
		var sel = document.createElement("SELECT");
		sel.id = "selectPossCategories"+skill.name;
		for(var i = 0; i < skill.possibleCategories.length;i++){
			if(!skill.categories.includes(skill.possibleCategories[i])){
			var opt = document.createElement("option");
			opt.innerHTML = skill.possibleCategories[i];
			opt.id = "option" + skill["name"] + skill.possibleCategories[i];			
			sel.appendChild(opt);
			}
		}
		span3.appendChild(sel);
		var addButton2 = document.createElement("DIV");
		span4.appendChild(addButton2);
		addButton2.className = "addButton";
		addButton2.innerHTML = "Add";
		addButton2.id = "addButton2"+ skill.name;
		if(skill.usesSubcategories){
			//TODO
			var row3 = document.createElement("DIV");
			var div4 = document.createElement("DIV");
			var span5 = document.createElement("DIV");
			var span6 = document.createElement("DIV");
			var row4 = document.createElement("DIV");
			var div5 = document.createElement("DIV");
			var span7 = document.createElement("DIV");
			var span8 = document.createElement("DIV");
			row3.style.display = "table-row";
			row4.style.display = "table-row";
			div4.style.display = "table-cell";
			div5.style.display = "table-cell";
			span5.style.display = "table-cell";
			span6.style.display = "table-cell";
			span7.style.display = "table-cell";
			span8.style.display = "table-cell";
			table.appendChild(row3);
			table.appendChild(row4);
			row3.appendChild(div4);
			row4.appendChild(div5);
			row3.appendChild(span5);
			row3.appendChild(span6);
			row4.appendChild(span7);
			row4.appendChild(span8);
			div4.innerHTML = " Add Subcategorie:";
			div5.innerHTML = " Add Subcategorie:";
			var input2 = document.createElement("INPUT");
			span5.appendChild(input2);
			var addButton3 = document.createElement("DIV");
			var addButton4 = document.createElement("DIV");
			span6.appendChild(addButton3);
			span8.appendChild(addButton4);
			addButton3.className = "addButton";
			addButton3.innerHTML = "Add";
			addButton4.className = "addButton";
			addButton4.innerHTML = "Add";
			var sel2 = document.createElement("SELECT");
			span7.appendChild(sel2);
			sel2.id = "selectPossSubcategories"+skill.name;
			var catAvailable = [];
			for(var i = 0; i < skill.possibleCategories.length;i++){
				if(!skill.categories.includes(skill.possibleCategories[i])){
					catAvailable.push(skill.possibleCategories[i]);
				}
			}
			for(var j = 0; j < catAvailable.length;j++){							
				var x = skill.possibleSubcategories[catAvailable[j]];
				for(var i = 0; i < x.length;i++){
					if(!skill.subcategories.includes(x[i])){
						var opt = document.createElement("option");
					opt.innerHTML = x[i];
					opt.id = "option" + skill["name"] + x[i];			
					sel2.appendChild(opt);
					}
				}
			}
			addButton3.id = "addButton3"+ skill.name;
			addButton4.id = "addButton4"+ skill.name;
			addButton3.addEventListener("click", function(){
					var name = this.id.substring(10);
					if(!variables.skills[name].subcategories.includes(input.value) && input.value != ""){
						variables.skills[name].subcategories.push(input.value);
						updateCategorizedSkill(name);
						showCategorizedSkill(name);
					}
					variables.totalCosts.skills.update();
				}
			);
			addButton4.addEventListener("click", function(){
					var name = this.id.substring(10);
					var sel = document.getElementById("selectPossSubcategories"+name);
					if(!variables.skills[name].subcategories.includes(sel.value) && sel.value != ""){
						variables.skills[name].subcategories.push(sel.value);
						updateCategorizedSkill(name);
						showCategorizedSkill(name);
					}
					variables.totalCosts.skills.update();
				}
			);
		}
		addButton.addEventListener("click", function(){
				var name = this.id.substring(9);
				if(!variables.skills[name].categories.includes(input.value) && input.value != ""){
					variables.skills[name].categories.push(input.value);
					if(variables.skills[name].usesSubcategories){
						for(var i = 0; i < skills[name].possibleSubcategories[input.value].length;i++){
							var j = variables.skills[name].subcategories.indexOf(skills[name].possibleSubcategories[input.value][i]);
							if(j != -1){
								variables.skills[name].subcategories.splice(j,1);
							}
						}
					}
					updateCategorizedSkill(name);
					showCategorizedSkill(name);
					
				}
				variables.totalCosts.skills.update();
			}
		);
		addButton2.addEventListener("click", function(){
				var name = this.id.substring(10);
				var sel = document.getElementById("selectPossCategories"+name);
				if(!variables.skills[name].categories.includes(sel.value) && sel.value != ""){
					variables.skills[name].categories.push(sel.value);
					if(variables.skills[name].usesSubcategories){
						for(var i = 0; i < skills[name].possibleSubcategories[sel.value].length;i++){
							var j = variables.skills[name].subcategories.indexOf(skills[name].possibleSubcategories[sel.value][i]);
							if(j != -1){
								variables.skills[name].subcategories.splice(j,1);
							}
						}
					}
					updateCategorizedSkill(name);
					showCategorizedSkill(name);
				}
				variables.totalCosts.skills.update();
			}
		);
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
	skill.finalCost = skill.baseCost+ (skill.level*skill.perLevel) + (skill.categories.length*skill.perCategory);
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
	//document.getElementById(name).innerHTML = variables.skills[name].description();
} 
function descriptionCategorizedSkill(name){
	var skill = variables.skills[name];
	var string = skill.name;
	var sub = 0;
	if(skill.subcategories!= undefined) sub = skill.subcategories.length;
	if(skill.categories.length > 0 || sub > 0){
		string +=  " (";
		if(skill.categories.length > 0){
			string += skill.categories[0];
			for(var i = 1; i < skill.categories.length; i++){
				string += ", ";
				string += skill.categories[i];
			}
			if(sub > 0){
				for(var i = 0; i < skill.subcategories.length; i++){
					string += ", ";
					string += skill.subcategories[i];
				}
			}
		}
		else{
			string += skill.subcategories[0];
			for(var i = 1; i < skill.subcategories.length; i++){
				string += ", ";
				string += skill.subcategories[i];
			}
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
	if(skill.level == -1)return string +" (Proficient)";
	return string.toString();
}
function removeCategorizedSkill(name){}

function deleteSkill(){
	
	//TODO!!!
	var s = document.getElementById("selectskillsDelete").value;
	if(s== ""){
		return;
	}
	console.log(s);
	var v = variables.skills[s];
	var t = v.type;
	var opt = document.getElementById("selectDelete"+s);
	if(v.usesSubcategories == undefined){
		opt.id = "option"+v.type+s;
		opt.parentNode.removeChild(opt);
		document.getElementById("selectskills"+v.type).appendChild(opt);
		document.getElementById(s).parentNode.parentNode.removeChild(document.getElementById("row"+s));
		delete variables.skills[s];
		variables.totalCosts.skills.update();
		showStandardSkill(s);
	}else{
		while(skills[s].categories.length>0){
			skills[s].possibleCategories.push(v.categories.pop());
		}
		if(skills[s].usesSubcategories == true){
			while(skills[s].subcategories.length>0){
				skills[s].subcategories.pop();
			}
		}
		opt.parentNode.removeChild(opt);
		document.getElementById(s).parentNode.parentNode.removeChild(document.getElementById("row"+s));
		delete variables.skills[s];
		variables.totalCosts.skills.update();
		showCategorizedSkill(s);
	}

	
	
	
	//TODO remove skillRow
	//TODO add skill options
	//TODO remove delete option
	//delete variables.skills[s];
	//variables.totalCosts.skills.update();
}