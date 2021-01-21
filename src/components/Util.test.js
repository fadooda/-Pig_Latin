const Util= require('./Util')

test('No Input',()=>{
    let result
    Util('',(resultparam)=>{
        result=resultparam
    })
    expect(result).toBe('')
})

test('All special characters input with no english alphabet character',()=>{
    let result
    Util('=\'232 {}[*902})\'',(resultparam)=>{
        result=resultparam
    })
    expect(result).toBe('')
})

test('All special characters input with a single english alphabet character',()=>{
    let result
    Util('=\'23T2 {}[*902})\'',(resultparam)=>{
        result=resultparam
    })
    expect(result).toBe('Tay')
})

test('All special characters input with several words',()=>{
    let result
    Util('Do pi[gs sp]eak pig la8*><tin when, no one el!se   is wa9tc242hing?',(resultparam)=>{
        result=resultparam
    })
    expect(result).toBe('oDay igspay peaksay igpay atinlay henway onay neoay lseeay siay atchingway')
})

test('Vaild input',()=>{
    let result
    Util('Olivia Joey Fady Ioan Emil',(resultparam)=>{
        result=resultparam
    })
    expect(result).toBe('liviaOay oeyJay adyFay oanIay milEay')
})