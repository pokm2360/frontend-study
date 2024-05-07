# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React App 구조 살펴보기
- package.json: 
  현재 프로젝트 정보와 사용 중인 패키지에 대한 정보를 관리
  같은 패키지라도 버전별로 기능이 다를 수 있으므로 버전을 기록해두어야 함
  npm install로 패키지 설치 시 기록됨
  설치된 패키지는 node_modules 폴더에 추가됨
  node_modules 폴더는 git에 올리지 않기때문에 .gitignore에 자동으로 추가되어 있음
  패키지를 설치하려면 프로젝트를 처음 받아서 npm install 하면 됨! (이후 패키지가 새로 추가될 때도 동일)
- package-lock.json: 
  package.json의 상세 버전 + 버전 락 기능
  node_modules 구조나 package.json이 생성되고 수정될 때 당시 의존성에 대한 상세한 정보를 담아 자동으로 생성됨
  (의존성: 패키지도 다른 패키지를 사용해 만들 수 있음, 의존 관계)
  동일한 버전의 패키지를 설치하지 않으면 문제가 생길 수 있음
  (중요) 그래서 git에 올라가야 됨!! 그래야 팀원들도 같은 버전이 설치됨
- index.html: 
  콘텐츠가 렌더링 될 단 하나의 템플릿 페이지
  Root DOM Node를 갖고 있음
- index.js: 
  Root DOM Node에 App 컴포넌트를 렌더링
- App.js: 
  실제 보여질 컴포넌트
  사용 예> header-section-main-footer 또는 라우터 작성