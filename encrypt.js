function encryptText() {
    let text = document.getElementById("text").value;
    let key = document.getElementById("key").value;

    if (!text || !key) {
        alert("Please enter both text and key!");
        return;
    }

    let encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("output").value = encrypted;
}

function decryptText() {
    let encryptedText = document.getElementById("text").value;
    let key = document.getElementById("key").value;

    if (!encryptedText || !key) {
        alert("Please enter both encrypted text and key!");
        return;
    }

    try {
        let bytes = CryptoJS.AES.decrypt(encryptedText, key);
        let decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) throw new Error("Invalid key or corrupted text");

        document.getElementById("output").value = decrypted;
    } catch (e) {
        alert("Decryption failed: " + e.message);
    }
}

function clearFields() {
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
    document.getElementById("output").value = "";
}

