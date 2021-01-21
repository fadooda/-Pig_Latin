function Util(textInput,setResultText) {

    const alterPigLatin=(origTextList)=>{
        let tempAlteredList=[]
        for(let index = 0 ; index< origTextList.length;index++ )
        {
            let piglatin=origTextList[index].substring(1) + origTextList[index][0] + 'ay'
            tempAlteredList.push(piglatin)
        }
        return tempAlteredList.join(' ')
    }

    let filteredList=textInput.replace(/[^A-Za-z\s]/g,'').split(' ').filter(s => s) //replace all non-letter characters with an empty substring
    if (filteredList.length>=1)
    {
        console.log(filteredList)
        setResultText(alterPigLatin(filteredList))  
    }else{
        console.log('need to provide an input')
        setResultText('')
    }
}

module.exports= Util
