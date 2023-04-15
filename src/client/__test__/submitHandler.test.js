/**
 * @jest-environment jsdom
 */

import { handleSubmit } from "../js/submitHandler";
import fetch from 'jest-mock-fetch'

const event = {
    preventDefault: jest.fn(),
}

// const mockEval = jest.fn();

// jest.mock('../js/evaluationHelper', ()=> ({
//     evaluationHelper: () => mockEval
// }))

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ text: 'yay' }),
//     })
// );

beforeEach(() => {
    document.body.innerHTML += '<input id=\"textToAnalyse\" value=\"\"></input> <div id=\"results\"></div>';
    fetch.mockClear();
})



describe('submitHandler', () => {
    it ('tests if the result is hidden if no text is provided', () => {

        const result = handleSubmit(event)
        const content = document.getElementById('results').style.visibility

        expect(content).toEqual("hidden")
    })
})