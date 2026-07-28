---
title: "IREPS Vendor Registration & PKI Component WebSigner Error Fix"
slug: "ireps-vendor-registration-pki-component-websigner-error-fix"
date: "2026-07-28"
category: "eprocurement"
summary: "Comprehensive guide to Indian Railways E-Procurement System (IREPS) vendor onboarding, CrisSigner installation, and resolving PKI component WebSigner errors."
readTime: "9 min read"
author: "SahayakAI Procurement Team"
tags: ["ireps", "indian railways", "pki error", "vendor registration", "crissigner"]
---

# IREPS Vendor Registration & PKI Component WebSigner Error Fix

The **Indian Railways E-Procurement System (IREPS)** at [ireps.gov.in](https://www.ireps.gov.in) is the official online portal for all procurement of goods, civil works, signaling contracts, and leasing services across Indian Railways. Managing over **250,000+ active railway contractors**, IREPS enforces strict security protocols utilizing **Class 3 Digital Signature Certificates (DSC)** and custom **PKI WebSigner components**.

---

## 1. IREPS Vendor Onboarding Eligibility & Requirements

To register as a railway supplier or works contractor on IREPS, businesses must fulfill the following prerequisites:

| Requirement | Details | Notes |
|---|---|---|
| **Class 3 DSC** | Signing & Encryption Certificate (Company / Org Class 3) | Must be issued by CCA-licensed CA (eMudhra, Sify, nCode, etc.) |
| **CrisSigner / WebSigner** | Official IREPS Digital Signing Utility | Available for download on the IREPS homepage |
| **Bank Account & GSTIN** | Verified Bank Account Details & Active GSTIN | Required for online EMD submission & bill processing |
| **Browser Environment** | Chrome, Edge (IE Mode), or Firefox with Java 8+ | Internet Explorer legacy is deprecated |

---

## 2. Step-by-Step IREPS Vendor Registration Process

### Step 1: Access the IREPS New Vendor Enrolment Page
1. Visit `https://www.ireps.gov.in`.
2. Click on the **"New Vendors / Contractors (E-Tender)"** link under the **User Registration** section.

### Step 2: Plug in Class 3 DSC Token
1. Insert your USB Class 3 Signing Certificate token into your PC.
2. Launch the **CrisSigner** or **IREPS PKI Helper** utility in the background.

### Step 3: Fill Firm Profile & GST Details
1. Select your Firm Type (Individual / Proprietorship, Partnership, Private Limited, Public Limited, PSU).
2. Enter Company Name, Registered Office Address, Contact Person Name, Mobile Number, and Email ID.
3. Input your **GSTIN** and **PAN**. The system will validate tax registration credentials online.

### Step 4: Map Digital Certificate & Complete Verification
1. Click **"Sign and Submit"**. The portal will invoke the PKI component to select your Class 3 signing certificate.
2. Select your digital certificate, enter your USB token PIN, and confirm digital signature attachment.
3. Upon successful verification, your temporary registration credentials will be emailed to your registered address.

---

## 3. How to Fix IREPS "PKI Component Not Initialized" & WebSigner Errors

The most frequent obstacle encountered by railway contractors on IREPS is the **"PKI Component Not Yet Initialized"** or **"Failed to Open Web Signer"** error during login or bid submission.

```text
[Error: PKI Component Not Initialized]
       │
       ├─► Solution 1: Download & Install Latest CrisSigner Utility
       ├─► Solution 2: Add IREPS URL to Java Exception Site List
       ├─► Solution 3: Run Browser / Signer as Administrator
       └─► Solution 4: Verify USB Token Driver & Certificate Validity
```

### Fix 1: Install & Launch Latest CrisSigner Utility
1. Go to `https://www.ireps.gov.in` and click on **"Downloads" ➔ "System Settings / Signer Utility"**.
2. Download `CrisSigner.exe` or `IREPSWebSignerSetup.exe`.
3. Right-click the installer file and select **"Run as Administrator"**.
4. Once installed, start the **CrisSigner Service** before opening your web browser.

### Fix 2: Configure Java Security Exception List
1. Open Windows Search and type **Configure Java**.
2. Go to the **Security** tab and click **Edit Site List...**.
3. Click **Add** and enter the following URLs:
   - `https://www.ireps.gov.in`
   - `https://ireps.gov.in`
4. Click **OK** and apply settings.

### Fix 3: Clear Java & Browser Cache
1. In Java Control Panel ➔ **General** ➔ **Temporary Internet Files** ➔ Click **Settings...**.
2. Click **Delete Files...** and check both *Trace and Log Files* and *Cached Applications and Applets*.
3. Restart your web browser.

### Fix 4: Resolve "Please Sign with Your Own Certificate" Error
- **Cause:** This error occurs when a contractor renews their Class 3 DSC token, but the old serial number is still linked in the IREPS profile database.
- **Fix:** Log into IREPS, navigate to **Help Desk / Profile Management ➔ Request Change of Digital Signing Certificate**, attach your new token, and submit an online re-mapping request.

---

## 4. Summary & Best Practices for Railway Bidders

- Keep the **CrisSigner Utility** running in your Windows system tray prior to initiating bid submissions on IREPS.
- Ensure your computer's date and time zone are set to **(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi** to avoid certificate timestamp rejection.
- Integrate your procurement workflow with **SahayakAI Procurement OS** to receive real-time Indian Railways tender alerts, corrigendum tracking, and automated BOQ validation.
