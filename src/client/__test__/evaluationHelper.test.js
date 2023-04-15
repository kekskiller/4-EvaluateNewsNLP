/**
 * @jest-environment jsdom
 */

import { evaluationHelper } from "../js/evaluationHelper";

beforeEach(() => {
    document.body.innerHTML += '<div id=\"results\" data-testid=\"results\"><div id=\"analyzed-text\"></div><span id=\"polarity-rating\" data-testid=\"polarity-rating\"></span><span id=\"subjectivity-rating\" data-testid=\"subjectivity-rating\"></span></div></div>'
})

const testResult = {
    sentence_list: ['this is a test text'],
    score_tag: 'P', 
    subjectivity: 'OBJECTIVE'
}

describe('evaluationHelper', () => {
    it ('transforms analysis results into clear words', () => {
        evaluationHelper(testResult)
        const polRating = document.getElementById('polarity-rating').innerHTML
        const subRating = document.getElementById('subjectivity-rating').innerHTML

        expect(polRating).toMatch(/positive/)
        expect(subRating).toMatch(/objective/)
    })
})
