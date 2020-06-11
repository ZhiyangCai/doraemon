const string = `
/* 大家好我来为大家画一个哆啦A梦 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: white;
  min-height: 100vh;
}

/* 首先准备一个哆啦A梦的头 */
.doraemon-head {
  width: 610px;
  height: 610px;
  border: 5px solid black;
  margin: 10px auto;
  border-radius: 50%;
  background: #3c9dca;
  position: fixed;
  left: 50%;
  bottom: -80px;
  margin-left: -305px;
  transform: scale(0.75, 0.75);
}
@media (max-width: 500px) {
  .doraemon-head {
    transform: scale(0.5, 0.5);
    position: fixed;
    right: -32%;
    bottom: -160px;
  }
}
/* 然后画鼻子 */
.nose {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background: #b90319;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 205px;
  border-radius: 50%;
  z-index: 2;
}
.nose::before {
  content: "";
  display: block;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 20px;
}
.nose::after {
  content: "";
  display: block;
  height: 280px;
  border: 1px solid black;
  position: absolute;
  top: 100%;
  left: 50%;
}
/* 接下来画眼睛 */
.eye {
  width: 130px;
  height: 154px;
  position: relative;
  left: 50%;
  margin-left: -65px;
  top: 80px;
  z-index: 2;
}
.eye-left,
.eye-right {
  width: 130px;
  height: 154px;
  border: 1px solid black;
  position: absolute;
  border-radius: 50%;
  background: white;
}
.eye-left {
  right: 50%;
}
.eyeball {
  animation: eye 3000ms linear 0.5s infinite;
}
@keyframes eye {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  25% {
    transform: translateX(-40px) translateY(-20px);
  }
  55% {
    transform: translateX(-30px) translateY(-10px);
  }
  75% {
    transform: translateX(-20px) translateY(0px);
  }
  100% {
    transform: translateX(40px) translateY(-20px);
  }
}
.eye-left .eyeball,
.eye-right .eyeball {
  width: 30px;
  height: 50px;
  border: 1px solid black;
  position: absolute;
  bottom: 0px;
  left: 50%;
  bottom: 5px;
  margin-left: -15px;
  border-radius: 50%;
  background: black;
}
.eye-left .eyeball-white,
.eye-right .eyeball-white {
  width: 10px;
  height: 15px;
  border: 1px solid black;
  position: absolute;
  bottom: 0px;
  left: 50%;
  bottom: 30%;
  margin-left: -5px;
  border-radius: 50%;
  background: white;
}
.eye-right {
  left: 50%;
}
/* 然后是脸 */
.face {
  width: 526px;
  height: 464px;
  border: 1px solid black;
  background: white;
  position: absolute;
  left: 50%;
  border-radius: 50%;
  margin-left: -263px;
  bottom: 0px;
  z-index: 1;
}
/* 嘴巴 */
.mouth {
  width: 400px;
  height: 400px;
  border-radius: 0 0 300px 300px;
  /* border: 1px solid black;
  border-color: transparent transparent black transparent; */
  position: absolute;
  left: 50%;
  margin-left: -200px;
}
.mouth::after {
  content: "";
  display: block;
  width: 400px;
  height: 200px;
  border-radius: 0 0 300px 300px;
  border: 2px solid black;
  border-color: transparent black black black;
  position: absolute;
  left: 0;
  bottom: 0;
}
/* 小胡须 */
.beard {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -75px;
}
.beard-left {
  width: 150px;
  border: 1px solid black;
  position: absolute;
  right: 100%;
}

.beard-right {
  width: 150px;
  border: 1px solid black;
  position: absolute;
  left: 100%;
}
.beard-left1 {
  margin-top: 0px;
  transform: rotate(15deg);
}
.beard-left2 {
  margin-top: 60px;
  transform: translateX(-15px);
}
.beard-left3 {
  margin-top: 120px;
  transform: rotate(-15deg);
}
.beard-right1 {
  margin-top: 0px;
  transform: rotate(-15deg);
}
.beard-right2 {
  margin-top: 60px;
  transform: translateX(15px);
}
.beard-right3 {
  margin-top: 120px;
  transform: rotate(15deg);
}
/* 好了，这只哆啦A梦送给你 */

`;
export default string;
