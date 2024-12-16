import {getQueryParams} from './addQueryParams';

describe('shared/url/addQueryParams', function () {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value'
        });

        expect(params).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            query: '1231'
        });

        expect(params).toBe('?test=value&query=1231');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            query: undefined
        });

        expect(params).toBe('?test=value');
    });
});
