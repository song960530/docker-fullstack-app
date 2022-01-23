# docker-fullstack-app

Backend : Node.js
Frontend : react
DB : AWS RDS(mysql)
CI/CD : Travis-CI, Docker Hub, AWS EB
보안설정 : VPC, Security Group

개발환경
- DB -> 도커 사용

운영환경
- DB -> AWS RDS 사용
- 배포과정
 - Travis-CI (테스트, 이미지생성, Docker Hub전달)
 -> Docker Hub (이미지 보관, AWS EB에서 가져가려 할때 전달)
  -> AWS EB (배포)


### Dockerrun.aws.json 설명 (json파일에 주석을 달면 안돼서 여기에 적음)
```
Dockerrun.aws.json -> EB환경에서 멀티컨테이너를 실행하기 위한 작업정의설정 파일

AWSEBDockerrunVersion -> Dockerrun 버전 지정
containerDefinitions -> 영역안에 설정할 컨테이너들을 정의
name -> 컨테이너의 이름
image -> 온라인 Docker 레파지토리의 Docker 이미지 이름
hostname -> 도커 컴포즈를 이용해 생성된 다른 컨테이너에서 접근이 가능하도록 호스트이름 지정
essential -> 컨테이너가 실패할 경우 작업을 중지해야하면 true (Default false)
memory -> 메모리 설정
portMappings -> 포트 설정
links -> 연결할 컨테이너의 목록. 연결된 컨테이너는 서로 검색하고 안전하게 통신할 수 있다.
```

---------------------------------------------------------------------------------------------------------


### 최초 프로젝트 구성법
```
npm init -> package.json 생성
npx create-react-app frontend -> frontend 디렉토리에 리액트 설치
```

### 레파지토리 최초 생성 후 연결방법
```
echo "# docker-fullstack-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/song960530/docker-fullstack-app.git
git push -u origin master
```
