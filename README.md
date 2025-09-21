# GLSL Shader Template

一個使用 Vite 和 glslCanvas 快速建立 GLSL 著色器藝術的專案模板。

## ✨ 特色

-   ⚡️ **快速開發**：由 [Vite](https://vitejs.dev/) 提供極速的熱重載。
-   🎨 **專注創作**：使用 [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas) 自動處理 WebGL 設定，讓你專注於撰寫 GLSL。
-   ☁️ **雲端開發**：支援 [GitHub Codespaces](https://github.com/features/codespaces)，無需安裝任何軟體即可在瀏覽器中開發。
-   🚀 **一鍵部署**：內建 GitHub Pages 部署功能，輕鬆分享你的作品。
-   📦 **零設定**：無論本地或雲端，建立後即可開始創作和部署。

## 🚀 如何開始

### 步驟 1：建立你的專案

1.  **使用此模板**  
    點擊 GitHub 頁面上的綠色 **"Use this template"** 按鈕來建立你自己的新專案。

2.  **為你的專案命名**  
    輸入專案名稱（例如：`my-glsl-art`）並建立 repository。

### 步驟 2：設定部署路徑

編輯 `vite.config.js`，將路徑改成你的專案名稱：

```js
export default defineConfig({
  base: '/your-repository-name/' // 改成你剛才建立的專案名稱
})
```

### 步驟 3：選擇開發環境

#### 選項 A：使用 GitHub Codespaces（推薦新手）

1.  **建立 Codespace**  
    在你的專案 GitHub 頁面上，點擊綠色的 `<> Code` 按鈕，切換到 "Codespaces" 分頁，然後點擊 "Create codespace on main"。

2.  **自動環境設定**  
    GitHub 會自動建立開發環境，並完成：
    - 安裝 Node.js 和最新版 npm
    - 安裝專案依賴 (`npm install`)
    - 安裝推薦的 VS Code 擴充套件
    - 啟動 Vite 開發伺服器

3.  **開始開發**  
    環境建立完成後，你會看到通知顯示伺服器已啟動。點擊通知即可在瀏覽器中預覽，或直接開始編輯 `public/shaders/main.frag` 檔案。

#### 選項 B：本地開發

1.  **Clone 你的專案**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```

2.  **安裝與啟動**
    ```bash
    npm install
    npm run dev
    ```

## ✍️ 如何創作

-   **主要著色器檔案**：編輯 `public/shaders/main.frag`，儲存後即可看到畫面變化。
-   **載入紋理**：將圖片放在 `public/textures/` 資料夾，然後在 `.frag` 檔案中加入特殊註解：
    ```glsl
    uniform sampler2D u_tex0; // textures/YourTexture.jpg
    ```

## 🚀 部署到 GitHub Pages

### 自動部署

此專案已設定 GitHub Actions，當你推送程式碼到 `main` 分支時會自動部署：

1. **開發完成後，保存你的作品**
   ```bash
   git add .
   git commit -m "feat: 完成我的 shader 作品"
   git push origin main
   ```

2. **啟用 GitHub Pages**（首次需要設定）
   - 到你的 GitHub repository 的 **Settings** > **Pages**
   - 在 "Build and deployment" 下，將 **Source** 選擇為 **"GitHub Actions"**

3. **查看你的作品**
   - 推送後，GitHub 會自動建置和部署你的網站。
   - 你可以在 repository 的 **Actions** 分頁看到部署進度。
   - 完成後，網站會在 `https://你的帳號.github.io/你的repository名稱/` 上線。

### 更新作品

每次修改作品後，只需要：

```bash
git add .
git commit -m "update: 修改效果描述"
git push origin main
```

GitHub Actions 會自動重新部署！

### 確認部署成功

- 前往你的 GitHub repository 的 **Actions** 標籤頁，確認 "Deploy to GitHub Pages" 工作流程是否已成功執行（顯示綠色勾勾）。
- 成功後，稍待幾分鐘即可訪問你的 GitHub Pages 網址。

## 💡 建議的擴充套件 (Recommended Extensions)

為了獲得最佳的開發體驗，建議安裝以下 VS Code 擴充套件：

1.  **Shader languages support for VS Code**
    -   **ID**: `slevesque.shader`
    -   **功能**: 為 GLSL 檔案提供語法高亮，讓程式碼更容易閱讀。

2.  **glsl-canvas**
    -   **ID**: `patriciogonzalezvivo.vscode-glsl-canvas`
    -   **功能**: 讓你可以在 VS Code 編輯器內直接預覽著色器效果，無需切換到瀏覽器。安裝後，打開 `.frag` 檔案，按下 `Cmd+Shift+P` 並執行 `Show glslCanvas` 命令即可開啟預覽。

> **提示**: 如果你使用 GitHub Codespaces，這些擴充套件和開發環境設定會被自動配置，讓你能立即開始創作！

## 🎓 Guides

### 快速開始
1. **Use this template** → 建立你的專案
2. **修改 `vite.config.js`** → 設定你的 repository 名稱
3. **開啟 Codespace** → 自動設定開發環境
4. **編輯 `public/shaders/main.frag`** → 開始創作
5. **推送到 GitHub** → 自動部署並分享作品

### 開發提示
- 在 Codespace 中修改檔案會自動重新載入預覽
- 每次 push 到 main 分支都會自動重新部署
- 在 GitHub repository 的 Actions 分頁可以看到部署狀態

## 📄 License

此專案採用 [MIT License](LICENSE) 授權。