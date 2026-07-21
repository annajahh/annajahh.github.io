const products = [
    {
        id: 'sd-cowok',
        category: ['semua', 'sd'],
        title: 'Seragam SD Laki-laki (1 Stel)',
        subtitle: 'Kemeja Putih & Celana Merah',
        img: 'img/sdl.png',
        desc: 'Setelan lengkap Seragam Sekolah Dasar (SD) untuk laki-laki. Terdiri dari Atasan Kemeja Putih lengan pendek dan Celana Merah.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Kemeja: Famatex / TC (Adem)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Celana: Nagatex / Drill tebal',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Jahitan rapi dan kancing awet'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SD)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [32, 34, 36, 38, 40, 42] },
                    { label: 'LINGKAR DADA', values: [76, 80, 84, 88, 92, 96] },
                    { label: 'KERUNG LENGAN', values: [40, 41, 42, 44, 45, 47] },
                    { label: 'TANGAN PENDEK', values: [18, 19, 20, 21, 22, 23] },
                    { label: 'TANGAN PANJANG', values: [43, 46, 49, 52, 55, 57] },
                    { label: 'PANJANG BAJU', values: [54, 56, 59, 62, 65, 68] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (CELANA SD)",
                headers: ['UKURAN', '1', '2', '3', '4', '5', '6'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [54, 57, 60, 63, 66, 69] },
                    { label: 'LINGKAR PINGGUL', values: [78, 81, 84, 87, 90, 93] },
                    { label: 'PANJANG CELANA', values: [69, 72, 76, 80, 85, 90] },
                    { label: 'LINGKAR PESAK', values: [49, 51, 54, 56, 58, 60] },
                    { label: 'LINGKAR PAHA', values: [48, 50, 52, 54, 56, 58] },
                    { label: 'LINGKAR LUTUT', values: [33, 34, 36, 37, 40, 42] },
                    { label: 'LINGKAR BAWAH', values: [30, 31, 32, 33, 34, 36] }
                ]
            }
        ]
    },
    {
        id: 'sd-cewek',
        category: ['semua', 'sd'],
        title: 'Seragam SD Perempuan (1 Stel)',
        subtitle: 'Kemeja Putih & Rok Merah',
        img: 'img/sdw.png',
        desc: 'Setelan lengkap Seragam Sekolah Dasar (SD) untuk perempuan. Terdiri dari Atasan Kemeja Putih dan Rok Merah (rempel).',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Kemeja: Famatex Asli',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Rok: Kain tebal lipatan rapi',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pinggang rok menggunakan karet sisi'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SD)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [32, 34, 36, 38, 40, 42] },
                    { label: 'LINGKAR DADA', values: [76, 80, 84, 88, 92, 96] },
                    { label: 'KERUNG LENGAN', values: [40, 41, 42, 44, 45, 47] },
                    { label: 'TANGAN PENDEK', values: [18, 19, 20, 21, 22, 23] },
                    { label: 'TANGAN PANJANG', values: [43, 46, 49, 52, 55, 57] },
                    { label: 'PANJANG BAJU', values: [54, 56, 59, 62, 65, 68] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (ROK)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [54, 58, 62, 66, 70] },
                    { label: 'PANJANG ROK', values: [42, 45, 48, 51, 54] }
                ]
            }
        ]
    },
    {
        id: 'smp-cowok',
        category: ['semua', 'smp'],
        title: 'Seragam SMP Laki-laki (1 Stel)',
        subtitle: 'Kemeja Putih & Celana Biru',
        img: 'img/smpl.png',
        desc: 'Setelan seragam SMP untuk Laki-laki. Tersedia pilihan lengan pendek/panjang dan celana panjang/pendek.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Kemeja bahan Oxford/Famatex',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Celana kain Drill biru (tahan luntur)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola jahitan SMP resmi'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SMP)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [36, 38, 40, 42, 44] },
                    { label: 'LINGKAR DADA', values: [88, 92, 96, 100, 104] },
                    { label: 'KERUNG LENGAN', values: [42, 43, 44, 45, 47] },
                    { label: 'TANGAN PENDEK', values: [22, 23, 24, 25, 26] },
                    { label: 'TANGAN PANJANG', values: [55, 56, 57, 58, 59] },
                    { label: 'PANJANG BAJU', values: [65, 67, 69, 71, 73] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (CELANA SMP)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [66, 70, 74, 78, 82] },
                    { label: 'LINGKAR PINGGUL', values: [86, 90, 94, 98, 102] },
                    { label: 'PANJANG CELANA', values: [89, 91, 93, 95, 97] },
                    { label: 'LINGKAR PESAK', values: [61, 63, 65, 67, 69] },
                    { label: 'LINGKAR PAHA', values: [55, 58, 61, 65, 68] },
                    { label: 'LINGKAR LUTUT', values: [41, 43, 45, 48, 50] },
                    { label: 'LINGKAR BAWAH', values: [38, 40, 42, 44, 46] }
                ]
            }
        ]
    },
    {
        id: 'smp-cewek',
        category: ['semua', 'smp'],
        title: 'Seragam SMP Perempuan (1 Stel)',
        subtitle: 'Kemeja Putih & Rok Biru',
        img: 'img/smpw.png',
        desc: 'Setelan seragam SMP untuk Perempuan. Tersedia pilihan lengan pendek/panjang dan rok span/rempel panjang.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Kemeja bahan Oxford/Famatex',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Rok kain Drill biru (tahan luntur)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola jahitan SMP resmi'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SMP)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [36, 38, 40, 42, 44] },
                    { label: 'LINGKAR DADA', values: [88, 92, 96, 100, 104] },
                    { label: 'KERUNG LENGAN', values: [42, 43, 44, 45, 47] },
                    { label: 'TANGAN PENDEK', values: [22, 23, 24, 25, 26] },
                    { label: 'TANGAN PANJANG', values: [55, 56, 57, 58, 59] },
                    { label: 'PANJANG BAJU', values: [65, 67, 69, 71, 73] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (ROK PANJANG SMP)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [66, 70, 74, 78, 82] },
                    { label: 'LINGKAR PINGGUL', values: [86, 90, 94, 98, 102] },
                    { label: 'PANJANG ROK', values: [88, 90, 92, 94, 96] }
                ]
            }
        ]
    },
    {
        id: 'sma-cowok',
        category: ['semua', 'sma'],
        title: 'Seragam SMA Laki-laki (1 Stel)',
        subtitle: 'Kemeja Putih & Celana Abu-Abu',
        img: 'img/smal.png',
        desc: 'Setelan seragam SMA untuk Laki-laki. Tersedia pilihan lengan pendek/panjang dan celana panjang.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Kemeja bahan Oxford/Famatex',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Celana kain Drill abu-abu (tahan luntur)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola jahitan SMA resmi'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SMA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [40, 42, 44, 46, 48] },
                    { label: 'LINGKAR DADA', values: [92, 98, 104, 110, 116] },
                    { label: 'TANGAN PENDEK', values: [24, 25, 26, 27, 28] },
                    { label: 'TANGAN PANJANG', values: [57, 58, 59, 60, 61] },
                    { label: 'PANJANG BAJU', values: [70, 72, 74, 76, 78] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (CELANA SMA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [70, 75, 80, 85, 90] },
                    { label: 'LINGKAR PINGGUL', values: [90, 95, 100, 105, 110] },
                    { label: 'PANJANG CELANA', values: [96, 98, 100, 102, 104] },
                    { label: 'LINGKAR PESAK', values: [63, 65, 66, 68, 70] },
                    { label: 'LINGKAR PAHA', values: [58, 61, 65, 68, 72] },
                    { label: 'LINGKAR LUTUT', values: [44, 46, 48, 50, 52] },
                    { label: 'LINGKAR BAWAH', values: [40, 42, 44, 46, 48] }
                ]
            }
        ]
    },
    {
        id: 'sma-cewek',
        category: ['semua', 'sma'],
        title: 'Seragam SMA Perempuan (1 Stel)',
        subtitle: 'Kemeja Putih & Rok Abu-Abu',
        img: 'img/smaw.png',
        desc: 'Setelan seragam SMA untuk Perempuan. Tersedia pilihan lengan pendek/panjang dan rok span/rempel panjang.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Kemeja bahan Oxford/Famatex',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Rok kain Drill abu-abu (tahan luntur)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola jahitan SMA resmi'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA SMA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LEBAR BAHU', values: [40, 42, 44, 46, 48] },
                    { label: 'LINGKAR DADA', values: [92, 98, 104, 110, 116] },
                    { label: 'TANGAN PENDEK', values: [24, 25, 26, 27, 28] },
                    { label: 'TANGAN PANJANG', values: [57, 58, 59, 60, 61] },
                    { label: 'PANJANG BAJU', values: [70, 72, 74, 76, 78] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (ROK PANJANG SMA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [70, 74, 78, 82, 86] },
                    { label: 'LINGKAR PINGGUL', values: [90, 94, 98, 102, 106] },
                    { label: 'PANJANG ROK', values: [90, 92, 94, 96, 98] }
                ]
            }
        ]
    },
    {
        id: 'pdh-pria',
        category: ['semua', 'kantor'],
        title: 'Safari PDH/PDL Pria',
        subtitle: 'Seragam Instansi Profesional',
        img: 'img/pdhl.png',
        desc: 'Baju seragam safari kerja pria untuk instansi, perusahaan, atau organisasi. Bisa custom desain bordir komputer.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Khaki: Katun Kenzo, Semi Wool, Drill America',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Putih: Drill American',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Jahitan bartack kuat',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Menerima custom bordir'
        ],
        tables: [
            {
                title: "UKURAN ATASAN PRIA",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR DADA', values: [96, 102, 108, 114, 120, 128, 136] },
                    { label: 'PANJANG LENGAN', values: [25, 26, 27, 28, 29, 30, 31] },
                    { label: 'KERUNG LENGAN', values: [48, 50, 52, 54, 57, 59, 61] },
                    { label: 'PANJANG BAJU', values: [72, 74, 76, 78, 80, 81, 82] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (CELANA PRIA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [72, 76, 80, 84, 88, 92, 96] },
                    { label: 'PANJANG CELANA', values: [98, 100, 102, 104, 106, 106, 106] }
                ]
            }
        ]
    },
    {
        id: 'pdh-wanita',
        category: ['semua', 'kantor'],
        title: 'Seragam PDH Wanita',
        subtitle: 'Seragam Instansi Profesional',
        img: 'img/pdhw.png',
        desc: 'Baju seragam kerja wanita (putri) untuk instansi, Pemda, atau perusahaan. Potongan pas di badan (slim fit) yang rapi dan elegan.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Khaki: Katun Kenzo, Semi Wool, Drill America',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Putih: Drill American',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Jahitan rapi dan kuat',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Menerima custom bordir'
        ],
        tables: [
            {
                title: "UKURAN ATASAN PUTRI",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR DADA', values: [94, 98, 102, 108, 114, 120, 126] },
                    { label: 'PANJANG LENGAN', values: [58, 59, 60, 60.5, 61, 61.5, 62] },
                    { label: 'KERUNG LENGAN', values: [48, 50, 52, 54, 57, 59, 61] },
                    { label: 'PANJANG BAJU', values: [72, 74, 76, 78, 80, 81, 82] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (ROK / CELANA PANJANG)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [72, 76, 80, 86, 92, 98, 104] },
                    { label: 'LINGKAR PINGGUL', values: [94, 98, 102, 108, 114, 120, 126] },
                    { label: 'PANJANG BAWAHAN', values: [92, 94, 96, 98, 100, 100, 100] }
                ]
            }
        ]
    },
    {
        id: 'korpri-pria', 
        category: ['semua', 'kantor'],
        title: 'Kemeja Korpri Pria',
        subtitle: 'Seragam Batik Resmi PNS',
        img: 'img/korpri.png',
        desc: 'Seragam batik Korpri resmi pria untuk instansi pemerintahan. Menggunakan bahan kain katun yang nyaman dipakai seharian, tidak mudah kusut, dan dijahit dengan standar konfeksi premium.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Katun',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Jahitan kerah dan kancing rapi',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola batik simetris resmi pria'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA KORPRI PRIA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR DADA', values: [96, 102, 108, 114, 120, 128, 136] },
                    { label: 'PANJANG LENGAN', values: [25, 26, 27, 28, 29, 30, 31] },
                    { label: 'KERUNG LENGAN', values: [48, 50, 52, 54, 57, 59, 61] },
                    { label: 'PANJANG BAJU', values: [72, 74, 76, 78, 80, 81, 82] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (CELANA HITAM)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [72, 76, 80, 84, 88, 92, 96] },
                    { label: 'PANJANG CELANA', values: [98, 100, 102, 104, 106, 106, 106] }
                ]
            }
        ]
    },
    {
        id: 'korpri-wanita', 
        category: ['semua', 'kantor'],
        title: 'Kemeja Korpri Wanita',
        subtitle: 'Seragam Batik Resmi PNS',
        img: 'img/korpriw.png',
        desc: 'Seragam batik Korpri resmi wanita untuk instansi pemerintahan. Menggunakan bahan kain katun yang nyaman dipakai seharian, tidak mudah kusut, dan dijahit dengan standar konfeksi premium.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan Katun',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Jahitan kerah dan kancing rapi',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pola batik simetris resmi wanita'
        ],
        tables: [
            {
                title: "UKURAN ATASAN (KEMEJA KORPRI WANITA)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR DADA', values: [94, 98, 102, 108, 114, 120, 126] },
                    { label: 'PANJANG LENGAN', values: [58, 59, 60, 60.5, 61, 61.5, 62] },
                    { label: 'KERUNG LENGAN', values: [48, 50, 52, 54, 57, 59, 61] },
                    { label: 'PANJANG BAJU', values: [72, 74, 76, 78, 80, 81, 82] }
                ]
            },
            {
                title: "UKURAN BAWAHAN (ROK / CELANA PANJANG)",
                headers: ['UKURAN', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4L'],
                rows: [
                    { label: 'LINGKAR PINGGANG', values: [72, 76, 80, 86, 92, 98, 104] },
                    { label: 'LINGKAR PINGGUL', values: [94, 98, 102, 108, 114, 120, 126] },
                    { label: 'PANJANG BAWAHAN', values: [92, 94, 96, 98, 100, 100, 100] }
                ]
            }
        ]
    },
    {
        id: 'topi-sd',
        category: ['semua', 'aksesoris', 'sd'],
        title: 'Topi SD',
        subtitle: 'Bordir Tut Wuri (Merah/Putih)',
        img: 'img/tpsd.jpg',
        desc: 'Topi seragam Sekolah Dasar (SD) bahan Famatex warna merah atau merah putih.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan tebal kaku tidak lepek',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pengait belakang adjustable'
        ],
        tables: [
            {
                title: "UKURAN TOPI",
                headers: ['UKURAN', 'ALL SIZE'],
                rows: [{ label: 'LINGKAR KEPALA', values: ['Dapat Disesuaikan (Adjustable)'] }]
            }
        ]
    },
    {
        id: 'topi-smp',
        category: ['semua', 'aksesoris', 'smp'],
        title: 'Topi SMP',
        subtitle: 'Bordir Tut Wuri (Biru/Putih)',
        img: 'img/tpsmp.jpg',
        desc: 'Topi seragam SMP bahan Famatex warna biru atau biru putih.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan tebal kaku tidak lepek',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pengait belakang adjustable'
        ],
        tables: [
            {
                title: "UKURAN TOPI",
                headers: ['UKURAN', 'ALL SIZE'],
                rows: [{ label: 'LINGKAR KEPALA', values: ['Dapat Disesuaikan (Adjustable)'] }]
            }
        ]
    },
    {
        id: 'topi-sma',
        category: ['semua', 'aksesoris', 'sma'],
        title: 'Topi SMA',
        subtitle: 'Bordir Tut Wuri (Abu/Putih)',
        img: 'img/tpsma.jpg',
        desc: 'Topi seragam SMA bahan Famatex warna abu-abu atau abu putih.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan tebal kaku tidak lepek',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Pengait belakang adjustable'
        ],
        tables: [
            {
                title: "UKURAN TOPI",
                headers: ['UKURAN', 'ALL SIZE'],
                rows: [{ label: 'LINGKAR KEPALA', values: ['Dapat Disesuaikan (Adjustable)'] }]
            }
        ]
    },
    {
        id: 'kaos-kaki',
        category: ['semua', 'aksesoris', 'sd', 'smp', 'sma'],
        title: 'Kaos Kaki Sekolah',
        subtitle: 'Putih Telapak Hitam',
        img: 'img/kaoskaki.jpg',
        desc: 'Kaos kaki sekolah tebal berlogo sekolah, dengan kombinasi telapak hitam agar tidak mudah terlihat kotor.',
        features: [
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Bahan PE Spandex (Serap Keringat)',
            '<i class="fas fa-check-circle text-green-500 w-5 mt-0.5"></i> Telapak kaki warna hitam'
        ],
        tables: [
            {
                title: "UKURAN KAOS KAKI",
                headers: ['UKURAN', 'ALL SIZE'],
                rows: [{ label: 'PANJANG', values: ['Se-Betis Standar'] }]
            }
        ]
    }
];
