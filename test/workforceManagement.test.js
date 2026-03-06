import { workforceManagement } from "../workforceManagement.js";
import { expect } from "chai"; 

describe('Test workforceManagement', () => {
        describe('recruitStaff', () => {
        //it('should throw an error message if one of the input parameter is not valid', () => {             ----> мое решение
            //expect(() => workforceManagement.recruitStaff("Alex", "QA", 5)).to.throw('We are not currently hiring for this role.')
        //})

        //it('should return a proper message if experience < 4', () => {
            //let name = "Alex"
            //let role = "Developer"
            //let experience = 3                                               ----> мое решение
            //let expected = 'Alex is not suitable for this role.'

            //expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(expected)
           
        //})

        //it('should return a proper message if all requirements are met', () => {
            //let name = "Peter"
            //let role = "Developer"                                           ----> мое решение
            //let experience = 4
            //let expected = 'Peter has been successfully recruited for the role of Developer.'

            //expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(expected)
       // })

            it('should return correct message', () => {
            expect(workforceManagement.recruitStaff('Ivanov', 'Developer', 0)).to.equal('Ivanov is not suitable for this role.');
            expect(workforceManagement.recruitStaff('Petrov', 'Developer', 4)).to.equal('Petrov has been successfully recruited for the role of Developer.');

            })
    
            it('shoud throw an error', () => {
            expect(() => workforceManagement.recruitStaff('Ivanov', 'QA', 0))
            .to.throw('We are not currently hiring for this role.');
            })
        })
        describe('computeWages', () => {
            it('should throw error incorrect hoursWorked', () => {
                expect(() => workforceManagement.computeWages('asd')).to.throw('Invalid hours')
                expect(() => workforceManagement.computeWages(-5)).to.throw('Invalid hours')
            })

            it('should return correct payment', () => {
                expect(workforceManagement.computeWages(100)).to.equal(1800)
                expect(workforceManagement.computeWages(200)).to.equal(5100)
            })
        })

        describe('dismissEmployee', () => { //workforce - [string], employeeIndex - int index
            it('should throw error invalid input', () => {
                expect(() => workforceManagement.dismissEmployee()).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Ivan', 'Dragan'], 3.14)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Ivan', 'Dragan'], 3)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Ivan', 'Dragan'], -1)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee({}, 1)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(undefined, 1)).to.throw('Invalid input');
            })

            it('should return correct result', () => {
                expect(workforceManagement.dismissEmployee(['Ivan', 'Dragan'], 1)).to.equal('Ivan');
                expect(workforceManagement.dismissEmployee(['Ivan', 'Dragan', 'Petkan'], 1)).to.equal('Ivan, Petkan');
            })
        })
})