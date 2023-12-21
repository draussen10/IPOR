import {classNames} from 'shared/lib/classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('with additional params', () => {
        const expected = 'someClass additional additional2'
        expect(classNames('someClass', {}, ['additional', 'additional2']))
            .toBe(expected)
    })

    test('with mobs params', () => {
        const expected = 'someClass dfdsf'
        expect(classNames('someClass', {'dfdsf': true, 'sdfdsfs': false}, []))
            .toBe(expected)
    })

    test('with mobs & additional params  ', () => {
        const expected = 'someClass additional additional2 dfdsf'
        expect(classNames('someClass', {'dfdsf': true, 'sdfdsfs': false}, ['additional', 'additional2']))
            .toBe(expected)
    })
})