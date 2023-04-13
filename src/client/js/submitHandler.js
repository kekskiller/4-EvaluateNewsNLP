function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('textToAnalyse').value
    alert(formText)

    const testdata= {text: 'lala'}
    
    const postText = async (url ='', data={}) => {
        const response = await fetch(url, {
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'CONTENT_TYPE' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            const newResult = await response.json(); 
            alert('lala')
            return newResult
        } catch (error) {
            console.log('ERROR' + error)
        }    
    }

    postText('/analyze', testdata)
  

    // document.getElementById('results').innerHTML = res.message

}

export { handleSubmit }
