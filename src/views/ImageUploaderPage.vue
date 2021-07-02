<template>
    <div id="image-uploader-page">
        <custom-image-uploader />
    </div>
</template>

<script>
import CustomImageUploader from '@/components/CustomImageUploader.vue';

export default {
    components: {
        CustomImageUploader        
    },
}
</script>

<style scoped lang="scss">
#image-uploader-page {
    width: 100vw;
    height: 100vh;
    position: relative;
    
    .custom-image-uploader {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>