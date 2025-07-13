# PC Gaming Readiness Checker

A comprehensive, interactive tool to analyze your PC's hardware and determine its readiness for modern gaming at various resolutions.

<p align="center">
  <img src="https://storage.googleapis.com/gemini-generative-ai-api-prod/images/81a4e12f-0029-430c-8833-a3a8d6333061" alt="PC Gaming Readiness Checker Logo" width="150">
</p>
---

## 📖 About The Project

Ever wondered if your PC can handle the latest AAA titles? This project aims to answer that question. The PC Gaming Readiness Checker is a user-friendly, web-based tool that provides a detailed analysis of a computer's gaming capabilities.

Unlike simple checkers that only look at the CPU and GPU, this application takes a holistic approach, considering the entire system's balance—including RAM, storage, motherboard tier, power supply, and even the CPU cooler. It then provides a clear, easy-to-understand verdict based on your target gaming resolution (1080p, 1440p, or 4K), along with a prediction for its future relevance.

---

## ✨ Key Features

- **Comprehensive Hardware Analysis:** Evaluates 7 key components for a full system check.
- **Resolution-Based Scoring:** Get a specific rating for your desired gaming resolution (1080p, 1440p, 4K).
- **Extensive Component Database:** Includes a wide range of modern and older CPUs and GPUs.
- **Interactive Tooltips:** Click the info icon next to any component to get a simple, clear explanation of its role in gaming.
- **Instant Feedback:** Get an immediate verdict, a detailed description, and a "Future Outlook" prediction.
- **Sleek, Responsive UI:** A modern, dark-themed interface that works great on both desktop and mobile devices.
- **No Backend Needed:** Runs entirely in the browser using HTML, CSS, and JavaScript.

---

## 🛠️ Tech Stack

This project was built using a simple and powerful front-end stack:

- **HTML5:** For the core structure and content.
- **Tailwind CSS:** For all styling and layout, providing a modern, utility-first approach.
- **JavaScript (ES6+):** For all the application logic, including the scoring system, event handling, and DOM manipulation.

---

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge) to run this project. No complex dependencies or build tools are required.

## ⚙️ How It Works

The application's logic is based on a weighted scoring system:

1.  **Component Scoring:** Every component option in the dropdowns (CPU, GPU, RAM, etc.) is assigned a score based on its relative performance in a modern gaming context. The GPU and CPU have the highest weight in this calculation.
2.  **Target Score:** Each gaming resolution (1080p, 1440p, 4K) has a "target score" that a well-balanced PC should aim for to achieve a good experience.
3.  **Performance Ratio:** The tool calculates your PC's `totalScore` by adding up all your component scores. It then divides this by the `targetScore` of your chosen resolution to get a performance ratio.
4.  **Verdict Generation:** Based on this ratio, the application generates a final verdict, from "Not Recommended" to "Excellent," and also checks for potential bottlenecks (like a weak PSU with a powerful GPU) to add specific warnings.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file in the repository for more information.
