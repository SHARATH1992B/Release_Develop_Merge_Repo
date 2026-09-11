const { expect } = require('chai');

describe('Sample Math Tests', () => {
    it('should add two numbers correctly', () => {
        expect(1 + 1).to.equal(2);
    });

    it('should multiply two numbers correctly', () => {
        expect(3 * 3).to.equal(9);
    });

    it('should fail on purpose, to prove the report shows failures too', () => {
        expect(2 + 2).to.equal(5); // Intentionally wrong
    });
});
