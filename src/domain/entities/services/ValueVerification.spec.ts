import { valueVerification } from "./ValueVerification";

describe('Value Verification', () => {
    test.skip('should THROW if parse value < 0', () => {
        expect(valueVerification(-10)).toThrowError(); 
    });

    test.skip('should NOT THROW if parse value valid', () => {
        expect(valueVerification(10)).not.toThrow();
    });
});