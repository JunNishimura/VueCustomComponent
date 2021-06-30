<template>
    <div id="modal-page">
        <button @click="showModal = true">Open Modal</button>
        <custom-modal v-if="showModal" @closeModal="showModal = false">
            <template #modal-content>
                <h1>This is sample modal.</h1>
            </template>
        </custom-modal>
    </div>
</template>

<script>
import CustomModal from '@/components/CustomModal.vue';

export default {
    components: {
        CustomModal,
    },
    data() {
        return {
            showModal: false
        }
    }
}
</script>

<style scoped lang="scss">
#modal-page {
    button {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>