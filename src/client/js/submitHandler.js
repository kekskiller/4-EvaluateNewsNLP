function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textToAnalyse').value

    const postText = async (url ='', data={}) => {
        const response = await fetch(url, {
            method: 'POST', 
            credetionals: 'same-origin', 
            headers: {
                'CONTENT_TYPE' : 'application/json'
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

    const result = postText('/postText', formText)
    console.log(result)

    // document.getElementById('results').innerHTML = res.message

}

export { handleSubmit }
