var scalmix = {
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
        },
        pequal() {
            this.current = `${this.operator(
                parseFloat(this.current),
                parseFloat(this.previous)
            )}`;
        },
        piyo() {
            this.operator = (a) => Math.PI * a;
            this.setPrevious();
            this.equal();
        },
        rad() {
            this.operator = (a) => a * 180 / Math.PI;
            this.setPrevious();
            this.pequal();
        },
        xdivide() {
            this.operator = (a) => 1 / a;
            this.setPrevious();
            this.pequal();
        },
        xtpow() {
            this.operator = (a) => Math.pow(a, 2);
            this.setPrevious();
            this.pequal();
        },
        xypow() {
            this.operator = (a, b) => Math.pow(b, a);
            this.setPrevious();
        },
        abs() {
            this.operator = (a) => Math.abs(a);
            this.setPrevious();
            this.pequal();
        },
        juste() {
            this.operator = (a) => a * Math.E;
            this.setPrevious();
            this.pequal();
        }
    }
}
export default scalmix;