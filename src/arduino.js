const serialport = require('serialport')
const Readline = require('@serialport/parser-readline')

import store from './store'

const data = {
    ph: 0.00,
    do: 0.00,
    ec: 0.00,
    temp: 0.00,
    pump: 0.00,
    co2: 0.00,
    o2: 0.00,
    hum: 0.00,
    orp:0.00
}

export function conPort (path) {
    console.log(path);
    const port = new serialport(path, {
        baudRate: 9600
    })
    
    const parser = new Readline()
    port.pipe(parser)

    parser.on('data', (data) => {
        let serialdata = JSON.parse(data)
        let sensor = {
            ph: serialdata.ph.toFixed(2),
            do: serialdata.do.toFixed(2),
            ec: serialdata.ec.toFixed(2),
            temp: '0.00',
            pump: '0.00',
            co2: '0.00',
            o2: '0.00',
            hum: '0.00',
            orp:'0.00'
        }
        store.commit('SET_DATA', sensor)
    })

    port.on('error', () => {
        store.commit('SET_DATA', data)
    })

    port.on('open', () => {
        store.commit('SET_STATUS', true)
        console.log('open');
    })
    port.on('close', () => {
        store.commit('SET_DATA', data)
        store.commit('SET_STATUS', false)
    })

    window.onbeforeunload = function () {
        let status = store.getters.get_status
        if(status) {
            port.close()
        } else {
            localStorage.removeItem('path')
        }
    }
    
    return Promise.resolve()

}