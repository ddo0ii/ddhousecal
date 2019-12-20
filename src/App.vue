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
                                Useful
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item v-for="item in items" :key="item.title" link="link" @click="menuIdx=item.i">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    

                </v-list>
            </v-navigation-drawer>
<div v-if="menuIdx==0">
            <GCalculator/>
</div>
<div v-if="menuIdx==1">
            <SCalculator/>
</div>

        </v-card>
    </v-app>
</template>

<script>
    import GCalculator from './components/GCalculator';
    import SCalculator from './components/SCalculator';

    export default {
        name: 'App',
        components: {
            GCalculator, SCalculator
        },
        data: () => ({
            menuIdx: 0,
            drawer: null,
            left: false,
            operatorClicked: false,
            items: [
                {   
                    i: 0,                 
                    title: 'General Calculator',
                    icon: 'mdi-view-dashboard'
                }, {  
                    i: 1,
                    title: 'Scientific Calculator',
                    icon: 'mdi-image'
                }, {
                    i: 2,
                    title: 'Others',
                    icon: 'mdi-help-box'
                }
            ]
        }),
    };
</script>