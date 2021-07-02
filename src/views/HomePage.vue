<template>
    <div id="Home">
        <div class="display">
            <div class="display-item">
                <router-link :to="{name: 'ModalPage'}">Custom Modal</router-link>
            </div>
            <div class="display-item">
                <router-link :to="{name: 'ImageUploaderPage'}">Image Uploader</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.display {
    max-width: 1024px;
    margin: 16px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .display-item {
        max-width: 480px;
        min-height: 160px;
        background-color: #fcfcfc;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .24);

        a {
            text-decoration: none;
            color: black;
            
        }
    }
}
</style>