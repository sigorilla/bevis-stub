module.exports = function (bt) {
    bt.setDefaultView('input', 'large');

    bt.match('input*', function (ctx) {
        ctx.enableAutoInit();

        ctx.setContent([
            {
                elem: 'control',
                inputValue: ctx.getParam('value'),
                inputName: ctx.getParam('name'),
                inputType: ctx.getParam('type') || 'text',
                placeholder: ctx.getParam('placeholder')
            },
            {
                elem: 'clear'
            }
        ]);
    });

    bt.match('input*__control', function (ctx) {
        ctx.setTag('input');

        var currentValue = ctx.getParam('inputValue');
        var currentName = ctx.getParam('inputName');
        var currentType = ctx.getParam('inputType');
        var currentPlaceholder = ctx.getParam('placeholder');

        ctx.setAttr('value', currentValue);
        ctx.setAttr('name', currentName);
        ctx.setAttr('type', currentType);
        ctx.setAttr('placeholder', currentPlaceholder);
    });

};
