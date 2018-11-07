var data;

exports.open = function (parametros) {
    data = {
        title: '',
        options: [],
        selected: [],
        okButtonTitle: 'Ok',
        cancelButtonTitle: 'Cancel',
        navigationWindow: null,
        okCallback: function () {},
        cancelCallback: function () {}
    };

    parametros = parametros || {};

    for (var elemento in parametros) {
        if (parametros.hasOwnProperty(elemento)) {
            data[elemento] = parametros[elemento];
        }
    }

    if (OS_ANDROID) {
        $.title.text = data.title;
    }

    var rows = [];
    if (data.options && data.options.length > 0) {
        data.options.forEach(function (option) {
            var row = Ti.UI.createTableViewRow({
                title: option,
                hasCheck: data.selected.indexOf(option) !== -1,
                backgroundColor: 'white'
            });

            rows.push(row);
        });

    }

    $.tableView.setData(rows);


    $.tableView.addEventListener('click', function (e) {
        var state = e.rowData.hasCheck;

        var row = Ti.UI.createTableViewRow({
            title: e.rowData.title,
            hasCheck: !e.rowData.hasCheck,
            backgroundColor: 'white',
            color: 'black'
        });

        $.tableView.updateRow(e.index, row, {
            animated: true
        });

        if (state) {
            data.selected.splice(data.selected.indexOf(e.rowData.title), 1);
        } else {
            data.selected.push(e.rowData.title);
        }
    });

    if (!OS_ANDROID) {
        $.win.title = data.title;

        var button = Ti.UI.createButton({
            title: data.cancelButtonTitle
        });

        $.win.leftNavButton = button;

        button.addEventListener('click', function () {
            data.cancelCallback();
            $.win.close();
        });

        var button2 = Ti.UI.createButton({
            title: data.okButtonTitle
        });

        $.win.rightNavButton = button2;

        button2.addEventListener('click', function () {
            data.okCallback({
                selections: data.selected
            });
            $.win.close();
        });

        data.navigationWindow.openWindow($.win);
    } else {
        $.save.addEventListener('click', function () {
            data.okCallback({
                selections: data.selected
            });
            $.win.close();
        });

        $.win.addEventListener('AndroidBack', function () {
            data.cancelCallback();
            $.win.close();
        });

        $.win.open();
    }
};