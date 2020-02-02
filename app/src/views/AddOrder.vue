<template>
    <section class="section-form-order">
        <v-container>
            <div class="section-caption">
                <h1>Add New Order</h1>
            </div>
            <FormOrder></FormOrder>
        </v-container>
    </section>
</template>
<script>
    import FormOrder from '@/components/FormOrder'
    export default {
        components: {
            FormOrder
        }
    }
</script>
<style lang="scss" scoped>
    .section-caption {
        text-align: center;
        padding: 20px 0;

        @media screen and (min-width: 1024px) {
            padding: 50px 0;
        }
    }

    h1 {
        font-size: 30px;

        @media screen and (min-width: 1024px) {
            font-size: 40px;
        }
    }
</style>