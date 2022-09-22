import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js"
import MyBarra from "./components/BarraUp/BarraUp.js";
import MyStory from "./components/BarraStory/BarraStory.js";
import MyBarraT, {Attribute2} from "./components/BarraLateral/BarraT.js";
import MyPost, {Attribute} from "./components/Post/Post.js";

class AppContainer extends HTMLElement{
    posts: MyPost[] = [];
    barra: MyBarra[] = [];
    story: MyStory[] = [];
    barrat: MyBarraT[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});


        data.forEach((user)=>{
            const instaPost = this.ownerDocument.createElement("my-post") as MyPost;
            instaPost.setAttribute(Attribute.post, user.post);
            instaPost.setAttribute(Attribute.fotoperfil, user.fotoperfil);
            instaPost.setAttribute(Attribute.username, user.username);
            instaPost.setAttribute(Attribute.desc, user.desc);
            instaPost.setAttribute(Attribute.comment, user.comments);
            instaPost.setAttribute(Attribute.date, user.fecha);
            this.posts.push(instaPost);
        });
        
        data2.forEach((user2)=>{

            const barraT = this.ownerDocument.createElement("my-barrat") as MyBarraT;
            barraT.setAttribute(Attribute2.fotop,user2.fotop);

            this.barrat.push(barraT);

        });


        const barraUp = this.ownerDocument.createElement("my-barra") as MyBarra;
        this.barra.push(barraUp);

        const barraStory = this.ownerDocument.createElement("my-story") as MyStory;
        this.story.push(barraStory);

    }

    connectedCallback(){
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =""; 
            this.barra.forEach((barra)=>{
            this.shadowRoot?.appendChild(barra);
            });
            this.story.forEach((story)=>{
            this.shadowRoot?.appendChild(story);
            });
            this.barrat.forEach((barrat)=>{
            this.shadowRoot?.appendChild(barrat);
            });
            this.posts.forEach((posts)=>{
                this.shadowRoot?.appendChild(posts);
            });
            
            
        }
    }
}


customElements.define("app-container",AppContainer);