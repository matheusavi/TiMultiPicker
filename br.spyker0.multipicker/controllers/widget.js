var data;

//** OPEN
exports.open = function (parametros) {
    data = {
        title: '',
        options: [],
        selected: [],
        okButtonTitle: 'Ok',
        cancelButtonTitle: 'Cancel'
    };

    parametros = parametros || {};

    for (var elemento in parametros) {
        if (parametros.hasOwnProperty(elemento)) {
            data[elemento] = parametros[elemento];
        }
    }

    $.title.text = data.title;

    var rows = [];
    if (data.options && data.options.length > 0) {
        data.options.forEach(function (option) {
            var row = Ti.UI.createTableViewRow({
                hasCheck: data.selected.indexOf(row) !== -1,
                title: option
            });
            rows.push(row);
        });

    }

    $.tableView.setData(rows);

    $.win.open({
        modal: true
    });
};