/* global describe, it */
(function() {
    'use strict';
    describe('_pluck', function() {

        it('should test whether or not variable "material_value" is returning the value of "material" key in "pillows" array', function() {
            // var material_value = _.pluck(pillow, 'material');
            expect(material_value).to.deep.equal(["feathers", "foam", "rice"]);
        });

        describe('_last', function() {
            it('should test whether or not "frog" is the last value', function() {
                var last_one = _.last(["cat", "dog", "turtle", "frog"]);
                expect(last_one).to.equal("frog");
            });

            describe('_first', function() {
                it('should test whether or not "cat" is the first value', function() {
                    var first_one = _.first(["cat", "dog", "turtle", "frog"]);
                    expect(first_one).to.equal("cat");
                });

                describe('should test random underscore method', function() {
                    it('should test whether or not the returned number is between 0 and 10', function() {
                        var random_number = random_number = _.random(0, 10);
                        expect(random_number).to.be.below(10);
                    });

                    describe("baby", function() {
                        it('should test whether or not the sex is defined', function() {
                            var baby1 = new Baby({
                                sex: "boy" || "?"
                            });
                            (baby1.sex).should.equal("boy").and.be.an("string");

                        });
                        it('should test what activity the baby is doing', function() {
                            var baby2 = new Baby({
                                activity: "sleeping"
                            });
                            (baby2.activity).should.equal("sleeping");
                        });
                    });
                });
            });
        });
    });
})();
