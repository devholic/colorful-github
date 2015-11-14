if (document.getElementsByClassName('legend') !== null) {
    var change_colors = ['#eeeeee', '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373'];
    var colors = {};
    var doc = document.getElementsByClassName('legend')[0].getElementsByTagName('li');
    for (var i = 0; i < doc.length; i++) {
        var raw = doc[i].getAttribute('style');
        var data = raw.split(';');
        for (var j = 0; j < data.length; i++) {
            var tag = data[j].split(':');
            if (tag[0] == 'background-color') {
                var color = tag[1].replace(' ', '').replace('#', '');
                if (color.length == 3) {
                    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
                }
                color = '#' + color;
                doc[i].setAttribute('style', 'background-color: ' + change_colors[i]);
                colors[color] = change_colors[i];
                break;
            }
        }
    }
    var cube = document.getElementsByTagName('rect');
    console.log(JSON.stringify(colors));
    for (var i = 0; i < cube.length; i++) {
        var before = cube[i].getAttribute("fill");
        cube[i].setAttribute("fill", colors[before]);
    }
}
