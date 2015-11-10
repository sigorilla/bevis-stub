module.exports = function (bt) {

    bt.match('form', function (ctx) {
        ctx.enableAutoInit();

        var title = ctx.getParam('titleText');

        ctx.setContent([
            {
                elem: 'head',
                text: title
            },
            {
                elem: 'hint',
                content: bt.lib.i18n('form', 'hint-content')
            }
        ]);
    });

    bt.match('form__head', function (ctx) {
        ctx.setTag('h1');

        var headText = ctx.getParam('text');
        ctx.setContent(headText);
    });

    bt.match('form__hint', function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

};
