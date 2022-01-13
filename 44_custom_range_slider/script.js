const range = document.getElementById('range');

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

range.addEventListener('input', e => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    //Convert them in numbers
    const num_range_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;
    
    const left = value * (num_range_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
    label.style.left = `${left}px`

    label.innerHTML = value;
});