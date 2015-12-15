/**
 * Created by jarodmoser on 12/11/15.
 */
(function () {
	'use strict';

	angular.module('itemsController', [])
		.controller('itemsController', itemsController);

	itemsController.$inject = ['$location'];

	function itemsController($location) {

		// list everything
		var ic = this;
		ic.addItem = addItem;
		ic.removeItem = removeItem;
		ic.listIndex = $location.url();
		ic.listIndex = ic.listIndex.substr(ic.listIndex.length - 1);

		// makes global var accessible in this controller
		ic.lists = lists;

		// define functions
		function addItem(item) {
			lists[ic.listIndex].items.push({
				priority: "high",
				todoItem: item,
				done: false
			});
		}

		function removeItem() {
			//this will remove a to do item
		}
	}

}());
