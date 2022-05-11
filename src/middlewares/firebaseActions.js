import firebaseConfig from "../services/firebase-config";
import { getDatabase, ref, push, onValue, set, remove } from 'firebase/database'
import {AUTHORS} from "../constants/common";

export const trackDB = async () => {
    try {
        let chatArr = [];
        let msg = {};
        let name = '';
        const db = getDatabase(firebaseConfig);
        const chatRef = ref(db, '/chats');
        const nameRef = ref(db, '/profile/name')
        onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            if(data) {
                for (let i of Object.keys(data)) {
                    msg[i] = data[i].messageList ? Object.values(data[i].messageList) : [];
                }
                const chatIds = data ? Object.keys(data) : [];
                chatArr = chatIds.map((el)=>({
                    id: el,
                    name: data[el].name
                }))
            }
        });
        onValue(nameRef, (snapshot) => {
            const data = snapshot.val();
            if(data) {
                name = data || AUTHORS.me;
            }
        })
        return [chatArr, msg, name];
    } catch (e) {
        console.error(e)
    }
}

export const addChat = async (name) => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    await set(newChatRef, {name: name, messageList: {}});
}

export const removeChat = async (id) => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, `/chats/${id}`);
    await remove(chatRef);
}

export const addMessage = async (chatId, message) => {
    const db = getDatabase(firebaseConfig);
    const messageRef = ref(db, `/chats/${chatId}/messageList`);
    const newMessageRef = push(messageRef);
    await set(newMessageRef, {text: message.text, author: message.author});
}

export const changeName = async (name) => {
    const db = getDatabase(firebaseConfig);
    const newRef = ref(db, '/profile/name')
    await set(newRef, name);
}