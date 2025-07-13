document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const cpuOptions = [
        { name: 'Select CPU Model...', value: '' }, { name: 'Future: Intel 15th Gen / AMD Ryzen 9000 Series', value: 'future-cpu' }, { name: 'Intel Core i9-14900K', value: 'i9-14900' }, { name: 'Intel Core i9-13900K', value: 'i9-13900' }, { name: 'AMD Ryzen 9 7950X3D', value: 'ryzen 9 7950' }, { name: 'AMD Ryzen 9 5950X', value: 'ryzen 9 5950' }, { name: 'Intel Core i7-14700K', value: 'i7-14700' }, { name: 'AMD Ryzen 7 7800X3D', value: 'ryzen 7 7800' }, { name: 'Intel Core i9-12900K', value: 'i9-12900' }, { name: 'Intel Core i5-14600K', value: 'i5-14600' }, { name: 'Intel Core i5-13600K', value: 'i5-13600' }, { name: 'AMD Ryzen 9 5900X', value: 'ryzen 9 5900' }, { name: 'AMD Ryzen 7 5800X3D', value: 'ryzen 7 5800' }, { name: 'AMD Ryzen 5 7600X', value: 'ryzen 5 7600' }, { name: 'Intel Core i7-12700K', value: 'i7-12700' }, { name: 'Intel Core i7-11700K', value: 'i7-11700' }, { name: 'AMD Ryzen 7 5700X', value: 'ryzen 7 5700' }, { name: 'Intel Core i5-13400F', value: 'i5-13400' }, { name: 'Intel Core i5-12600K', value: 'i5-12600' }, { name: 'AMD Ryzen 7 3700X', value: 'ryzen 7 3700' }, { name: 'Intel Core i5-11600K', value: 'i5-11600' }, { name: 'AMD Ryzen 5 5600X', value: 'ryzen 5 5600' }, { name: 'Intel Core i5-10600K', value: 'i5-10600' }, { name: 'AMD Ryzen 5 5500', value: 'ryzen 5 5500' }, { name: 'AMD Ryzen 5 3600', value: 'ryzen 5 3600' }, { name: 'Intel Core i3-13100F', value: 'i3-13100' }, { name: 'Intel Core i3-12100F', value: 'i3-12100' }, { name: 'Older Model (Pre-2020)', value: 'old-cpu' },
    ];
    const gpuOptions = [
        { name: 'Select GPU Model...', value: '' }, { name: 'Future: NVIDIA RTX 50 Series / AMD RX 8000 Series', value: 'future-gpu' }, { name: 'NVIDIA GeForce RTX 4090', value: 'rtx 4090' }, { name: 'NVIDIA GeForce RTX 4080 Super', value: 'rtx 4080' }, { name: 'AMD Radeon RX 7900 XTX', value: 'rx 7900 xtx' }, { name: 'NVIDIA GeForce RTX 3090 Ti', value: 'rtx 3090 ti' }, { name: 'NVIDIA GeForce RTX 4070 Ti Super', value: 'rtx 4070 ti super' }, { name: 'NVIDIA GeForce RTX 3090', value: 'rtx 3090' }, { name: 'AMD Radeon RX 7900 GRE', value: 'rx 7900 gre' }, { name: 'NVIDIA GeForce RTX 4070 Super', value: 'rtx 4070 super' }, { name: 'NVIDIA GeForce RTX 3080 Ti', value: 'rtx 3080 ti' }, { name: 'AMD Radeon RX 6950 XT', value: 'rx 6950' }, { name: 'AMD Radeon RX 7800 XT', value: 'rx 7800' }, { name: 'NVIDIA GeForce RTX 3080', value: 'rtx 3080' }, { name: 'AMD Radeon RX 6800 XT', value: 'rx 6800 xt' }, { name: 'NVIDIA GeForce RTX 4060 Ti', value: 'rtx 4060 ti' }, { name: 'NVIDIA GeForce RTX 3070 Ti', value: 'rtx 3070 ti' }, { name: 'AMD Radeon RX 6800', value: 'rx 6800' }, { name: 'AMD Radeon RX 7700 XT', value: 'rx 7700' }, { name: 'NVIDIA GeForce RTX 3070', value: 'rtx 3070' }, { name: 'AMD Radeon RX 6700 XT', value: 'rx 6700 xt' }, { name: 'NVIDIA GeForce RTX 3060 Ti', value: 'rtx 3060 ti' }, { name: 'NVIDIA GeForce RTX 2080 Super', value: 'rtx 2080' }, { name: 'AMD Radeon RX 7600', value: 'rx 7600' }, { name: 'AMD Radeon RX 6650 XT', value: 'rx 6650' }, { name: 'AMD Radeon RX 6600 XT', value: 'rx 6600 xt' }, { name: 'NVIDIA GeForce RTX 3060', value: 'rtx 3060' }, { name: 'NVIDIA GeForce RTX 2070 Super', value: 'rtx 2070' }, { name: 'AMD Radeon RX 6600', value: 'rx 6600' }, { name: 'NVIDIA GeForce RTX 3050', value: 'rtx 3050' }, { name: 'NVIDIA GeForce RTX 2060 Super', value: 'rtx 2060' }, { name: 'NVIDIA GeForce GTX 1660 Super', value: 'gtx 1660' }, { name: 'Older Model (Pre-2020)', value: 'old-gpu' },
    ];
    const ramOptions = [ { name: 'Select System RAM...', value: '' }, { name: '8 GB', value: 8 }, { name: '16 GB', value: 16 }, { name: '32 GB', value: 32 }, { name: '64 GB+', value: 64 } ];
    const resolutionOptions = [ { name: 'Select Target Resolution...', value: '' }, { name: '1080p (1920x1080)', value: '1080p', targetScore: 70 }, { name: '1440p (2560x1440)', value: '1440p', targetScore: 100 }, { name: '4K (3840x2160)', value: '4k', targetScore: 140 }, ];
    const storageOptions = [ { name: 'Select Game Drive...', value: '' }, { name: 'NVMe SSD (1TB or more)', value: 'nvme_large', score: 10 }, { name: 'SATA SSD (1TB or more)', value: 'sata_large', score: 8 }, { name: 'Any SSD (Less than 1TB)', value: 'ssd_small', score: 5 }, { name: 'HDD', value: 'hdd', score: 1 }, ];
    const motherboardOptions = [ { name: 'Select Motherboard Tier...', value: '' }, { name: 'High-End (Z790/X670E)', value: 'high_mobo', score: 10 }, { name: 'Mid-Range (B760/B650)', value: 'mid_mobo', score: 7 }, { name: 'Entry-Level (A620/H610)', value: 'low_mobo', score: 3 }, { name: 'Older Chipset (Pre-2021)', value: 'old_mobo', score: 1 }, ];
    const psuOptions = [ { name: 'Select Power Supply...', value: '' }, { name: '850W+ Gold/Platinum', value: 'high_psu', score: 10 }, { name: '750W Gold', value: 'good_psu', score: 8 }, { name: '650W Bronze/Gold', value: 'mid_psu', score: 5 }, { name: '550W or less / Unrated', value: 'low_psu', score: 1 }, ];
    const coolingOptions = [ { name: 'Select CPU Cooler...', value: '' }, { name: 'AIO Liquid Cooler (240mm+)', value: 'aio_cooler', score: 10 }, { name: 'Large Air Cooler (Dual Tower)', value: 'air_cooler_large', score: 8 }, { name: 'Standard Tower Air Cooler', value: 'air_cooler_std', score: 5 }, { name: 'Stock / Basic Cooler', value: 'stock_cooler', score: 1 }, ];
    const explanations = {
        cpu: "The CPU handles game logic, AI, and physics. More cores and higher clock speeds lead to smoother gameplay and prevent FPS drops in complex scenes.", gpu: "The most critical component for gaming. The GPU and its VRAM render all visuals. A stronger GPU allows for higher resolutions and demanding settings like Ray Tracing.", ram: "Fast, short-term memory for your PC. Games load assets here for quick access. 16GB is a good baseline, while 32GB is ideal for multitasking or heavily modded games.", storage: "Where your games are stored. An SSD (Solid State Drive) dramatically cuts loading times compared to a traditional HDD. NVMe SSDs are the fastest type.", motherboard: "The central hub connecting all components. Its chipset and power delivery (VRMs) affect stability and performance, especially with high-end CPUs.", psu: "The Power Supply Unit delivers electricity to everything. A reliable PSU with enough wattage and a good efficiency rating (e.g., 80+ Gold) is crucial for system stability under load.", cooling: "Prevents your CPU from overheating. If a CPU gets too hot, it 'thermal throttles' (slows down) to protect itself, which directly reduces gaming performance.", resolution: "The number of pixels on your screen (e.g., 1080p, 4K). Higher resolutions look sharper but require significantly more GPU power to maintain a smooth frame rate."
    };
    const icons = {
        check: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
        error: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    };
    
    // --- DOM Elements ---
    const elements = {
        cpu: document.getElementById('cpu'), gpu: document.getElementById('gpu'), ram: document.getElementById('ram'), storage: document.getElementById('storage'), motherboard: document.getElementById('motherboard'), psu: document.getElementById('psu'), cooling: document.getElementById('cooling'), resolution: document.getElementById('resolution'), checkBtn: document.getElementById('check-btn'), clearBtn: document.getElementById('clear-btn'), resultSection: document.getElementById('result-section'), resultIcon: document.getElementById('result-icon'), resultVerdict: document.getElementById('result-verdict'), resultDescription: document.getElementById('result-description'), resultFuture: document.getElementById('result-future'), tooltipContainer: document.getElementById('tooltip-container'), validationMessage: document.getElementById('validation-message')
    };

    // --- SCORING FUNCTIONS ---
    const getCpuScore = (cpu) => { if (cpu.includes('future-cpu')) return 45; if (cpu.includes('i9-14')) return 40; if (cpu.includes('i9-13')) return 39; if (cpu.includes('ryzen 9 79')) return 38; if (cpu.includes('ryzen 9 5950')) return 37; if (cpu.includes('i7-14')) return 36; if (cpu.includes('i7-13')) return 35; if (cpu.includes('ryzen 7 7800')) return 34; if (cpu.includes('i9-12900')) return 33; if (cpu.includes('i5-14')) return 31; if (cpu.includes('i5-136')) return 30; if (cpu.includes('ryzen 9 5900')) return 29; if (cpu.includes('ryzen 7 5800')) return 28; if (cpu.includes('ryzen 5 7600')) return 27; if (cpu.includes('i7-12')) return 26; if (cpu.includes('i7-11')) return 25; if (cpu.includes('ryzen 7 5700')) return 24; if (cpu.includes('i5-13400')) return 23; if (cpu.includes('i5-12600')) return 22; if (cpu.includes('ryzen 7 3700')) return 21; if (cpu.includes('i5-11600')) return 20; if (cpu.includes('ryzen 5 5600')) return 19; if (cpu.includes('i5-10600')) return 18; if (cpu.includes('ryzen 5 5500')) return 17; if (cpu.includes('ryzen 5 3600')) return 16; if (cpu.includes('i3-13')) return 14; if (cpu.includes('i3-12')) return 12; return 5; };
    const getGpuScore = (gpu) => { if (gpu.includes('future-gpu')) return 75; if (gpu.includes('rtx 4090')) return 70; if (gpu.includes('rtx 4080')) return 65; if (gpu.includes('rx 7900 xtx')) return 62; if (gpu.includes('rtx 3090 ti')) return 60; if (gpu.includes('rtx 4070 ti super')) return 58; if (gpu.includes('rtx 3090')) return 56; if (gpu.includes('rx 7900 gre')) return 54; if (gpu.includes('rtx 4070 super')) return 52; if (gpu.includes('rtx 3080 ti')) return 50; if (gpu.includes('rx 6950')) return 49; if (gpu.includes('rx 7800')) return 48; if (gpu.includes('rtx 3080')) return 46; if (gpu.includes('rx 6800 xt')) return 44; if (gpu.includes('rtx 4060 ti')) return 42; if (gpu.includes('rtx 3070 ti')) return 40; if (gpu.includes('rx 6800')) return 39; if (gpu.includes('rx 7700')) return 38; if (gpu.includes('rtx 3070')) return 37; if (gpu.includes('rx 6700')) return 35; if (gpu.includes('rtx 3060 ti')) return 34; if (gpu.includes('rtx 2080')) return 33; if (gpu.includes('rx 7600')) return 31; if (gpu.includes('rx 6650')) return 30; if (gpu.includes('rx 6600 xt')) return 29; if (gpu.includes('rtx 3060')) return 28; if (gpu.includes('rtx 2070')) return 27; if (gpu.includes('rx 6600')) return 26; if (gpu.includes('rtx 3050')) return 22; if (gpu.includes('rtx 2060')) return 20; if (gpu.includes('gtx 1660')) return 15; return 5; };
    const getRamScore = (ram) => { ram = parseInt(ram); if (ram >= 32) return 15; if (ram >= 16) return 10; return 2; };

    // --- INITIALIZATION ---
    const populateSelect = (element, options) => {
        options.forEach((option, index) => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.name;
            if (index === 0) {
                opt.disabled = true;
                opt.selected = true;
            }
            element.appendChild(opt);
        });
    };

    populateSelect(elements.cpu, cpuOptions);
    populateSelect(elements.gpu, gpuOptions);
    populateSelect(elements.ram, ramOptions);
    populateSelect(elements.storage, storageOptions);
    populateSelect(elements.motherboard, motherboardOptions);
    populateSelect(elements.psu, psuOptions);
    populateSelect(elements.cooling, coolingOptions);
    populateSelect(elements.resolution, resolutionOptions);

    // --- EVENT LISTENERS ---
    elements.checkBtn.addEventListener('click', () => {
        // Hide previous messages
        elements.validationMessage.classList.add('hidden');
        elements.resultSection.classList.add('hidden');

        // Validation
        const fieldsToValidate = [
            { el: elements.cpu, name: 'CPU Model' },
            { el: elements.gpu, name: 'GPU Model' },
            { el: elements.ram, name: 'System RAM' },
            { el: elements.motherboard, name: 'Motherboard Tier' },
            { el: elements.psu, name: 'Power Supply' },
            { el: elements.cooling, name: 'CPU Cooler' },
            { el: elements.storage, name: 'Game Drive' },
            { el: elements.resolution, name: 'Target Resolution' },
        ];

        const unselectedFields = fieldsToValidate.filter(field => !field.el.value);

        if (unselectedFields.length > 0) {
            const fieldNames = unselectedFields.map(f => f.name).join(', ');
            elements.validationMessage.textContent = `Please make a selection for: ${fieldNames}.`;
            elements.validationMessage.classList.remove('hidden');
            return;
        }

        elements.checkBtn.disabled = true;
        elements.checkBtn.textContent = 'Analyzing...';

        setTimeout(() => {
            const selected = {
                cpu: elements.cpu.value,
                gpu: elements.gpu.value,
                ram: elements.ram.value,
                storage: storageOptions.find(o => o.value === elements.storage.value),
                motherboard: motherboardOptions.find(o => o.value === elements.motherboard.value),
                psu: psuOptions.find(o => o.value === elements.psu.value),
                cooling: coolingOptions.find(o => o.value === elements.cooling.value),
                resolution: resolutionOptions.find(o => o.value === elements.resolution.value),
            };

            const totalScore = getCpuScore(selected.cpu) + getGpuScore(selected.gpu) + getRamScore(selected.ram) + selected.storage.score + selected.motherboard.score + selected.psu.score + selected.cooling.score;
            const performanceRatio = totalScore / selected.resolution.targetScore;

            let verdict, description, futureProof, icon, platformWarning = '';

            if (selected.psu.score < 5) platformWarning = ' Your power supply may be insufficient and could cause instability with high-end components.';
            else if (selected.cooling.score < 5) platformWarning = ' Your cooling solution may lead to thermal throttling, reducing peak performance.';
            else if (selected.motherboard.score < 5) platformWarning = ' Your motherboard may limit the full potential of your CPU and future upgrade options.';

            if (performanceRatio >= 1.2) {
                verdict = `Excellent for ${selected.resolution.name}!`; description = `This is a top-tier, well-balanced PC. It's a powerhouse for your target resolution, ready for maximum settings and high frame rates.${platformWarning}`; futureProof = "Should remain very capable for another 3-4 years at this resolution."; icon = icons.check;
            } else if (performanceRatio >= 1.0) {
                verdict = `Great for ${selected.resolution.name}!`; description = `A solid machine for a smooth experience on most modern titles at your target resolution.${platformWarning}`; futureProof = "You can expect solid performance for the next 2-3 years."; icon = icons.check;
            } else if (performanceRatio >= 0.8) {
                verdict = `Good for ${selected.resolution.name}`; description = `This is a capable rig, but you may need to adjust some settings from Ultra to High to maintain smooth FPS.${platformWarning}`; futureProof = "You can likely game comfortably for another 1-2 years before needing upgrades for new titles."; icon = icons.check;
            } else if (performanceRatio >= 0.6) {
                verdict = `Borderline for ${selected.resolution.name}`; description = `This PC will struggle. You'll likely need to play at medium-to-low settings to get a playable experience.${platformWarning}`; futureProof = "An upgrade will likely be needed within the next year to play new releases at this resolution."; icon = icons.warning;
            } else {
                verdict = `Not Recommended for ${selected.resolution.name}`; description = `This configuration is below the standard for your target resolution and will not provide an enjoyable experience.${platformWarning}`; futureProof = "Immediate upgrades to core components are necessary for gaming at this resolution."; icon = icons.error;
            }

            elements.resultIcon.innerHTML = icon;
            elements.resultVerdict.textContent = verdict;
            elements.resultDescription.textContent = description;
            elements.resultFuture.textContent = futureProof;
            
            elements.resultSection.classList.remove('hidden');
            elements.resultSection.classList.add('animate-fade-in');
            elements.checkBtn.disabled = false;
            elements.checkBtn.textContent = 'Check My PC';

        }, 1500);
    });

    elements.clearBtn.addEventListener('click', () => {
        // Reset all dropdowns to their placeholder
        const allSelects = [
            elements.cpu, elements.gpu, elements.ram, elements.motherboard,
            elements.psu, elements.cooling, elements.storage, elements.resolution,
        ];
        allSelects.forEach(select => {
            select.selectedIndex = 0;
        });

        // Hide results and validation messages
        elements.resultSection.classList.add('hidden');
        elements.validationMessage.classList.add('hidden');
    });
    
    // Tooltip Logic
    let activeTooltip = null;
    document.querySelectorAll('.tooltip-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const tooltipId = btn.dataset.tooltipId;

            if (activeTooltip === tooltipId) {
                elements.tooltipContainer.classList.add('hidden');
                activeTooltip = null;
                return;
            }
            
            activeTooltip = tooltipId;
            const text = explanations[tooltipId];
            elements.tooltipContainer.textContent = text;
            
            const btnRect = btn.getBoundingClientRect();
            elements.tooltipContainer.style.left = `${btnRect.left + (btnRect.width / 2)}px`;
            elements.tooltipContainer.style.top = `${btnRect.top}px`;
            elements.tooltipContainer.style.transform = 'translate(-50%, -110%)';
            elements.tooltipContainer.classList.remove('hidden');
        });
    });

    document.addEventListener('click', () => {
        if (activeTooltip) {
            elements.tooltipContainer.classList.add('hidden');
            activeTooltip = null;
        }
    });
});
