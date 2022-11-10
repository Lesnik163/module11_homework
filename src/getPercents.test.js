import {getPercents} from './getPercents';

describe('test getPercents function', ()=>{
    it('should operate correctly with positive number',()=>{
        expect(getPercents(5, 200)).toBe(`5% от числа 200 = 10`)
    })
    it('should operate correctly with negative number',()=>{
        expect(getPercents(-20, 100)).toBe('Нельзя использовать отрицательные значения!')
    })
    it('should operate correctly with negative number',()=>{
        expect(getPercents(15, -200)).toBe('Нельзя использовать отрицательные значения!')
    })
    it('should operate correctly with strings',()=>{
        expect(getPercents('15', 400)).toBe("Необходимо ввести именно число")
    })
    it('should operate correctly with strings',()=>{
        expect(getPercents(30, '100')).toBe("Необходимо ввести именно число")
    })   
})