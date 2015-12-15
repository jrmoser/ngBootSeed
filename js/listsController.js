/**
 * Created by jarodmoser on 12/11/15.
 */
(function () {
	'use strict';

	angular.module('listsController', [])
		.controller('listsController', listsController);

	listsController.$inject = [];

	function listsController() {

		// list everything
		var lc = this;
		lc.listName = '';
		lc.addList = addList;
		lc.removeList = removeList;

		// makes global var accessible in this controller
		lc.lists = lists;

		// define functions
		function addList() {
			lists.push({
				name: "list one",
				items: []
			});
		}

		function removeList() {
			//this will remove a to do list
		}
	}

}());
