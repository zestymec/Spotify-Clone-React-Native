SpotifyClone-RN 🎵
A high-performance music streaming UI built with React Native and TypeScript, focused on seamless audio playback and native performance.

🚀 Key Features
Background Audio: Native integration via react-native-track-player.

Responsive UX: Optimized FlatList with pagingEnabled for a smooth carousel experience.

State Sync: Real-time UI updates synchronized with playback events.

Performance: Optimized getItemLayout and memoized components to eliminate flickering.

🛠 Tech Stack
Framework: React Native 0.74+

Language: TypeScript

Audio: React Native Track Player

Icons: Material Icons (Vector Icons)

📦 Quick Start
Clone & Install

Bash
git clone 
cd Spotify-Clone-React-Native && npm install
Configure SDK
Create android/local.properties:

Properties
sdk.dir = /YOUR_ANDROID_SDK_PATH
Run App

Bash
npx react-native run-android
🔧 Technical Optimizations
Asset Pipeline: Sanitized resource naming to ensure robust cross-platform loading.

Memory Management: Separated the Playback Service from the UI tree for background stability.

Rendering: Implemented useCallback to rectify redundant re-renders.

📈 Future Roadmap
AI Integration: Mood-based recommendations via Agentic AI.

Full-Stack: Backend sync using Node.js & PostgreSQL.

Cloud: Real-time playlist synchronization.

Developed by Zestymec