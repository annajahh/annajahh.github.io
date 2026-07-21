// 1. Render Katalog Produ
function renderCatalog(filterValue) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = ''; 

    const filteredProducts = products.filter(p => p.category.includes(filterValue));

    filteredProducts.forEach(p => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl sm:rounded-[2rem] p-2 sm:p-3 shadow-sm border border-stone-200 hover:shadow-xl hover:border-primary-300 transition-all duration-500 ease-smooth cursor-pointer group hover:-translate-y-1" onclick="openModal('${p.id}')">
                <div class="aspect-square rounded-xl sm:rounded-[1.5rem] overflow-hidden relative mb-3 sm:mb-4 bg-stone-100">
                    <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-[1.5s] ease-smooth group-hover:scale-110">
                    <div class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                        <span class="bg-white/95 text-stone-900 px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-md"><i class="fas fa-search mr-1"></i> Detail</span>
                    </div>
                </div>
                <div class="px-2 pb-2 text-center">
                    <h4 class="text-sm sm:text-base font-bold text-stone-900 line-clamp-1">${p.title}</h4>
                    <p class="text-[11px] sm:text-xs text-primary-600 font-semibold mt-1 bg-primary-50 inline-block px-2 py-0.5 rounded-md line-clamp-1">${p.subtitle}</p>
                </div>
            </div>
        `;
    });
}

// Event Listener Tombol Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-primary-700', 'text-white', 'border-primary-700');
            b.classList.add('text-stone-600', 'border-stone-200');
        });
        
        const clickedBtn = e.target;
        clickedBtn.classList.remove('text-stone-600', 'border-stone-200');
        clickedBtn.classList.add('active', 'bg-primary-700', 'text-white', 'border-primary-700');
        
        const filterValue = clickedBtn.getAttribute('data-filter');
        renderCatalog(filterValue);
    });
});

// Render awal
renderCatalog('semua');

// 2. Logic Modal Pop-up (RENDER MULTIPLE TABLES)
const modalOverlay = document.getElementById('product-modal');
const modalBox = document.getElementById('modal-box');

function openModal(productId) {
    const data = products.find(p => p.id === productId);
    if(!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-desc').textContent = data.desc;
    
    const featuresHTML = data.features.map(feat => `<li class="flex items-start">${feat}</li>`).join('');
    document.getElementById('modal-features').innerHTML = featuresHTML;

    // Generate Multiple Size Charts (Atasan & Bawahan terpisah)
    const tableContainer = document.getElementById('modal-table-container');
    
    let allTablesHTML = data.tables.map(tableData => {
        let ths = tableData.headers.map((h, i) => {
            let bg = i === 0 ? 'bg-blue-100 text-blue-900' : 'bg-primary-500 text-white'; 
            if (h === 'S') bg = 'bg-stone-900 text-white';
            if (h === 'M') bg = 'bg-orange-500 text-white';
            if (h === 'L') bg = 'bg-blue-500 text-white';
            if (h === 'XL') bg = 'bg-red-600 text-white';
            if (h === 'XXL') bg = 'bg-green-600 text-white';
            if (h === 'ALL SIZE') bg = 'bg-stone-800 text-white';
            return `<th class="p-2 sm:p-3 border border-stone-200 font-bold text-center text-[10px] sm:text-sm whitespace-nowrap ${bg}">${h}</th>`;
        }).join('');

        let trs = tableData.rows.map(row => {
            let tds = row.values.map(val => `<td class="p-2 sm:p-3 border border-stone-200 text-center text-stone-800 font-semibold bg-stone-50 text-xs sm:text-sm whitespace-nowrap">${val}</td>`).join('');
            return `<tr>
                        <td class="p-2 sm:p-3 border border-stone-200 font-bold text-stone-700 text-[10px] sm:text-xs whitespace-nowrap bg-white">${row.label}</td>
                        ${tds}
                    </tr>`;
        }).join('');

        return `
            <div class="overflow-hidden">
                <div class="bg-stone-100 text-stone-800 font-bold text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-t-xl border border-stone-200 border-b-0 inline-flex items-center gap-2">
                    <i class="fas fa-tag text-primary-600"></i> ${tableData.title}
                </div>
                <div class="overflow-x-auto rounded-xl rounded-tl-none border border-stone-200 shadow-sm custom-scrollbar">
                    <table class="w-full text-left text-sm border-collapse min-w-max">
                        <thead><tr>${ths}</tr></thead>
                        <tbody>${trs}</tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');

    tableContainer.innerHTML = allTablesHTML;

    // Tampilkan Modal
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('flex');
    modalBox.classList.remove('modal-leave');
    void modalBox.offsetWidth; 
    modalBox.classList.add('modal-enter');
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalBox.classList.remove('modal-enter');
    modalBox.classList.add('modal-leave');
    
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
        modalOverlay.classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}

// 3. Logic Header Mobile & Navigation
const headerBtn = document.getElementById('header-menu-btn');
const headerDropdown = document.getElementById('header-dropdown');

headerBtn.addEventListener('click', () => {
    headerDropdown.classList.toggle('hidden');
    if(headerDropdown.classList.contains('hidden')){
        headerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        headerBtn.classList.remove('bg-primary-50', 'text-primary-700', 'border-primary-200');
    } else {
        headerBtn.innerHTML = '<i class="fas fa-times"></i>';
        headerBtn.classList.add('bg-primary-50', 'text-primary-700', 'border-primary-200');
    }
});

function navigate(pageId) {
    headerDropdown.classList.add('hidden');
    headerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    headerBtn.classList.remove('bg-primary-50', 'text-primary-700', 'border-primary-200');

    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('page-enter');
    });
    
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        void targetPage.offsetWidth; 
        targetPage.classList.add('page-enter');
    }

    document.querySelectorAll('.nav-item').forEach(btn => {
        const icon = btn.querySelector('i');
        const bg = btn.querySelector('.nav-bg');
        
        if(btn.getAttribute('data-target') === pageId) {
            icon.classList.remove('text-stone-500');
            icon.classList.add('text-white');
            bg.classList.remove('scale-0', 'opacity-0');
            bg.classList.add('scale-100', 'opacity-100');
        } else {
            icon.classList.add('text-stone-500');
            icon.classList.remove('text-white');
            bg.classList.add('scale-0', 'opacity-0');
            bg.classList.remove('scale-100', 'opacity-100');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navigate('beranda');

// 4. Logic Fullscreen Image Viewer (BARU)
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const fullscreenImg = document.getElementById('fullscreen-img');

function openFullscreen() {
    // Ambil sumber gambar (src) dari modal yang sedang terbuka
    const currentImgSrc = document.getElementById('modal-img').src;
    
    // Setel sumber gambar ke elemen fullscreen
    fullscreenImg.src = currentImgSrc;
    
    // Tampilkan container fullscreen
    fullscreenViewer.classList.remove('hidden');
    fullscreenViewer.classList.add('flex');
    
    // Beri sedikit jeda untuk memicu transisi animasi masuk
    setTimeout(() => {
        fullscreenImg.classList.remove('scale-95', 'opacity-0');
        fullscreenImg.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeFullscreen() {
    // Jalankan animasi keluar
    fullscreenImg.classList.remove('scale-100', 'opacity-100');
    fullscreenImg.classList.add('scale-95', 'opacity-0');
    
    // Sembunyikan container setelah animasi selesai
    setTimeout(() => {
        fullscreenViewer.classList.add('hidden');
        fullscreenViewer.classList.remove('flex');
    }, 300);
}
