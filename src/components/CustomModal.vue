<template>
    <div class="custom-modal">
        <div class="modal-overlay" @click="$emit('closeModal')"/>
        <div class="modal-board">
            <div class="close-btn" @click="$emit('closeModal')">&times;</div>
            <div class="modal-content">
                <slot name="modal-content" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.custom-modal {
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        cursor: pointer;
        background-color: #000000c4;
    }

    .modal-board {
        position: fixed;    
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 600px;
        min-height: 150px;
        z-index: 11;
        background-color: #fff;

        .close-btn {
            font-size: 30px;
            position: fixed;
            top: 0;
            right: 10px;
            cursor: pointer;
        }

        .modal-content {
            padding: 10px;
        }
    }
}
</style>