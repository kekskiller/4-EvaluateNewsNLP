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
            alert(textResults)
            document.getElementById('results').style.cssText = 'display:block;'
            alert(formText)
            document.getElementById('analyzed-text').innerHTML = textResults.sentence_list[0].text + '...'
            document.getElementById('polarity-rating').innerHTML = textResults.score_tag
            document.getElementById('subjectivity-rating').innerHTML = textResults.subjectivity
        }            
        )
}

export { handleSubmit }
