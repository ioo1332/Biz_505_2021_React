# React를 이용한 REmemver List Project

- 화면에서 기억해야할 일을 입려갛고 Enter를 누르면 List에 추가
- 리스트를 더블 클릭하면 완료 표식을 붙임

## localStorage 사용

- 각 Browser 자체에 있는 소형 DB, 문자열형 데이터를 저장할수 있는 공간
- 임의로 백업을 하거나 다른곳으로 이전하는 기능이 없으면 다른곳에서는 접근을 할수 없다

## 시간과 관련

- 할일을 입력한후 Enter를 누르면 날짜와 시간을 자동으로 생성하여 저장
- yarn add moment

## rememberList 배열에 ID값추가하기

- 단순히 배열에 데이터를 추가만하는경우는 특별히 ID등의 값이 필요없을것이다
- 하지만 update, delete 등을 구현하고자할때 어떤 데이터를 update,delete하는지 명확하게 해야한다
- 만약 배열의 index(첨자)를 기준으로 update,delete를 수행하는 것은 내가 원하는 데이터요소를  
  update,delete한다는 보장이 없다 매우 위험한 코드가 될수있다
- 데이터를 배열에 추가할때 id 칼럼을 생성하고 unique한 데이터를 만들어서 값을 저장할 필요가있다
- yarn add react-uuid 를 사용하여 unique 한 id값을 만들자
