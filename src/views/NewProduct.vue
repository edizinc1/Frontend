<template>
    <div class="NewProduct">
        <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Registro de nuevos productos</p>
                </div>
            <form v-on:submit.prevent="sendInfo">
                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                            <label>Nombre del Producto</label>
                                <input type="text" class="form-control" v-model="name"/>
                            </div>
                            <div class="form-group">
                            <label>Descripcion del producto</label>
                                <input type="text" class="form-control" v-model="description"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label>Precio</label>
                                <input type="text" class="form-control" v-model="price"/>
                            </div>
                            <div class="form-group">
                            <label>Disponibles en almacen</label>
                                <input type="text" class="form-control" v-model="storage"/>
                            </div>
                            <div class="form-group">
                                <label>Imagen del producto</label>
                                    <input type="file" @change="onFileSelected" accept=".jpg, .jpeg, .png">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btnSubmit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'

export default {
    name: 'NewProduct',
    data(){
        return{
            name: null,
            description:null,
            price: null,
            imagenUrl: null,
            idSeller: null,
            storage: null,
            selectedFile: null,
            uploadValue: null
        }
    },
    created(){
        this.getUser();
    },
    methods:{
        getUser(){
            axios.get('http://localhost:3000/api/session').then(
            response => {
                this.idSeller = response.data.lastSession;
                console.log(this.idSeller)
            }
            )
            .catch(err =>{
            this.navItemState = "nav-link disabled"
            console.log(err);
            })
        },
        sendInfo(){
            this.sendImage();
        },
        sendImage(){
            console.log('Post Image');
            const storageRef = firebase.storage().ref(`/images/${this.selectedFile.name }`);
            const task = storageRef.put(this.selectedFile);

            task.on('state_changed',snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            },error=>{console.log(error.message)},
            ()=>{
                task.snapshot.ref.getDownloadURL().then((url)=>{
                    this.imagenUrl = url;
                    console.log(this.idSeller);
                    this.postProduct(this.imagenUrl,this.idSeller);
            });
            })
        },
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
        },
        postProduct(imgUrl,usId){
            axios.post('http://localhost:3000/api/new/product',{
                name: this.name,
                description: this.description,
                price: this.price,
                imagenUrl: imgUrl,
                idSeller: usId,
                storage: this.storage
            }).then(response =>{
                console.log(response.data);
                window.location= "http://localhost:8080/#/";
            })

        }
    },
}
</script>
<style>
    .note
{
    text-align: center;
    height: 80px;
    background: -webkit-linear-gradient(left, #0072ff, #8811c5);
    color: #fff;
    font-weight: bold;
    line-height: 80px;
}
.form-content
{
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
}
.form-control{
    border-radius:1.5rem;
}
.btnSubmit
{
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
}
</style>