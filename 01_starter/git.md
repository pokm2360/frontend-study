1. 커밋 메시지 툴과 작성법
첫번째 라인: 제목(필수)
두번째 라인: 공란
세번째 라인부터 내용작성, 무엇을 왜(선택)
마지막 라인: 꼬리말(#이슈 넘버)(선택)

작성팁: 최대한 구체적으로 작성 - 보고 시 사용할 수 있을 정도로

2. 커밋 전에 diff 확인하기!
명령어로 git diff

3. 왜 굳이 git add -> git commit 두 단계에 걸쳐서 하는지?
- 모든 파일을 굳이 기록할 필요가 없기 때문
버전을 여러 개로 나눠서 만들고 싶은 경우
1) git add로 기록할 파일을 고르고
2) git commit으로 버전생성(기록완료)

4. 언제, 얼마나 commit 하는게 좋을까?
습관적으로 할 필요는 x
간단한 기능 하나씩 추가할때마다 commit 하면 됨

회원가입 기능을 만들 시 회원가입 폼 레이아웃 ui를 만들고 commit
입력한 이메일이 맞는지 검증하는 기능(유효성검사) 만들고 commit
서버에 데이터를 저농하는 기능을 만들고 commit

하루 한개 이상 커밋!!

5. CLI 명령어 기반 vs GUI 툴 비교
명령어는 모든 기능 사용 가능한 반면 GUI 툴은 툴 자체에 구현된 기능만 사용가능

6. git push -u origin main
-u 옵션은 방금 입력한 주소를 기억해라
그 다음부터는 git push만 입력해도됨

7. git remote -v
원격저장소 정보를 보고 싶을때

8. git clone https://원격저장소주소 [dir]
원격 저장소에 올린 프로젝트를 내 로컬에 복제(1번만 하면 됨)
[dir]: 대상 폴더를 입력(생략하면 현재 폴더)

9. git pull 원격저장소주소(origin)
원격 저장소에 있는 모든 브랜치 내용을 가져와서 로컬 저장소에 합치라는 뜻
이걸 해주면 로컬이 최신 상태가 되기 때문에 git push가 가능하다
항상 최신 사항이 있으면 git pull을 먼저 하고 나서 작업하는 습관이 좋음

git full origin main
특정 브랜치(main)만 가져올 수 있음

10. 저장소에 올리지 않을 파일들은 .gitignore
설정 파일이나 빌드 산출물, 기타 라이브러리 파일 등
불필요한 파일들은 올리지 않는 것이 좋음
.gitignore 파일을 만들어서 올리지 않을 폴더나 파일을 명시

오늘의 과제:
1) vs code 단축키 정리한 것 받아가기
2) 파일 만들거나 파일 내용 수정하면서 commit 5번 해보기
   git status, git log 명령어도 사용

github.com/geoblo - frontendstudy - 주소복사 - git clone


gui툴연습


title

content
- 11
- 22

-#1234

