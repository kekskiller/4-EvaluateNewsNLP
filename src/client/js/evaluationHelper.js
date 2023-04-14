function evaluationHelper(results) {
    console.log(results.score_tag)
    console.log(results.subjectivity)
    const polarityTag ={
        'P+': 'strong positive',
        P: 'positive',
        NEU: 'neutral',
        N: 'negative',
        'N+': 'strong negative',
        NONE: 'without polarity'
    }
    const subjectivityTag = {
        'OBJECTIVE': 'objective',
        'SUBJECTIVE': 'subjective'
    }

    document.getElementById('results').style.cssText = 'display:block;'
    document.getElementById('analyzed-text').innerHTML = results.sentence_list[0].text + '...'
    document.getElementById('polarity-rating').innerHTML = polarityTag[results.score_tag]
    document.getElementById('subjectivity-rating').innerHTML = subjectivityTag[results.subjectivity]
}

export { evaluationHelper }