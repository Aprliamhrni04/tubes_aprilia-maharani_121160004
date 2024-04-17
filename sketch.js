function setup() {
  createCanvas(1150, 1450);
  
}

function draw() {
  background("#795548");
  
  //Judul Dashboard
  fill('#663524')
  rect(0,0,1150,120)
  
  textSize(35)
  fill('white')
  text("DASHBOARD",460,50)
  text("NILAI EKSPOR JAWA TIMUR",340,90)
  
  //Sektor Logistik
  textSize(25)
  fill('white')
  text("Sektor Logistik",10,150)
  text("-------------------",10, 162)
  textSize(18)
  text("Logistik adalah manajemen aliran perpindahan barang dari suatu titik asal yang berakhir pada titik konsumsi untuk memenuhi permintaan",10,185)
  text("tertentu.",10,207)
  text("Jawa Timur, merupakan salah satu provinsi di Indonesia yang memiliki potensi besar dalam sektor logistik. Terletak di bagian timur pulau",10,230)
  text("Jawa, provinsi ini memiliki akses transportasi yang cukup baik, baik melalui jalur darat, laut, maupun udara. Kondisi geografis yang ",10,252)
  text("strategis serta kemudahan aksesibilitas ini menjadikan Jawa Timur sebagai pusat logistik Indonesia.",10,274)
  
  //Diagram
  fill('#E0D1CC')
  rect(100,300,950,680)
  
  //Judul
  textSize(20)
  fill('black')
  text("Nilai Ekspor Jawa Timur Menurut Kategori Migas dan non Migas Bulanan (Juta US $) 2023",170,335)
  
  //Garis diagram
  //textFont(RobotoMonoExtraLight)
  rect(180,390,1,560)
  rect(180,950,850,1)
  
  //Diagram bulan Januari
  fill('#7EB7BE')
  rect(205,935,8,15)
  fill('#407096')
  rect(220,540,8,410)
  fill('#04354B')
  rect(235,520,8,430)
  
  //Diagram bulan Februari
  fill('#7EB7BE')
  rect(275,932,8,18)
  fill('#407096')
  rect(290,570,8,380)
  fill('#04354B')
  rect(305,535,8,415)
    
  //Diagram bulan Maret
  fill('#7EB7BE')
  rect(345,929,8,21)
  fill('#407096')
  rect(360,520,8,430)
  fill('#04354B')
  rect(375,490,8,460)
    
  //Diagram bulan April
  fill('#7EB7BE')
  rect(415,940,8,10)
  fill('#407096')
  rect(430,620,8,330)
  fill('#04354B')
  rect(445,615,8,335)
    
  //Diagram bulan Mei
  fill('#7EB7BE')
  rect(485,927,8,23)
  fill('#407096')
  rect(500,505,8,445)
  fill('#04354B')
  rect(515,480,8,470)
    
  //Diagram bulan Juni
  fill('#7EB7BE')
  rect(555,934,8,16)
  fill('#407096')
  rect(570,585,8,365)
  fill('#04354B')
  rect(585,565,8,385)
    
  //Diagram bulan Juli
  fill('#7EB7BE')
  rect(625,942,8,8)
  fill('#407096')
  rect(640,565,8,385)
  fill('#04354B')
  rect(655,560,8,390)
    
  //Diagram bulan Agustus
  fill('#7EB7BE')
  rect(695,947,8,3)
  fill('#407096')
  rect(710,520,8,430)
  fill('#04354B')
  rect(725,515,8,435)
    
  //Diagram bulan September
  fill('#7EB7BE')
  rect(765,922,8,28)
  fill('#407096')
  rect(780,510,8,440)
  fill('#04354B')
  rect(795,485,8,465)
      
  //Diagram bulan Oktober
  fill('#7EB7BE')
  rect(835,926,8,24)
  fill('#407096')
  rect(850,460,8,490)
  fill('#04354B')
  rect(865,425,8,525)
      
  //Diagram bulan November
  fill('#7EB7BE')
  rect(905,927,8,23)
  fill('#407096')
  rect(920,440,8,510)
  fill('#04354B')
  rect(935,415,8,535)
  
  //Diagram bulan Desember
  fill('#7EB7BE')
  rect(975,941,8,9)
  fill('#407096')
  rect(990,408,8,542)
  fill('#04354B')
  rect(1005,402,8,548)
  
  //Jumlah Data
  textSize(16)
  fill ('black');
  text(0,   170,950);
  text(200, 150,900);
  text(400, 150,850);
  text(600, 150,800);
  text(800, 150,750);
  text(1000,140,700);
  text(1200,140,650);
  text(1400,140,600);
  text(1600,140,550);
  text(1800,140,500);
  text(2000,140,450);
  text(2200,140,400);
  
  //Text Dibawah Diagram
  text('Jan' ,215,970);
  text('Feb' ,285,970);
  text('Mar' ,355,970);
  text('Apr' ,425,970);
  text('Mei' ,495,970);
  text('Jun' ,565,970);
  text('Jul' ,635,970);
  text('Ags' ,705,970);
  text('Sep' ,775,970);
  text('Okt' ,845,970);
  text('Nov' ,915,970);
  text('Des' ,985,970);
  
  //Keterangan
  textSize(20)
  fill('white')
  text("Keterangan:",100,1020)
  textSize(18)
  text("Migas",120,1050)
  text("Non Migas",320,1050)
  text("Total",520,1050)
  
  fill('#7EB7BE')
  rect(100,1040,10,10)
  fill('#407096')
  rect(300,1040,10,10)
  fill('#04354B')
  rect(500,1040,10,10)
  
  //Kotak Keterangan
  fill('#BD9383')
  rect(0,1080,575,280)
  fill('#A88071')
  rect(575,1080,575,280)
  
  //Penjelasan Migas dan Non Migas
  textSize(17.7)
  fill('white')
  text("Minyak dan gas bumi (Migas) merupakan komoditas vital yang ",30,1120)
    text("yang menguasai hajat hidup orang banyak dan mempunyai peranan ",10,1150)
    text("penting dalam perekonomian nasional sehingga pengelolaannya harus ",10,1180)
  text("dapat secara maksimal memberikan kemakmuran dan kesejahteraan ",10,1210)
  text("rakyat.",10,1240)
  
  
  text("Non migas ialah segala sesuatu yang merupakan hasil alam ",30,1270)
  text("maupun industri namun yang bukan termasuk dalam kategori ",10,1300)
  text("minyak bumi dan gas alam .",10,1330)
  
  //kesimpulan
  textSize(17.7)
  fill('white')
  text("Kesimpulan ",585,1120)
  text("Dari data di atas dapat disimpulkan bahwa data ekspor per bulan  ",585,1150)
  text("Provinsi Jawa Timur tahun 2023 menunjukkan tingkat ekspor migas ",585,1180)
  text("yang kecil, sedangkan untuk data ekspor non migas menunjukkan",585,1210)
  text("tingkat ekspor yang besar, dan total dari keseluruhan data ekspor",585,1240)
  text("migas dan non migas menunjukkan Tingkat ekspor yang besar.",585,1270)
  
}