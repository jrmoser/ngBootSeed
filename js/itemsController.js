/**
 * Created by jarodmoser on 12/11/15.
 */
(function () {
	'use strict';

	angular.module('itemsController', [])
		.controller('itemsController', itemsController);

	itemsController.$inject = [];

	function itemsController() {

		// list everything
		var ic = this;
		ic.addItem = addItem;
		ic.removeItem = removeItem;

		ic.lists = lists;

		// define functions
		function addItem(item) {
			lists[0].items.push({
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
