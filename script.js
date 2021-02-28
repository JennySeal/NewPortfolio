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
