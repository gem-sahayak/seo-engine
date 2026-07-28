---
title: "CPPP Vendor Registration & Class 3 DSC Mapping Guide 2026"
slug: "cppp-eprocure-vendor-registration-class-3-dsc-mapping"
date: "2026-07-28"
category: "eprocurement"
summary: "Step-by-step guide for vendors and contractors to complete Online Bidder Enrollment on CPPP (eprocure.gov.in) and map Class 3 Signing & Encryption Digital Signature Certificates."
readTime: "8 min read"
author: "SahayakAI Procurement Team"
tags: ["cppp", "eprocure", "vendor registration", "class 3 dsc", "gepnic"]
---

# CPPP Vendor Registration & Class 3 DSC Mapping Guide 2026

The **Central Public Procurement Portal (CPPP)** at [eprocure.gov.in](https://eprocure.gov.in) is India's primary portal for central government ministries, Central Public Sector Enterprises (CPSEs), defense organizations, and state bodies operating under the GePNIC framework. With over **350,000 registered bidders**, participating in CPPP tenders requires an active profile and an authenticated **Class 3 Digital Signature Certificate (DSC)**.

---

## 1. Prerequisites for CPPP Vendor Enrollment

Before beginning the online registration process on `eprocure.gov.in`, ensure you have the following documents and hardware ready:

| Requirement | Specification | Purpose |
|---|---|---|
| **Class 3 DSC** | Signing + Encryption USB Token (eMudhra, nCode, Sify, Capricorn) | Digital signing of tender bids & documents |
| **PAN & GSTIN** | Valid Business PAN and GST Certificate | Tax compliance and identity verification |
| **Udyam Certificate** | Active MSME Udyam Registration (if applicable) | Claiming EMD & tender fee exemptions |
| **Email & Mobile** | Dedicated corporate email & mobile number | OTP verification & tender notifications |
| **Java Runtime** | Java JRE 8 (32-bit / 64-bit) & WebSigner component | Interfacing DSC token with browser |

---

## 2. Step-by-Step CPPP Online Bidder Enrollment Process

### Step 1: Access the Official Portal
1. Open your web browser and navigate to `https://eprocure.gov.in/eprocure/app`.
2. Click on the **"Online Bidder Enrollment"** link located on the right-hand menu panel.

### Step 2: Fill Company Details
1. **Login ID:** Enter a valid corporate email address (e.g., `bidding@yourcompany.com`). This email will serve as your permanent username.
2. **Company Name:** Enter your exact business name as listed on your GST/PAN certificate.
3. **Registration Number:** Enter your Company Identification Number (CIN), LLPIN, or Firm Registration number.
4. **Address & Contact Details:** Fill in your registered business address, city, state, postal code, and mobile number.

### Step 3: Enter Tax & MSME Details
1. Select your company type (Proprietorship, Partnership, Private Limited, Public Limited, or MSME).
2. Input your 10-digit PAN and 15-digit GSTIN.
3. If registered as a Micro or Small Enterprise (MSE), enter your **Udyam Registration Number** to enable automatic EMD exemption processing.

### Step 4: OTP Verification & Password Setup
1. Submit the form to generate One-Time Passwords (OTPs) sent to your registered email and mobile number.
2. Enter the OTPs to verify your identity and set a strong alphanumeric password (minimum 8 characters with special symbols).

---

## 3. How to Map Class 3 DSC Token on CPPP

Registration alone does not permit tender bidding. You must map your **Class 3 Digital Signature Certificate (DSC)** to your CPPP profile before uploading technical or financial bids.

```text
[Insert USB DSC Token] ➔ [Log into eprocure.gov.in] ➔ [Click 'Register DSC'] ➔ [Select Signing Cert] ➔ [Enter Token PIN] ➔ [Mapping Confirmed]
```

### Detailed DSC Mapping Steps:

1. **Insert USB Token:** Plug your Class 3 DSC USB token (ePass2003, Watchdata, ProxKey) into your computer's USB port. Ensure token driver software is installed.
2. **Log into CPPP:** Visit `https://eprocure.gov.in/eprocure/app` and log in with your username and password.
3. **Navigate to DSC Registration:** On your user dashboard, click on **"Click here to register Digital Signature Certificate"**.
4. **Run Java / WebSigner Applet:** Allow the browser to run the WebSigner / Java PKI applet. When prompted, trust the certificate publisher.
5. **Select Certificate:** The portal will display available certificates stored on your USB token. Select your **Signing Certificate** (ensure certificate validity is active).
6. **Enter Token PIN:** Input your USB token password/PIN when prompted.
7. **Confirmation:** Click **Submit**. A success message reading *"Digital Signature Certificate registered successfully"* will appear on your dashboard.

---

## 4. Troubleshooting Common CPPP Registration & DSC Errors

### Error A: "DSC Not Detected / WebSigner Not Initialized"
- **Cause:** Missing USB token drivers or blocked browser PKI applets.
- **Solution:** Reinstall your USB token driver software. Add `https://eprocure.gov.in` to the **Exception Site List** inside Windows Java Control Panel (`Control Panel ➔ Java ➔ Security ➔ Edit Site List`).

### Error B: "Certificate Belongs to Another User"
- **Cause:** Attempting to map a DSC that is already linked to another CPPP username or expired profile.
- **Solution:** Log into your original account to unbind the old certificate, or contact the CPPP Helpdesk (`support-eproc@nic.in` / `0120-4001002`) to request certificate re-mapping.

### Error C: "Invalid Login ID or Account Locked"
- **Cause:** Entering incorrect password 5 times locks the account automatically for safety.
- **Solution:** Click **"Forgot Password / Reset Account"** on the login page to receive a password reset link via registered email.

---

## 5. Summary & Best Practices

- Always keep your **Class 3 Signing + Encryption DSC** renewed at least 30 days before expiration.
- Maintain a single authorized email ID for all CPPP tender notifications to prevent missing tender corrigendums.
- Use **SahayakAI Procurement OS** to automate tender monitoring across CPPP, GeM, and State eProcurement portals in a unified dashboard.
