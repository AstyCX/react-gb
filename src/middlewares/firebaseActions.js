import firebaseConfig from "../services/firebase-config";
import { getDatabase, ref, push, onValue, set, remove } from 'firebase/database'

export const trackDB = async () => {
    try {
        let chatArr = [];
        let msg = {};
        const db = getDatabase(firebaseConfig);
        const chatRef = ref(db, '/chats');
        onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                console.log(data)
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
        return [chatArr, msg];
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
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then((res)=>{
        console.log('CHat removed', res)
    });
    remove(messagesRef).then((res)=>{
        console.log('Mess removed', res)
    });
}

export const addMessage = async (chatId, message) => {
    const db = getDatabase(firebaseConfig);
    const messageRef = ref(db, `/chats/${chatId}/messageList`);
    const newMessageRef = push(messageRef);
    await set(newMessageRef, {text: message.text, author: message.author});
}