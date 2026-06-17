/**
 * KYXS Portfolio - Production Application Engine
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INTRO SPLASH GATEWAY OVERLAY SYSTEM ---
    const gateway = document.getElementById('clickGateway');
    if (gateway) {
        gateway.addEventListener('click', () => {
            // Unlocks viewport layout scrollbar controls
            gateway.classList.add('fade-out-complete');
            document.body.classList.add('content-revealed-active');
        });
    }

    // --- 2. LTC CRYPTO COPIER FUNCTIONALITY ---
    const ltcBtn = document.getElementById('ltcDonateBtn');
    
    // Replace this placeholder string with your physical Litecoin address
    const ltcAddress = "YOUR_LITECOIN_ADDRESS_HERE"; 

    if (ltcBtn) {
        ltcBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents layout from bouncing to top of screen
            
            navigator.clipboard.writeText(ltcAddress).then(() => {
                // Preserves structural layout spacing while injecting confirmation feedback
                const originalText = ltcBtn.innerHTML;
                ltcBtn.style.color = "#ffffff";
                ltcBtn.innerHTML = `
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    COPIED!
                `;
                
                // Gracefully returns UI to inactive dark state after timeout
                setTimeout(() => {
                    ltcBtn.innerHTML = originalText;
                    ltcBtn.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error('Crypto engine failure copying text address payload: ', err);
            });
        });
    }
});
