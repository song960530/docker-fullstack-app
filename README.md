# docker-fullstack-app

Backend : Node.js
Frontend : react
DB : mysql
CI/CD : Travis-CI, Docker Hub, AWS EB

개발환경
- DB -> 도커 사용

운영환경
- DB -> AWS RDS 사용
- 배포과정
 - Travis-CI (테스트, 이미지생성, Docker Hub전달)
 -> Docker Hub (이미지 보관, AWS EB에서 가져가려 할때 전달)
  -> AWS EB (배포)


최초 프로젝트 구성법
```
npm init -> package.json 생성
npx create-react-app frontend -> frontend 디렉토리에 리액트 설치
```

```
레파지토리 최초 생성 후 연결방법

echo "# docker-fullstack-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/song960530/docker-fullstack-app.git
git push -u origin master
```
