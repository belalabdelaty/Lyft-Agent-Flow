# 🚗 Lyft Agent Helper

A simple internal tool built for Lyft support agents to make life easier and handling time shorter.  

The idea was pretty straightforward: agents were spending way too much time digging through docs, notes, and templates just to send one email or find the right snippet. So this tool brings everything into one clean place , no tabs, no confusion, no wasted time.

---

## 💡 What It Does

- Collects **all internal notes, responses, and snippets** in one organized place.  
- Lets you write the **email body**, choose if it’s for a **rider or driver**, and automatically generates the rest.  
- Includes **click-to-copy snippets** so agents can grab what they need instantly.  
- Reduces variance between agents and keeps responses consistent.  
- Helps lower **AHT (Average Handle Time)** across the board.

---

## ⚙️ Tech Stack

- **Google Apps Script** –  hosting  
- **HTML / CSS / JS** – front-end  
- **Google Sheets API** – data storage and updates  

Everything runs on a single Apps Script deployment:
👉 [Live tool](https://script.google.com/macros/s/AKfycbwfvNBeE7RIosqsrTgzSZCn8HY5OuubKSoDM17pLpLAB5IMmrRQIggcoAG90AD7mjHM0A/exec)

---

## 🚀 Why I Built It

Every agent had their own notes and shortcuts, which caused inconsistency and wasted time.  
This project fixes that by centralizing all the info and making it accessible in a couple of clicks. It’s already helping 100+ agents work faster and stay consistent.

---

## 🛠️ Setup (for Devs)

1. Clone the repo:
   ```bash
   git clone https://github.com/belalabdelaty/lyft-agent-helper.git
   cd lyft-agent-helper
