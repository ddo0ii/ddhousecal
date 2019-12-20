var gcalmix = {
    data: () => ({previous: null, current: '', operatorClicked: false}),
    methods: {
        clear() {
            this.current = '';
        },
        sign() {
            this.current = this
                .current
                .charAt(0) === '-'
                    ? this
                        .current
                        .slice(1)
                    : `-${this.current}`;
        },
        append(number) {
            if (this.operatorClicked) {
                this.current = '';
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`;
        },
        dot() {
            if (this.current.indexOf('.') === -1) {
                this.append('.');
            }
        },
        setPrevious() {
            this.previous = this.current;
        },
        percent() {
            this.current = `${parseFloat(this.current) / 100}`;
        },
        equal() {
            this.current = eval(this.current);
            this.previous = null;
        }
    }
}

export default gcalmix;