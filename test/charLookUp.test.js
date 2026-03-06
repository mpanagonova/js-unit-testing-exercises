import {lookupChar} from '../charLookUp.js'
import { describe } from 'mocha'
import { expect } from 'chai' 

describe('test_charLookUp', () =>{
    it('should return undefined if first parameter is not a string', () =>{
        expect(lookupChar(42, 5)).to.be.undefined
        expect(lookupChar([], 5)).to.be.undefined
        expect(lookupChar({}, 5)).to.be.undefined
        expect(lookupChar(null, 5)).to.be.undefined
        expect(lookupChar(undefined, 5)).to.be.undefined
    })

    it('should return undefined if second parameter is not an integer number', () =>{
        expect(lookupChar('valid text', '2')).to.be.undefined
        expect(lookupChar('valid text', 5.5)).to.be.undefined
        expect(lookupChar('valid text', [4])).to.be.undefined
        expect(lookupChar('valid text', {})).to.be.undefined
        expect(lookupChar('valid text', null)).to.be.undefined
        expect(lookupChar('valid text', undefined)).to.be.undefined
    })

    it('should return "Incorrect index" if index is out of range', () =>{
        // Arrange
        let expected = "Incorrect index"
        
        // Act & Assert
        expect(lookupChar('hello', -1)).to.equal(expected)
        expect(lookupChar('hello', 5)).to.equal(expected)
        expect(lookupChar('hello', 10)).to.equal(expected)
    })

    it('should return character if all parameters are valid', () =>{
        expect(lookupChar('Mariana', 0)).to.equal('M')
        expect(lookupChar('Mariana', 2)).to.equal('r')
        expect(lookupChar('Mariana', 4)).to.equal('a')
        
    })
})