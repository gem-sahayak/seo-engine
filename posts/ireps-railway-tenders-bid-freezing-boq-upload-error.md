---
title: "IREPS Railway Tenders Bid Freezing & BOQ Upload Error Fix"
slug: "ireps-railway-tenders-bid-freezing-boq-upload-error"
date: "2026-07-28"
category: "eprocurement"
summary: "Step-by-step guide to submitting financial BOQ Excel files, fixing macro upload errors, and performing bid freezing on Indian Railways IREPS portal."
readTime: "8 min read"
author: "SahayakAI Technical Team"
tags: ["ireps", "railway tender", "boq upload", "bid freezing", "troubleshooting"]
---

# IREPS Railway Tenders Bid Freezing & BOQ Upload Error Fix

Submitting financial offers on the **Indian Railways E-Procurement System (IREPS - ireps.gov.in)** requires precise preparation of Excel-based **Bill of Quantities (BOQ)** financial templates and execution of the final **Bid Freezing** procedure. Failure to correctly freeze a bid or resolving BOQ macro errors can result in technical disqualification.

This guide provides technical solutions for railway contractors to successfully submit financial bids on IREPS.

---

## 1. Understanding IREPS BOQ & Bidding Architecture

The financial evaluation on IREPS relies on pre-formatted Excel BOQ files containing automated rate calculations, tax inclusions, and percentage rebate formulas.

```text
[Download Tender BOQ Excel] ➔ [Enable Macros in Excel] ➔ [Enter Financial Rates & Taxes] ➔ [Save BOQ (Do Not Rename)] ➔ [Upload to IREPS] ➔ [Freeze Bid]
```

---

## 2. Resolving Common BOQ Upload Errors on IREPS

### Error 1: "Invalid BOQ File / Sheet Protected Error"
- **Cause:** Renaming the downloaded BOQ file or altering header row structures.
- **Solution:** 
  1. Download a fresh copy of the BOQ Excel file from the tender document page.
  2. Do **NOT** rename the file name or edit protected column headers.
  3. Enter values only in un-shaded input cells.

### Error 2: "Macros Disabled / Security Alert Error"
- **Cause:** Microsoft Excel blocking VBA macros in downloaded files.
- **Solution:**
  1. Open Microsoft Excel ➔ Go to **File** ➔ **Options** ➔ **Trust Center** ➔ **Trust Center Settings...**.
  2. Under **Macro Settings**, select **Enable all macros** (or *Disable VBA macros with notification*).
  3. Under **Protected View**, uncheck *Enable Protected View for files originating from the Internet*.

### Error 3: "Invalid Rate / Formula Error on Tax Columns"
- **Cause:** Inputting currency symbols (₹, $) or text values in numeric rate fields.
- **Solution:** Enter plain numbers only (e.g., `1450.50`). Do not include commas or currency signs.

---

## 3. Step-by-Step IREPS Bid Freezing Procedure

Uploading documents on IREPS is **NOT** equivalent to final bid submission. You must execute the **Bid Freezing** step.

1. **Log into IREPS:** Access `https://www.ireps.gov.in` and log in using your Class 3 DSC token.
2. **Open Active Bids:** Navigate to **E-Tender ➔ My Bids ➔ In-Progress Bids**.
3. **Upload Technical Documents:** Attach PDF files for technical compliance, past performance certificates, and tax documents.
4. **Upload Signed Financial BOQ:** Click **Upload Financial Rate Page / BOQ**, select your filled BOQ file, and click **Sign & Upload**.
5. **Execute Bid Freezing:** 
   - Click the **"Freeze Bid"** button on the summary screen.
   - Enter your Class 3 DSC USB token PIN when prompted by **CrisSigner**.
6. **Verify Submission Receipt:** Upon successful bid freezing, the portal will generate an official **Bid Acknowledgement Receipt** with a unique digital timestamp. Print and save this receipt.

---

## 4. Summary & Best Practices

- Always freeze your bid at least 3 to 4 hours before the tender closing deadline to avoid network congestion.
- Store your official **Bid Acknowledgement Receipt** for all future tender opening and financial evaluation references.
- Utilize **SahayakAI Procurement OS** to automate BOQ validation and monitor Indian Railways tender corrigendums in real-time.
