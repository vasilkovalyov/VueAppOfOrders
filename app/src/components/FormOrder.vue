<template>
    <v-form>
        <v-row d-block>
            <v-col>
                <h2>Client</h2>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="email"
                    label="Email">
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="name"
                    label="Name">
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="surname"
                    label="Surname">
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="phone"
                    label="Phone number">
                </v-text-field>
            </v-col>
            <v-col>
                <h2>Order</h2>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="productName"
                    label="Product name">
                </v-text-field>
            </v-col>
            <v-col>
                <v-btn small>Add product</v-btn>
            </v-col>
            <v-col>
                <v-select
                    v-model="selectTypeProduct"
                    :items="selectTypeProductItems"
                    label="Type order product"
                    data-vv-name="select"
                    required
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="purveyor"
                    label="Purveyor"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="idOrder"
                    label="Id order"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-menu
                    ref="menuDatePicker"
                    v-model="menuDatePicker"
                    :close-on-content-click="false"
                    :return-value.sync="datePicker"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }" >
                        <v-text-field
                            label="Date"
                            v-model="datePicker"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="datePicker">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menuDatePicker = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menuDatePicker.save(datePicker)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col>
                <v-textarea
                    label="Comment"
                ></v-textarea>
            </v-col>
            <v-col>
                <v-btn color="primary" class="mx-md-3">Send data</v-btn>
                <v-btn class="mx-md-3">Clear form</v-btn>
            </v-col>
        </v-row>
    </v-form>       
</template>
<script>
    export default {
        data: () => ({
            email: null,
            name: null,
            surname: null,
            phone: null,
            productName: null,
            purveyor: null,
            idOrder: null,
            selectTypeProduct: null,
            selectTypeProductItems: [
                'Wholesale',
                'Retail'
            ],
            datePicker: null,
            menuDatePicker: false,
            
        })
    }
</script>
<style lang="scss" scoped>
    .v-form {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }

    h2 {
        border-bottom: 1px solid #000;
        width: 100%;
        font-size: 26px;

        @media screen and (min-width: 1024px) {
            font-size: 30px;
        }
    }
</style>