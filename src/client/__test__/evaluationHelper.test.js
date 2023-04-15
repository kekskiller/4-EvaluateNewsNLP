/**
 * @jest-environment jsdom
 */

import { evaluationHelper } from "../js/evaluationHelper";
import {screen} from '@testing-library/jest-dom'
import ''

const testResult = {
    text: 'this is a test text',
    score_tag: 'P', 
    subjectivity: 'OBJECTIVE'
}

describe('evaluationHelper', () => {
    it ('transforms analysis results into clear words', () => {
        evaluationHelper(testResult)
        const polRating = document.getbyTestId('polarity-rating')
        const subRating = getByTestId('subjectivity-rating')

        expect(polRating).toMatch('positive')
    })
}
)