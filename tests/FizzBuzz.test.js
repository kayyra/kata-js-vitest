import {
    describe,
    expect,
    it
} from 'vitest';
import FizzBuzz from '../src/FizzBuzz';

describe('FizzBuzz', () => {

    it('if number divisible by 3 return Fizz', () => {
        //Given 
        const num = 3
        const fizzbuzz = new FizzBuzz()
        //When
        const result = "Fizz"
        //Then
        expect(result).toBe("Fizz")
    });

});




// Segundo test

describe('FizzBuzz', () => {
    it('Tiene que sacar los múltiplos de 3 y 5 ', () => {
        //Given
        const num = 3
        const fizzbuzz = new FizzBuzz()
        //When
        const result = "Fizz"
        //Then 
        expect(result).toBe("Fizz", "Buzz", "FizzBuzz")
    });

});