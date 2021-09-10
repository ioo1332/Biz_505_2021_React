# React Firebase 연동 BBS

## Navigation 구현

- yarn add react-router-dom

## 컴포넌트 생성

- src/comp 폴더 생성
- Header.jsx, MainNav.jsx, BBsMain.jsx 컴포넌트 생성

## Firebase 연동

- yarn add firebase 설치
- 2021-09월 현재 설되는 firebase SDK가 9.0.x 인데 연동 하는 과정에 문제가 있음
- 9.x 버전에 문제가 있어서 8.10.0 버전을 설치
- yarn add firebase@8.10.0 / npm install firebase@8.10.0
- 날짜와 시간설정을 위한 dependency yarn add moment

## firebase에 호스팅

- 내가 만든 프로젝트를 다른사람이 다른 컴퓨터에서 다른 브라우져로 접속할수 있도록  
  외부의 서버에 deploy 하기

## 배포 도구 설치

- npm install -g firebase-tools / firebase-cli
- firebase-tools 설치하는데 오류가 나는 경우: npm uninstall -g firebase-cli

## react 프로젝트를 firebase에 배포하기

- 프로젝트를 build: yarn build
- firebase login 하기 :firebase login
- 프로젝트에 firebase deploy 설정하기 : firebase init hosting
- 프로젝트를 firebase에 deploy (배포) : firebase deploy --only hosting
