<template>
    <div id="header">
        <v-navigation-drawer absolute temporary v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app class="hidden-md-and-up">
            <v-list v-if="register">
                <v-list-item v-for="(item, key) in registerUserHeaderList" :key="key" :to="item.route">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list v-else>
                <v-list-item v-for="(item, key) in unRegisterUserHeaderList" :key="key" :to="item.route">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark class="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
            <v-toolbar-title v-text="toolbarTitle"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items v-if="register" class="hidden-sm-and-down">
                    <v-btn text small v-for="(item, key) in registerUserHeaderList" :key="key" :to="item.route">
                        {{item.title}}
                    </v-btn>
                </v-toolbar-items>
                <v-toolbar-items v-else class="hidden-sm-and-down">
                    <v-btn text small v-for="(item, key) in unRegisterUserHeaderList" :key="key" :to="item.route">
                        {{item.title}}
                    </v-btn>
                </v-toolbar-items>
            
        </v-app-bar>
    </div>
</template>
<script>
    export default {
        name: 'app-header',
        data: () => ({
            toolbarTitle: 'App Of Order',
            register: false,
            drawer: false,
            registerUserHeaderList: [
                {
                    title: 'Sign in',
                    route: '/signin'
                },
                {
                    title: 'Register',
                    route: '/register'
                }
            ],
            unRegisterUserHeaderList: [
                {
                    title: 'Home',
                    route: '/'
                },
                {
                    title: 'About',
                    route: '/about'
                },
                {
                    title: 'Orders',
                    route: '/orders'
                },
                {
                    title: 'Add Order',
                    route: '/addorder'
                },
                {
                    title: 'Log out',
                    route: '/logout'
                }
            ]
        }),

        components: {

        }
    }
</script>
