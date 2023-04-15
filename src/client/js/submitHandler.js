import { evaluationHelper } from "./evaluationHelper";

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('textToAnalyse').value
    if (formText != '') {
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
                console.log(textResults)
                evaluationHelper(textResults)
            })
    } else {
        alert('Please insert text to analyze!')
        document.getElementById('results').style.cssText = 'visibility:hidden;'
    }
}

export { handleSubmit }
