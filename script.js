/**
 * KYXS Portfolio App Engine Core
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Unlocks layout when users interact with intro wrapper overlay ---
    const gateway = document.getElementById('clickGateway');
    if (gateway) {
        gateway.addEventListener('click', () => {
            gateway.classList.add('fade-out-complete');
            document.body.classList.add('content-revealed-active');
        });
    }

    // --- Clipboard management handler engine targeting Litecoin data ---
    const ltcBtn = document.getElementById('ltcDonateBtn');
    const ltcAddress = "ltc1qq72968uay6n5kc0m3aswdjqsuaah0vejfn5yhl"; 

    if (ltcBtn) {
        ltcBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Blocks layout browser scroll bouncy bugs
            
            navigator.clipboard.writeText(ltcAddress).then(() => {
                const originalText = ltcBtn.innerHTML;
                ltcBtn.style.color = "#ffffff";
                ltcBtn.innerHTML = `
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    COPIED!
                `;
                
                // Returns string state elements back to monochrome inactive tone layout values
                setTimeout(() => {
                    ltcBtn.innerHTML = originalText;
                    ltcBtn.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error('Core security context failed copying text element data payload: ', err);
            });
        });
    }
});
