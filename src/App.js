// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const name = "React";
//   return (
//     <div>
//       <h1>안녕하세요, {name}!</h1>
//       <p>첫 번째 리액트 앱입니다.</p>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './ProfileCard.css';
function ProfileCard(props) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-image-container">
                    <span className="profile-initial">강</span>
                </div>
                <div className="profile-info">
                    <h1>{props.name}</h1>
                    <p>학번: {props.studentId}</p>
                    <p>전공: {props.major}</p>
                </div>
            </div>
            <p className="intro-text">안녕하세요! React 컴포넌트를 배우고 있는 {props.name}입니다.</p>
            <div className="like-section">
                <button onClick={handleLike}>
                    👍 좋아요
                </button>
                <p>좋아요 {likeCount}개</p>
            </div>
        </div>
    );
}

// 다른 컴포넌트에서 JSX로 바로 사용 가능
function App() {
    return (
        <div>
            <ProfileCard name="강우성" studentId="2022108129" major="인공지능학과" />
        </div>
    );
}

// App 컴포넌트는 보통 index.js에서 ReactDOM.render 또는 createRoot로 렌더링
export default App;