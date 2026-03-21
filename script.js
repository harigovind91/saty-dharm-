// आपकी UPI ID: 43137160754@sbi
function triggerUPI() {
    const amount = document.getElementById('donateAmount').value;
    if (!amount || amount <= 0) {
        alert("कृपया योगदान की राशि दर्ज करें।");
        return;
    }

    const upiId = "43137160754@sbi"; 
    const merchantName = "सत्य धर्म स्थापना";
    const note = "सत्य धर्म सेवा हेतु योगदान";

    // UPI Intent URL निर्माण
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&tn=${encodeURIComponent(note)}&am=${amount}&cu=INR`;
    
    // पेमेंट ऐप ओपन करें
    window.location.href = upiUrl;
}
