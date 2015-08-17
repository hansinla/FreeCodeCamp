(function(){

	var app= angular.module('store', []);

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '.  .  .',
			canPurchase: true,
			soldOut: false,
			reviews:[
			{
				stars: 5,
				body: "I Love this product",
				author: "joe@mac.com"
			},
			{
				stars: 4,
				body: "Great",
				author: "joe2@mac.com"
			}

			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '.  .  .',
			canPurchase: false,
			soldOut: false,
			reviews:[
			{
				stars: 1,
				body: "so, so",
				author: "joe3@mac.com"
			},
			{
				stars: 1,
				body: "would not buy again",
				author: "joe4@mac.com"
			}

			]
		}
	];

	app.controller('StoreController', function(){
		this.products =  gems;

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

})();