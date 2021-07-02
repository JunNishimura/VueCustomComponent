<template>
    <div class="custom-image-uploader">
        <form @submit="$emit('uploadImage')" method="post" enctype="multipart/form-data">
            <div class="dragDropArea" :style="{borderColor: borderColor}" 
                @dragover.prevent="changeDragState(true)" 
                @dragleave.prevent="changeDragState(false)" 
                @drop.prevent="uploadImage($event)"
                v-if="preview == null"
            >
                <p class="title">Drag & Drop to Upload File</p>
                <p class="or">OR</p>
                <div class="upload-image">
                    <label for="upload-image-input" class="upload-image-btn"><span>browse image</span></label>
                    <input id="upload-image-input" type="file" accept="image/*" @change="uploadImage($event)">
                </div>
            </div>
            <div class="preview" v-else-if="preview">
                <img :src="preview">
                <div class="delete-btn" @click="deletePreview">
                    <span>&times;</span>
                </div>
            </div>
            <div class="register-btn">
                <button :class="{btnActive: imageSet, btnUploadReady: uploadReady}" type="submit" value="register">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dragState: false, // true if dragOver
            imageSet: false, // true if image is set
            borderColor: "#dfdfdf",
            preview: null
        }
    },
    computed: {
        uploadReady() {
            return this.preview !== '' ? true : false;
        }
    },
    methods: {
        uploadImage(event) {
            const files = event.target.files ? event.target.files : event.dataTransfer.files;
            const file  = files[0];
            const reader = new FileReader();
            reader.onload = e => {
                this.preview = e.target.result;
            }
            reader.readAsDataURL(file);
            document.getElementById("upload-image-input").files = files;
        },
        changeDragState(flag) {
            this.dragState = flag;
            if (this.dragState) {
                this.borderColor = "#ade6fffc";
            } else {
                this.borderColor = "#dfdfdf";
            }
        },
        deletePreview() {
            this.preview = null;
        }
    },
    watch: {
        preview(val) {
            this.imageSet = val !== null;
        }
    }
}
</script>

<style scoped lang="scss">
.custom-image-uploader {
    max-width: 680px;
    
    .dragDropArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fafafa;
        border-width: 2px;
        border-style: dashed;
        text-align: center;
        min-height: 420px; // 420 = 680 / 1.618

        .title {
            font-size: 20px;
            font-weight: bold;
        }
        .or {
            font-size: 12.36px; // 12.36 = 20 / 1.618
            margin: 7.64px 0; // 7.64 = 12.36 / 1.618
        }

        .upload-image {
            .upload-image-btn {
                border: 1px solid #dfdfdf;
                background-color: #fff;
                padding: 5px 8px;
                cursor: pointer;
                span {
                    font-size: 14px;
                }
                &:hover {
                    background-color: darken($color: #fff, $amount: 16.18%);
                }
            }
            #upload-image-input {
                display: none;
            }
        }
    }

    .preview {
        img {
            width: 100%;
        }
        .delete-btn {
            position: fixed;
            top: 10px;
            right: 15px;
            font-size: 24px;
            font-weight: bold;
            color: black;
            background-color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &:hover {
                background-color: darken($color: #fff, $amount: 16.18%);
            }
        }
    }

    .register-btn button {
        width: 100%;
        border: none;
        outline: none;
        margin-top: 29.66px; // 29.66 = 48(height of btn) / 1.618
        padding: 16px 0;
        cursor: pointer;
        pointer-events: none;

        &:hover {
            background-color: darken($color: (#ade6fffc), $amount: 16.18%);
        }
    }

    .btnActive {
        pointer-events: auto !important;
    }

    .btnUploadReady {
        background-color: #ade6fffc;
    }
}
</style>