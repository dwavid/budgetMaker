/**
 * Created by dross on 2/7/17.
 */

'use strict';

var app = angular.module('budgeting', []);

app.controller('MainController', function($scope) {
    //Taxes
    $scope.federalTax = 18;
    $scope.stateTax = 6;

    //Income
    $scope.netIncome = 0;
    $scope.incomes = [
        {
            source: null,
            value: null
        }
    ];
    $scope.totalIncome = 0;
    $scope.calculateTotalIncome = function() {
        $scope.netIncome = 0;
        $scope.totalIncome = 0;
        var fullTaxRate = ($scope.federalTax + $scope.stateTax) / 100;
        console.log(fullTaxRate);
        for (var i = 0; i < $scope.incomes.length; i++) {
            $scope.totalIncome += $scope.incomes[i].value;
            if (i == ($scope.incomes.length - 1)) {
                $scope.netIncome = $scope.totalIncome - ($scope.totalIncome * fullTaxRate);
                $scope.expenses = {
                    housing: Math.floor(($scope.netIncome / 12) * .25),
                    utilities: Math.floor(($scope.netIncome / 12) * .05),
                    transportation: Math.floor(($scope.netIncome / 12) * .10),
                    food: Math.floor(($scope.netIncome / 12) * .10),
                    savings: Math.floor(($scope.netIncome / 12) * .10),
                    charity: Math.floor(($scope.netIncome / 12) * .10),
                    clothing: Math.floor(($scope.netIncome / 12) * .05),
                    medical: Math.floor(($scope.netIncome / 12) * .05),
                    insurance: Math.floor(($scope.netIncome / 12) * .10),
                    personal: Math.floor(($scope.netIncome / 12) * .05),
                    recreation: Math.floor(($scope.netIncome / 12) * .05)
                };
            }
        }
    };

    $scope.addIncome = function() {
        $scope.incomes.push(
            {
                source: null,
                value: null
            }
        );
    };

    //Expenses
    $scope.expenses = {
        housing: 0,
        utilities: 0,
        transportation: 0,
        food: 0,
        savings: 0,
        charity: 0,
        clothing: 0,
        medical: 0,
        insurance: 0,
        personal: 0,
        recreation: 0
    };

});