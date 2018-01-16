
(Chai)['http://chaijs.com/api/']
(NodeJs)['https://nodejs.org/api/assert.html']
<!-- install  -->
npm install -g mocha

* teste em dir


npm install --save-dev chai

* sum.test.js

        'use strict';

        var expect = require('chai').expect;
        var sum = require('../src/sum');

        describe('# SUM', function(){
          it('Module sum must be a function', function(){
            expect(sum).to.be.a('function');
          });
        });


<!-- teste TDD -->


    it('Assert', function(){
      var assert = require('assert');
      assert.equal(sum(20,30), 50, 'Message');
    });
  



* npm install -g istanbul