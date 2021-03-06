module.exports = function (pages) {
    pages.declare('hello-page', function (params) {
        var options = params.options;
        return {
            block: 'page',
            title: 'Hello page',
            styles: [
                {url: options.assetsPath + '.css'}
            ],
            scripts: [
                {url: options.assetsPath + '.' + params.lang + '.js'}
            ],
            body: [
                {
                    block: 'form',
                    titleText: pages.i18n('form', 'title-text')
                }
            ]
        };
    });
};
