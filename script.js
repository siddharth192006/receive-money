function sendPaymentRequest() {
    const upiInput = document.getElementById("upi");
    const amountInput = document.getElementById("amount");
    const upi = upiInput.value;
    const amount = amountInput.value;
    const upiError = document.getElementById("upi-error");
    const amountError = document.getElementById("amount-error");

    // Validate UPI ID
    if (!upi || !upi.includes("@")) {
        upiError.style.display = "block";
        return;
    } else {
        upiError.style.display = "none";
    }

    // Validate amount
    if (!amount || amount <= 0) {
        amountError.style.display = "block";
        return;
    } else {
        amountError.style.display = "none";
    }

    // Redirect to UPI payment app
    const upiLink = `upi://pay?pa=7720887035@upi&pn=NexForge&am=${amount}&cu=INR`;
    window.location.href = upiLink;
}
