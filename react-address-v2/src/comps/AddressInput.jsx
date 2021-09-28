import React from "react";

function AddressInput(props) {
  const { address, setAddress, list, setList } = props;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    /** 계산식 속성이름,computed property name
     * 	변수 이름을 변수값으로 생성하기
     * if(e.target.name==="u_name")
     * 		setAddress({...address,"u_name":value})
     * else if(e.tatget.name=="u_addr")
     * 		setAddress({....address,"uaddr":value})
     * JS ES6이상에서 새롭게 만들어진 변수 생성 문법
     * 변수를 []로 묶어주고 값을 저장하면 변수에 담긴 문자열로 변수를 생성해주는 구조
     * const[name]="대한민국" name 이라는 변수가 아닌 name에 담긴 문자열이 변수가 되는 구조
     *
     * CPN : 표현식을 사용하여 객체의 key값을 정의하는 문법이다
     */
    setAddress({ ...address, u_name: address.length });
  };
  const insert = () => {
    setList([...list, address]);
  };
  return (
    <div className="input_form">
      <div>
        <label>이름</label>
        <input
          name="u_name"
          type="text"
          onChange={onChangeHandler}
          defaultValue={address.u_name}
        />
      </div>
      <div>
        <label>주소</label>
        <input name="u_addr" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>전화번호</label>
        <input name="u_tel" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>나이</label>
        <input name="u_age" type="text" onChange={onChangeHandler} />
      </div>
      <button onClick={insert}>추가</button>
    </div>
  );
}

export default AddressInput;
