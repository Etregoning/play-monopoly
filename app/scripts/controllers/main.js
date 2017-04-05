'use strict';

angular.module('monopolyApp')
  .controller('MainCtrl', function ($scope, $window, $timeout, localStorageService) {

    $scope.windowWidth = $window.innerWidth;

    $window.onresize = function() {
      $timeout(function(){
        $scope.windowWidth = $window.innerWidth;
      });
    };

    $(function() {
        $(".clearLink").click(function() {
            $('#clearCache').modal('show');
        });
    });

    var countInJackpot = localStorageService.get('jackpot');
    $scope.jackpot = countInJackpot || [
      {
        letter: '8Z',
        prize: '$1,000,000 Cash',
        numbers: ['8Z01A','8Z02B','8Z03C','8Z04D','8Z05E','8Z06F','8Z07G','8Z08F'],
        count: [0,0,0,0,0,0,0,0]
      },
      {
        letter: '8Y',
        prize: '$1,000,000 Vacation Home',
        numbers: ['8Y09A','8Y10B','8Y11C','8Y12D','8Y13E','8Y14F','8Y15G','8Y16H'],
        count: [0,0,0,0,0,0,0,0]
      },
      {
        letter: '8B',
        prize: '$20,000 College Tuition',
        numbers: ['8B96A','8B97B','8B98C','8B99D','8B00E'],
        count: [0,0,0,0,0]
      },
      {
        letter: '8C',
        prize: '$35,000 Vehicle of Your Choice',
        numbers: ['8C91A','8C92B','8C93C','8C94D','8C95E'],
        count: [0,0,0,0,0]
      },
      {
        letter: '8D',
        prize: '$40,000 Home Makeover',
        numbers: ['8D86A','8D87B','8D88C','8D89D','8D90E'],
        count: [0,0,0,0,0]
      },
      {
        letter: '8E',
        prize: '$100,000 Cash or Luxury Car',
        numbers: ['8E81A','8E82B','8E8C3','8E384D','8E85E'],
        count: [0,0,0,0,0]
      }
    ];

    var countInPieces = localStorageService.get('pieces');
    $scope.pieces = countInPieces || [
      {
        letter: '8F',
        prize: '$5,000 Cash',
        numbers: ['8F77A','8F78B','8F79C','8F80D'],
        count: [0,0,0,0]
      },
      {
        letter: '8G',
        prize: '$5,000 Groceries',
        numbers: ['8G73A','8G74B','8G75C','8G76D'],
        count: [0,0,0,0]
      },
      {
        letter: '8H',
        prize: '$1,500 Gas Grill &amp; Groceries',
        numbers: ['8H69A','8H70B','8H71C','8H72D'],
        count: [0,0,0,0]
      },
      {
        letter: '8K',
        prize: '$1,500 LED HD TV',
        numbers: ['8K61A','8K62B','8K63C','8K64D'],
        count: [0,0,0,0]
      },
      {
        letter: '8L',
        prize: '$1,000 Grocery Gift Card',
        numbers: ['8L57A','8L58B','8L59C','8L60D'],
        count: [0,0,0,0]
      },
      {
        letter: '8M',
        prize: '$1,000 Laptop Computer',
        numbers: ['8M53A','8M54B','8M55C','8M56D'],
        count: [0,0,0,0]
      },
      {
        letter: '8N',
        prize: '$500 Grocery Gift Card',
        numbers: ['8N49A','8N50B','8N51C','8N52D'],
        count: [0,0,0,0]
      },
      {
        letter: '8P',
        prize: '$300 Smart Watch',
        numbers: ['8P45A','8P46B','8P47C','8P48D'],
        count: [0,0,0,0]
      },
      {
        letter: '8Q',
        prize: '$200 Family Picnic',
        numbers: ['8Q41A','8Q42B','8Q43C','8Q44D'],
        count: [0,0,0,0]
      },
      {
        letter: '8R',
        prize: '$200 Cash',
        numbers: ['8R37A','8R38B','8R39C','8R40D'],
        count: [0,0,0,0]
      },
      {
        letter: '8S',
        prize: '$100 Grocery Gift Card',
        numbers: ['8S33A','8S34B','8S35C','8S36D'],
        count: [0,0,0,0]
      },
      {
        letter: '8T',
        prize: '$100 Cash',
        numbers: ['8T29A','8T30B','8T31C','8T32D'],
        count: [0,0,0,0]
      },
      {
        letter: '8V',
        prize: '$50 Grocery Gift Card',
        numbers: ['8V25A','8V26B','8V27C','8V28D'],
        count: [0,0,0,0]
      },
      {
        letter: '8W',
        prize: '$25 Grocery Gift Card',
        numbers: ['8W21A','8W22B','8W23C','8W24D'],
        count: [0,0,0,0]
      },
      {
        letter: '8X',
        prize: '$25 Gift Card Mall',
        numbers: ['8X17A','8X18B','8X19C','8X20D'],
        count: [0,0,0,0]
      }
    ];
    var countInRowFix = localStorageService.get('jackpot');
    $scope.rowFix = countInRowFix || [
      {
        letter:  '9A',
        prize: '$10,000 4-Wheeler',
        numbers: ['9A02A','9A03B','9A04C','9A05D','9A06E'],
        count: [0,0,0,0,0]
      },
      {
        letter: '9B',
        prize: '$10,000 Family Vacation',
        numbers: ['9B07A','9B08B','9B09C','9B10D','9B11E'],
        count: [0,0,0,0,0]
      },
      {
        letter: '9C',
        prize: '$25 Cash',
        numbers: ['9C12A','9C13B','9C14C','9C15D'],
        count: [0,0,0,0]
      },
      {
        letter: '9D',
        prize: '$25 Fandango Gift Card',
        numbers: ['9D16A','9D17B','9D18C','9D19D'],
        count: [0,0,0,0]
      },
      {
        letter: '9E',
        prize: '$15 Grocery Gift Card',
        numbers: ['9E20A','9E21B','9E22C','9E23D'],
        count: [0,0,0,0]
      },
      {
        letter: '9F',
        prize: '$10 Grocery Gift Card',
        numbers: ['9F24A','9F25B','9F26C','9F27D'],
        count: [0,0,0,0]
      }
    ];
    var countInRemaining = localStorageService.get('jackpot');
    $scope.remaining = countInRemaining || [
      {
        letter: '9G',
        prize: '$10 Cash',
        numbers: ['9G28A','9G29B','9G30C','9G31D'],
        count: [0,0,0,0]
      },
      {
        letter: '9H',
        prize: '$5 Grocery Gift Card',
        numbers: ['9H32A','9H33B','9H34C','9H35D'],
        count: [0,0,0,0]
      },
      {
        letter: '9J',
        prize: '$5 Cash',
        numbers: ['9J36A','9J37B','9J38C','9J39D'],
        count: [0,0,0,0]
      }
    ];

    $scope.$watch('jackpot', function () {
      localStorageService.set('jackpot', $scope.jackpot);
    }, true);
    $scope.$watch('pieces', function () {
      localStorageService.set('pieces', $scope.pieces);
    }, true);
    $scope.$watch('rowFix', function () {
      localStorageService.set('rowFix', $scope.rowFix);
    }, true);
    $scope.$watch('remaining', function () {
      localStorageService.set('remaining', $scope.remaining);
    }, true);

  });
