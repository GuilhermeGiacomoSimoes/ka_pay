import { valueVerification } from "./ValueVerification";

describe('Value Verification', () => {
    test('should THROW if parse value < 0', () => {
        expect(valueVerification(-10)).toThrow(); 
    });

    test('should NOT THROW if parse value valid', () => {
        expect(valueVerification(10)).not.toThrow();
    });
});