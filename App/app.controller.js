"use strict";

function CrazyWords() {
    const vm = this;
    vm.crazyArray = [];

    vm.wordArray = [
        "duck",
        "snow",
        "pizza",
        "church",
        "grantchirpus"
    ];
    vm.phraseArray = [
        "ducks are great",
        "snow is bad",
        "pizza is tasty",
        "church is over there",
        "grantchirpus is a chicken"
    ];

    vm.classArray = [
        "big", "little", "strike"
    ];
    vm.addWords = function () {
        vm.randomWord = vm.wordArray[Math.floor(Math.random() * vm.wordArray.length)];
        console.log(vm.randomWord)

        vm.crazyArray.push({

            text: vm.randomWord

        });
        console.log(vm.crazyArray)

    }
    vm.addWordWithClass = function () {
        vm.randomWord = vm.wordArray[Math.floor(Math.random() * vm.wordArray.length)];
        vm.randomClass = vm.classArray[Math.floor(Math.random() * vm.classArray.length)];
        console.log(vm.randomWord)

        vm.crazyArray.push({

            text: vm.randomWord,
            class: vm.randomClass

        });
        console.log(vm.randomClass)

    }
    vm.addPhrase = function() {
        vm.randomPhrase = vm.phraseArray[Math.floor(Math.random() * vm.phraseArray.length)];
        vm.crazyArray.push({

            text: vm.randomPhrase

        });
    }
    vm.addPhraseWithClass = function() {
        vm.randomPhrase = vm.phraseArray[Math.floor(Math.random() * vm.phraseArray.length)];
        vm.randomClass = vm.classArray[Math.floor(Math.random() * vm.classArray.length)];
        vm.crazyArray.push({

            text: vm.randomPhrase,
            class: vm.randomClass

        });
    }




}



angular
    .module("App")
    .controller("CrazyWords", CrazyWords);