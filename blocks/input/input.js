modules.define(
    'input',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var Input = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                this._parentNode = params.parentNode;

                this._render();

                this._clear = this._findElement('clear');
                this._control = this._findElement('control');

                this._bindTo(this._clear, 'click', this._onClearClicked);

                this._bindTo(this._control, 'keypress', this._onKeyPressed);
                this._bindTo(this._control, 'focus', this.focus);
                this._bindTo(this._control, 'blur', this.blur);
            },

            /**
             * Получение значения текстового поля
             * @return {String | undefined}
             */
            getValue: function () {
                return this._control.val();
            },

            /**
             * Установка значения к полю
             * @param {String} value Значение
             */
            setValue: function (value) {
                this._control.val(value);
            },

            /**
             * Фокус поля
             * @return {Input}
             */
            focus: function () {
                if (this.isEnabled()) {
                    this._setState('focused');
                }
                return this;
            },

            /**
             * Удаляем фокус с поля
             * @return {Input}
             */
            blur: function () {
                this._removeState('focused');
                return this;
            },

            /**
             * Деактивируем поле
             * @return {Input}
             */
            disable: function () {
                if (this.isEnabled()) {
                    this.blur();
                    this._control.attr('disabled', 'disabled');
                    this._setState('disabled');
                }
                return this;
            },

            /**
             * Активируем поле
             * @return {Input}
             */
            enable: function () {
                if (!this.isEnabled()) {
                    this._control.removeAttr('disabled');
                    this._removeState('disabled');
                }
                return this
            },

            /**
             * Активно ли поле
             * @return {Boolean}
             */
            isEnabled: function () {
                return !this._getState('disabled');
            },

            /**
             * Очистка поля
             */
            _onClearClicked: function () {
                if (this.isEnabled()) {
                    this.setValue('');
                    this._control.focus();
                }
            },

            /**
             * Событие нажатия клавиш
             * @param  {Event} e
             */
            _onKeyPressed: function (e) {
                var text = this.getValue();

                if (e.keyCode === 13 && Input.isNotEmpty(text)) {
                    this.emit('input-submitted', {
                        value: text
                    });
                }
            },

            /**
             * Отображаем поля
             */
            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },
        }, {
            getBlockName: function () {
                return 'input';
            },

            /**
             * Проверка на пустую строку
             * @param  {String}  text текст
             * @return {Boolean}
             */
            isNotEmpty: function (text) {
                var clearText = text.replace(/^\s+|\s+$/gi, '');
                return Boolean(clearText);
            }
        });

        provide(Input);
});

