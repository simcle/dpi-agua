import { ipcRenderer } from "electron";

import store from './store'

function checkTime (i) {
    if(i < 10) {
        i = `0${i}`;
    }
    return i;
}

setInterval(() => {
    let date = new Date()
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    M = checkTime(M);
    D = checkTime(D);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    let timestamp = `${Y}-${M}-${D} ${h}:${m}:${s}`

    let status = store.getters.get_status // membaca status usb terhubung atau tidak
    let data = store.getters.get_data
    if(status) {
        let store = {
            ph: data.ph,
            do: data.do,
            ec: data.ec,
            timestamp: timestamp
        }
        ipcRenderer.send('storeData', store)
    }


}, 10000)