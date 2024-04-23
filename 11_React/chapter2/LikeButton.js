// 리액트 컴포넌트 파일명은 대문자로 시작!!!
// only JS로만 짠 코드 (나중에는 JSX 사용)


const e = React.createElement;

function LikeButton() {
  const [isClicked, setIsCliked] = React.useState(false);

  return React.createElement(
    'button', // 태그
    {onClick: () => setIsCliked(true)}, // 속성
    isClicked ? 'You liked this,' : 'Like' // 자식 요소들
  );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
