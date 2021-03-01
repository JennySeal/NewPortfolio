const descriptors = ['Accessible', 'Interactive', 'Attractive', 'Striking', 'Responsive', 'Intuitive', 'Interesting'];
let index = 0;
const changeDescriptor = () => {
    let webSuperlative = descriptors[index];
    document.getElementById('bannerSpan').textContent=webSuperlative;
    index++;
    if (index >= descriptors.length) {
        index = 0;
    }
}

setInterval(changeDescriptor, 2000);

function printLetterByLetter(destination, message, speed){
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
                document.getElementById(destination).innerHTML = message.charAt(0);
            i=1;
        }
    }, speed);
} 
 
printLetterByLetter("scrollScript", "<I would love to hear from you.>   ", 300);