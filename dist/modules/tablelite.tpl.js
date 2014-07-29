/**
 * adapt-strap
 * @version v0.0.9 - 2014-07-29
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/tablelite.tpl.html', '<div class="ad-table-lite-container"><table class="%=tableClasses%"><tr><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortable}"><div class="pull-right" ng-if="%=tableName%.localConfig.predicate == definition.displayProperty"><i class="glyphicon glyphicon-chevron-up" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="glyphicon glyphicon-chevron-down" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="%=tableName%.localConfig.predicate != definition.displayProperty && definition.sortable"><i class="glyphicon glyphicon-resize-vertical"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr data-ng-repeat="item in %=tableName%.items.list"><td data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ %=tableName%.applyFilter(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr></table><div class="row"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-fast-backward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="glyphicon glyphicon-backward"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-forward"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="glyphicon glyphicon-fast-forward"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);