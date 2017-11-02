function updateColor() {
    if (document.getElementsByClassName('legend').length != 0) {
        const colorList = ['#eeeeee', '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373'];
        const colors = {};

        [].forEach
            .call(
                document.getElementsByClassName('legend')[0]
                .getElementsByTagName('li'),
                (elem, idx) => {
                    elem.getAttribute('style')
                        .split(';')
                        .some((styleData) => {
                            const tag = styleData.split(':');
                            if (tag[0] == 'background-color') {
                                var color = tag[1].replace(/#|\s/gi, '');
                                if (color.length == 3) {
                                    color = color
                                        .split('')
                                        .reduce((acc, r) => acc.concat(r * 2), "");
                                }
                                colors['#'.concat(color)] = colorList[idx];
                                elem.setAttribute('style', 'background-color: ' + colorList[idx]);
                                return true;
                            }
                        });
                }
            );

        [].forEach
            .call(
                document
                .getElementsByTagName('rect'),
                (cube) => {
                    const prevColor = cube.getAttribute('fill');
                    cube.setAttribute('fill', colors[prevColor] || prevColor);
                }
            )
    }
}

updateColor();

document.addEventListener("DOMSubtreeModified", () => updateColor(), false);
