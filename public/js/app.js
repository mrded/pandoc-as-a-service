'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', []);

myApp.service('FormatsService', function() {
  return {
    input: [
      'commonmark',
      'docbook',
      'haddock',
      'html',
      'latex',
      'markdown',
      'markdown_github',
      'markdown_mmd',
      'markdown_phpextra',
      'markdown_strict',
      'mediawiki',
      'opml',
      'org',
      'rst',
      't2t',
      'textile',
      'twiki'
    ],
    output: [
      'asciidoc',
      'beamer',
      'commonmark',
      'context',
      'docbook',
      'dokuwiki',
      'dzslides',
      'fb2',
      'haddock',
      'html',
      'html5',
      'icml',
      'latex',
      'man',
      'markdown',
      'markdown_github',
      'markdown_mmd',
      'markdown_phpextra',
      'markdown_strict',
      'mediawiki',
      'native',
      'opendocument',
      'opml',
      'org',
      'plain',
      'revealjs',
      'rst',
      'rtf',
      's5',
      'slideous',
      'slidy',
      'texinfo',
      'textile'
    ]
  };
});

myApp.controller('AppCtrl', function($scope, $http, FormatsService) {
  $scope.inputFormat = 'markdown';
  $scope.outputFormat = 'mediawiki';
  
  $scope.inputFormats = FormatsService.input;
  $scope.outputFormats = FormatsService.output
  
  $scope.input = "# hello";
  
  $scope.convert = function (inputFormat, outputFormat, data) {
    var request = {
      method: 'POST',
      url: '/' + outputFormat,
      headers: {
        'Content-Type': "text/" + inputFormat
      },
      data: data
    };

    $http(request).success(function(data, status, headers, config) {
      $scope.output = data;
    }).error(function(data, status, headers, config) {
      $scope.output = data;
    });
  };
});
