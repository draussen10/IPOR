import {classNames} from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass additional1 additional2';

        expect(classNames('someClass', {}, ['additional1', 'additional2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable';

        expect(classNames('someClass', {hovered: true, scrollable: true}, [])).toBe(expected);
    });

    test('with mods & additional class', () => {
        const expected = 'someClass scrollable additional1';

        expect(classNames('someClass', {hovered: false, scrollable: true}, ['additional1'])).toBe(expected);
    });
});
