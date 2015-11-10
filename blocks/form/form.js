modules.define(
    'form',
    ['inherit', 'block', 'input', 'y-i18n'],
    function (provide, inherit, YBlock, Input, i18n) {
        var form = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                var formDomNode = this.getDomNode();

                this._greetingInput = new Input({
                    name: 'loginField',
                    placeholder: i18n('form', 'hint-login'),
                    parentNode: formDomNode
                });
                this._greetingInput.on('input-submitted', this._onInputSubmitted, this);

                this._passwordInput = new Input({
                    name: 'passwordField',
                    type: 'password',
                    placeholder: i18n('form', 'hint-content'),
                    parentNode: formDomNode
                });
                this._passwordInput.on('input-submitted', this._onInputSubmitted, this);
            },

            /**
             * Подтверждение поля
             * @param  {YEventEmitter} e
             */
            _onInputSubmitted: function (e) {
                console.log('Submit:', e);
            }
        }, {
            getBlockName: function () {
                return 'form';
            }

            // статические методы
        });

        provide(form);
});

