/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['ㅇㅇㅇ', 'BBBBBB', 'AAAAA', 'CCCC']);
  let [like, likeAdd] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1, 2, 3].map(function (a) {
    return '1234';
  });
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '20px' }}>CherryJin's Blog</h4>
      </div>
      <button
        onClick={() => {
          let titleCopy = [...글제목];
          글제목변경(titleCopy);
        }}
      >
        글 수정
      </button>
      {글제목.map((a, i) => {
        return (
          <div>
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(true);
                  setTitle(i);
                }}
              >
                {/* stopPropagation은 이벤트 전파를 막는 기능 */}
                {글제목[i]}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copyLike = [...like];
                    copyLike[i]++;
                    likeAdd(copyLike);
                  }}
                >
                  따봉{like[i]}
                </span>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          </div>
        );
      })}
      {/* onChange는 사용자가 입력할 때 마다 변경되는 이벤트 */}
      <input
        type="text"
        onChange={(e) => {
          //비동기적으로 입력값이 변경되는 것을 보여주기 위해 사용
          입력값변경(e.target.value);
          //위 코드보다 아래 코드가 먼저 실행됨
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
        }}
      >
        글발행
      </button>
      {modal == true ? (
        <Modal
          title={title}
          글제목={글제목}
          modalColor={'skyblue'}
          propsTitle={글제목}
        />
      ) : null}
    </div>
  );
}
const SecondPost = () => {
  return <div>SecondPost</div>;
};

/**동적인 Ui 만드는 3step
 * 1. HTML, CSS 완성
 * 2. UI의 현재 상태 state로 저장
 * 3. state를 사용하여 UI 업데이트
 */
function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.modalColor }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>{props.titleProps}</p>
      <button onClick={() => props.글제목변경(['변경된', 'AAAAA', 'CCCC'])}>
        글 수정
      </button>
    </div>
  );
}

export default App;
