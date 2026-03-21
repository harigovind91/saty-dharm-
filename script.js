// UPI भुगतान ट्रिगर (आपकी ID: 43137160754@sbi)
function triggerUPI() {
    const amount = document.getElementById('donateAmount').value;
    if (!amount || amount <= 0) {
        alert("कृपया एक वैध राशि दर्ज करें।");
        return;
    }

    const upiId = "43137160754@sbi"; 
    const merchantName = "सत्य धर्म स्थापना";
    const transactionNote = "Donation for Satya Dharma Sthapana";

    // मोबाइल पर UPI Apps खोलने के लिए Intent URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&tn=${encodeURIComponent(transactionNote)}&am=${amount}&cu=INR`;

    window.location.href = upiUrl;
}

// मेनू टॉगल (Mobile view)
function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
    links.style.flexDirection = 'column';
}

// OTP सिस्टम सिमुलेशन
function sendOTP() {
    const email = document.getElementById('userEmail').value;
    if (email.length > 5) {
        alert("OTP सफलतापूर्वक भेज दिया गया है।");
        document.getElementById('otp-box').classList.remove('hidden');
    } else {
        alert("कृपया वैध ईमेल या मोबाइल नंबर डालें।");
    }
}

function verifyUser() {
    alert("वेरिफिकेशन सफल! आपकी प्रोफाइल और पासवर्ड सुरक्षित कर दिए गए हैं।");
}

