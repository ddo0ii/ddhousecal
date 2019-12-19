<template>
    <v-app id="inspire">
        <v-card>
            <v-app-bar app="app" color="white" flat="flat">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
                <v-toolbar-title>Calculator</v-toolbar-title>
                <v-spacer/>
                <v-btn icon="icon">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" app="app">
                <v-list flat="flat">
                    <v-list-item @click.stop="left = !left">

                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Calculator
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                subtext
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item v-for="item in items" :key="item.title" link="link">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-navigation-drawer>

            <v-content>
                <v-divider></v-divider>
                <v-container></v-container>
              
                <v-container>
                    <v-layout column="column" row="row">
                        <div class="calculator">
                            <div></div>
                            <div class="display">
                                <p class="text-end">
                                    {{current || '0'}}
                                </p>
                            </div>

                            <v-btn
                                min-height="60"
                                @click="clear"
                                class="btn operator"
                                tile="tile"
                                color="white">C</v-btn>
                            <v-btn
                                min-height="60"
                                @click="clear"
                                class="btn operator"
                                tile="tile"
                                color="white">rad</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('Math.sqrt(')"
                                class="btn"
                                tile="tile"
                                color="white">root</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('(')"
                                class="btn"
                                tile="tile"
                                color="white">(</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append(')')"
                                class="btn"
                                tile="tile"
                                color="white">)</v-btn>
                            <v-btn
                                min-height="60"
                                @click="percent"
                                class="btn operator"
                                tile="tile"
                                color="white">%</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('/')"
                                class="btn operator"
                                tile="tile"
                                color="white">÷</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('Math.sin(')"
                                class="btn"
                                tile="tile"
                                color="white">sin</v-btn>
                            <v-btn
                                min-height="60"
                                @click="append('Math.cos(')"
                                class="btn"
                                tile="tile"
                                color="white">cos</v-btn>
                            <v-btn
                                min-height="60"
                                @click="append('Math.tan(')"
                                class="btn"
                                tile="tile"
                                color="white">tan</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('7')"
                                class="btn"
                                tile="tile"
                                color="white">7</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('8')"
                                class="btn"
                                tile="tile"
                                color="white">8</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('9')"
                                class="btn"
                                tile="tile"
                                color="white">9</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('*')"
                                class="btn operator"
                                tile="tile"
                                color="white">x</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('Math.log(')"
                                class="btn operator"
                                tile="tile"
                                color="white">ln</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('Math.log10(')"
                                class="btn operator"
                                tile="tile"
                                color="white">log</v-btn>

                            <v-btn
                                min-height="60"
                                @click="xdivide"
                                class="btn operator"
                                tile="tile"
                                color="white">1/x</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('4')"
                                class="btn"
                                tile="tile"
                                color="white">4</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('5')"
                                class="btn"
                                tile="tile"
                                color="white">5</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('6')"
                                class="btn"
                                tile="tile"
                                color="white">6</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('-')"
                                class="btn operator"
                                tile="tile"
                                color="white">-</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('Math.exp(')"
                                class="btn operator"
                                tile="tile"
                                color="white">e^x</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('xtpow')"
                                class="btn operator"
                                tile="tile"
                                color="white">x^2</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('xypow')"
                                class="btn operator"
                                tile="tile"
                                color="white">x^y</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('1')"
                                class="btn"
                                tile="tile"
                                color="white">1</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('2')"
                                class="btn"
                                tile="tile"
                                color="white">2</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('3')"
                                class="btn"
                                tile="tile"
                                color="white">3</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('+')"
                                class="btn operator"
                                tile="tile"
                                color="white">+</v-btn>

                            <v-btn
                                min-height="60"
                                @click="abs"
                                class="btn operator"
                                tile="tile"
                                color="white">|x|</v-btn>

                            <v-btn
                                min-height="60"
                                @click="piyo"
                                class="btn operator"
                                tile="tile"
                                color="white">PI</v-btn>

                            <v-btn
                                min-height="60"
                                @click="juste"
                                class="btn operator"
                                tile="tile"
                                color="white">e</v-btn>

                            <v-btn min-height="60" @click="sign" class="btn" tile="tile" color="white">+/-</v-btn>
                            <v-btn
                                min-height="60"
                                @click="append('0')"
                                class="btn"
                                tile="tile"
                                color="white">0</v-btn>

                            <v-btn min-height="60" @click="dot" class="btn" tile="tile" color="white">.</v-btn>

                            <v-btn
                                min-height="60"
                                @click="equal"
                                class="btn operator"
                                tile="tile"
                                color="white">=</v-btn>
                        </div>

                    </v-layout>
                </v-container>

            </v-content>

        </v-card>
    </v-app>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
            items: [
                {
                    title: 'General Calculator',
                    icon: 'mdi-view-dashboard',
                    to: {
                        path: '/'
                    }
                }, {
                    title: 'Scientific Calculator',
                    icon: 'mdi-image',
                    to: {
                        path: '/science'
                    }
                }, {
                    title: 'Others',
                    icon: 'mdi-help-box'
                }
            ],
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false
        }),
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
</script>

<style scoped="scoped">
    .calculator {
        font-size: 30px;
        display: grid;
    }
    .display {
        grid-column: 1 / 8;
        height: 200px;
        background-color: white;
        color: black;
    }
    .btn {
        border: rgb(220, 226, 233);
    }
    .operator {}
    .coloring {
        background-color: white;
        color: black;
    }
</style>