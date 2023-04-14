import { evaluationHelper } from "./evaluationHelper";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('textToAnalyse').value
    const testegg = {text: formText}

    const postText = async (url ='', data={}) => {
        const response = await fetch(url, {
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            const newResult = await response.json();
            return newResult
        } catch (error) {
            console.log('ERROR' + error)
        }    
    }

    postText('/analyze', testegg)
        .then((textResults) => {
            evaluationHelper(textResults)
        })
}

export { handleSubmit }
