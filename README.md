# 📅 Mini Calendar

A simple and interactive **Mini Calendar Web Application** built with **React + Vite** and **Supabase Authentication**.  
Users can register, login, and manage calendar events with a clean UI.

---

## ✨ Features

- 🔐 User Authentication (Login / Register) using Supabase
- 📆 Interactive Calendar
- 📝 Add, Edit, Delete Events
- 📅 Display days on dates
- 🎨 Clean and simple UI
- ⚡ Fast build using Vite

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Backend:** Supabase (Auth & Database)  
- **Date Handling:** Day.js  
- **Styling:** CSS  
- **Build Tool:** Vite  

---

## 📂 Project Structure

MINI CALENDER
│
├── frontend
│ ├── node_modules
│ ├── public
│ ├── src
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── README.md
│ └── vite.config.js
│
├── node_modules
├── package.json
└── package-lock.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mini-calendar.git
2️⃣ Navigate to frontend folder
cd frontend
3️⃣ Install required packages
npm install react react-dom
npm install @supabase/supabase-js
npm install dayjs
npm install -D vite
(Or simply run npm install if package.json is present)

4️⃣ Run the development server
npm run dev
5️⃣ Open in browser
http://localhost:5173
🔑 Supabase Setup
Create a project at https://supabase.com

Enable Email Authentication

Copy your Project URL and Anon Public Key

Paste them inside:

src/supabase.js
Example:

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://your-project-url.supabase.co",
  "your-anon-key"
);


Screenshots:

<img width="1910" height="993" alt="Image" src="https://github.com/user-attachments/assets/6d22846b-9d5a-4d83-8f01-f0baaa59e778" />

<img width="1919" height="1078" alt="Image" src="https://github.com/user-attachments/assets/1e4252dd-6df9-4cea-9115-ee73aeb70c2a" />

<img width="1909" height="890" alt="Image" src="https://github.com/user-attachments/assets/b92aac82-00b8-4287-ba79-4cc64c7f4dfb" />

<img width="873" height="639" alt="Image" src="https://github.com/user-attachments/assets/9efd9d16-8ab4-4195-9ddb-207a476026e2" />

<img width="1916" height="891" alt="Image" src="https://github.com/user-attachments/assets/af2752f2-b2ad-48fd-90e9-ad6f341c1388" />



👩‍💻 Author
svs.dhanasri
