<template>
    <v-app id="inspire">
        <v-card>
            <v-content>
                <v-divider></v-divider>
                <v-container></v-container>
                <v-container></v-container>
                <v-container></v-container>
                <v-container></v-container>
                <v-container>
                    <div class="caldis">
                        <p class="text-end">
                            {{current || '0'}}
                        </p>
                    </div>
                    <v-layout column="column" row="row">
                        <div class="calculator">
                            <div></div>

                            <div class="display"></div>

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <v-btn min-height="60" @click="clear" class="btn " tile="tile" color="white">C</v-btn>

                            <v-btn min-height="60" @click="sign" class="btn" tile="tile" color="white">+/-</v-btn>

                            <v-btn min-height="60" @click="percent" class="btn " tile="tile" color="white">%</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('/')"
                                class="btn "
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
                                class="btn "
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
                                class="btn "
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
                                class="btn "
                                tile="tile"
                                color="white">+</v-btn>

                            <v-btn
                                min-height="60"
                                @click="append('0')"
                                class="btn zero"
                                tile="tile"
                                color="white">0</v-btn>

                            <v-btn min-height="60" @click="dot" class="btn" tile="tile" color="white">.</v-btn>

                            <v-btn min-height="60" @click="equal" class="btn " tile="tile" color="white">=</v-btn>
                        </div>

                    </v-layout>

                </v-container>
            </v-content>

        </v-card>
    </v-app>
</template>

<script>
    import gcalmix from './mixins/GCalMix'
    export default {
        name: 'GCalculator',
        mixins: [gcalmix],
        data: () => ({}),
        methods: {}
    }
</script>

<style scoped="scoped">
    .calculator {
        font-size: 30px;
        display: grid;
    }
    .caldis {
        height: 200px;
        background-color: white;
        color: black;
    }
    .display {
        grid-column: 1 / 5;
        height: 1px;
        background-color: white;
        color: black;
    }
    .zero {
        grid-column: 1 / 3;
    }
    .btn {
        border: rgb(220, 226, 233);
    }
    .coloring {
        background-color: white;
        color: black;
    }
</style>