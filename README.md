### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/roarmate-web-login.git
cd roarmate-web-login
```
### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

---

### Step 3: Set Up Firebase

#### Description:
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project (or use an existing one).
3. Enable **Email/Password** sign-in in the Firebase Authentication section.
4. Copy your Firebase configuration from the **Project settings** > **Your apps** section.
5. Create a `.env` file in the root of the project and add your Firebase credentials.

```bash
# .env

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 3. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Use the key I sent in Slack
5. Create a `.env` file in the root of the project and add the Firebase credentials:

```bash
# .env

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```


---

### Step 4: Run the App

#### Description:
Start the development server.

```bash
npm run dev
```

---

### Step 5: Push to GitHub

#### Description:
Make sure to add the `.env` file to your `.gitignore` file so your Firebase credentials aren’t pushed to GitHub.

```bash
# .gitignore
.env
```

