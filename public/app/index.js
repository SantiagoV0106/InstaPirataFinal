import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js";
import { Attribute2 } from "./components/BarraLateral/BarraT.js";
import { Attribute } from "./components/Post/Post.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.posts = [];
        this.barra = [];
        this.story = [];
        this.barrat = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const instaPost = this.ownerDocument.createElement("my-post");
            instaPost.setAttribute(Attribute.post, user.post);
            instaPost.setAttribute(Attribute.fotoperfil, user.fotoperfil);
            instaPost.setAttribute(Attribute.username, user.username);
            instaPost.setAttribute(Attribute.desc, user.desc);
            instaPost.setAttribute(Attribute.comment, user.comments);
            instaPost.setAttribute(Attribute.date, user.fecha);
            this.posts.push(instaPost);
        });
        data2.forEach((user2) => {
            const barraT = this.ownerDocument.createElement("my-barrat");
            barraT.setAttribute(Attribute2.fotop, user2.fotop);
            this.barrat.push(barraT);
        });
        const barraUp = this.ownerDocument.createElement("my-barra");
        this.barra.push(barraUp);
        const barraStory = this.ownerDocument.createElement("my-story");
        this.story.push(barraStory);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.barra.forEach((barra) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(barra);
            });
            this.story.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
            this.barrat.forEach((barrat) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(barrat);
            });
            this.posts.forEach((posts) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(posts);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
