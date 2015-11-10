modules.define(
    'form',
    ['inherit', 'block', 'input'],
    function (provide, inherit, YBlock, Input) {
        var form = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                var formDomNode = this.getDomNode();

                this._greetingInput = new Input({
                    name: 'loginField',
                    placeholder: 'Введите ваше имя',
                    parentNode: formDomNode
                });

                this._greetingInput.on('input-submitted', this._onInputSubmitted, this);
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

