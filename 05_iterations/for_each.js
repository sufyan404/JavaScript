const coding = ['js', 'py', 'java', 'cpp']

coding.forEach( (val) => {
//    console.log(val);
} )


function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
} )


const myArr = [
    {
        langName: 'js',
        langFile: '1'
    },
    {
        langName: 'cpp',
        langFile: '2'
    },
    {
        langName: 'py',
        langFile: '3'
    }
]

myArr.forEach( (item) => {
    // console.log(item.langName);
    
} )

