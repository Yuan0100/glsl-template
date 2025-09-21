# GLSL Shader Template

一個使用 Vite 和 glslCanvas 快速建立 GLSL 著色器藝術的專案模板。

## ✨ 特色

-   ⚡️ **快速開發**：由 [Vite](https://vitejs.dev/) 提供極速的熱重載。
-   🎨 **專注創作**：使用 [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas) 自動處理 WebGL 設定，讓你專注於撰寫 GLSL。
-   ☁️ **雲端開發**：支援 [GitHub Codespaces](https://github.com/features/codespaces)，無需安裝任何軟體即可在瀏覽器中開發。
-   📦 **零設定**：無論本地或雲端，clone 後即可開始創作。

## 🚀 如何開始

你可以選擇在本地電腦或使用 GitHub Codespaces 進行開發。

### 選項 1：本地開發

1.  **使用此模板**  
    點擊 GitHub 頁面上的 "Use this template" 按鈕來建立你自己的新專案。

2.  **Clone 你的專案**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    ```

3.  **安裝與啟動**
    ```bash
    cd YOUR_REPOSITORY
    npm install
    npm run dev
    ```
    現在，你可以在瀏覽器中打開 `http://localhost:5173`。

### 選項 2：使用 GitHub Codespaces（推薦）

1.  **建立 Codespace**  
    在你的專案 GitHub 頁面上，點擊綠色的 `<> Code` 按鈕，切換到 "Codespaces" 分頁，然後點擊 "Create codespace on main"。

2.  **等待環境建立**  
    GitHub 會自動建立開發環境，並自動完成以下步驟：
    - 安裝 Node.js 和最新版 npm
    - 安裝專案依賴 (`npm install`)
    - 安裝推薦的 VS Code 擴充套件
    - 啟動 Vite 開發伺服器

3.  **開始開發**  
    環境建立完成後，你會看到通知顯示伺服器已啟動。點擊通知即可在瀏覽器中預覽你的著色器作品，或直接開始編輯 `public/shaders/main.frag` 檔案。

## ✍️ 如何創作

-   主要的著色器檔案位於 `public/shaders/main.frag`。直接編輯此檔案即可看到畫面變化。
-   `glslCanvas` 會自動載入 `public/textures/` 中的紋理，只需在 `.frag` 檔案中加入特殊註解即可：
    ```glsl
    uniform sampler2D u_tex0; // textures/YourTexture.jpg
    ```

## 💡 建議的擴充套件 (Recommended Extensions)

為了獲得最佳的開發體驗，建議安裝以下 VS Code 擴充套件：

1.  **Shader languages support for VS Code**
    -   **ID**: `slevesque.shader`
    -   **功能**: 為 GLSL 檔案提供語法高亮，讓程式碼更容易閱讀。

2.  **glsl-canvas**
    -   **ID**: `patriciogonzalezvivo.vscode-glsl-canvas`
    -   **功能**: 讓你可以在 VS Code 編輯器內直接預覽著色器效果，無需切換到瀏覽器。安裝後，打開 `.frag` 檔案，按下 `Cmd+Shift+P` 並執行 `Show glslCanvas` 命令即可開啟預覽。

> **提示**: 如果你使用 GitHub Codespaces，這些擴充套件和開發環境設定會被自動配置，讓你能立即開始創作！

## 📄 License

此專案採用 [MIT License](LICENSE) 授權。