# 📅 Mini Calendar

A simple and interactive **Mini Calendar Web Application** built with **React + Vite** and **Supabase Authentication**.  
Users can register, login, and manage calendar events with a clean UI.



## ✨ Features

- 🔐 User Authentication (Login / Register) using Supabase
- 📆 Interactive Calendar
- 📝 Add, Edit, Delete Events
- 📅 Display days on dates
- 🎨 Clean and simple UI
- ⚡ Fast build using Vite



## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Backend:** Supabase (Auth & Database)  
- **Date Handling:** Day.js  
- **Styling:** CSS  
- **Build Tool:** Vite  



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

👩‍💻 Author
svs.dhanasri

