var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const dotenv = require('dotenv');
dotenv.config();

const APIKey = process.env.API_KEY;

let analyzed = {
    polarity: '', 
    subjectivity: ''
}

const app = express()

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


app.post('/analyze', (request, response) => {
    const text = request.body;

    const formdata = new FormData();
    formdata.append("key", APIKey);
    formdata.append("txt", text);
    formdata.append("lang", "auto");  

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const analysis = async () => {
        const answer = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        try {
            const result = await answer.body.json();
            return result;
        } catch (err) {
            console.log('ERROR', err);
        }
    
    const analysisResult = analysis();
    
    response.send(analysisResult);
    }
})


