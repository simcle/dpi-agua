import Excel from 'exceljs'

export async function exportToExcel (filePath, row) {
    // A new Excel Work Book
    var workbook = new Excel.Workbook();
        
    var sheet = workbook.addWorksheet('Sheet1');
    // A table header
    sheet.columns = [
        { header: 'Waktu', key: 'waktu' },
        { header: 'pH', key: 'ph' },
        { header: 'DO', key: 'do' },
        { header: 'EC.', key: 'ec' },
        { header: 'Temp', key: 'temp' },
        { header: 'Pump.', key: 'pump' },
        { header: 'CO2.', key: 'co2' },
        { header: 'O2', key: 'o2' },
        { header: 'HUM', key: 'hum'},
        { header: 'ORP', key: 'orp'}
    ]
    
    // Add rows in the above header
    for (let i = 0; i < row.length; i++) {
        sheet.addRow({waktu: row[i].timestamp, ph: row[i].ph, do: row[i].do, ec: row[i].ec, temp: row[i].temp, pump: row[i].pump, co2: row[i].co2, o2: row[i].o2, hum: row[i].hum, orp: row[i].orp});
    }
    // Save Excel on Hard Disk
    workbook.xlsx.writeFile(filePath)
}