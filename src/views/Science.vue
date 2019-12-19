<template>
<v-app id = "inspire">
      <v-card>
         <v-app-bar
            app="app"
            color="white"
            flat
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Calculator</v-toolbar-title>
            <v-spacer/>
            <v-btn icon="icon">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app="app">
            <v-list flat>
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
<v-container></v-container><v-container></v-container><v-container></v-container><v-container></v-container>
            <v-container>
                <v-layout column="column" row="row">
                    <div class="calculator">
                      <div></div>
                        <div class="display">
                            <p class="text-end">
                                {{current || '0'}}
                            </p>
                        </div>
                        <div></div><div></div><div></div><div></div>
                        <v-btn
                            min-height="60"
                            @click="clear"
                            class="btn operator"
                            tile="tile"
                            color="white">C</v-btn>

                        <v-btn min-height="60" @click="sign" class="btn" tile="tile" color="white">+/-</v-btn>

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
                            @click="append('0')"
                            class="btn zero"
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
        grid-column: 1 / 5;
        height: 200px;
        background-color: white;
        color: black;
    }
    .zero {
        grid-column: 1 / 3;
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