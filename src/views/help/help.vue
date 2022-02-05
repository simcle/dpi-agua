<template>
    <div class="mt-5">
        <div class="grid grid-cols-2 gap-10">
            <div>
                <h5 class="text-lg">Labrego Software v0.1.0</h5>
                <a href="http://dutapersada.co.id" target="_blank" rel="by dutapersada.co.id">by dutapersada.co.id</a>
                <div class="mt-10">
                    <h3 class="text-2xl">Tentang Software</h3>
                    <p>
                        Labrego software ini di khususkan untuk sensor <span class="text-green-500">Atlas Scientific</span> dengan 
                        sirkuit Embedded Solutions EZO menggunakan protokol <strong>I<sup>2</sup>C</strong> & <strong class="text-blue-600">Arduino</strong> untuk membuat sistem baru pemantaun kualitas air yang akurat,
                        pasang sensor di kolam ikan atau hidroponik, untuk menambah pemahaman baru tentang kualitas air Anda.
                    </p>
                    <p class="mt-2">
                        Anda dapat dengan mudah mengakses semua data sensor Anda. dilengkapi dengan grafik real time Anda dapat mengetahui apa yang sedang terjadi.
                    </p>
                    <h5 class="text-base mt-2.5">Daftar perangkat EZO yang berfungsi dengan Software Labrego</h5>
                    <div class="pl-4">
                        <ul class="list-disc">
                            <li>EZO-pH,</li>
                            <li>EZO-ORP,</li>
                            <li>EZO-DO (Dissolved Oxygen)</li>
                            <li>EZO-EC (Conductivity)</li>
                            <li>EZO-RTD (Temperature)</li>
                            <li>EZO-CO2 sensor</li>
                            <li>EZO-O2 sensor</li>
                            <li>EZO-PMP (Peristaltic Pump)</li>
                            <li>EZO-HUM sensor (Humidity Sensor)</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <h5 class="text-xl">Perisapan Instalasi Perangkat</h5>
                <div class="mt-5">
                    <h4 class="text-lg">Langkah 1: Persyaratan </h4>
                    <p>Set protokol perangkat EZO sirkuit pada mode I<sup>2</sup>C</p>
                </div>
                <div class="mt-5">
                    <h4 class="text-lg">Langkah 2: Merakit perangkat</h4>
                    <p>Diagram skema rangkaian arduino UNO dengan EZO sirkuit</p>
                    <div class="mt-2">
                        <img src="@/assets/diagram-i2c.png" alt="">
                    </div>
                </div>
                <div class="mt-5">
                    <h4 class="text-lg">Langkah 3: Upload program ke arduino</h4>
                    <p>Pada pemograman ini menggunakan library khusus untuk EZO sirkuit dalam mode I<sup>2</sup>C</p>
                    <p>silahkan download code pemogramannya di sini</p>
                    <ul>
                        <li>a. Extract File zip yang sudah anda download</li>
                        <li>b. Buka software Arduino IDE (anda bisa mendownloadnya DISINI jika belum terinstal)</li>
                        <li>c.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>