import moment from 'moment';
import { parseDateTime, toMoment } from './date';

describe('date', () => {
    describe('parseDateTime', () => {
        it('should return correct response input date is valid', () => {
            expect(parseDateTime('2024-01-01T10:00:00Z')).toEqual({
                date: '2024-01-01',
                time: '10:00',
            });
        });

        it('should return undefined when input date is invalid', () => {
            expect(parseDateTime('2024-13-01T10:00:00Z')).toBeUndefined();
        });
    });
});
